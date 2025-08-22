"use client"

import { motion } from "framer-motion"

const kpis = [
  { label: "Average ROAS", value: "4.2x" },
  { label: "CTR Improvement", value: "+180%" },
  { label: "Total Impressions", value: "50M+" },
  { label: "Revenue Generated", value: "₹2.5Cr+" },
]

export function KPIBand() {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-2xl lg:text-3xl font-bold">{kpi.value}</div>
              <div className="text-sm opacity-90">{kpi.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
