import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { BlogHeader } from "@/components/blog-header"
import { Card, CardContent } from "@/components/ui/card"
import { blogCards, SITE_URL, type BlogCard } from "@/lib/articles"

const title = "Technical Blog | Mohammed Saad"
const description = "Articles on DevOps, MLOps, and Cloud Engineering by Mohammed Saad."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/blog`,
  },
}

function CardBody({ card }: { card: BlogCard }) {
  return (
    <Card className="group overflow-hidden h-full border-accent/20 hover:border-accent/50 hover:shadow-xl transition-shadow">
      <div className="relative h-44">
        <Image
          src={card.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-accent">
          {card.title}
        </h2>
        <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
          {card.external ? (
            <>
              Read on Medium
              <ExternalLink className="w-4 h-4" />
            </>
          ) : (
            <>
              Read Article
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </span>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <BlogHeader backHref="/#blog" backLabel="Back to site" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Technical Blog</h1>
        <p className="text-xl text-muted-foreground mb-10 md:mb-14">
          Sharing insights on DevOps, MLOps, and Cloud Engineering
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {blogCards.map((card) =>
            card.external ? (
              <a key={card.href} href={card.href} target="_blank" rel="noopener noreferrer">
                <CardBody card={card} />
              </a>
            ) : (
              <Link key={card.href} href={card.href}>
                <CardBody card={card} />
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  )
}
