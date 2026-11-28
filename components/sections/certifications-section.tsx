"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

export function CertificationsSection() {
  const certifications = [
    {
      name: "LFCS: Linux Foundation Certified Systems Administrator",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
      expiry: "Nov 2027",
      credentialId: "4d67074d-d41e-4832-82b0-4ecccb70b5a8",
      skills: ["Linux", "CentOS", "Disk Partitioning", "System Administration"]
    },
    {
      name: "KCNA: Kubernetes and Cloud Native Associate",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
      expiry: "Nov 2027",
      credentialId: "92262672-8bbd-4153-aa5f-749003f90e24",
      skills: ["Kubernetes", "Containers", "Cloud Native", "GitOps", "Service Mesh"]
    },
    {
      name: "KCSA: Kubernetes and Cloud Native Security Associate",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
      expiry: "Nov 2027",
      credentialId: "67aa86df-6b2b-43e5-80f1-316efcd39255",
      skills: ["Kubernetes Security", "Cloud Native Security", "Container Security"]
    },
    {
      name: "CKA: Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
      date: "Feb 2026",
      expiry: "Feb 2028",
      credentialId: "f647816f-1bcd-4a3c-852c-e1da6fe3c8e1",
      skills: ["Kubernetes", "Helm", "Scheduling", "Security Policies", "Ingress", "Volumes"],
      isNew: true
    },
    {
      name: "CKAD: Certified Kubernetes Application Developer",
      issuer: "The Linux Foundation",
      date: "May 2025",
      expiry: "May 2027",
      credentialId: "7dbbf988-b1f3-42b6-8f13-ff6509bf77ca",
      skills: ["Kubernetes", "Docker", "Python", "Node.js", "Java", "Cloud Native"]
    },
    {
      name: "Professional Cloud Architect Certification",
      issuer: "Google Cloud",
      date: "Feb 2025",
      expiry: "Feb 2027",
      credentialId: "79bde20e-5d20-4306-9bb8-81f0586eb855",
      skills: ["GCP", "Cloud Architecture", "Cloud Security", "IAM", "Scalability"]
    },
    {
      name: "Associate Google Workspace Administrator",
      issuer: "Google Cloud",
      date: "Dec 2025",
      expiry: "Dec 2027",
      credentialId: "8914158f6cb64338952021d9717987de",
      skills: ["Google Workspace", "Admin Console", "User Management", "Security"]
    },
    {
      name: "AWS Certified DevOps Engineer – Professional",
      issuer: "Amazon Web Services",
      date: "Mar 2023",
      expiry: "Mar 2026",
      credentialId: "827afbe3-159e-486e-97d0-22223d506ff5",
      skills: ["AWS", "DevOps", "CI/CD", "Cloud Automation", "AWS Cloud"]
    },
  ]

  const stats = [
    { value: "8", label: "Certifications" },
    { value: "2", label: "Cloud platforms" },
    { value: "5", label: "Linux Foundation" },
    { value: "2030", label: "Valid until" },
  ]

  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="06"
            label="credentials"
            title="Certifications"
            intro="Cloud, DevOps, Kubernetes and infrastructure certifications"
            className="mb-0 md:mb-0"
          />
          <Button asChild variant="outline" className="gap-2 self-start md:self-auto">
            <a
              href="https://www.credly.com/users/mohammed-saad.fb7a43c3/badges"
              target="_blank"
              rel="noopener noreferrer"
            >
              All badges on Credly
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </Button>
        </div>

        <dl className="mb-6 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-4">
              <dt className="font-mono text-xs text-muted-foreground">{s.label}</dt>
              <dd className="metric-value mt-1 text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="grid max-w-6xl sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <Card className="h-full shadow-none">
                <CardContent className="flex h-full flex-col p-5">
                  <p className="flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
                    <span>{cert.issuer}</span>
                    {cert.isNew && <span className="text-accent">new</span>}
                  </p>
                  <h3 className="mt-2 font-medium leading-snug">{cert.name}</h3>
                  <p className="mt-2 font-mono text-xs tabular-nums text-muted-foreground">
                    Issued {cert.date} · valid until {cert.expiry}
                  </p>
                  <p className="mt-auto pt-4 text-xs text-muted-foreground">
                    {cert.skills.slice(0, 3).join(" · ")}
                    {cert.skills.length > 3 && ` +${cert.skills.length - 3}`}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
