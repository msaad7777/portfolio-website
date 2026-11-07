import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SCAIS | Saad Cloud and AI Solutions",
  description:
    "SCAIS (Saad Cloud and AI Solutions) is Mohammed Saad's cloud and AI consulting business, run from a private AI office where every agent works in its own sandbox and every change is approved by a person.",
  openGraph: {
    title: "SCAIS | Saad Cloud and AI Solutions",
    description: "Cloud and AI consulting by Mohammed Saad, with a human-approved AI office behind it.",
    type: "website",
  },
}

export default function ScaisLayout({ children }: { children: React.ReactNode }) {
  return children
}
