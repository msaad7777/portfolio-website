"use client"

import { ArrowUpRight } from "lucide-react"
import { StatusDot } from "@/components/section-heading"
import { building } from "@/lib/building"

/** Work that is in progress or planned. Labelled, linked only where public, and never given metrics. */
export function BuildingNext() {
  return (
    <div id="building" className="mt-16 max-w-6xl scroll-mt-24">
      <h3 className="eyebrow mb-4">
        <span className="text-muted-foreground">02.2 /</span> building next
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {building.map((b) => {
          const active = b.status === "in progress"
          return (
            <li key={b.name} className="panel flex flex-col p-4">
              <p className={`flex items-center gap-2 font-mono text-xs ${active ? "text-accent" : "text-muted-foreground"}`}>
                <StatusDot tone={active ? "accent" : "warn"} pulse={active} />
                {b.status}
                {b.when && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-muted-foreground">{b.when}</span>
                  </>
                )}
              </p>
              <p className="mt-2 font-semibold">{b.name}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.line}</p>
              {b.github && (
                <a
                  href={b.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 self-start text-sm font-medium text-accent hover:underline"
                >
                  Repo<span className="sr-only">: {b.name}</span> <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </li>
          )
        })}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">
        Nothing here has measured results yet. Each one moves up to the systems list, with its numbers, after a measured run.
      </p>
    </div>
  )
}
