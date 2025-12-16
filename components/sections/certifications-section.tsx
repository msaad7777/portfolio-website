"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, Calendar, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
  const certifications = [
    {
      name: "LFCS: Linux Foundation Certified Systems Administrator",
      issuer: "The Linux Foundation",
      icon: "🐧",
      date: "Nov 2025",
      expiry: "Nov 2027",
      credentialId: "4d67074d-d41e-4832-82b0-4ecccb70b5a8",
      skills: ["Linux", "CentOS", "Disk Partitioning", "System Administration"],
      isNew: true
    },
    {
      name: "KCNA: Kubernetes and Cloud Native Associate",
      issuer: "The Linux Foundation",
      icon: "⚓",
      date: "Nov 2025",
      expiry: "Nov 2027",
      credentialId: "92262672-8bbd-4153-aa5f-749003f90e24",
      skills: ["Kubernetes", "Containers", "Cloud Native", "GitOps", "Service Mesh"],
      isNew: true
    },
    {
      name: "KCSA: Kubernetes and Cloud Native Security Associate",
      issuer: "The Linux Foundation",
      icon: "🔐",
      date: "Nov 2025",
      expiry: "Nov 2027",
      credentialId: "67aa86df-6b2b-43e5-80f1-316efcd39255",
      skills: ["Kubernetes Security", "Cloud Native Security", "Container Security"],
      isNew: true
    },
    {
      name: "CKAD: Certified Kubernetes Application Developer",
      issuer: "The Linux Foundation",
      icon: "⎈",
      date: "May 2025",
      expiry: "May 2027",
      credentialId: "7dbbf988-b1f3-42b6-8f13-ff6509bf77ca",
      skills: ["Kubernetes", "Docker", "Python", "Node.js", "Java", "Cloud Native"],
      isNew: true
    },
    {
      name: "Professional Cloud Architect Certification",
      issuer: "Google Cloud",
      icon: "🌐",
      date: "Feb 2025",
      expiry: "Feb 2027",
      credentialId: "79bde20e-5d20-4306-9bb8-81f0586eb855",
      skills: ["GCP", "Cloud Architecture", "Cloud Security", "IAM", "Scalability"],
      isNew: true
    },
    {
      name: "Associate Google Workspace Administrator",
      issuer: "Google Cloud",
      icon: "📧",
      date: "Dec 2025",
      expiry: "Dec 2027",
      credentialId: "8914158f6cb64338952021d9717987de",
      skills: ["Google Workspace", "Admin Console", "User Management", "Security"],
      isNew: true
    },
    {
      name: "AWS Certified DevOps Engineer – Professional",
      issuer: "Amazon Web Services",
      icon: "☁️",
      date: "Mar 2023",
      expiry: "Mar 2026",
      credentialId: "827afbe3-159e-486e-97d0-22223d506ff5",
      skills: ["AWS", "DevOps", "CI/CD", "Cloud Automation", "AWS Cloud"]
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30">
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
            Credentials
          </motion.span>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-7 h-7 md:w-8 md:h-8 text-accent" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Certifications & <span className="gradient-text">Badges</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Industry-recognized certifications demonstrating expertise in cloud, DevOps, Kubernetes, and infrastructure
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-gradient-to-r from-accent to-emerald-600 hover:from-accent/90 hover:to-emerald-600/90 text-white shadow-lg shadow-accent/25"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className={`h-full border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 bg-card/50 backdrop-blur-sm group ${cert.isNew ? 'ring-2 ring-accent/30' : ''}`}>
                <CardContent className="p-5 sm:p-6">
                  {/* New Badge */}
                  {cert.isNew && (
                    <div className="flex justify-end mb-2">
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accent text-white animate-pulse">
                        NEW
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 text-base sm:text-lg leading-tight group-hover:text-accent transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>

                      {/* Date & Expiry for new certs */}
                      {cert.date && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>Issued: {cert.date}</span>
                          {cert.expiry && (
                            <>
                              <span>•</span>
                              <span>Valid until: {cert.expiry}</span>
                            </>
                          )}
                        </div>
                      )}

                      {/* Skills Tags */}
                      {cert.skills && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <p className="text-2xl sm:text-3xl font-bold text-accent">7</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Certifications</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <p className="text-2xl sm:text-3xl font-bold text-accent">2</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Cloud Platforms</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <p className="text-2xl sm:text-3xl font-bold text-accent">4</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Linux Foundation</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <p className="text-2xl sm:text-3xl font-bold text-accent">2027</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Valid Until</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
