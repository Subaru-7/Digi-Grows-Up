"use client"
import dynamic from "next/dynamic"

import { useFrame, useThree, ThreeEvent } from "@react-three/fiber"
import { useRef, useMemo, useState, useCallback } from "react"
import type * as THREE from "three"


const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)
interface Ripple {
  x: number
  z: number
  startTime: number
  strength: number
}

function WaveGrid() {
  const meshRef = useRef<THREE.Points>(null)
  const planeRef = useRef<THREE.Mesh>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const { camera, raycaster, pointer } = useThree()

  const gridSize = 200
  const spacing = 0.2

  // Create grid of points
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(gridSize * gridSize * 3)
    const colors = new Float32Array(gridSize * gridSize * 3)

    let index = 0
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * spacing
        const z = (j - gridSize / 2) * spacing
        const y = 0

        positions[index * 3] = x
        positions[index * 3 + 1] = y
        positions[index * 3 + 2] = z

        // Create gradient from center - brighter in center, darker at edges
        const distanceFromCenter = Math.sqrt(Math.pow(i - gridSize / 2, 2) + Math.pow(j - gridSize / 2, 2))
        const normalizedDistance = distanceFromCenter / (gridSize / 2)
        const brightness = Math.max(0.1, 1 - normalizedDistance * 0.7)

        colors[index * 3] = brightness * 0.8 // Red component
        colors[index * 3 + 1] = brightness * 0.8 // Green component
        colors[index * 3 + 2] = brightness * 0.9 // Blue component (slightly more blue)

        index++
      }
    }

    return { positions, colors }
  }, [])

  // const handleClick = useCallback(
  //   (event: ThreeEvent<MouseEvent>) => {
  //     event.stopPropagation()

  //     // Cast ray to find intersection point
  //     raycaster.setFromCamera(pointer, camera)

  //     if (planeRef.current) {
  //       const intersects = raycaster.intersectObject(planeRef.current)
  //       if (intersects.length > 0) {
  //         const point = intersects[0].point

  //         // Add new ripple
  //         const newRipple: Ripple = {
  //           x: point.x,
  //           z: point.z,
  //           startTime: Date.now(),
  //           strength: 0.5,
  //         }

  //         setRipples((prev) => [...prev, newRipple])

  //         // Remove old ripples after 3 seconds
  //         setTimeout(() => {
  //           setRipples((prev) => prev.filter((r) => r !== newRipple))
  //         }, 9000)
  //       }
  //     }
  //   },
  //   [camera, raycaster, pointer],
  // )

  // Animate the wave
  // ...inside function WaveGrid(), replace the current handleClick with:

const handleClick = useCallback(
  (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()

    // Cast ray to find intersection point (world coords)
    raycaster.setFromCamera(pointer, camera)

    if (planeRef.current) {
      const intersects = raycaster.intersectObject(planeRef.current)
      if (intersects.length > 0) {
        // Convert world intersection point to the plane's local space
        const worldPoint = intersects[0].point.clone()
        const localPoint = planeRef.current.worldToLocal(worldPoint)

        // Add new ripple using local coordinates so it matches the grid positions
        const newRipple: Ripple = {
          x: localPoint.x,
          z: localPoint.z,
          startTime: Date.now(),
          strength: 0.5,
        }

        setRipples((prev) => [...prev, newRipple])

        // Remove old ripples after 9 seconds
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r !== newRipple))
        }, 9000)
      }
    }
  },
  [camera, raycaster, pointer],
)
  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array
    const currentTime = Date.now()

    let index = 0
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * spacing
        const z = (j - gridSize / 2) * spacing

        // Create multiple wave patterns for more complex motion
        const wave1 = Math.sin(x * 0.3 + time * 1.2) * 0.8
        const wave2 = Math.sin(z * 0.4 + time * 0.8) * 0.6
        const wave3 = Math.sin((x + z) * 0.2 + time * 1.5) * 0.4
        const wave4 = Math.sin(Math.sqrt(x * x + z * z) * 0.1 + time * 2) * 0.3

        let rippleEffect = 0
        ripples.forEach((ripple) => {
          const distance = Math.sqrt(Math.pow(x - ripple.x, 2) + Math.pow(z - ripple.z, 2))
          const elapsed = (currentTime - ripple.startTime) / 4000 // Convert to seconds
          const rippleSpeed = 8 // Speed of ripple propagation
          const rippleRadius = elapsed * rippleSpeed

          // Create expanding ring effect
          if (distance < rippleRadius && distance > rippleRadius - 2) {
            const fadeOut = Math.max(0, 1 - elapsed / 3) // Fade over 3 seconds
            const ringIntensity = Math.exp(-(Math.pow(distance - rippleRadius, 2) / 0.5)) // Gaussian for smooth ring
            rippleEffect += ripple.strength * ringIntensity * fadeOut * Math.sin(distance * 2 - elapsed * 10)
          }
        })

        // Combine waves for ocean-like motion with ripple disturbance
        const y = (wave1 + wave2 + wave3 + wave4) * 0.5 + rippleEffect

        positions[index * 3 + 1] = y
        index++
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group>
      <mesh ref={planeRef} onClick={handleClick} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[gridSize * spacing, gridSize * spacing]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} sizeAttenuation={true} />
      </points>
    </group>
  )
}

export default function AnimatedHeroBackground() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <Canvas
        camera={{
          position: [0,0, 8],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        style={{ background: "transparent" }}
      >
        {/* Subtle ambient light */}
        <ambientLight intensity={0.3} />

        {/* Main directional light */}
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />

        {/* Wave grid component */}
        <group rotation={[-Math.PI / 2 + 0.05, 0, 0]}>
          <WaveGrid />
        </group>
      </Canvas>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

      {/* Content overlay area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white pointer-events-auto">
          {/* Your hero content goes here */}
          <h1 className="text-6xl font-bold mb-4">
            THE
            <br />
            <span className="text-red-500">DIGI GROWS UP</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            We drive massive ROI using Google Ads, SEO, web design and conversion rate optimization.
          </p>
          <button className="px-8 py-3 border border-white text-white bg-black hover:bg-white hover:text-black transition-colors duration-300 rounded">
            LEARN HOW
          </button>
        </div>
      </div>
    </div>
  )
}
