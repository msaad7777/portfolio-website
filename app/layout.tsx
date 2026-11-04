import type { Metadata } from "next"
import { Inter, Source_Code_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  title: "Mohammed Saad | DevOps & MLOps Engineer",
  description: "Portfolio of Mohammed Saad - DevOps Engineer, MLOps Engineer, and Site Reliability Engineer with 9 years of experience in cloud infrastructure, automation, and ML deployment.",
  keywords: ["DevOps", "MLOps", "SRE", "Cloud Engineer", "AWS", "GCP", "Azure", "Kubernetes", "Terraform", "CI/CD"],
  authors: [{ name: "Mohammed Saad" }],
  openGraph: {
    title: "Mohammed Saad | DevOps & MLOps Engineer",
    description: "DevOps Engineer, MLOps Engineer, and Site Reliability Engineer with 9 years of experience",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceCodePro.variable} font-sans antialiased`}>
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
