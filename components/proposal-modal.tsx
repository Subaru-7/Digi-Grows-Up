"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { ChevronLeft, ChevronRight } from "lucide-react"

const step1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
})

const step2Schema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
})

const step3Schema = z.object({
  goals: z.string().min(150, "Please provide at least 150 characters").max(300, "Maximum 300 characters"),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>

interface ProposalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const services = [
  { id: "seo", label: "SEO" },
  { id: "performance", label: "Performance Marketing" },
  { id: "social", label: "Social Media" },
  { id: "branding", label: "Branding" },
]

const budgetRanges = [
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-200k", label: "₹50,000 - ₹2,00,000" },
  { value: "over-200k", label: "Over ₹2,00,000" },
]

export function ProposalModal({ open, onOpenChange }: ProposalModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  })

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      services: [],
      budget: "",
    },
  })

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      goals: "",
      consent: false,
    },
  })

  const handleStep1Submit = (data: Step1Data) => {
    setStep(2)
  }

  const handleStep2Submit = (data: Step2Data) => {
    setStep(3)
  }

  const handleStep3Submit = async (data: Step3Data) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    onOpenChange(false)
    setStep(1)

    // Reset all forms
    step1Form.reset()
    step2Form.reset()
    step3Form.reset()

    toast({
      title: "Proposal Request Submitted!",
      description: "We'll get back to you within 24 hours with a custom proposal.",
    })
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setStep(1)
    step1Form.reset()
    step2Form.reset()
    step3Form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get Your Custom Proposal</DialogTitle>
          <DialogDescription>
            Step {step} of 3 - Tell us about your project and we'll create a tailored proposal.
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-4">
              <FormField
                control={step1Form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step1Form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step1Form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Next Step <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Form>
        )}

        {step === 2 && (
          <Form {...step2Form}>
            <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-4">
              <FormField
                control={step2Form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <FormLabel>Services Needed</FormLabel>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <FormField
                          key={service.id}
                          control={step2Form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(field.value?.filter((value) => value !== service.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{service.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step2Form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Budget</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                  <ChevronLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button type="submit" className="flex-1">
                  Next Step <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        )}

        {step === 3 && (
          <Form {...step3Form}>
            <form onSubmit={step3Form.handleSubmit(handleStep3Submit)} className="space-y-4">
              <FormField
                control={step3Form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Goals & Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your goals, target audience, current challenges, and what success looks like for your business..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <div className="text-xs text-muted-foreground">
                      {field.value.length}/300 characters (minimum 150)
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step3Form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">I agree to be contacted about this proposal</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                  <ChevronLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button type="submit" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? "Submitting..." : "Submit Proposal Request"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  )
}
