# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Mohammed Saad, a Senior SRE/DevOps Engineer. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion. Includes an AI chatbot ("SAADAI") powered by Cloudflare Workers AI.

**Production domain:** msaad.tech (deployed on Vercel, auto-deploys from GitHub)

## Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint (extends next/core-web-vitals)
```

Chatbot worker (separate project in `cloudflare-worker/`):
```bash
cd cloudflare-worker && npm run dev      # Local worker dev
cd cloudflare-worker && npm run deploy   # Deploy to Cloudflare
```

## Architecture

### Page Structure

Single-page app — `app/page.tsx` composes all sections in order:
Navigation → Hero → About → Experience → Skills → Certifications → Portfolio → Blog → Contact → Footer → ChatBot

Each section in `components/sections/` has a matching `id` attribute used for anchor navigation. The navigation items are defined in `components/navigation.tsx` (`navItems` array) — update both when adding/removing sections.

### Key Architectural Decisions

- **All components are client-side** (`"use client"`) — no server components are used
- **Custom ThemeProvider** in `components/theme-provider.tsx` (not next-themes) — provides `useTheme()` hook for dark/light/system toggle via class-based switching on `<html>`
- **UI components** follow shadcn/ui pattern in `components/ui/` — use `cn()` from `lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- **`next.config.js`** strips `console.log` in production builds

### Chatbot

- Frontend: `components/chatbot.tsx` — POSTs `{ userInput }` to the worker endpoint
- Backend: `cloudflare-worker/src/index.js` — Cloudflare Workers AI using `@cf/meta/llama-3.1-8b-instruct` (free tier: 10,000 neurons/day)
- Endpoint: `https://portfolio-chatbot.mbadru3434.workers.dev`
- To modify bot personality/knowledge, edit the `systemPrompt` variable in `cloudflare-worker/src/index.js`

### Legacy Code

- Root directory has a legacy static HTML portfolio (`index.html`, `css/`, `js/`) and learning projects (coffee-menu, Quiz, Piano, etc.) — these are standalone, not part of the Next.js app
- `main.py` is a defunct AWS Lambda/OpenAI chatbot backend

## Styling

- **Theming:** CSS variables in `app/globals.css` for light/dark mode. Accent color is green (`hsl(142, 76%, 36%)` light / `hsl(142, 76%, 46%)` dark)
- **Custom CSS classes:** `gradient-text`, `glass`, `glass-dark`, `card-hover`, `section-padding`, `focus-ring`, `bg-grid-pattern`
- **Custom animations:** `animate-float`, `animate-gradient`, `animate-shimmer`, `animate-pulse-glow`, `animate-spin-slow`
- **Path alias:** `@/*` maps to project root

## Configuration

- **TypeScript:** Strict mode enabled
- **Tailwind:** `tailwind.config.ts` with `darkMode: ["class"]`, `tailwindcss-animate` plugin
- **Images:** All remote hostnames allowed (`hostname: '**'` in next.config.js)