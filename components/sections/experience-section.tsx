"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

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
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            10+ years of building and scaling infrastructure
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5">▸</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Previous Experience Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-dashed border-2 border-muted-foreground/30 bg-muted/20">
              <CardContent className="py-8 text-center">
                <p className="text-lg text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">10+ years in tech</span> — Working since 2016
                </p>
                <p className="text-muted-foreground">
                  For detailed experience history, feel free to{" "}
                  <a href="#contact" className="text-accent hover:underline font-medium">
                    get in touch
                  </a>{" "}
                  or connect on{" "}
                  <a
                    href="https://www.linkedin.com/in/badruddin-saad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
