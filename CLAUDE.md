# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Mohammed Saad, a Senior SRE/DevOps Engineer with Platform Engineering expertise. The repository contains a modern Next.js application and a legacy static HTML portfolio, both featuring an AI chatbot called "SAADAI" powered by AWS Lambda and OpenAI.

**Production domain:** msaad.tech

## Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Architecture

### Next.js Application (Primary)

Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

**Key files:**
- `app/page.tsx` - Main page composing all section components
- `app/layout.tsx` - Root layout with theme provider
- `components/sections/` - Section components (hero, about, experience, skills, certifications, portfolio, blog, contact)
- `components/chatbot.tsx` - SAADAI chatbot widget
- `components/ui/` - Reusable UI components (shadcn/ui pattern)

### Legacy Static Portfolio

Original HTML/CSS/JS implementation in root directory (`index.html`, `css/`, `js/`). Only update if specifically needed; the Next.js app is the primary implementation.

### Chatbot Backend

`main.py` - AWS Lambda function using OpenAI API
- Endpoint: `https://djjjwa2ev2.execute-api.us-east-1.amazonaws.com/Prod`
- Requires `OPENAI_API_KEY` environment variable
- To modify bot behavior, edit system prompt in `main.py` lines 25-31

## Component Patterns

All section components in `components/sections/` follow this pattern:
- `"use client"` directive for client-side rendering
- Wrapped in `<section>` with unique `id` for navigation anchors
- Framer Motion for scroll-triggered animations
- Tailwind CSS with dark/light theme support via CSS variables

## Configuration

- **TypeScript:** Strict mode, path alias `@/*` maps to root
- **Styling:** Tailwind CSS with `tailwind.config.ts`, CSS variables for theming
- **Deployment:** Vercel (auto-deploys from GitHub)

## Notes

- The root directory contains legacy learning projects (coffee-menu, Quiz, Piano, etc.) - these are standalone and not part of the main portfolio
- GitHub: https://github.com/msaad7777/portfolio-website