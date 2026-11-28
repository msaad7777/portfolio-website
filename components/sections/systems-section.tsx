"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Maximize2 } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { SectionHeading, StatusDot } from "@/components/section-heading"
import { systems } from "@/lib/systems"
import { BuildingNext } from "@/components/sections/building-next"

// Client and employer work from before the public repos. Descriptions only: the
// figures behind it live in the Experience section, not on these cards.
const earlierWork = [
  {
    title: "MLOps pipeline with CI/CD and monitoring",
    text: "Churn model with Airflow orchestration, FastAPI serving, Prometheus and Grafana, deployed to AWS ECS and GCP Cloud Run.",
    tags: ["Airflow", "FastAPI", "Terraform"],
    github: "https://github.com/msaad7777/mlops-churn-pipeline",
  },
  {
    title: "Multi-tenant IaC platform",
    text: "Isolated Terraform infrastructure per tenant, delivered through plan, approval and apply stages across environments.",
    tags: ["Terraform", "CI/CD", "GCP", "AWS"],
  },
  {
    title: "IaC adoption and migration",
    text: "Brought hand-built estates under Terraform with Terraformer, then handed ownership to SRE through GitHub Actions plan/apply.",
    tags: ["Terraformer", "GitHub Actions"],
  },
  {
    title: "Multi-cloud delivery",
    text: "GKE and AWS deployments with Cloud Build and blue-green releases; Terraform and Terragrunt across AWS, GCP and Azure.",
    tags: ["GKE", "Cloud Build", "Terragrunt"],
  },
  {
    title: "Data and ML pipelines",
    text: "Dataflow and BigQuery pipelines, ML on Azure Kubernetes Service, and SAP data feeding PySpark models.",
    tags: ["Dataflow", "BigQuery", "AKS", "PySpark"],
  },
  {
    title: "Monitoring and observability",
    text: "Prometheus, Grafana and New Relic rolled out across projects, with golden-signal dashboards and SLO alerts.",
    tags: ["Prometheus", "Grafana", "New Relic"],
  },
]

export function SystemsSection() {
  return (
    <section id="systems" className="py-20 md:py-28 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          label="systems"
          title="Systems, with their numbers"
          intro="Each one is a public repo with a README that shows how it was measured and what failed. Numbers are from an Apple M4 laptop, copied as reported."
        />

        <div className="space-y-6 max-w-6xl">
          {systems.map((s, i) => (
            <motion.article
              key={s.slug}
              id={`system-${s.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="panel scroll-mt-24 overflow-hidden"
              aria-labelledby={`system-${s.slug}-title`}
            >
              <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border px-4 py-3 sm:px-6">
                <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <StatusDot />
                  <span className="text-signal">public</span>
                  <span aria-hidden="true">·</span>
                  <span>{s.kind}</span>
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <a href={s.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
                    <FaGithub className="h-4 w-4" aria-hidden="true" /> Repo<span className="sr-only">: {s.name} on GitHub</span>
                  </a>
                  {s.writeup && (
                    <a href={s.writeup} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                      Write-up<span className="sr-only">: {s.name}</span> <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </header>

              <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-8">
                <div className="min-w-0">
                  <h3 id={`system-${s.slug}-title`} className="text-2xl font-bold tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.summary}</p>
                  <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed">{s.lesson}</p>

                  <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                    {s.metrics.map((m) => (
                      <div key={m.label} className="bg-card px-3 py-3">
                        <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{m.label}</dt>
                        <dd className="metric-value mt-1 text-lg">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {s.note && <p className="mt-3 text-xs text-muted-foreground">{s.note}</p>}

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${s.name} stack`}>
                    {s.stack.map((t) => (
                      <li key={t} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <figure className="min-w-0">
                  <a
                    href={s.diagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-md border border-border bg-white p-1.5 dark:bg-white/95"
                  >
                    <Image
                      src={s.diagram}
                      alt={s.diagramAlt}
                      width={s.diagramW}
                      height={s.diagramH}
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="h-auto w-full"
                    />
                    <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded bg-black/75 px-2 py-1 font-mono text-[11px] text-white lg:opacity-0 transition-opacity lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                      <Maximize2 className="h-3 w-3" aria-hidden="true" /> full size
                    </span>
                  </a>
                  <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">{s.diagramPath}</figcaption>
                </figure>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Earlier production work */}
        <div className="mt-16 max-w-6xl">
          <h3 className="eyebrow mb-4">
            <span className="text-muted-foreground">02.1 /</span> earlier production work
          </h3>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {earlierWork.map((w) => (
              <li key={w.title} className="bg-card p-4 sm:p-5">
                <p className="font-semibold">{w.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.text}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">{w.tags.join(" · ")}</p>
                {w.github && (
                  <a href={w.github} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                    Repo<span className="sr-only">: {w.title}</span> <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <BuildingNext />

      </div>
    </section>
  )
}
