"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { blogCards } from "@/lib/articles"
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const articles = blogCards

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }

  const current = articles[currentIndex]

  return (
    <section id="blog" className="py-20 md:py-28 border-t border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="07"
            label="writing"
            title="Write-ups"
            intro="What I built, how I measured it and what failed"
            className="mb-0 md:mb-0"
          />
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className={buttonVariants({ variant: "outline", className: "gap-2" })}>
              All articles
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <a
              href="https://medium.com/@msaad_86696"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "gap-2" })}
            >
              Medium
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            <Card className="overflow-hidden shadow-none">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto md:min-h-[320px] overflow-hidden bg-muted">
                  <img src={current.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </div>

                <CardContent className="flex flex-col justify-center p-6 md:p-8">
                  <p className="mb-4 font-mono text-xs text-muted-foreground">{current.tags.join(" · ")}</p>
                  <h3 className="mb-3 text-2xl md:text-3xl font-medium tracking-tight">{current.title}</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{current.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    {current.external ? (
                      <a
                        href={current.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ className: "gap-2 w-fit" })}
                      >
                        Read article
                        <ExternalLink className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href={current.href} className={buttonVariants({ className: "gap-2 w-fit" })}>
                        Read article
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      </Link>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="mr-2 font-mono text-xs tabular-nums text-muted-foreground">
                        {currentIndex + 1} / {articles.length}
                      </span>
                      <Button size="icon" variant="outline" onClick={prevSlide} aria-label="Previous article">
                        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                      </Button>
                      <Button size="icon" variant="outline" onClick={nextSlide} aria-label="Next article">
                        <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {articles.map((article, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show ${article.title}`}
                aria-current={index === currentIndex}
                className={`group overflow-hidden rounded-lg border bg-card text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  index === currentIndex ? "border-foreground/40" : "border-border hover:border-foreground/20"
                }`}
              >
                <img
                  src={article.image}
                  alt=""
                  className={`h-24 w-full object-cover transition-opacity ${index === currentIndex ? "" : "opacity-60 group-hover:opacity-100"}`}
                />
                <p className="line-clamp-2 p-3 text-xs font-medium">{article.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
