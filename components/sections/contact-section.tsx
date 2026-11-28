"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Linkedin, CheckCircle2, Loader2, AlertCircle, CalendarClock, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { BOOKING_LABEL, bookingHref, hasBookingUrl, showBooking } from "@/lib/booking"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  // Honeypot: hidden from people, filled in by most spam bots
  const [honey, setHoney] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mbadru3434@gmail.com",
      href: "mailto:mbadru3434@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (431) 726-3434",
      href: "tel:+14317263434"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Toronto, Ontario, Canada",
      href: "https://maps.google.com/?q=Toronto,Ontario,Canada"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "badruddin-saad",
      href: "https://www.linkedin.com/in/badruddin-saad"
    }
  ]

  const subjectOptions = [
    "General inquiry",
    "Job opportunity",
    "Freelance or contract work",
    "Consulting",
    "Collaboration",
    "Other"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Method 1: Using FormSubmit.co (reliable, works without CORS issues)
      const response = await fetch("https://formsubmit.co/ajax/mbadru3434@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject || "General inquiry",
          message: formData.message,
          _subject: `Portfolio contact: ${formData.subject || "General inquiry"} from ${formData.name}`,
          _template: "table",
          _replyto: formData.email,
          _honey: honey,
        }),
      })

      // FormSubmit can answer 200 with success: "false", for example before the address is activated,
      // so only an explicit success counts
      const result = await response.json().catch(() => null)

      if (response.ok && (result?.success === true || result?.success === "true")) {
        setSubmitStatus({
          type: "success",
          message: "Thanks, your message arrived. I'll reply within 24 to 48 hours.",
        })
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      // Only FormSubmit is used: it reports success or failure, so the visitor
      // is never told a message was sent when it wasn't.
      setSubmitStatus({
        type: "error",
        message: "Your message didn't go through. Please email me directly at mbadru3434@gmail.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          label="contact"
          title="Get in touch"
          intro="Questions about site reliability engineering, DevOps or MLOps? Send me a message."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Roles, platform problems or collaborations. I usually reply within 24 hours. My resume is shared on request.
            </p>

            {showBooking && (
              <Card id="book" className="scroll-mt-24 shadow-none">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CalendarClock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
                    <div className="min-w-0">
                      <h3 className="font-medium">Prefer to talk?</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        Book a free 15-minute intro call about a role, a platform problem or a 1:1 chat. Weekday daytimes, Toronto time.
                      </p>
                    </div>
                  </div>
                  <Button size="lg" variant="outline" asChild className="mt-4 w-full">
                    <a
                      href={bookingHref}
                      target={hasBookingUrl ? "_blank" : undefined}
                      rel={hasBookingUrl ? "noopener noreferrer" : undefined}
                    >
                      {BOOKING_LABEL}
                      <ArrowUpRight className="ml-2 w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      <span className="sr-only">(opens a Google Calendar booking page in a new tab)</span>
                    </a>
                  </Button>
                  {!hasBookingUrl && (
                    <p className="mt-2 font-mono text-[11px] text-red-500">dev only: booking link not set in lib/booking.ts</p>
                  )}
                </CardContent>
              </Card>
            )}

            <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
              {contactInfo.map((info) => (
                <li key={info.title}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none"
                  >
                    <info.icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
                    <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">{info.title}</span>
                    <span className="min-w-0 truncate text-sm">{info.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-none">
              <CardContent className="p-6 sm:p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Leave this empty
                      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-muted-foreground" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-ring focus:ring-2 focus:ring-ring/30 transition-colors outline-none text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-muted-foreground" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-ring focus:ring-2 focus:ring-ring/30 transition-colors outline-none text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-ring focus:ring-2 focus:ring-ring/30 transition-colors outline-none text-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject <span className="text-muted-foreground" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-ring focus:ring-2 focus:ring-ring/30 transition-colors outline-none text-sm cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        {subjectOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-muted-foreground" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-ring focus:ring-2 focus:ring-ring/30 transition-colors outline-none resize-none text-sm"
                      placeholder="The role, project or problem you have in mind"
                    />
                  </div>

                  {submitStatus.type && (
                    <motion.div
                      role={submitStatus.type === "error" ? "alert" : "status"}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                      className={`p-4 rounded-md flex items-start gap-3 border ${
                        submitStatus.type === "success"
                          ? "bg-signal/10 text-signal border-signal/20"
                          : "bg-destructive/10 text-destructive dark:text-red-400 border-destructive/20"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 className="w-[18px] h-[18px] flex-shrink-0 mt-px" strokeWidth={1.5} aria-hidden="true" />
                      ) : (
                        <AlertCircle className="w-[18px] h-[18px] flex-shrink-0 mt-px" strokeWidth={1.5} aria-hidden="true" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                        Sending
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By sending this form, you agree to be contacted about your message
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
