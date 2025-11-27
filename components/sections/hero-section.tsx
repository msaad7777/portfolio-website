"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter, BookOpen, Download, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/msaad7777", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: BookOpen, href: "https://medium.com/@msaad_86696", label: "Medium Blog", color: "hover:text-green-500" },
    { icon: Twitter, href: "https://twitter.com/Mohamme43073045?t=V2VGq-qo8elg7fkb4AwiSA&s=09", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Mail, href: "mailto:mbadru3434@gmail.com", label: "Email", color: "hover:text-red-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                <span>Available for opportunities</span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-accent font-semibold text-lg"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Mohammed{" "}
                <span className="bg-gradient-to-r from-accent via-emerald-400 to-accent bg-clip-text text-transparent">
                  Saad
                </span>
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl text-muted-foreground space-y-1"
              >
                <p className="gradient-text font-semibold">Senior Site Reliability Engineer</p>
                <p className="text-lg sm:text-xl text-muted-foreground/80">Senior DevOps | Platform Engineering | MLOps</p>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Senior SRE & DevOps Engineer with <span className="text-accent font-semibold">9+ years</span> of experience designing and scaling
              cloud-native distributed systems on AWS, GCP, and Azure. Expert in Kubernetes, Platform Engineering,
              Infrastructure-as-Code (Terraform, Pulumi), and observability. Passionate about <span className="text-accent font-semibold">community service</span> -
              currently volunteering as Full Stack Developer at{" "}
              <a href="https://challengerscc.ca" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Challengers CC
              </a>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-accent to-emerald-600 hover:from-accent/90 hover:to-emerald-600/90 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
              >
                Get In Touch
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-accent/30 hover:bg-accent/10 hover:border-accent"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="hover:bg-accent/10"
              >
                <a href="/MohammedSaadResume.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 pt-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center transition-all hover:border-accent/50 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-48 sm:w-72 h-48 sm:h-72 bg-accent/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/20 rounded-full blur-3xl"
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <img
                  src="/img/saad-proffessional.jpg"
                  alt="Mohammed Saad - Site Reliability Engineer"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 sm:-top-6 right-4 sm:right-8 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-xl px-3 sm:px-4 py-2 shadow-xl z-20"
              >
                <p className="text-sm sm:text-base font-bold text-accent">9+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-6 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-xl px-3 sm:px-4 py-2 shadow-xl z-20"
              >
                <p className="text-sm sm:text-base font-bold text-accent">Cloud Expert</p>
                <p className="text-xs text-muted-foreground">AWS | GCP | Azure</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                className="absolute top-1/2 -right-2 sm:-right-4 bg-gradient-to-r from-accent to-emerald-600 text-white rounded-xl px-3 sm:px-4 py-2 shadow-xl z-20"
              >
                <p className="text-xs sm:text-sm font-semibold">50+ Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
