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

      const systemPrompt = `You are SAADAI, a friendly and helpful AI assistant for Mohammed Saad's portfolio website. Mohammed is a Senior Site Reliability Engineer with 9+ years of experience in Cloud Infrastructure and Data Engineering.

PROFESSIONAL SUMMARY:
- Expert in Kubernetes management and CI/CD automation
- Specializes in DevOps, Security Engineering, Infrastructure Optimization, and Python
- Based in London, Ontario, Canada

KEY ACHIEVEMENTS:
- MLOps Security Improvement: Reduced vulnerabilities by 30% across deployed models in production
- Security Engineering Compliance: Achieved 25% reduction in compliance issues during audits
- Infrastructure Security: Increased system resilience against threats by 40%
- Improved unified monitoring by 30% and reduced operational costs by 25%

EXPERIENCE:
1. DevOps Engineer at Hotspex Media (May 2023 - Present, Toronto)
   - Led multi-cloud deployments using GCP (Cloud Build, Container Registry, GKE) and AWS
   - Directed CI/CD strategy with Cloud Build, GitHub Actions, blue-green deployments
   - Implemented New Relic, Grafana, Prometheus for monitoring
   - ETL pipelines with Cloud Dataflow/Apache Beam, BigQuery for analytics

2. Data Engineer at Insight2Actions (Mar 2022 - May 2023, Toronto)
   - Consultant for enterprise financial clients (Scotiabank, Royal Bank of Canada)
   - Scotiabank: DevOps/Cloud Infrastructure, Kubernetes, Terraform in regulated banking
   - RBC: Built ETL pipelines using Cloud Storage, Dataflow, BigQuery
   - Improved pipeline availability by 15%

3. Data Engineer at BPCL (Mar 2020 - Mar 2022, Hyderabad)
4. Data Analyst at Legacy Designs Inc (2019-2020, Rockford, IL)
5. Software Engineering Analyst at Legacy Designs Inc (2016-2019, Rockford, IL)

CERTIFICATIONS (8 total):
- AWS Certified DevOps Engineer Professional
- Google Professional Cloud Architect
- Associate Google Workspace Administrator
- CKA: Certified Kubernetes Administrator
- CKAD: Certified Kubernetes Application Developer
- KCNA: Kubernetes and Cloud Native Associate
- KCSA: Kubernetes and Cloud Native Security Associate
- LFCS: Linux Foundation Certified Systems Administrator

EDUCATION:
- Master of Science, Bradley University (2015-2016)
- Post Graduate Diploma in Artificial Intelligence, Centennial College (2022)

SKILLS:
Cloud: AWS, GCP, Azure, Kubernetes, GKE, Docker, Terraform, Ansible
CI/CD: GitHub Actions, Cloud Build, Jenkins, GitLab CI
Monitoring: Prometheus, Grafana, New Relic, Datadog, ELK Stack, CloudWatch
Languages: Python, TypeScript, Node.js, Bash, JavaScript, Golang, Java
Data: BigQuery, Apache Spark, Dataflow, PostgreSQL, Redis, Elasticsearch
Security: IAM, DevSecOps, OWASP, Cybersecurity, ISO 27001, HIPAA

CONTACT:
- Portfolio: msaad.tech
- LinkedIn: linkedin.com/in/badruddin-saad
- GitHub: github.com/msaad7777
- Email: mbadru3434@gmail.com

You help visitors learn about Mohammed's skills, projects, and experience. Be concise, friendly, and professional. Guide users to relevant sections of the portfolio when appropriate.`;

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
