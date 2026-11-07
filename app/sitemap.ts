import type { MetadataRoute } from "next"
import { articles, SITE_URL } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/blog` },
    { url: `${SITE_URL}/scais` },
    ...articles.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: article.updatedAt ?? article.publishedAt,
    })),
  ]
}
