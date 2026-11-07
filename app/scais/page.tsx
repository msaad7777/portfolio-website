"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Box,
  Cloud,
  Compass,
  GitPullRequest,
  Lock,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const OFFICE_URL = "https://mohammeds-mac-mini.tail7a4063.ts.net:8443/"

const agents = [
  {
    icon: Compass,
    name: "Lead agent",
    text: "Plans the work. It breaks a goal into tasks, hands them to the right agent and keeps track of what is waiting on me.",
  },
  {
    icon: Users,
    name: "Interview-prep agent",
    text: "Builds practice questions, study notes and mock-interview drafts for the roles I'm preparing for.",
  },
  {
    icon: MessageSquareText,
    name: "LinkedIn drafting agent",
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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ScaisPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Intro */}
      <section id="scais" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-grid-pattern">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-accent" />
              <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">
                Saad Cloud and AI Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">SCAIS</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              SCAIS is my own cloud and AI consulting business. I help teams build reliable cloud
              infrastructure and put AI to work in ways they can trust.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Behind it is a small AI office I built and run myself. The agents do the drafting; I do
              the deciding.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/#contact" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
                Work with me
              </a>
              <a
                href={OFFICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
              >
                <Lock className="w-4 h-4" />
                Office (private)
                <span className="text-xs text-muted-foreground">sign-in required</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              The office only opens on my own devices. For everyone else the link won&apos;t load.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-5xl font-bold">The AI Office</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A lead agent and a few specialists, each with one job.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {agents.map((agent, i) => (
              <motion.div key={agent.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Card className="h-full card-hover border-accent/20">
                  <CardContent className="p-6">
                    <agent.icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                    <p className="text-muted-foreground">{agent.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The same rules apply to every agent and every client.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rules.map((rule, i) => (
              <motion.div key={rule.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6 flex gap-4">
                    <rule.icon className="w-8 h-8 text-accent shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground">{rule.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
