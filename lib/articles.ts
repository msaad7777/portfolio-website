import { sampleArticles } from "@/lib/articles.sample"

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "links"; items: { label: string; href: string }[] }
  | { type: "code"; language?: string; code: string }

export type Article = {
  slug: string
  title: string
  description: string
  publishedAt: string // YYYY-MM-DD
  updatedAt?: string // YYYY-MM-DD
  image: string
  tags: string[]
  body: ArticleBlock[]
}

export type BlogCard = {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  external: boolean
}

export const SITE_URL = "https://msaad.tech"

// On-site articles. Adding an entry here publishes it, so add one only after
// Saad has approved the article and every [VERIFY] item is resolved.
const publishedArticles: Article[] = []

for (const article of publishedArticles) {
  if (JSON.stringify(article).includes("[VERIFY")) {
    throw new Error(`Article "${article.slug}" still has open [VERIFY] items`)
  }
}

// The sample only exists under `next dev`. Production builds never include it.
export const articles: Article[] =
  process.env.NODE_ENV === "development"
    ? [...publishedArticles, ...sampleArticles]
    : publishedArticles

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function formatArticleDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

const mediumCards: BlogCard[] = [
  {
    title: "Effortless Database Migrations in Production with Cloud Run Jobs",
    description: "Master DevOps Project 4: Learn how to automate database migrations in production environments using Cloud Run Jobs and GCP",
    href: "https://medium.com/@msaad_86696/master-devops-project-4-effortless-database-migrations-in-production-with-cloud-run-jobs-and-061d13d374a7",
    image: "/img/portfolio-01.jpg",
    tags: ["DevOps", "Cloud Run", "Database"],
    external: true,
  },
  {
    title: "Automating Database Migrations with CI/CD, Flyway, Cloud Build and Cloud SQL",
    description: "Complete guide to setting up automated database migrations using Flyway, Cloud Build, and Cloud SQL in a CI/CD pipeline",
    href: "https://medium.com/@msaad_86696/automating-database-migrations-with-ci-cd-flyway-cloud-build-and-cloud-sql-877492088690",
    image: "/img/portfolio-02.jpg",
    tags: ["CI/CD", "Flyway", "GCP"],
    external: true,
  },
  {
    title: "Mastering Multi-Cluster Ingress Deployment in GKE with CI/CD",
    description: "A complete GCP project guide for implementing multi-cluster ingress deployment strategies in Google Kubernetes Engine",
    href: "https://medium.com/@msaad_86696/mastering-multi-cluster-ingress-deployment-in-gke-with-ci-cd-a-complete-gcp-project-a6ae56ba09a5",
    image: "/img/portfolio-03.jpg",
    tags: ["GKE", "Kubernetes", "Multi-Cluster"],
    external: true,
  },
  {
    title: "Terraform to Autoscale and Load Balance Compute Engine Instances in GCP",
    description: "Infrastructure as Code tutorial for implementing autoscaling and load balancing for GCP Compute Engine using Terraform",
    href: "https://medium.com/aws-tip/terraform-to-autoscale-and-load-balance-compute-engine-instances-in-gcp-4b5d6f1bb4ff",
    image: "/img/portfolio-04.jpg",
    tags: ["Terraform", "GCP", "Autoscaling"],
    external: true,
  },
  {
    title: "Setting Up a Multi-Tier Web Application Manually and Automatically",
    description: "Mastering DevOps Project 1: Complete guide to deploying multi-tier applications using both manual and automated approaches",
    href: "https://medium.com/@msaad_86696/mastering-devops-project-1-setting-up-a-multi-tier-web-application-manually-and-automatically-1a9587a6b476",
    image: "/img/portfolio-05.jpg",
    tags: ["DevOps", "Multi-Tier", "Web App"],
    external: true,
  },
  {
    title: "AI Paraphrasing: Generate High-Quality Text Indistinguishable from Human Writing",
    description: "Learn how to leverage AI for generating high-quality paraphrased content that maintains natural human-like characteristics",
    href: "https://medium.com/@msaad_86696/ai-paraphrasing-how-to-generate-high-quality-text-that-is-indistinguishable-from-human-writing-1540944ebfb",
    image: "/img/portfolio-06.jpg",
    tags: ["AI", "NLP", "ChatGPT"],
    external: true,
  },
  {
    title: "Build an AI Code Writer App with ChatGPT: A Step-by-Step Beginner's Guide",
    description: "Complete tutorial for building an AI-powered code generation application using ChatGPT API and modern web technologies",
    href: "https://medium.com/@msaad_86696/build-an-ai-code-writer-app-with-chatgpt-a-step-by-step-beginners-guide-14f2782c8f84",
    image: "/img/portfolio-01.jpg",
    tags: ["ChatGPT", "AI", "Python"],
    external: true,
  },
  {
    title: "Create a Chatbot with ChatGPT, Python and Django: A Beginner's Guide",
    description: "Step-by-step guide for building a fully functional chatbot using ChatGPT API, Python, and Django framework",
    href: "https://medium.com/@msaad_86696/create-a-chatbot-with-chatgpt-and-python-and-django-a-step-by-step-guide-for-beginners-9906b18b401c",
    image: "/img/portfolio-02.jpg",
    tags: ["ChatGPT", "Django", "Python"],
    external: true,
  },
]

// On-site articles first, newest first, then the existing Medium links.
export const blogCards: BlogCard[] = [
  ...[...articles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((article) => ({
      title: article.title,
      description: article.description,
      image: article.image,
      tags: article.tags,
      href: `/blog/${article.slug}`,
      external: false,
    })),
  ...mediumCards,
]
