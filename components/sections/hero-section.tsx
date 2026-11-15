"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, BookOpen, Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { StatusDot } from "@/components/section-heading"
import { systems } from "@/lib/systems"

const socialLinks = [
  { icon: Github, href: "https://github.com/msaad7777", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn" },
  { icon: BookOpen, href: "https://medium.com/@msaad_86696", label: "Medium" },
  { icon: Mail, href: "mailto:mbadru3434@gmail.com", label: "Email" },
]

// The hero renders without entrance animation: it holds the largest paint and the key claim.
const fade = (_delay = 0) => ({})

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <motion.div {...fade(0)} className="flex items-center gap-4 mb-6">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
                <Image src="/img/saad-proffessional.jpg" alt="Mohammed Saad" fill sizes="56px" className="object-cover" priority />
              </div>
              <div>
                <p className="text-lg font-semibold leading-tight">Mohammed Saad</p>
                <p className="eyebrow mt-1">Lead AI Infrastructure · SRE · DevOps · 10+ yrs</p>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              I build the platforms <span className="text-accent">AI systems</span> run on.
            </h1>

            <motion.p {...fade(0.2)} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              10+ years running infrastructure on AWS, GCP and Azure. Today I build the layer under AI systems: Terraform,
              Kubernetes and local models, with policy checks in code and every claim measured in a public repo.
            </motion.p>

            <motion.div {...fade(0.3)} className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-row">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#systems" className="group">
                  See the systems
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button size="lg" variant="ghost" asChild className="col-span-2 sm:col-span-1">
                <a href="/MohammedSaadResume.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.ul {...fade(0.4)} className="mt-8 flex gap-2" aria-label="Profiles">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Status board: one row per public system, with its headline measured result */}
          <motion.div {...fade(0.25)} className="panel min-w-0 overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/40">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <p className="font-mono text-xs text-muted-foreground truncate">~/systems · status</p>
              <p className="flex items-center gap-2 font-mono text-xs text-signal shrink-0">
                <StatusDot /> {systems.length} public repos
              </p>
            </div>
            <ul className="divide-y divide-border">
              {systems.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#system-${s.slug}`}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60"
                  >
                    <StatusDot />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium leading-snug">{s.name}</span>
                      <span className="block truncate font-mono text-[11px] text-muted-foreground">{s.kind}</span>
                    </span>
                    <span className="text-right">
                      <span className="metric-value block text-sm whitespace-nowrap">{s.heroMetric.value}</span>
                      <span className="block font-mono text-[11px] text-muted-foreground whitespace-nowrap">{s.heroMetric.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="border-t border-border px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
              Measured on an Apple M4 laptop · numbers from each repo&apos;s README
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
