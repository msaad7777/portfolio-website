import { cn } from "@/lib/utils"

type Props = {
  index: string
  label: string
  title: string
  intro?: string
  align?: "left" | "center"
  as?: "h1" | "h2"
  className?: string
}

/** Section header in the site's infra style: "02 / platform", a title and one line of intro. */
export function SectionHeading({ index, label, title, intro, align = "left", as: Tag = "h2", className }: Props) {
  return (
    <div className={cn("mb-10 md:mb-14", align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl", className)}>
      <p className="eyebrow mb-3">
        {index} / {label}
      </p>
      <Tag className="text-3xl md:text-4xl font-medium tracking-tight">{title}</Tag>
      {intro && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  )
}

export function StatusDot({ tone = "signal" }: { tone?: "signal" | "warn" | "accent" }) {
  const color = tone === "signal" ? "bg-signal" : tone === "warn" ? "bg-warn" : "bg-accent"
  return <span className={cn("inline-flex h-2 w-2 shrink-0 rounded-full", color)} aria-hidden="true" />
}
