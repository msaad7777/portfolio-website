"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { blogCards } from "@/lib/articles"
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const articles = blogCards

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }

  return (
    <section id="blog" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
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
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/blog" className={buttonVariants({ variant: "outline", className: "gap-2" })}>
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://medium.com/@msaad_86696"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "gap-2" })}
            >
              Medium Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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
                      alt=""
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
                    {articles[currentIndex].external ? (
                      <a
                        href={articles[currentIndex].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ className: "gap-2 w-fit" })}
                      >
                        Read Article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={articles[currentIndex].href}
                        className={buttonVariants({ className: "gap-2 w-fit" })}
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
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
                aria-label="Previous article"
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-background border-accent/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={nextSlide}
                aria-label="Next article"
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
                  alt=""
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
