"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Hotspex Media",
      period: "May 2023 - Present",
      description: [
        "Led multi-cloud deployments using GCP (Cloud Build, Container Registry, GKE) and AWS, architecting scalable containerized solutions",
        "Directed CI/CD strategy with Cloud Build, GitHub Actions, and Artifact Registry, enabling blue-green deployments and automated updates",
        "Achieved 40% reduction in MySQL downtime through effective blue-green deployment strategies",
        "Implemented New Relic, Grafana, and Prometheus for enhanced monitoring, resulting in 30% increase in real-time monitoring capabilities",
        "Configured VPCs, load balancers for regional/global deployments and enforced IAM security policies on GCP",
        "Orchestrated GKE deployments with complete CI/CD pipelines for automated updates and scalability"
      ]
    },
    {
      title: "Data Engineer",
      company: "Insight2Actions",
      period: "March 2022 - May 2023",
      description: [
        "Increased data pipeline availability by 15% resulting in improved system uptime using GCP",
        "Built and optimized GCP pipelines: Cloud Storage, Dataflow, BigQuery for predictive analytics",
        "Executed predictive customer churn analysis with Python and machine learning models",
        "Created dashboards in PowerBI for business insights and data visualization",
        "Managed Apache Airflow workflows and GKE migrations for scalable data processing"
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
                  <span className="font-semibold text-foreground">10+ years in tech</span> — Working since 2014
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
