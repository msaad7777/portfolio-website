"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 95 },
        { name: "AWS", level: 93 },
        { name: "Microsoft Azure", level: 88 },
      ]
    },
    {
      category: "Container & Orchestration",
      skills: [
        { name: "Kubernetes (GKE/EKS/AKS)", level: 95 },
        { name: "Docker", level: 95 },
        { name: "Container Registry", level: 90 },
        { name: "Helm", level: 88 },
        { name: "Envoy", level: 85 },
      ]
    },
    {
      category: "Platform Engineering",
      skills: [
        { name: "Internal Developer Platforms", level: 90 },
        { name: "Self-Service Infrastructure", level: 88 },
        { name: "Golden Paths & Templates", level: 87 },
        { name: "Service Catalogs", level: 85 },
        { name: "Platform APIs", level: 86 },
      ]
    },
    {
      category: "Infrastructure-as-Code",
      skills: [
        { name: "Terraform", level: 92 },
        { name: "Pulumi", level: 85 },
        { name: "Ansible", level: 88 },
        { name: "CloudFormation", level: 85 },
      ]
    },
    {
      category: "CI/CD & Automation",
      skills: [
        { name: "Cloud Build", level: 93 },
        { name: "GitHub Actions", level: 92 },
        { name: "Jenkins", level: 88 },
        { name: "GitLab CI", level: 86 },
        { name: "ArgoCD", level: 85 },
      ]
    },
    {
      category: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", level: 92 },
        { name: "Grafana", level: 92 },
        { name: "OpenTSDB", level: 85 },
        { name: "New Relic", level: 88 },
        { name: "Datadog", level: 85 },
        { name: "ELK Stack", level: 85 },
      ]
    },
    {
      category: "FinOps & Cost Optimization",
      skills: [
        { name: "New Relic CCI", level: 90 },
        { name: "Looker Dashboards", level: 88 },
        { name: "Cost Anomaly Detection", level: 88 },
        { name: "Resource Rightsizing", level: 90 },
        { name: "Cloud Tagging Strategy", level: 92 },
      ]
    },
    {
      category: "Distributed Systems",
      skills: [
        { name: "High Availability Design", level: 92 },
        { name: "Stateless Architectures", level: 90 },
        { name: "Scalability Patterns", level: 90 },
        { name: "Cloud-Native Architecture", level: 92 },
        { name: "Microservices", level: 88 },
      ]
    },
    {
      category: "Data & ML Tools",
      skills: [
        { name: "Apache Airflow", level: 90 },
        { name: "BigQuery", level: 92 },
        { name: "Cloud Dataflow", level: 88 },
        { name: "Apache Spark/PySpark", level: 87 },
        { name: "MLOps", level: 88 },
      ]
    },
    {
      category: "Programming & Scripting",
      skills: [
        { name: "Python", level: 93 },
        { name: "Go", level: 85 },
        { name: "Bash/Shell", level: 92 },
        { name: "TypeScript/JavaScript", level: 85 },
        { name: "Java", level: 82 },
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "DynamoDB", level: 88 },
        { name: "Redis", level: 88 },
        { name: "Cloud SQL (MySQL)", level: 90 },
        { name: "MongoDB", level: 85 },
      ]
    },
    {
      category: "Security & Networking",
      skills: [
        { name: "IAM & Security Policies", level: 90 },
        { name: "VPC Configuration", level: 88 },
        { name: "Load Balancers", level: 90 },
        { name: "Linux Administration", level: 92 },
        { name: "Debugging & Troubleshooting", level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical stack for modern infrastructure and ML operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-accent">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
