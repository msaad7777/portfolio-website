"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Mail, GraduationCap, BookOpen } from "lucide-react"

export function Footer() {
  const [year, setYear] = useState(2025)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  const socialLinks = [
    { icon: Github, href: "https://github.com/msaad7777", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn" },
    { icon: BookOpen, href: "https://medium.com/@msaad_86696", label: "Medium Blog" },
    { icon: Twitter, href: "https://twitter.com/Mohamme43073045?t=V2VGq-qo8elg7fkb4AwiSA&s=09", label: "Twitter" },
    { icon: Mail, href: "mailto:mbadru3434@gmail.com", label: "Email" },
    { icon: GraduationCap, href: "https://www.credly.com/users/mohammed-saad.402d23cb/badges", label: "Certifications" },
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

  return (
    <footer className="bg-muted/30 border-t border-accent/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xl font-bold text-background">MS</span>
              </div>
              <span className="text-xl font-bold">Mohammed Saad</span>
            </div>
            <p className="text-muted-foreground">
              DevOps Engineer | MLOps Specialist | Site Reliability Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: mbadru3434@gmail.com</p>
              <p>Phone: +1 (431) 726-3434</p>
              <p>Location: Toronto, Ontario, Canada</p>
              <p className="text-xs pt-2">Remote Work Available</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 pt-8 border-t border-accent/10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {year} Mohammed Badruddin Saad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
