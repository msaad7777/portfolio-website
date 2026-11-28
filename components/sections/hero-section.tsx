"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { StatusDot } from "@/components/section-heading"
import { systems } from "@/lib/systems"

const socialLinks = [
  { href: "https://github.com/msaad7777", label: "GitHub" },
  { href: "https://www.linkedin.com/in/badruddin-saad", label: "LinkedIn" },
  { href: "https://medium.com/@msaad_86696", label: "Medium" },
  { href: "mailto:mbadru3434@gmail.com", label: "Email" },
]

// The hero renders without entrance animation: it holds the largest paint and the key claim.
const fade = (_delay = 0) => ({})

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <motion.div {...fade(0)} className="flex items-center gap-4 mb-6">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
                <Image src="/img/saad-proffessional.jpg" alt="Mohammed Saad" fill sizes="56px" className="object-cover" priority />
              </div>
              <div>
                <p className="text-lg font-medium leading-tight">Mohammed Saad</p>
                <p className="eyebrow mt-1">Senior Platform Engineer · DevOps · SRE · 10+ yrs</p>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
              I build the platforms AI systems run on
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
            </motion.div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Profiles">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status board: one row per public system, with its headline measured result */}
          <motion.div {...fade(0.25)} className="panel min-w-0 overflow-hidden">
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
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium leading-snug">{s.name}</span>
                      <span className="block truncate font-mono text-[11px] text-muted-foreground">{s.kind}</span>
                    </span>
                    <span className="text-right">
                      <span className="metric-value block text-base whitespace-nowrap">{s.heroMetric.value}</span>
                      <span className="block font-mono text-[11px] text-muted-foreground whitespace-nowrap">{s.heroMetric.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="border-t border-border px-4 py-3 font-mono text-[11px] text-muted-foreground">
              Measured on an Apple M4 laptop · numbers from each repo&apos;s README
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
