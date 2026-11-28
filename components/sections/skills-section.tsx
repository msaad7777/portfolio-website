"use client"

import { SectionHeading } from "@/components/section-heading"

// Tools used in production work, plainly listed. No self-rated percentages.
const groups = [
  { name: "Observability", tools: ["New Relic", "Prometheus", "Grafana", "Alertmanager", "Datadog", "ELK", "OpenTSDB"] },
  { name: "Cloud", tools: ["AWS", "GCP", "Azure"] },
  { name: "Containers", tools: ["Kubernetes (GKE, EKS, AKS)", "Docker", "Helm", "Envoy"] },
  { name: "Infrastructure as code", tools: ["Terraform", "Terragrunt", "Pulumi", "Ansible", "CloudFormation"] },
  { name: "CI/CD", tools: ["GitHub Actions", "Cloud Build", "Jenkins", "GitLab CI", "Argo CD"] },
  { name: "Cost (FinOps)", tools: ["New Relic Cloud Cost Intelligence", "Looker dashboards", "Tagging policy", "Rightsizing"] },
  { name: "Data and ML", tools: ["Airflow", "BigQuery", "Dataflow", "PySpark"] },
  { name: "Databases", tools: ["PostgreSQL", "Cloud SQL", "DynamoDB", "Redis", "MongoDB"] },
  { name: "Systems and network", tools: ["Linux", "IAM", "VPC networking", "Load balancers"] },
  { name: "Languages", tools: ["Python", "Bash", "Go", "TypeScript"] },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="05" label="skills" title="Tools I work with" />

        <div className="max-w-6xl grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Where most of the experience sits */}
          <div className="panel p-5 sm:p-6">
            <p className="eyebrow">most experience</p>
            <p className="mt-3 text-2xl font-medium tracking-tight">New Relic</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              The observability platform I&apos;ve used most: alerting, dashboards and incident investigation in
              production, plus Cloud Cost Intelligence for FinOps work.
            </p>
          </div>

          <dl className="panel divide-y divide-border overflow-hidden">
            {groups.map((g) => (
              <div key={g.name} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4 sm:px-6">
                <dt className="font-mono text-xs text-muted-foreground sm:pt-0.5">{g.name}</dt>
                <dd className="text-sm">{g.tools.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
