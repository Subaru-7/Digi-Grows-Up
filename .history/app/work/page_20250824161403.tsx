import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioContent } from "@/components/portfolio-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Work - Case Studies & Success Stories",
  description:
    "Explore our portfolio of successful digital marketing campaigns. Real results from real partnerships across industries including SaaS, e-commerce, and B2B.",
  openGraph: {
    title: "Our Work - Digital Marketing Case Studies & Success Stories",
    description:
      "Real results from real partnerships. Explore how we've helped businesses achieve measurable growth through strategic digital marketing.",
  },
  twitter: {
    title: "Our Work - Digital Marketing Case Studies & Success Stories",
    description:
      "Real results from real partnerships. Explore how we've helped businesses achieve measurable growth through strategic digital marketing.",
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <></>
      <Header />
      <main>
        <PortfolioContent />
      </main>
      <Footer />
    </div>
  )
}
