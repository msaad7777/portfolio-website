# Portfolio Chatbot - Cloudflare Worker

Free AI chatbot for the portfolio using Cloudflare Workers AI (Llama 3.1).

## Setup

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Install dependencies:
```bash
cd cloudflare-worker
npm install
```

4. Deploy:
```bash
npm run deploy
```

## Local Development

```bash
npm run dev
```

## API Usage

```bash
curl -X POST https://portfolio-chatbot.<your-subdomain>.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"userInput": "Tell me about Mohammed skills"}'
```

## Cost

Cloudflare Workers AI is free:
- 10,000 neurons/day free
- Llama 3.1 8B model included
- No credit card required
