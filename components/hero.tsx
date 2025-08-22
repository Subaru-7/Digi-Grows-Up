"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ProposalButton } from "./proposal-button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              Digital Marketing Agency
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              Growth, Engineered.
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="body-large text-muted-foreground max-w-2xl mx-auto leading-relaxed"
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
    </section>
  )
}
