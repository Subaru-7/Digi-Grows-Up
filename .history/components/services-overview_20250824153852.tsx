"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Target, Users, Palette, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    key: "seo",
    icon: Search,
    title: "SEO",
    description: "Organic visibility that drives qualified traffic and sustainable growth.",
  },
  {
    key: "performance",
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven campaigns optimized for maximum ROI and conversion rates.",
  },
  {
    key: "social",
    icon: Users,
    title: "Social Media",
    description: "Strategic social presence that builds communities and drives engagement.",
  },
  {
    key: "branding",
    icon: Palette,
    title: "Branding",
    description: "Distinctive brand identity that resonates with your target audience.",
  },
]

export function ServicesOverview() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <p className="eyebrow">Services</p>
          <h2>Full-Stack Growth Solutions</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing services designed to accelerate your business growth.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/services?service=${service.key}`}>
                <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-card/80 border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                      <span className="mr-1">Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent hover:bg-primary hover:text-background transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
