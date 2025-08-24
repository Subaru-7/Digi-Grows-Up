"use client"

import Link from "next/link"
import { Mail, MapPin, Twitter, ArrowRight,Instagram, FacebookIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProposalModal } from "@/components/proposal-modal" // adjust path if needed

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
]

export function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="border-t border-border bg-gradient-to-br from-background to-muted/30">
      <div className="container py-16">
        {/* Newsletter */}
        <div className="mb-12 p-8 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-semibold">Stay Ahead of the Curve</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest digital marketing insights, case studies, and growth strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button size="sm" className="group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Digigrows Up
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Performance-first digital marketing for brands that mean business. We engineer growth through data-driven
              strategies and relentless optimization.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://www.instagram.com/digigrowsup?igsh=MXR4bWpnMmo1cmV0"
                target="_blank"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Follow us on Twitter"
                >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Follow us on Twitter"
                >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/919981981498"
                target="_blank"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Connect on LinkedIn"
              >
                <FacebookIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <Link href="mailto:hello@digigrowsup.com" className="hover:text-primary transition-colors duration-200">
                  support@digigrowsup.com
                </Link>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
            </div>
            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full group bg-transparent hover:bg-primary hover:text-gray-400"
                onClick={() => setIsOpen(true)}
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2025 The Digigrows Up. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Made with ❤️ by&n
            <Link
            href="https://www.chitrashalaproduction.com/"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Chitrashala Productions
          </Link>
        </p>
        </div>
      </div>

      {/* Modal here so it’s accessible anywhere in Footer */}
      <ProposalModal open={isOpen} onOpenChange={setIsOpen} />
    </footer>
  )
}
