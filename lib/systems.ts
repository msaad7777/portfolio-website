// Public systems shown on the home page. Every metric is copied from the
// project's README (measured on an Apple M4 laptop); none is rounded or estimated.

export type Metric = { label: string; value: string }

export type System = {
  slug: string
  name: string
  kind: string
  summary: string
  lesson: string
  metrics: Metric[]
  stack: string[]
  heroMetric: Metric
  diagram: string
  diagramW: number
  diagramH: number
  diagramPath: string
  diagramAlt: string
  github: string
  writeup?: string
  note?: string
}

export const systems: System[] = [
  {
    slug: "iac-starter-kit",
    name: "AWS IaC Starter Kit",
    kind: "IaC · FinOps · policy",
    summary:
      "Tested Terraform modules, a Terragrunt dev/prod layout and Kyverno policies that check every plan before apply. Runs on a local AWS mock, so no account is needed.",
    lesson:
      "Guardrails belong before apply. The brownfield path brings hand-built resources under code with zero changes.",
    metrics: [
      { label: "Module tests", value: "23 runs" },
      { label: "Import of 4 resources", value: "0 changes" },
      { label: "Plan policies", value: "5 + 3 k8s" },
    ],
    stack: ["Terraform", "Terragrunt", "Kyverno", "Pulumi", "Trivy", "Moto"],
    heroMetric: { label: "module tests", value: "23 runs" },
    diagram: "/img/systems/iac-starter-kit.png",
    diagramW: 1600,
    diagramH: 1307,
    diagramPath: "iac-starter-kit/docs/architecture.png",
    diagramAlt: "Architecture of the AWS IaC starter kit: modules, Terragrunt live layout, plan policies and the RAG assistant",
    github: "https://github.com/msaad7777/iac-starter-kit",
    writeup:
      "https://medium.com/@msaad_86696/guardrails-before-apply-what-my-iac-starter-kit-caught-that-code-review-wouldnt-edc8a9877dd2",
  },
  {
    slug: "provisioning-agent",
    name: "Provisioning agent",
    kind: "Agent · IaC",
    summary:
      "Turns a plain-English request into a branch of Terragrunt units that has passed plan, policy and diagram checks, for a person to review.",
    lesson:
      "The model drafts; code gates. Every branch is re-checked from scratch in a fresh worktree.",
    metrics: [
      { label: "Valid → passing branch", value: "12 / 14" },
      { label: "Bad request → branch", value: "0" },
      { label: "Policy violations", value: "0" },
    ],
    stack: ["gpt-oss:20b", "Ollama", "Terragrunt", "Kyverno", "diagrams"],
    heroMetric: { label: "valid → branch", value: "12 / 14" },
    diagram: "/img/systems/provisioning-agent.png",
    diagramW: 1600,
    diagramH: 1066,
    diagramPath: "iac-starter-kit/docs/agent-architecture.png",
    diagramAlt: "Architecture of the provisioning agent: request, Terragrunt units, plan and policy gates, diagram and ADR draft, reviewed branch",
    github: "https://github.com/msaad7777/iac-starter-kit",
  },
  {
    slug: "novapay-agents",
    name: "NovaPay MCP server",
    kind: "MCP · guardrails",
    summary:
      "An MCP server over a seeded mock fintech estate. Agents read and propose; policy in code decides; only a person approves. Every call lands in a hash-chained audit log.",
    lesson:
      "The policy is code, not a prompt. Denied requests never reach a person's queue.",
    metrics: [
      { label: "Proposals decided as labelled", value: "36 / 36" },
      { label: "Denied ones queued", value: "0" },
      { label: "Tool call p50 / p95", value: "0.9 / 2.0 ms" },
    ],
    stack: ["Python", "MCP SDK", "AWS Emulator", "pytest", "GitHub Actions"],
    heroMetric: { label: "proposals", value: "36 / 36" },
    diagram: "/img/systems/novapay-agents.png",
    diagramW: 1600,
    diagramH: 1055,
    diagramPath: "novapay-agents/docs/architecture.png",
    diagramAlt: "Architecture of the NovaPay MCP server: read tools, propose_action, policy in code, person approves, audit log",
    github: "https://github.com/msaad7777/novapay-agents",
    note: "Proposals and labels were written by the policy author. The agents that use the server are next.",
  },
  {
    slug: "mars-rag",
    name: "mars-rag",
    kind: "RAG · local LLM serving",
    summary:
      "Answers questions from 82 NASA technical reports with a page citation for every claim, and declines when the reports don't hold the answer.",
    lesson:
      "A system that says \"I don't know\" needs gates you can measure. Declines are tested, not assumed.",
    metrics: [
      { label: "RAGAS faithfulness", value: "0.929" },
      { label: "Unanswerable declined", value: "16 / 16" },
      { label: "Latency p50 / p95", value: "9.0 / 19.5 s" },
    ],
    stack: ["LangChain", "Chroma", "BM25 + dense", "Cross-encoder", "Ollama", "RAGAS"],
    heroMetric: { label: "faithfulness", value: "0.929" },
    diagram: "/img/systems/mars-rag.png",
    diagramW: 1600,
    diagramH: 1088,
    diagramPath: "mars-rag/docs/architecture.png",
    diagramAlt: "Architecture of mars-rag: NASA reports, hybrid retrieval, re-rank, decline gates and cited answers",
    github: "https://github.com/msaad7777/mars-rag",
  },
  {
    slug: "restaurant-voice-agent",
    name: "Restaurant voice agent",
    kind: "Voice · tool calling",
    summary:
      "A phone host for a fictional restaurant: speech to text, LLM tool calling, SQLite tools and text to speech, all on one laptop with guards in code.",
    lesson:
      "Not every step needs an LLM. Speech, not the model, is the weak link.",
    metrics: [
      { label: "Held-out calls passed", value: "16 / 16" },
      { label: "Bookings without a yes", value: "0" },
      { label: "Agent turn p50 / p95", value: "3.3 / 5.4 s" },
    ],
    stack: ["faster-whisper", "gpt-oss:20b", "LangChain", "SQLite", "Piper", "FastAPI"],
    heroMetric: { label: "held-out calls", value: "16 / 16" },
    diagram: "/img/systems/restaurant-voice-agent.png",
    diagramW: 1600,
    diagramH: 1055,
    diagramPath: "restaurant-voice-agent/docs/architecture.png",
    diagramAlt: "Architecture of the restaurant voice agent: speech to text, LLM with tools and guards, SQLite, text to speech",
    github: "https://github.com/msaad7777/restaurant-voice-agent",
  },
  {
    slug: "hybrid-moderation",
    name: "Hybrid moderation",
    kind: "ML + LLM routing",
    summary:
      "A fast classifier first, a local LLM only for the grey zone, measured against five single systems on Civil Comments and HateCheck.",
    lesson:
      "Route by confidence. Sending 20% to the LLM is where it pays for its latency.",
    metrics: [
      { label: "Toxic recall", value: "0.817 → 0.937" },
      { label: "HateCheck hate recall", value: "0.844 → 0.976" },
      { label: "LLM schema failures", value: "0 / 4,450" },
    ],
    stack: ["Detoxify", "scikit-learn", "gpt-oss:20b", "qwen3:8b", "Ollama"],
    heroMetric: { label: "toxic recall", value: "0.937" },
    diagram: "/img/systems/hybrid-moderation.png",
    diagramW: 1600,
    diagramH: 871,
    diagramPath: "hybrid-moderation/docs/architecture.png",
    diagramAlt: "Architecture of hybrid moderation: classifier, confidence routing, local LLM for the grey zone",
    github: "https://github.com/msaad7777/hybrid-moderation",
  },
]
