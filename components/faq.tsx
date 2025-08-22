"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do you measure success?",
    answer:
      "We focus on business outcomes, not vanity metrics. Our success is measured by ROI, conversion rates, revenue growth, and other KPIs that directly impact your bottom line. We provide detailed monthly reports with actionable insights.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "We combine data-driven strategies with creative execution. Every campaign is built on thorough market research, competitor analysis, and continuous A/B testing. We don't believe in one-size-fits-all solutions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some improvements can be seen within the first month, significant results typically emerge within 3-6 months. SEO and brand building take longer, while paid advertising can show immediate impact. We set realistic expectations based on your specific goals.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we work with businesses of all sizes. Our strategies are scalable and can be adapted to different budgets and growth stages. We believe every business deserves access to professional digital marketing.",
  },
  {
    question: "What's included in your monthly reporting?",
    answer:
      "Our reports include performance metrics, campaign insights, competitive analysis, recommendations for optimization, and a strategic roadmap for the following month. We also schedule monthly review calls to discuss results and next steps.",
  },
  {
    question: "Can you help with international markets?",
    answer:
      "Absolutely. We have experience with global campaigns and understand the nuances of different markets. We can help you expand internationally with localized strategies and cultural considerations.",
  },
]

export function FAQ() {
  return (
    <section className="section-spacing">
      <div className="container max-w-3xl">
        <div className="text-center space-y-4 mb-16">
          <p className="eyebrow">FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <p className="body-large text-muted-foreground">Everything you need to know about working with us.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
