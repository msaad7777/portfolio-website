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
        { name: "Kubernetes (GKE)", level: 95 },
        { name: "Docker", level: 95 },
        { name: "Container Registry", level: 90 },
        { name: "Helm", level: 85 },
      ]
    },
    {
      category: "CI/CD & Automation",
      skills: [
        { name: "Cloud Build", level: 93 },
        { name: "GitHub Actions", level: 92 },
        { name: "Jenkins", level: 88 },
        { name: "GitLab CI", level: 86 },
        { name: "Terraform", level: 90 },
        { name: "Ansible", level: 85 },
      ]
    },
    {
      category: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", level: 90 },
        { name: "Grafana", level: 92 },
        { name: "New Relic", level: 88 },
        { name: "CloudWatch", level: 85 },
        { name: "Datadog", level: 82 },
        { name: "ELK Stack", level: 85 },
      ]
    },
    {
      category: "FinOps & Cost Optimization",
      skills: [
        { name: "New Relic CCI", level: 90 },
        { name: "Looker Dashboards", level: 88 },
        { name: "Cost Anomaly Detection", level: 85 },
        { name: "Resource Rightsizing", level: 90 },
        { name: "Cloud Tagging Strategy", level: 92 },
        { name: "Budget Alerts", level: 88 },
      ]
    },
    {
      category: "Data & ML Tools",
      skills: [
        { name: "Apache Airflow", level: 90 },
        { name: "BigQuery", level: 92 },
        { name: "Cloud Dataflow", level: 88 },
        { name: "Apache Spark/PySpark", level: 87 },
        { name: "MLOps", level: 85 },
        { name: "PyTorch", level: 80 },
      ]
    },
    {
      category: "Programming & Scripting",
      skills: [
        { name: "Python", level: 93 },
        { name: "Bash/Shell", level: 90 },
        { name: "TypeScript/JavaScript", level: 85 },
        { name: "Java", level: 82 },
        { name: "Go", level: 78 },
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "Cloud SQL (MySQL)", level: 90 },
        { name: "PostgreSQL", level: 87 },
        { name: "Cloud Storage", level: 92 },
        { name: "Firestore", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 83 },
        { name: "Cassandra", level: 80 },
      ]
    },
    {
      category: "Security & Networking",
      skills: [
        { name: "IAM & Security Policies", level: 90 },
        { name: "VPC Configuration", level: 88 },
        { name: "Load Balancers", level: 90 },
        { name: "Cybersecurity", level: 82 },
        { name: "OAuth", level: 80 },
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS Certified DevOps Professional",
              "Google Professional Cloud Architect",
              "Certified Kubernetes Application Developer (CKAD)",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full font-medium"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
