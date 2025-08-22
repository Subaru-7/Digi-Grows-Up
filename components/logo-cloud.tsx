"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "TechCorp", width: 120 },
  { name: "AnonymusLab", width: 140 },
  { name: "GrowthCo", width: 100 },
  { name: "LokMeRam", width: 110 },
  { name: "NextGen", width: 130 },
  { name: "Shivganga", width: 125 },
]

export function LogoCloud() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="eyebrow">Trusted By</p>

          {/* Marquee Container */}
          <div className="overflow-hidden relative w-full">
            <motion.div
              className="flex space-x-12 items-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 60, // ⬅️ slowed down to match old speed
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-12 text-muted-foreground font-medium"
                  style={{ width: logo.width }}
                >
                  {logo.name}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
