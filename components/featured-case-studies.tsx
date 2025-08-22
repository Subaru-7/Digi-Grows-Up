"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    impact: "300% increase in online revenue within 6 months",
    kpis: [
      { label: "ROAS", value: "+142%" },
      { label: "CTR", value: "4.2%" },
      { label: "CPA", value: "-65%" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "SaaS Lead Generation",
    impact: "Generated 2,500+ qualified leads for B2B SaaS platform",
    kpis: [
      { label: "Leads", value: "2,500+" },
      { label: "Conversion", value: "18%" },
      { label: "Cost/Lead", value: "-45%" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Brand Awareness Campaign",
    impact: "Reached 5M+ users with 85% brand recall improvement",
    kpis: [
      { label: "Reach", value: "5M+" },
      { label: "Recall", value: "+85%" },
      { label: "Engagement", value: "12.5%" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function FeaturedCaseStudies() {
  return (
    <section className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <p className="eyebrow">Case Studies</p>
          <h2>Proven Results</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from our performance-driven approach to digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">{study.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.kpis.map((kpi) => (
                      <Badge key={kpi.label} variant="secondary" className="text-xs">
                        {kpi.label}: {kpi.value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/work">
          <Button variant="outline" size="lg">
            View All Case Studies
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
