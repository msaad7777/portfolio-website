"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const articles = [
    {
      title: "Effortless Database Migrations in Production with Cloud Run Jobs",
      description: "Master DevOps Project 4: Learn how to automate database migrations in production environments using Cloud Run Jobs and GCP",
      link: "https://medium.com/@msaad_86696/master-devops-project-4-effortless-database-migrations-in-production-with-cloud-run-jobs-and-061d13d374a7",
      image: "/img/portfolio-01.jpg",
      tags: ["DevOps", "Cloud Run", "Database"]
    },
    {
      title: "Automating Database Migrations with CI/CD, Flyway, Cloud Build and Cloud SQL",
      description: "Complete guide to setting up automated database migrations using Flyway, Cloud Build, and Cloud SQL in a CI/CD pipeline",
      link: "https://medium.com/@msaad_86696/automating-database-migrations-with-ci-cd-flyway-cloud-build-and-cloud-sql-877492088690",
      image: "/img/portfolio-02.jpg",
      tags: ["CI/CD", "Flyway", "GCP"]
    },
    {
      title: "Mastering Multi-Cluster Ingress Deployment in GKE with CI/CD",
      description: "A complete GCP project guide for implementing multi-cluster ingress deployment strategies in Google Kubernetes Engine",
      link: "https://medium.com/@msaad_86696/mastering-multi-cluster-ingress-deployment-in-gke-with-ci-cd-a-complete-gcp-project-a6ae56ba09a5",
      image: "/img/portfolio-03.jpg",
      tags: ["GKE", "Kubernetes", "Multi-Cluster"]
    },
    {
      title: "Terraform to Autoscale and Load Balance Compute Engine Instances in GCP",
      description: "Infrastructure as Code tutorial for implementing autoscaling and load balancing for GCP Compute Engine using Terraform",
      link: "https://medium.com/aws-tip/terraform-to-autoscale-and-load-balance-compute-engine-instances-in-gcp-4b5d6f1bb4ff",
      image: "/img/portfolio-04.jpg",
      tags: ["Terraform", "GCP", "Autoscaling"]
    },
    {
      title: "Setting Up a Multi-Tier Web Application Manually and Automatically",
      description: "Mastering DevOps Project 1: Complete guide to deploying multi-tier applications using both manual and automated approaches",
      link: "https://medium.com/@msaad_86696/mastering-devops-project-1-setting-up-a-multi-tier-web-application-manually-and-automatically-1a9587a6b476",
      image: "/img/portfolio-05.jpg",
      tags: ["DevOps", "Multi-Tier", "Web App"]
    },
    {
      title: "AI Paraphrasing: Generate High-Quality Text Indistinguishable from Human Writing",
      description: "Learn how to leverage AI for generating high-quality paraphrased content that maintains natural human-like characteristics",
      link: "https://medium.com/@msaad_86696/ai-paraphrasing-how-to-generate-high-quality-text-that-is-indistinguishable-from-human-writing-1540944ebfb",
      image: "/img/portfolio-06.jpg",
      tags: ["AI", "NLP", "ChatGPT"]
    },
    {
      title: "Build an AI Code Writer App with ChatGPT: A Step-by-Step Beginner's Guide",
      description: "Complete tutorial for building an AI-powered code generation application using ChatGPT API and modern web technologies",
      link: "https://medium.com/@msaad_86696/build-an-ai-code-writer-app-with-chatgpt-a-step-by-step-beginners-guide-14f2782c8f84",
      image: "/img/portfolio-01.jpg",
      tags: ["ChatGPT", "AI", "Python"]
    },
    {
      title: "Create a Chatbot with ChatGPT, Python and Django: A Beginner's Guide",
      description: "Step-by-step guide for building a fully functional chatbot using ChatGPT API, Python, and Django framework",
      link: "https://medium.com/@msaad_86696/create-a-chatbot-with-chatgpt-and-python-and-django-a-step-by-step-guide-for-beginners-9906b18b401c",
      image: "/img/portfolio-02.jpg",
      tags: ["ChatGPT", "Django", "Python"]
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }

  return (
    <section id="blog" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-5xl font-bold">Technical Blog</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Sharing insights on DevOps, MLOps, and Cloud Engineering
          </p>
          <Button variant="outline" asChild className="gap-2">
            <a href="https://medium.com/@msaad_86696" target="_blank" rel="noopener noreferrer">
              View All Articles on Medium
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-accent/20 hover:shadow-2xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={articles[currentIndex].image}
                      alt={articles[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent md:block hidden" />
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {articles[currentIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {articles[currentIndex].title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {articles[currentIndex].description}
                    </p>
                    <Button asChild className="gap-2 w-fit">
                      <a
                        href={articles[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <Button
                size="icon"
                variant="outline"
                onClick={prevSlide}
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-background border-accent/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={nextSlide}
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-background border-accent/30"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {articles.map((article, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-accent shadow-lg"
                    : "border-accent/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-2">
                  <p className="text-xs font-semibold line-clamp-2">{article.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
