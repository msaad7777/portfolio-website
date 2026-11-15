"use client"

import { motion } from "framer-motion"
import {
  Box,
  Compass,
  GitPullRequest,
  Lock,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const OFFICE_URL = "https://mohammeds-mac-mini.tail7a4063.ts.net:8443/"

const agents = [
  {
    icon: Compass,
    name: "Lead agent",
    role: "planner",
    text: "Plans the work. It breaks a goal into tasks, hands them to the right agent and keeps track of what is waiting on me.",
  },
  {
    icon: MessageSquareText,
    name: "LinkedIn drafting agent",
    role: "drafter",
    text: "Drafts posts and profile updates in my voice. Drafts only: nothing goes out until I've read it and posted it myself.",
  },
]

const rules = [
  {
    icon: Box,
    title: "One sandbox per agent",
    text: "Every agent runs in its own Docker sandbox, with only the files and access its job needs.",
  },
  {
    icon: GitPullRequest,
    title: "Drafts arrive as pull requests",
    text: "Agents deliver their work as pull requests I can review, change or close, so there's always a clear record.",
  },
  {
    icon: UserCheck,
    title: "Nothing is posted or sent",
    text: "No agent posts, publishes or sends anything. I approve every change before it goes anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "One walled-off office per client",
    text: "Each client gets its own separate office. Nothing is shared between clients: no files, no data, no agents.",
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

// The request path every piece of agent work follows, drawn as a pipeline.
const flow = ["Goal", "Lead agent", "Specialist in a sandbox", "Pull request", "I approve", "Shipped"]

export default function ScaisPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="min-h-screen outline-none">

      {/* Intro */}
      <section id="scais" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Saad Cloud and AI Solutions</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              SCAIS<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              SCAIS is my own cloud and AI consulting business. I help teams build reliable cloud
              infrastructure and put AI to work in ways they can trust.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Behind it is a small AI office I built and run myself. The agents do the drafting; I do
              the deciding.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/#contact" className={cn(buttonVariants({ size: "lg" }), "bg-accent text-accent-foreground hover:bg-accent/90")}>
                Work with me
              </a>
              <a
                href={OFFICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
              >
                <Lock className="w-4 h-4" aria-hidden="true" />
                Office (private)
                <span className="text-xs text-muted-foreground">sign-in required</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              The office only opens on my own devices. For everyone else the link won&apos;t load.
            </p>
          </div>

          {/* Pipeline */}
          <motion.div {...fadeUp} className="panel mt-14 max-w-5xl overflow-hidden">
            <p className="border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">~/scais · pipeline</p>
          <ol className="flex flex-wrap items-center gap-2 p-4 font-mono text-xs" aria-label="How work moves through the office">
            {flow.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className={cn("rounded border px-2.5 py-1", i === 4 ? "border-accent text-accent" : "border-border bg-card")}>{step}</span>
                {i < flow.length - 1 && <span className="text-muted-foreground" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
          </motion.div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading index="01" label="office" title="The AI office" intro="A lead agent and a specialist, each with one job." />
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
            {agents.map((agent, i) => (
              <motion.div key={agent.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="panel p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <agent.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {agent.role} · drafts only
                  </p>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{agent.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{agent.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading index="02" label="rules" title="How it works" intro="The same rules apply to every agent and every client." />
          <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 max-w-5xl">
            {rules.map((rule, i) => (
              <li key={rule.title} className="bg-card p-5 sm:p-6 flex gap-4">
                <span className="font-mono text-xs text-muted-foreground pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <rule.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                    {rule.title}
                  </h3>
                  <p className="mt-1.5 text-muted-foreground leading-relaxed">{rule.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      </main>
      <Footer />
    </>
  )
}
