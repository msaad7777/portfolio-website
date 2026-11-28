"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, Code2, FlaskConical, MapPin, Linkedin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "10+ years of experience",
      description: "Senior SRE, Senior DevOps, MLOps, and Platform Engineering across industries"
    },
    {
      icon: Award,
      title: "Cloud certified",
      description: "AWS DevOps Professional, GCP Architect, CKAD, LFCS, KCNA, KCSA"
    },
    {
      icon: Code2,
      title: "Platform engineering",
      description: "Distributed systems, cloud-native architecture, and scalability design"
    },
    {
      icon: FlaskConical,
      title: "Builds in public",
      description: "Six public systems, each with a measured eval and a write-up of what failed"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border relative overflow-hidden">

      <div className="container mx-auto px-4">
        <SectionHeading index="03" label="about" title="About me" />

        {/* Main Content - Image Card + Bio */}
        <div className="max-w-6xl">
          {/* Profile Card - Centered on top for mobile, side by side on desktop */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left Column - Profile Card */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:sticky lg:top-24">
              <Card className="w-full max-w-sm overflow-hidden shadow-none">
                <div className="relative w-full bg-muted">
                  <Image
                    src="/img/final-linkedn.png"
                    width={832}
                    height={1248}
                    sizes="384px"
                    alt="Mohammed Saad - Senior Platform Engineer, DevOps and SRE"
                    className="w-full h-auto block"
                    style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-1">Mohammed Saad</h3>
                  <p className="text-muted-foreground mb-4">Senior Platform Engineer / DevOps / SRE</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                    <span>Toronto, Ontario, Canada</span>
                  </div>

                  <p className="mb-6 font-mono text-xs text-muted-foreground">AWS · GCP · Kubernetes · Terraform</p>

                  <Button asChild className="w-full gap-2" variant="outline">
                    <a
                      href="https://www.linkedin.com/in/badruddin-saad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                Senior Platform Engineer / DevOps / SRE
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Senior Platform Engineer, DevOps and SRE with over 10 years of experience designing, building,
                and scaling infrastructure for large-scale, cloud-native systems. I specialize in AWS, GCP, and Azure,
                with expertise in distributed systems, security, and scalability. Proven track record of owning systems
                end-to-end, solving ambiguous problems, and mentoring peers while delivering highly available, performant,
                and secure services.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert in building and scaling Kubernetes clusters and containerized workloads from the ground up.
                Proficient in Infrastructure-as-Code using Terraform and Pulumi, with hands-on experience maintaining
                and optimizing databases (PostgreSQL, DynamoDB, Redis) and backend services. Led initiatives on stateless
                architectures, CI/CD pipelines, and observability (New Relic, Prometheus, Grafana, OpenTSDB, Envoy) to enhance
                scalability, maintainability, and reliability.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Strong background in platform engineering, designing internal developer platforms, and implementing
                Golden Metrics dashboards (latency, traffic, errors, saturation) with SLO-driven alerting. Passionate
                about fostering a culture of collaboration and continuous improvement through technical leadership
                and mentorship. Proficient in Python, Go, and JavaScript with a technology generalist mindset.
              </p>

              {/* Highlights Grid */}
              <ul className="grid sm:grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                {highlights.map((highlight) => (
                  <li key={highlight.title} className="flex items-start gap-3 bg-card p-5">
                    <highlight.icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <h4 className="font-medium mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
