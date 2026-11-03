import type { Article } from "@/lib/articles"

// Layout fixture, not real content. Only loaded under `next dev` (see lib/articles.ts).
export const sampleArticles: Article[] = [
  {
    slug: "sample-article-do-not-publish",
    title: "SAMPLE ARTICLE: Do Not Publish",
    description: "Placeholder text for checking the article layout. Nothing on this page describes real work.",
    publishedAt: "2000-01-01",
    updatedAt: "2000-01-02",
    image: "/img/comingsoon.jpg",
    tags: ["Sample", "Layout Test"],
    body: [
      {
        type: "paragraph",
        text: "SAMPLE TEXT. This page exists to check how an article renders. It makes no claim about any system, project or result.",
      },
      { type: "heading", text: "A section heading" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      { type: "list", items: ["First placeholder item", "Second placeholder item", "Third placeholder item"] },
      { type: "heading", text: "A code block" },
      {
        type: "code",
        language: "bash",
        code: 'echo "sample only, a long line here checks that wide code scrolls inside its own box instead of stretching the page"',
      },
      { type: "heading", text: "Related links" },
      { type: "links", items: [{ label: "Example link", href: "https://example.com" }] },
    ],
  },
]
