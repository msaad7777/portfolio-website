export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const { userInput } = await request.json();

      if (!userInput) {
        return new Response(JSON.stringify({ error: "No input provided" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const systemPrompt = `You are SAADAI, a friendly and helpful AI assistant for Mohammed Saad's portfolio website. Mohammed is a Senior SRE/DevOps Engineer with 10+ years of experience, specializing in:

- Platform Engineering & Infrastructure as Code (Terraform, Terragrunt, Terraformer)
- Multi-cloud deployments (AWS, GCP, Azure)
- CI/CD pipelines (GitHub Actions, Cloud Build, Jenkins)
- Container orchestration (Kubernetes, GKE, ECS)
- MLOps and data engineering
- Monitoring & observability (Prometheus, Grafana, New Relic)

You help visitors learn about Mohammed's skills, projects, and experience. Be concise, friendly, and professional. Guide users to relevant sections of the portfolio (About, Experience, Skills, Projects, Contact) when appropriate.

Current role: DevOps Engineer at Hotspex Media (since May 2023)
Previous: Data Engineer at Insight2Actions
Portfolio: msaad.tech
LinkedIn: linkedin.com/in/badruddin-saad
GitHub: github.com/msaad7777`;

      const response = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userInput },
        ],
        max_tokens: 500,
      });

      return new Response(JSON.stringify(response.response), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to process request" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  },
};
