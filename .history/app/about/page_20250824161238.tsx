import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Our Story & Team",
  description:
    "Learn about The Digigrows Up team, our mission to engineer growth for ambitious brands, and our data-driven approach to digital marketing success.",
  openGraph: {
    title: "About The Digigrows Up - Our Story & Team",
    description:
      "Meet the experts behind your growth. Learn about our mission, values, and proven track record in digital marketing.",
  },
  twitter: {
    title: "About The Digigrows Up - Our Story & Team",
    description:
      "Meet the experts behind your growth. Learn about our mission, values, and proven track record in digital marketing.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Cud
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
