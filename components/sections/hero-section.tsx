"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/msaad7777", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn" },
    { icon: BookOpen, href: "https://medium.com/@msaad_86696", label: "Medium Blog" },
    { icon: Twitter, href: "https://twitter.com/Mohamme43073045?t=V2VGq-qo8elg7fkb4AwiSA&s=09", label: "Twitter" },
    { icon: Mail, href: "mailto:mbadru3434@gmail.com", label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-accent font-semibold text-lg"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Mohammed Saad
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground space-y-1"
              >
                <p className="gradient-text font-semibold">Site Reliability Engineer</p>
                <p className="text-xl">DevOps | MLOps | Cloud Solutions</p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Senior DevOps & Site Reliability Engineer with 9+ years of experience specializing in
              AWS, GCP, and Azure. Expert in CI/CD pipelines, Kubernetes, MLOps, FinOps & cost optimization,
              and observability-driven infrastructure for scalable, secure, and cost-efficient cloud solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={scrollToContact} className="group">
                Get In Touch
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

              {/* Profile Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl">
                <img
                  src="/img/saad-proffessional.jpg"
                  alt="Mohammed Saad - Site Reliability Engineer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-8 right-8 bg-card border border-accent/30 rounded-lg px-4 py-2 shadow-lg z-20"
              >
                <p className="text-sm font-semibold">9+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-8 bg-card border border-accent/30 rounded-lg px-4 py-2 shadow-lg z-20"
              >
                <p className="text-sm font-semibold">Cloud Expert</p>
                <p className="text-xs text-muted-foreground">AWS | GCP | Azure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
