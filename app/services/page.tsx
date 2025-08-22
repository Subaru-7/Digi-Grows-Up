import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesContent } from "@/components/services-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, PPC, Social Media & Branding",
  description:
    "Comprehensive digital marketing services including SEO, performance marketing, social media management, and branding. Data-driven strategies for measurable growth.",
  keywords: [
    "SEO services",
    "PPC management",
    "social media marketing",
    "brand strategy",
    "digital marketing agency",
    "performance marketing",
    "Mumbai",
  ],
  openGraph: {
    title: "Digital Marketing Services - SEO, PPC, Social Media & Branding",
    description:
      "Comprehensive digital marketing services designed to accelerate your business growth through data-driven strategies.",
  },
  twitter: {
    title: "Digital Marketing Services - SEO, PPC, Social Media & Branding",
    description:
      "Comprehensive digital marketing services designed to accelerate your business growth through data-driven strategies.",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </div>
  )
}
