"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "The Digigrows Up transformed our digital presence. Our revenue increased by 300% in just 6 months.",
    author: "Sarita Gupta",
    role: "CEO",
    company: "TechCorp",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    quote: "Their data-driven approach and attention to detail is unmatched. Best marketing investment we've made.",
    author: "Praveen Kumar Sharma",
    role: "Marketing Director",
    company: "Anonymus Lab",
    rating: 4,
    avatar: "/professional-marketing-director.png",
  },
  {
    quote: "Finally, a marketing agency that delivers on their promises. The results speak for themselves.",
    author: "Esha Verma",
    role: "Founder",
    company: "GrowthCo",
    rating: 4,
    avatar: "/professional-woman-founder.png",
  },
]

export function Testimonials() {
  return (
    <section className="section-spacing bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <p className="eyebrow">Testimonials</p>
          <h2>What Our Clients Say</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-primary/30 flex-shrink-0 mt-1" />
                    <blockquote className="text-sm leading-relaxed text-foreground/90 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10"
                    />
                    <div className="space-y-1">
                      <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
