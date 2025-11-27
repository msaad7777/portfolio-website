"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, Code2, Heart, ExternalLink } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "9+ Years Experience",
      description: "Senior SRE, Senior DevOps, MLOps, and Platform Engineering across industries"
    },
    {
      icon: Award,
      title: "Cloud Certified",
      description: "AWS DevOps Professional, GCP Architect, CKAD, LFCS, KCNA, KCSA"
    },
    {
      icon: Code2,
      title: "Platform Engineering",
      description: "Distributed systems, cloud-native architecture, and scalability design"
    },
    {
      icon: Heart,
      title: "Community Leader",
      description: "Non-profit volunteer, Full Stack Developer & Playing Director at Challengers CC"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate technologist driving innovation through automation and reliability
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[2/3]">
              <Image
                src="/img/final-linkedn.png"
                alt="Mohammed Saad - Senior SRE"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 448px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Senior Site Reliability Engineer | Senior DevOps Engineer | Platform Engineering
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Senior Site Reliability Engineer & DevOps Engineer with over 9 years of experience designing, building,
              and scaling infrastructure for large-scale, cloud-native systems. I specialize in AWS, GCP, and Azure,
              with expertise in distributed systems, security, and scalability. Proven track record of owning systems
              end-to-end, solving ambiguous problems, and mentoring peers while delivering highly available, performant,
              and secure services.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert in building and scaling Kubernetes clusters and containerized workloads from the ground up.
              Proficient in Infrastructure-as-Code using Terraform and Pulumi, with hands-on experience maintaining
              and optimizing databases (PostgreSQL, DynamoDB, Redis) and backend services. Led initiatives on stateless
              architectures, CI/CD pipelines, and observability (Prometheus, Grafana, OpenTSDB, Envoy) to enhance
              scalability, maintainability, and reliability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Strong background in platform engineering, designing internal developer platforms, and implementing
              Golden Metrics dashboards (latency, traffic, errors, saturation) with SLO-driven alerting. Passionate
              about fostering a culture of collaboration and continuous improvement through technical leadership
              and mentorship. Proficient in Python, Go, and JavaScript with a technology generalist mindset.
            </p>

            {/* Community Work */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-accent/5 border border-accent/20"
            >
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Beyond my professional work</strong>, I am passionate about giving back to the community.
                    I volunteer for non-profit organizations focused on community betterment. Currently, I serve as the{" "}
                    <strong className="text-accent">Full Stack Developer & Playing Director</strong> at{" "}
                    <a
                      href="https://challengerscc.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline inline-flex items-center gap-1"
                    >
                      Challengers Cricket Club
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    , a cricket club in the London community. I built their website from scratch and manage their social media presence,
                    helping grow the club&apos;s digital footprint and community engagement.
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-lg font-semibold text-accent leading-relaxed">
              Based in Toronto, Ontario, Canada • Available for Remote Work • Open to Contract and Full-Time Opportunities
              in Senior SRE, Senior DevOps, Platform Engineering, and MLOps
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-accent/20 hover:border-accent/50 transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <highlight.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
