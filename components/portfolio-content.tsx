"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, Calendar, TrendingUp } from "lucide-react"

const portfolioItems = [
  {
    title: "TechFlow SaaS Platform",
    category: "B2B Lead Generation",
    description:
      "Complete digital transformation for enterprise software company, focusing on qualified lead generation and conversion optimization.",
    results: [
      { metric: "Lead Quality", value: "+240%" },
      { metric: "Conversion Rate", value: "18.5%" },
      { metric: "Cost per Lead", value: "-52%" },
      { metric: "Pipeline Value", value: "$2.4M" },
    ],
    duration: "8 months",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["PPC", "SEO", "Content Marketing", "Marketing Automation"],
  },
  {
    title: "EcoStyle E-commerce",
    category: "E-commerce Growth",
    description:
      "Sustainable fashion brand scaling from startup to 7-figure revenue through performance marketing and brand positioning.",
    results: [
      { metric: "Revenue Growth", value: "+420%" },
      { metric: "ROAS", value: "6.8x" },
      { metric: "Customer LTV", value: "+180%" },
      { metric: "Market Share", value: "+15%" },
    ],
    duration: "12 months",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Social Media", "Influencer Marketing", "PPC", "Email Marketing"],
  },
  {
    title: "HealthTech Startup",
    category: "Brand Launch",
    description:
      "Full market entry strategy for innovative health technology platform, from brand identity to user acquisition.",
    results: [
      { metric: "Brand Awareness", value: "+890%" },
      { metric: "User Acquisition", value: "50K+" },
      { metric: "App Downloads", value: "125K+" },
      { metric: "Retention Rate", value: "78%" },
    ],
    duration: "6 months",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Branding", "Content Strategy", "App Store Optimization", "PR"],
  },
  {
    title: "FinServ Digital Bank",
    category: "Financial Services",
    description:
      "Digital transformation and customer acquisition strategy for next-generation banking platform targeting millennials.",
    results: [
      { metric: "Customer Growth", value: "+650%" },
      { metric: "Digital Adoption", value: "94%" },
      { metric: "CAC Reduction", value: "-38%" },
      { metric: "NPS Score", value: "72" },
    ],
    duration: "10 months",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Performance Marketing", "UX Optimization", "Compliance Marketing", "CRO"],
  },
  {
    title: "Global Manufacturing",
    category: "B2B Industrial",
    description:
      "International expansion and lead generation for industrial equipment manufacturer entering new markets.",
    results: [
      { metric: "Market Penetration", value: "+320%" },
      { metric: "Qualified Leads", value: "1,200+" },
      { metric: "Sales Cycle", value: "-25%" },
      { metric: "Deal Size", value: "+45%" },
    ],
    duration: "14 months",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["International SEO", "Trade Marketing", "LinkedIn Ads", "Content Marketing"],
  },
  {
    title: "EdTech Platform",
    category: "Education Technology",
    description:
      "Student acquisition and engagement strategy for online learning platform during rapid market expansion.",
    results: [
      { metric: "Student Enrollment", value: "+580%" },
      { metric: "Course Completion", value: "89%" },
      { metric: "Organic Traffic", value: "+750%" },
      { metric: "Revenue Growth", value: "+440%" },
    ],
    duration: "9 months",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["SEO", "Content Marketing", "Social Media", "Conversion Optimization"],
  },
]

export function PortfolioContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Our Work</h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships. Explore how we've helped businesses across industries achieve
              measurable growth through strategic digital marketing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>$50M+ Revenue Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>3+ Years Average Partnership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  </div>

                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {item.results.map((result) => (
                        <div key={result.metric} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="font-semibold text-lg">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Success Stories?</h2>
            <p className="body-large text-muted-foreground">
              Let's discuss how we can create similar results for your business. Every great partnership starts with a
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[200px]">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px] bg-transparent">
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
