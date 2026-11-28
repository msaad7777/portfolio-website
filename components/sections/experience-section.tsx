"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead DevOps Engineer",
      company: "Tech Mahindra",
      location: "Toronto, Canada",
      period: "Nov 2025 - Present",
      description: [
        "Lead cloud infrastructure and platform reliability for an enterprise banking client's SAS Viya platform across Azure and GCP, owning architecture, security, automation and production readiness",
        "Automated cloud infrastructure with Terraform and Terragrunt through CI/CD, building reusable patterns and version-controlled, environment-specific configurations that cut manual provisioning",
        "Worked with enterprise architecture and security teams on private networking, Bring Your Own Key (BYOK), identity and access controls, and secure connectivity between client and vendor-managed environments",
        "Serve as senior escalation point for production incidents, investigating application availability, load balancer health checks, compute, security groups and downstream dependencies",
        "Coordinate infrastructure deployments, technical reviews, change approvals and readiness across engineering, security and governance stakeholders",
        "Built predictive and auto-healing systems that turn incident analysis into automated break-fix and self-remediation for large-scale cloud environments"
      ]
    },
    {
      title: "DevOps Engineer - AI/ML Platform & SRE",
      company: "Hotspex Media",
      location: "Toronto, ON",
      period: "May 2023 - Nov 2025",
      description: [
        "Built and maintained production infrastructure across AWS and GCP for high-throughput services, Kubernetes workloads, containerized deployments and GPU-enabled compute",
        "Expanded Terraform/Terragrunt patterns and refactored GitHub Actions Terraform CI/CD with separate plan and apply stages, automated project detection, validation and deployment safeguards",
        "Supported the cloud architecture and production delivery of ViGenAiR, an AI-powered video advertising platform using Vertex AI Gemini and Google Cloud Video Intelligence, with event-driven processing on Cloud Storage and Eventarc",
        "Implemented Prometheus, Grafana, Alertmanager and New Relic, improving alerting, incident investigation and service reliability",
        "Strengthened cloud security and governance with IAM controls, identity configuration, deployment isolation and auditable changes",
        "Configured Cloudflare DNS and expanded Cloudflare Workers for edge request handling and crawler-related workflows",
        "Improved engineering delivery with Blacksmith, GitHub Actions, Greptile and Renovate, and used Linear to track infrastructure work and technical debt",
        "Documented platform integrations and disaster recovery requirements, targeting a four-hour RTO and one-hour RPO"
      ]
    },
    {
      title: "Data Engineer",
      company: "Insight2Actions",
      location: "Toronto, ON",
      period: "Mar 2022 - May 2023",
      description: [
        "Advised enterprise clients in regulated environments on cloud infrastructure, DevSecOps, data platforms and production reliability",
        "Built and streamlined GCP ETL pipelines with Cloud Storage, Dataflow and BigQuery, improving pipeline reliability through monitoring and validation",
        "Supported Kubernetes and cloud-native workloads and enhanced Terraform automation for deployment, security and readiness",
        "Applied observability and incident-management practices with platform, security and application teams for production readiness and compliance"
      ]
    },
    {
      title: "Data Engineer",
      company: "BPCL",
      location: "Hyderabad, India",
      period: "Mar 2020 - Mar 2022",
      description: [
        "Ran cloud data and analytics workloads with Python, PySpark, BigQuery, Informatica, Cassandra and Hive",
        "Deployed forecasting and predictive analytics workloads using Python, ARIMA and containerized, Kubernetes-based environments",
        "Integrated SAP enterprise datasets with analytics and ML pipelines and helped productionize AI/ML services using MLOps practices",
        "Created Python automation and Infrastructure as Code for data engineering and operations across AWS, Azure and GCP"
      ]
    },
    {
      title: "Data Analyst",
      company: "Legacy Designs Inc",
      location: "Rockford, IL, USA",
      period: "2019 - 2020",
      description: [
        "Supported data analysis, reporting and engineering workflows for business and technical stakeholders by automating pipelines and integrations"
      ]
    },
    {
      title: "Software Engineering Analyst",
      company: "Legacy Designs Inc",
      location: "Rockford, IL, USA",
      period: "2016 - 2019",
      description: [
        "Improved deployment reliability by 20% by adopting DevOps practices, Infrastructure as Code and cloud technologies for software engineering workflows"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="04" label="experience" title="Experience" intro="10+ years of building and scaling infrastructure" />

        <div className="max-w-4xl space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-none">
              <CardHeader className="p-6 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-medium tracking-tight">{exp.title}</CardTitle>
                    <p className="text-muted-foreground">
                      {exp.company}
                      {exp.location && <span className="text-sm"> · {exp.location}</span>}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Previous Experience Note */}
          <p className="pt-4 text-muted-foreground">
            <span className="text-foreground">10+ years in tech</span>, working since 2016. For the full history,{" "}
            <a href="#contact" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">
              get in touch
            </a>{" "}
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/badruddin-saad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
