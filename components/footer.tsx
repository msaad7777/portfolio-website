"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Linkedin, Mail, GraduationCap, BookOpen, ArrowUp, MapPin, Phone } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { scrollBehavior } from "@/lib/utils"

export function Footer() {
  const [year, setYear] = useState(2025)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear())

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() })
  }

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/msaad7777", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn" },
    { icon: BookOpen, href: "https://medium.com/@msaad_86696", label: "Medium Blog" },
    { icon: Mail, href: "mailto:mbadru3434@gmail.com", label: "Email" },
    { icon: GraduationCap, href: "https://www.credly.com/users/mohammed-saad.fb7a43c3/badges", label: "Certifications" },
  ]

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Platform", href: "/#platform" },
    { name: "Systems", href: "/#systems" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
    { name: "SCAIS", href: "/scais" },
  ]

  const services = [
    "Site Reliability Engineering",
    "DevOps Consulting",
    "MLOps Implementation",
    "Cloud Architecture",
    "CI/CD Pipeline Design",
    "Infrastructure as Code"
  ]

  return (
    <footer className="relative bg-background border-t border-border">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/#home" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center">
                <span className="font-mono text-base font-medium text-accent-foreground">MS</span>
              </div>
              <div>
                <span className="text-base font-medium block">Mohammed Saad</span>
                <span className="text-xs text-muted-foreground">Senior Platform Engineer</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              I build the platforms AI systems run on, across AWS, GCP and Azure.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              <span>Toronto, Ontario, Canada</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-sm mb-4">Pages</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:mbadru3434@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  mbadru3434@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+14317263434" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  +1 (431) 726-3434
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-border">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            tabIndex={showScrollTop ? 0 : -1}
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollTop ? 1 : 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {year} Mohammed Badruddin Saad · Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>

      {/* Fixed scroll to top button (shown when scrolled) */}
      <motion.button
        onClick={scrollToTop}
        tabIndex={showScrollTop ? 0 : -1}
        initial={{ opacity: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? "auto" : "none"
        }}
        transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-24 right-8 w-11 h-11 rounded-md hidden sm:flex border border-border bg-card text-muted-foreground items-center justify-center z-40 transition-colors hover:text-foreground hover:bg-muted"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-[18px] h-[18px]" strokeWidth={1.5} aria-hidden="true" />
      </motion.button>
    </footer>
  )
}
