"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Layers, ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filters = [
    { name: "All", icon: Layers },
    { name: "Platform Engineering", icon: null },
    { name: "DevOps", icon: null },
    { name: "MLOps", icon: null },
    { name: "Data Engineering", icon: null }
  ]

  const projects = [
    {
      title: "MLOps Pipeline with CI/CD & Monitoring",
      category: "MLOps",
      description: "End-to-end ML pipeline for customer churn prediction featuring Airflow orchestration, FastAPI model serving, Prometheus/Grafana monitoring, and multi-cloud deployment to AWS ECS and GCP Cloud Run via GitHub Actions",
      image: "/img/portfolio-01.jpg",
      tags: ["Airflow", "FastAPI", "Docker", "Terraform", "XGBoost"],
      link: "#",
      github: "https://github.com/msaad7777/mlops-churn-pipeline",
      metrics: "Full MLOps lifecycle"
    },
    {
      title: "Multi-Tenant IaC Deployment with CI/CD",
      category: "Platform Engineering",
      description: "Architected and delivered enterprise-grade, multi-tenant Infrastructure-as-Code platforms for clients including Home Depot, Royal Bank of Canada, Google ViGenAir, and Meridian. Designed full-fledged CI/CD pipelines enabling tenant-isolated infrastructure provisioning with automated plan, approval, and apply workflows across environments",
      image: "/img/portfolio-02.jpg",
      tags: ["Terraform", "CI/CD", "Multi-Tenant", "GCP", "AWS"],
      link: "#",
      github: "#",
      metrics: "4+ enterprise clients"
    },
    {
      title: "Multi-Cloud Terraform Infrastructure",
      category: "Platform Engineering",
      description: "Architected multi-cloud infrastructure across AWS, GCP, and Azure using Terraform with Terragrunt for DRY configurations. Implemented modular patterns enabling teams to provision standardized environments across 3 cloud providers",
      image: "/img/portfolio-02.jpg",
      tags: ["Terraform", "Terragrunt", "AWS", "GCP", "Azure"],
      link: "#",
      github: "#",
      metrics: "3 clouds unified"
    },
    {
      title: "IaC Adoption & Migration",
      category: "Platform Engineering",
      description: "Led Terraform adoption in non-IaC environments using Terraformer to reverse-engineer existing infrastructure. Built GitHub Actions CI/CD pipelines with automated plan/apply workflows, enabling SRE team ownership of infrastructure provisioning",
      image: "/img/portfolio-07.jpg",
      tags: ["Terraformer", "GitHub Actions", "CI/CD", "IaC"],
      link: "#",
      github: "#",
      metrics: "70% faster provisioning"
    },
    {
      title: "Multi-Cloud CI/CD Infrastructure",
      category: "DevOps",
      description: "Led GCP and AWS multi-cloud deployments with Cloud Build, GKE, and blue-green deployment strategies, achieving 40% reduction in downtime",
      image: "/img/portfolio-02.jpg",
      tags: ["GCP", "Cloud Build", "GKE", "GitHub Actions"],
      link: "#",
      github: "#",
      metrics: "40% less downtime"
    },
    {
      title: "Predictive Analytics Pipeline (BPCL)",
      category: "MLOps",
      description: "Built and deployed predictive models for customer churn and CO₂ emissions using Python, containerized and scaled on Azure Kubernetes Service",
      image: "/img/portfolio-03.jpg",
      tags: ["Azure", "Kubernetes", "Python", "ARIMA"],
      link: "#",
      github: "#",
      metrics: "92% accuracy"
    },
    {
      title: "Churn Prediction & Customer Insights",
      category: "MLOps",
      description: "Designed ETL/ELT workflows with Apache Airflow and Dataflow, deployed churn prediction models with CI/CD integration",
      image: "/img/portfolio-04.jpg",
      tags: ["Airflow", "BigQuery", "ML", "GCP"],
      link: "#",
      github: "#",
      metrics: "25% reduced churn"
    },
    {
      title: "Enterprise Data Pipeline (GCP)",
      category: "Data Engineering",
      description: "Built optimized GCP pipelines with Cloud Storage, Dataflow, and BigQuery, increasing pipeline availability by 15%",
      image: "/img/portfolio-05.jpg",
      tags: ["Cloud Dataflow", "BigQuery", "Apache Beam"],
      link: "#",
      github: "#",
      metrics: "15% more uptime"
    },
    {
      title: "Monitoring & Observability Stack",
      category: "DevOps",
      description: "Implemented Prometheus, Grafana, and New Relic across multiple projects, achieving 30% increase in monitoring capabilities",
      image: "/img/portfolio-06.jpg",
      tags: ["Prometheus", "Grafana", "New Relic"],
      link: "#",
      github: "#",
      metrics: "30% better monitoring"
    },
    {
      title: "ML Integration with SAP Data",
      category: "MLOps",
      description: "Connected enterprise SAP ERP datasets to ML pipelines with PySpark, Cassandra, and Hive. Leveraged Kubernetes for scaling inference services",
      image: "/img/portfolio-08.jpg",
      tags: ["PySpark", "Kubernetes", "SAP", "MLOps"],
      link: "#",
      github: "#",
      metrics: "3x faster processing"
    }
  ]

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
          >
            My Work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in cloud infrastructure, DevOps, and MLOps
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.name
                  ? "bg-gradient-to-r from-accent to-emerald-600 text-white shadow-lg shadow-accent/25"
                  : "bg-card border border-border hover:border-accent/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="group overflow-hidden h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-44 sm:h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay with actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <motion.a
                        href={project.link}
                        initial={{ y: 20, opacity: 0 }}
                        animate={hoveredProject === project.title ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.1 }}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors"
                        aria-label="View project"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        initial={{ y: 20, opacity: 0 }}
                        animate={hoveredProject === project.title ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors"
                        aria-label="View on GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/90 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Metrics Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/20">
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 sm:px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline group/link"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 md:mt-14"
        >
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-accent/30 hover:bg-accent/10 hover:border-accent group"
          >
            <a href="https://github.com/msaad7777" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
