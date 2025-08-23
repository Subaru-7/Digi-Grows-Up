"use client"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ProposalButton } from "./proposal-button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"
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

  const gridSize = 250
  const spacing = 0.25

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

  const handleClick = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation()

      // Cast ray to find intersection point
      raycaster.setFromCamera(pointer, camera)

      if (planeRef.current) {
        const intersects = raycaster.intersectObject(planeRef.current)
        if (intersects.length > 0) {
          const point = intersects[0].point

          // Add new ripple
          const newRipple: Ripple = {
            x: point.x,
            z: point.z,
            startTime: Date.now(),
            strength: 0.5,
          }

          setRipples((prev) => [...prev, newRipple])

          // Remove old ripples after 3 seconds
          setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r !== newRipple))
          }, 3000)
        }
      }
    },
    [camera, raycaster, pointer],
  )

  // Animate the wave
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
          const elapsed = (currentTime - ripple.startTime) / 1000 // Convert to seconds
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
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.5} sizeAttenuation={true} />
      </points>
    </group>
  )
}

export default function AnimatedHeroBackground() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <Canvas
        camera={{
          position: [0,5, 8],
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
        <group rotation={[-0.1, 0, 0]}>
          <WaveGrid />
        </group>
      </Canvas>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

      {/* Overlay: hero content from `Hero` component (moved here) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="container relative pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8 section-spacing"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className=" eyebrow text-white"
              >
                Digital Marketing Agency
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative text-red-500"
              >
                Growth, Engineered.
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="body-large text-white max-w-2xl mx-auto leading-relaxed"
              >
                Performance-first digital marketing for brands that mean business. We engineer growth through data-driven
                strategies and relentless optimization.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <ProposalButton size="lg" className="text-base group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Proposal
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </ProposalButton>
              <Link href="/work" >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base bg-transparent group hover:bg-muted/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    View Work
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
            >
              <motion.div className="text-center group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Outcomes, not vanity metrics.</p>
                <p className="text-xs text-muted-foreground">Focus on revenue-driving KPIs</p>
              </motion.div>
              <motion.div className="text-center group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Full-funnel strategies.</p>
                <p className="text-xs text-muted-foreground">From awareness to retention</p>
              </motion.div>
              <motion.div className="text-center group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Experimentation at scale.</p>
                <p className="text-xs text-muted-foreground">Continuous optimization loops</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}