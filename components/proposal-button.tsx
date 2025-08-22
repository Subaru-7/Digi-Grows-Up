"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProposalModal } from "./proposal-modal"

interface ProposalButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function ProposalButton({ children, variant = "default", size = "default", className }: ProposalButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsOpen(true)}>
        {children}
      </Button>
      <ProposalModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}
