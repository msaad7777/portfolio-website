"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Boxes, Cpu, DownloadCloud, GitPullRequest, MessageSquare, Zap } from "lucide-react"

const points = [
  {
    icon: DownloadCloud,
    title: "Start where you are",
    description:
      "Whether a team has no Infrastructure as Code or years of hand-built cloud resources, I bring what exists under code with Terraformer imports, then turn it into clean, maintainable Terraform.",
  },
  {
    icon: Boxes,
    title: "Custom modules",
    description:
      "Custom Terraform modules and Terragrunt layouts that keep environments DRY, versioned and consistent across accounts, projects and regions.",
  },
  {
    icon: GitPullRequest,
    title: "Safe pipelines",
    description:
      "GitHub Actions workflows with separate plan and apply stages, plan output on every pull request, approval before apply, and automated project detection and validation.",
  },
  {
    icon: Zap,
    title: "Faster, reviewed delivery",
    description:
      "Blacksmith runners for faster CI, Greptile AI code review on infrastructure pull requests, and Renovate for dependency updates.",
  },
  {
    icon: MessageSquare,
    title: "Infrastructure from one prompt",
    description:
      "Workflows that let a team check or change infrastructure with one prompt in Slack or another office tool. Every change still goes through plan, review and approval.",
  },
  {
    icon: Cpu,
    title: "AI-ready platforms",
    description:
      "GPU compute, Kubernetes, model deployment pipelines and observability for AI and ML workloads.",
  },
]

export function AiInfrastructureSection() {
  return (
    <section id="ai-infrastructure" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">AI Infrastructure, from the ground up</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Terraform, Terragrunt and Terraformer, delivered through reviewed pipelines and AI-assisted workflows
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="border-accent/20 hover:border-accent/50 transition-all h-full">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <point.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
