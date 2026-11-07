import type { Metadata } from "next"
import { Inter, Source_Code_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL } from "@/lib/articles"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

const title = "Mohammed Saad | Senior SRE & DevOps Engineer"
const description = "Senior SRE & DevOps Engineer with 10+ years designing and scaling cloud-native systems on AWS, GCP, and Azure. Kubernetes, Terraform, Pulumi, and observability."
const image = "/img/saad-proffessional.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ["DevOps", "MLOps", "SRE", "Site Reliability Engineer", "Platform Engineering", "AWS", "GCP", "Azure", "Kubernetes", "Terraform", "CI/CD"],
  authors: [{ name: "Mohammed Saad" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Mohammed Saad",
    images: [{ url: image, width: 800, height: 800, alt: "Mohammed Saad" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [image],
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Saad",
  url: SITE_URL,
  image: `${SITE_URL}${image}`,
  jobTitle: "Senior Site Reliability Engineer",
  knowsAbout: ["Site Reliability Engineering", "DevOps", "Platform Engineering", "MLOps", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"],
  sameAs: [
    "https://github.com/msaad7777",
    "https://www.linkedin.com/in/badruddin-saad",
    "https://medium.com/@msaad_86696",
    "https://www.credly.com/users/mohammed-saad.fb7a43c3/badges",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceCodePro.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-accent"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
