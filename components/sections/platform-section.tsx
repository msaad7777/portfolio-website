"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { systems } from "@/lib/systems"

type Layer = { id: string; name: string; line: string; tools: string[]; provedIn: string[] }

// Top of the stack first: how changes arrive, down to the clouds they land on.
const layers: Layer[] = [
  {
    id: "delivery",
    name: "Delivery",
    line: "Terraform, Terragrunt, Pulumi and GitHub Actions. Changes go through plan, review, apply.",
    tools: ["Terraform", "Terragrunt", "Pulumi", "GitHub Actions"],
    provedIn: ["iac-starter-kit", "provisioning-agent"],
  },
  {
    id: "policy",
    name: "Policy & guardrails",
    line: "Kyverno policies on every plan, Trivy scans, policy-as-code in MCP servers.",
    tools: ["Kyverno", "Trivy", "MCP guardrails", "Audit log"],
    provedIn: ["iac-starter-kit", "novapay-agents"],
  },
  {
    id: "ai-serving",
    name: "AI serving",
    line: "Ollama with gpt-oss:20b and qwen3, local RAG on LangChain and Chroma, MCP.",
    tools: ["Ollama", "gpt-oss:20b", "qwen3", "LangChain", "Chroma", "MCP"],
    provedIn: ["mars-rag", "restaurant-voice-agent", "hybrid-moderation"],
  },
  {
    id: "compute",
    name: "Compute",
    line: "Kubernetes on GKE, EKS and AKS, plus GPU inference modules.",
    tools: ["Kubernetes", "GKE", "EKS", "AKS", "GPU node groups", "Docker"],
    provedIn: ["iac-starter-kit"],
  },
  {
    id: "observability",
    name: "Observability",
    line: "New Relic, Prometheus and Grafana in production. Latency p50 and p95 reported in every eval.",
    tools: ["New Relic", "Prometheus", "Grafana", "p50 / p95"],
    provedIn: ["mars-rag", "restaurant-voice-agent", "novapay-agents"],
  },
  {
    id: "clouds",
    name: "Clouds",
    line: "AWS, GCP and Azure. Local AWS mocks so tests need no account.",
    tools: ["AWS", "GCP", "Azure", "Moto", "AWS Emulator"],
    provedIn: ["iac-starter-kit", "novapay-agents"],
  },
]

const nameFor = (slug: string) => systems.find((s) => s.slug === slug)?.name ?? slug

export function PlatformSection() {
  return (
    <section id="platform" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          label="platform"
          title="The stack I build on"
          intro="Six layers, from the code that creates infrastructure to the models that run on it. Each layer links to the public systems that use it."
        />

        <div className="panel max-w-6xl overflow-hidden">
        <p className="border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground sm:px-6">~/platform · layers, top of the stack first</p>
        <ol className="divide-y divide-border">
          {layers.map((layer, i) => (
            <motion.li
              key={layer.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid gap-3 p-4 sm:px-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6"
            >
              <div className="flex items-start gap-3 md:block">
                <p className="font-mono text-xs text-muted-foreground">L{layers.length - i}</p>
                <h3 className="font-semibold text-base md:mt-1">{layer.name}</h3>
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{layer.line}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${layer.name} tools`}>
                  {layer.tools.map((t) => (
                    <li key={t} className="rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="font-mono">used in →</span>{" "}
                  {layer.provedIn.map((slug, j) => (
                    <span key={slug}>
                      <a href={`#system-${slug}`} className="text-accent hover:underline">
                        {nameFor(slug)}
                      </a>
                      {j < layer.provedIn.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
