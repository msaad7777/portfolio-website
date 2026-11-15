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
        <span className="text-muted-foreground">{index} /</span> {label}
      </p>
      <Tag className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</Tag>
      {intro && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  )
}

export function StatusDot({ tone = "signal", pulse = false }: { tone?: "signal" | "warn" | "accent"; pulse?: boolean }) {
  const color = tone === "signal" ? "bg-signal" : tone === "warn" ? "bg-warn" : "bg-accent"
  return (
    <span className="relative inline-flex h-2 w-2 shrink-0" aria-hidden="true">
      {pulse && <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-60 motion-safe:animate-ping", color)} />}
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", color)} />
    </span>
  )
}
