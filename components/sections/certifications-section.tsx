"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
  const certifications = [
    {
      name: "AWS Certified DevOps Engineer - Professional",
      issuer: "Amazon Web Services",
      icon: "☁️"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      icon: "🌐"
    },
    {
      name: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation",
      icon: "⚓"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      icon: "🔧"
    },
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      icon: "🏗️"
    },
    {
      name: "Microsoft Certified: Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      icon: "🔷"
    }
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-5xl font-bold">Certifications & Badges</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Industry-recognized certifications demonstrating expertise in cloud, DevOps, and infrastructure
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2"
          >
            <a
              href="https://www.credly.com/users/mohammed-saad.fb7a43c3/badges"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Badges on Credly
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{cert.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
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
