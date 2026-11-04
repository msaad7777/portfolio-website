import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArticleBody } from "@/components/article-body"
import { BlogHeader } from "@/components/blog-header"
import { articles, formatArticleDate, getArticle, SITE_URL } from "@/lib/articles"

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug)
  if (!article) return {}

  const title = `${article.title} | Mohammed Saad`
  const url = `${SITE_URL}/blog/${article.slug}`

  return {
    title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: "Mohammed Saad" }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description: article.description,
      type: "article",
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Mohammed Saad"],
      tags: article.tags,
      images: [`${SITE_URL}${article.image}`],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  return (
    <>
      <BlogHeader backHref="/blog" backLabel="All articles" />
      <main id="main-content" tabIndex={-1} className="min-h-screen outline-none">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{article.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{article.description}</p>
        <p className="text-sm text-muted-foreground mb-8">
          Mohammed Saad · <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
          {article.updatedAt && (
            <>
              {" "}· Updated <time dateTime={article.updatedAt}>{formatArticleDate(article.updatedAt)}</time>
            </>
          )}
        </p>
        <div className="relative h-56 md:h-80 rounded-lg overflow-hidden mb-10">
          <Image
            src={article.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <ArticleBody blocks={article.body} />
      </article>
      </main>
    </>
  )
}
