// Projects that are being built or are planned. None has a measured run yet,
// so this list has no metrics. A project moves to `systems.ts` once its README
// reports measured results. Link only repos that are public.

export type BuildStatus = "in progress" | "planned"

export type BuildItem = {
  name: string
  line: string
  status: BuildStatus
  /** Public repo only. Leave out for private or not-started work. */
  github?: string
  /** Short qualifier shown after the status, e.g. "later". */
  when?: string
}

export const building: BuildItem[] = [
  {
    name: "On-call agent",
    line: "Finds an incident's root cause, working only through the guarded NovaPay MCP server.",
    status: "in progress",
    github: "https://github.com/msaad7777/novapay-agents",
  },
  {
    name: "Vulnerability impact agent",
    line: "Matches advisories against an SBOM, ranks P1 to P4, and drafts a patch with a backup first for a person to approve.",
    status: "in progress",
  },
  {
    name: "Governance agent",
    line: "FinOps findings on the NovaPay mock estate, scored against its planted answer key.",
    status: "planned",
  },
  {
    name: "LLM gateway",
    line: "One entry point for the models these systems call.",
    status: "planned",
  },
  {
    name: "Agent platform on Kubernetes",
    line: "Built locally on kind, with Terraform for EKS and GKE checked offline.",
    status: "planned",
  },
  {
    name: "Fraud model",
    line: "Trained and scored on the NovaPay mock estate.",
    status: "planned",
  },
  {
    name: "Multi-cloud + DR drill",
    line: "Portable Terraform and a failover with measured recovery time.",
    status: "planned",
  },
  {
    name: "Self-healing CI agent",
    line: "Reads a failed CI run, reproduces it locally and opens a fix PR that a person merges.",
    status: "planned",
    when: "later",
  },
]
