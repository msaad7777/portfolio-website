"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Filter } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "DevOps", "MLOps", "Data Engineering"]

  const projects = [
    {
      title: "Multi-Cloud CI/CD Infrastructure",
      category: "DevOps",
      description: "Led GCP and AWS multi-cloud deployments with Cloud Build, GKE, and blue-green deployment strategies, achieving 40% reduction in downtime",
      image: "/img/portfolio-01.jpg",
      tags: ["GCP", "Cloud Build", "GKE", "GitHub Actions"],
      link: "#"
    },
    {
      title: "Predictive Analytics Pipeline (BPCL)",
      category: "MLOps",
      description: "Built and deployed predictive models for customer churn and CO₂ emissions using Python, containerized and scaled on Azure Kubernetes Service",
      image: "/img/portfolio-02.jpg",
      tags: ["Azure", "Kubernetes", "Python", "ARIMA"],
      link: "#"
    },
    {
      title: "Churn Prediction & Customer Insights",
      category: "MLOps",
      description: "Designed ETL/ELT workflows with Apache Airflow and Dataflow, deployed churn prediction models with CI/CD integration",
      image: "/img/portfolio-03.jpg",
      tags: ["Airflow", "BigQuery", "ML", "GCP"],
      link: "#"
    },
    {
      title: "Enterprise Data Pipeline (GCP)",
      category: "Data Engineering",
      description: "Built optimized GCP pipelines with Cloud Storage, Dataflow, and BigQuery, increasing pipeline availability by 15%",
      image: "/img/portfolio-04.jpg",
      tags: ["Cloud Dataflow", "BigQuery", "Apache Beam"],
      link: "#"
    },
    {
      title: "Monitoring & Observability Stack",
      category: "DevOps",
      description: "Implemented Prometheus, Grafana, and New Relic across multiple projects, achieving 30% increase in monitoring capabilities",
      image: "/img/portfolio-05.jpg",
      tags: ["Prometheus", "Grafana", "New Relic"],
      link: "#"
    },
    {
      title: "ML Integration with SAP Data",
      category: "MLOps",
      description: "Connected enterprise SAP ERP datasets to ML pipelines with PySpark, Cassandra, and Hive. Leveraged Kubernetes for scaling inference services",
      image: "/img/portfolio-06.jpg",
      tags: ["PySpark", "Kubernetes", "SAP", "MLOps"],
      link: "#"
    },
    {
      title: "ML Observability & Performance Monitoring",
      category: "MLOps",
      description: "Enhanced ML-powered data pipelines with Prometheus, Grafana, and New Relic to track latency, throughput, and drift. Built Looker dashboards combining business outcomes with technical ML KPIs",
      image: "/img/portfolio-01.jpg",
      tags: ["Prometheus", "Grafana", "Looker", "Drift Detection"],
      link: "#"
    }
  ]

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing my expertise
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 mt-2 text-muted-foreground" />
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-accent/20 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" variant="secondary" className="gap-2">
                      View Details <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-accent">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
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
