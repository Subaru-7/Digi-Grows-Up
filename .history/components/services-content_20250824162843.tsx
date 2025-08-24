"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { ProposalButton } from "./proposal-button"

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

  const [activeTab, setActiveTab] = useState("seo")

  // If there's a service in the query param, make that active
  useEffect(() => {
    if (serviceFromQuery && services[serviceFromQuery]) {
      setActiveTab(serviceFromQuery)
    }
  }, [serviceFromQuery])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive digital marketing solutions designed to drive measurable growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      {/* <section className="py-12 bg-primary sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(services).map(([key, service]) => (
              <Button
                key={key}
                variant={activeTab === key ? "default" : "outline"}
                onClick={() => setActiveTab(key)}
                className={activeTab === key ? "bg-black text-white" : ""}
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>
      </section> */}
      {/* Services Navigation */}
    <section className="py-12 bg-background sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(services).map(([key, service]) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300
                  border border-white bg-black text-white
                  hover:bg-white hover:text-black hover:border-white ${
                    activeTab === key ? "scale-107" : "scale-100"
                  }`}
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>
      </section>


      {/* Service Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(services).map(([key, service]) => (
            <div key={key} className={activeTab === key ? "block" : "hidden"}>
              <div className="max-w-4xl mx-auto">
                {/* Service Intro */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-400">{service.intro}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  {/* Deliverables */}
                  <Card>
                    <CardHeader>
                      <CardTitle>What You Get</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Expected Outcomes */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Expected Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-400">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ */}
                <Card className="mb-16">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      {service.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
