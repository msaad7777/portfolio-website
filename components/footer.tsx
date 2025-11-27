"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Linkedin, Mail, GraduationCap, BookOpen, ArrowUp, Heart, MapPin, Phone } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

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
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/msaad7777", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: BookOpen, href: "https://medium.com/@msaad_86696", label: "Medium Blog", color: "hover:bg-green-600" },
    { icon: Mail, href: "mailto:mbadru3434@gmail.com", label: "Email", color: "hover:bg-red-500" },
    { icon: GraduationCap, href: "https://www.credly.com/users/mohammed-saad.fb7a43c3/badges", label: "Certifications", color: "hover:bg-amber-500" },
  ]

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
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
    <footer className="relative bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="#home"
              className="inline-flex items-center space-x-3 mb-4 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center shadow-lg shadow-accent/25 group-hover:shadow-accent/40 transition-shadow">
                <span className="text-xl font-bold text-white">MS</span>
              </div>
              <div>
                <span className="text-lg font-bold block">Mohammed Saad</span>
                <span className="text-xs text-muted-foreground">Site Reliability Engineer</span>
              </div>
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Building scalable, reliable, and secure cloud infrastructure. Passionate about DevOps, MLOps, and automation.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Toronto, Ontario, Canada</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Services</h3>
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
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:mbadru3434@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  mbadru3434@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+14317263434" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (431) 726-3434
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-xs text-accent font-medium">Available for Remote Work</p>
              <p className="text-xs text-muted-foreground mt-1">Flexible timezone coverage</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-border/50">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center transition-all hover:border-accent/50 hover:text-white ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollTop ? 1 : 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            &copy; {year} Mohammed Badruddin Saad. Crafted with
            <Heart className="w-4 h-4 text-red-500 inline" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Fixed scroll to top button (shown when scrolled) */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? "auto" : "none"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-emerald-600 text-white shadow-lg shadow-accent/25 flex items-center justify-center z-40 hover:shadow-accent/40 transition-shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
