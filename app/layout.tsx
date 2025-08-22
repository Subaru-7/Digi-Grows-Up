import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: {
    default: "The Digigrows Up - Growth, Engineered",
    template: "%s | The Digigrows Up",
  },
  description:
    "Performance-first digital marketing agency specializing in SEO, PPC, social media, and branding. We engineer growth for ambitious brands through data-driven strategies and measurable results.",
  keywords: [
    "digital marketing",
    "SEO",
    "PPC",
    "social media marketing",
    "branding",
    "performance marketing",
    "growth marketing",
    "Mumbai",
    "India",
  ],
  authors: [{ name: "The Digigrows Up" }],
  creator: "The Digigrows Up",
  publisher: "The Digigrows Up",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://digigrowsup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Digigrows Up - Growth, Engineered",
    description:
      "Performance-first digital marketing for brands that mean business. Specializing in SEO, PPC, social media, and branding with measurable results.",
    type: "website",
    locale: "en_US",
    url: "https://digigrowsup.com",
    siteName: "The Digigrows Up",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Digigrows Up - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digigrows Up - Growth, Engineered",
    description: "Performance-first digital marketing for brands that mean business.",
    images: ["/og-image.jpg"],
    creator: "@digigrowsup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Digigrows Up",
              alternateName: "Digigrows Up",
              url: "https://digigrowsup.com",
              logo: "https://digigrowsup.com/logo.png",
              description:
                "Performance-first digital marketing agency specializing in SEO, PPC, social media, and branding.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@digigrowsup.com",
                contactType: "customer service",
              },
              sameAs: ["https://twitter.com/digigrowsup", "https://linkedin.com/company/digigrowsup"],
              foundingDate: "2024",
              numberOfEmployees: "10-50",
              serviceArea: {
                "@type": "Place",
                name: "Worldwide",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Marketing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Services",
                      description: "Search Engine Optimization for organic growth",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Performance Marketing",
                      description: "Data-driven paid advertising campaigns",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
