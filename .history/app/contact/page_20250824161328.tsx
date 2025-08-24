import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Custom Digital Marketing Proposal",
  description:
    "Ready to grow your business? Contact The Digigrows Up for a custom digital marketing proposal. We respond within 24 hours with tailored strategies.",
  openGraph: {
    title: "Contact The Digigrows Up - Get Your Custom Marketing Proposal",
    description:
      "Ready to transform your digital presence? Get in touch for a custom proposal tailored to your business goals.",
  },
  twitter: {
    title: "Contact The Digigrows Up - Get Your Custom Marketing Proposal",
    description:
      "Ready to transform your digital presence? Get in touch for a custom proposal tailored to your business goals.",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </div>
  )
}
