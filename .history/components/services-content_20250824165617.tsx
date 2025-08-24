"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { ProposalButton } from "./proposal-button"
import { motion, AnimatePresence } from "framer-motion"

const services = {
  seo: {
    title: "SEO & Organic Growth",
    intro: "Dominate search results with our comprehensive SEO strategies that drive sustainable, long-term growth.",
    deliverables: [
      "Technical SEO audit and optimization",
      "Keyword research and content strategy",
      "On-page and off-page optimization",
      "Local SEO (if applicable)",
      "Monthly performance reporting",
    ],
    outcomes: [
      "50-200% increase in organic traffic",
      "Top 3 rankings for target keywords",
      "Improved domain authority and trust",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "Typically 3-6 months for initial improvements, with significant gains in 6-12 months.",
      },
      {
        question: "Do you guarantee rankings?",
        answer: "We focus on sustainable growth and traffic increases rather than specific ranking guarantees.",
      },
    ],
  },
  performance: {
    title: "Performance Marketing",
    intro: "Maximize ROI with data-driven paid advertising campaigns across Google, Facebook, and other platforms.",
    deliverables: [
      "Campaign strategy and setup",
      "Ad creative development",
      "Landing page optimization",
      "Conversion tracking implementation",
      "Weekly optimization and reporting",
    ],
    outcomes: [
      "3-5x return on ad spend (ROAS)",
      "50%+ reduction in cost per acquisition",
      "Scalable customer acquisition system",
    ],
    faqs: [
      {
        question: "What's the minimum ad spend required?",
        answer: "We recommend a minimum of ₹50,000/month for effective campaign optimization.",
      },
      {
        question: "How quickly can we see results?",
        answer: "Initial data within 1-2 weeks, optimized performance within 4-6 weeks.",
      },
    ],
  },
  social: {
    title: "Social Media Marketing",
    intro: "Build brand awareness and drive conversions through strategic social media campaigns and content.",
    deliverables: [
      "Social media strategy development",
      "Content calendar and creation",
      "Community management",
      "Paid social advertising",
      "Influencer partnership coordination",
    ],
    outcomes: [
      "2-5x increase in social engagement",
      "Growing, engaged community",
      "Measurable social commerce results",
    ],
    faqs: [
      {
        question: "Which platforms do you focus on?",
        answer: "We customize based on your audience, typically Instagram, Facebook, LinkedIn, and emerging platforms.",
      },
      {
        question: "Do you create all content in-house?",
        answer: "Yes, our creative team handles all content creation, from graphics to video production.",
      },
    ],
  },
  branding: {
    title: "Brand Strategy & Creative",
    intro: "Develop a compelling brand identity and messaging that resonates with your target audience.",
    deliverables: [
      "Brand strategy and positioning",
      "Visual identity development",
      "Messaging framework",
      "Brand guidelines creation",
      "Marketing collateral design",
    ],
    outcomes: [
      "Clear, differentiated brand position",
      "Consistent brand experience",
      "Improved brand recognition and recall",
    ],
    faqs: [
      {
        question: "How long does a rebrand take?",
        answer: "Complete brand development typically takes 6-12 weeks depending on scope.",
      },
      {
        question: "Can you work with our existing brand?",
        answer: "We can enhance and optimize your current brand or start fresh.",
      },
    ],
  },
}

export function ServicesContent() {
  const searchParams = useSearchParams()
  const serviceFromQuery = searchParams.get("service") as keyof typeof services | null

  const [activeTab, setActiveTab] = useState<keyof typeof services>("seo")
  const tabsRef = useRef<HTMLDivElement>(null)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    if (serviceFromQuery && services[serviceFromQuery]) {
      setActiveTab(serviceFromQuery)
    }
  }, [serviceFromQuery])

  // Update underline position on activeTab change
  useEffect(() => {
    if (!tabsRef.current) return
    const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>(`button[data-key="${activeTab}"]`)
    if (activeBtn) {
      const rect = activeBtn.getBoundingClientRect()
      const containerRect = tabsRef.current.getBoundingClientRect()
      setUnderlineStyle({ left: rect.left - containerRect.left + tabsRef.current.scrollLeft, width: rect.width })
      // Scroll active tab into view smoothly
      activeBtn.scrollIntoView({ behavior: "smooth", inline: "center" })
    }
  }, [activeTab])

  const deliverableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
  }

  const outcomeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Our <span className="block text-gray-400">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
              Comprehensive digital marketing solutions designed to drive measurable growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation - Horizontal Scrollable Tabs */}
      <section className="sticky top-0 z-20 bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            ref={tabsRef}
            className="relative flex overflow-x-auto no-scrollbar scrollbar-hide py-4"
            aria-label="Service tabs"
          >
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                data-key={key}
                onClick={() => setActiveTab(key as keyof typeof services)}
                className={`relative flex-shrink-0 px-6 py-3 text-lg font-semibold transition-colors whitespace-nowrap ${
                  activeTab === key
                    ? "text-black dark:text-white"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
                aria-current={activeTab === key ? "true" : undefined}
              >
                {service.title}
              </button>
            ))}
            {/* Underline */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              style={{
                width: underlineStyle.width,
                left: underlineStyle.left,
              }}
            />
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-20 bg-background min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait" initial={false}>
            {Object.entries(services).map(
              ([key, service]) =>
                activeTab === key && (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-5xl mx-auto"
                  >
                    {/* Service Intro */}
                    <div className="text-center mb-16 px-4 sm:px-0">
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{service.title}</h2>
                      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{service.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                      {/* Deliverables */}
                      <Card className="shadow-lg rounded-xl border border-gray-100">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-white">What You Get</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {service.deliverables.map((item, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={deliverableVariants}
                              >
                                <Check className="w-6 h-6 text-indigo-500 mr-4 flex-shrink-0 mt-1" />
                                <span className="text-white leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Expected Outcomes */}
                      <Card className="shadow-lg rounded-xl border border-gray-100">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-white">Expected Outcomes</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {service.outcomes.map((outcome, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={outcomeVariants}
                              >
                                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                <span className="text-white leading-relaxed">{outcome}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* FAQ */}
                    <Card className="mb-20 shadow-lg rounded-xl border border-gray-100">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-white">Frequently Asked Questions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          {service.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="text-white font-medium text-lg hover:text-indigo-600 transition-colors">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-white text-base leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <div className="text-center">
                  <Card className="bg-black text-white">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                      <p className="text-gray-300 mb-6">
                        Let's discuss how {service.title.toLowerCase()} can drive growth for your business.
                      </p>
                      <ProposalButton variant="outline" size="lg">
                        Request Proposal
                      </ProposalButton>
                    </CardContent>
                  </Card>
                </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
