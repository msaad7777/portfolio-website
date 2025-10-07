# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Mohammed Faiz Ahmed (also known as Mohammed Badruddin Saad), a DevOps/MLOps Engineer. The repository contains both a legacy static HTML portfolio and a modern Next.js application, both featuring an AI chatbot called "SAADAI" powered by AWS Lambda and OpenAI.

## Architecture

### Next.js Application (Primary)

Modern portfolio built with Next.js 14, TypeScript, React, and Tailwind CSS.

**Main Files:**
- `app/page.tsx`: Main page with section components (Hero, About, Experience, Skills, Portfolio, Blog, Contact)
- `app/layout.tsx`: Root layout with theme provider and metadata
- `components/`: Reusable components including sections, navigation, footer, and chatbot
- `components/chatbot.tsx`: Modern SAADAI chatbot implementation

**Tech Stack:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS with custom animations
- Framer Motion for animations
- Lucide React for icons
- Dark/light theme support via `next-themes`

### Legacy Static Portfolio

Original HTML/CSS/JavaScript implementation located in root directory:
- `index.html`: Static portfolio page
- `css/styles.css`: Styling with responsive design
- `js/index.js`: Navigation toggle and original chatbot implementation
- `portfolio-item*.html`: Individual project pages

### Chatbot Backend

**File:** `main.py` (AWS Lambda function)

- Uses OpenAI API (`text-davinci-002` model)
- API endpoint: `https://djjjwa2ev2.execute-api.us-east-1.amazonaws.com/Prod`
- Requires `OPENAI_API_KEY` environment variable
- Handles CORS for both static and Next.js applications
- System prompt defines bot as "PortfolioBot" with context about Mohammed's experience

## Common Commands

### Next.js Development

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
npm run export     # Build and export static site
```

### Deployment

The project is configured for Vercel deployment:
- Auto-deploys from GitHub on push
- See `VERCEL-DEPLOYMENT.md` for detailed deployment instructions
- Custom domain: www.msaad.co.in

## Component Architecture

### Page Structure (app/page.tsx)

Sections are imported as client components and rendered in order:
1. Navigation (sticky header)
2. HeroSection (introduction)
3. AboutSection (background)
4. ExperienceSection (work history)
5. SkillsSection (technical skills)
6. CertificationsSection (Credly badges)
7. PortfolioSection (projects)
8. BlogSection (Medium articles)
9. ContactSection (contact form)
10. Footer
11. ChatBot (floating chat widget)

### Chatbot Implementation

**Both implementations** (legacy and Next.js) connect to the same AWS Lambda endpoint:
- Located: `components/chatbot.tsx` (Next.js) and `js/index.js` (legacy)
- Floating button with animated chat window
- Maintains conversation history
- Error handling for failed API calls
- Loading states during API requests

## Styling System

- Tailwind CSS with custom configuration (`tailwind.config.ts`)
- CSS variables for theming (dark/light mode)
- Framer Motion for animations
- Component library using shadcn/ui patterns (`components/ui/`)
- Responsive design (mobile-first)

## Development Notes

### Important: Dual Implementation

This repository maintains **two separate portfolio implementations**:
- **Next.js app** (primary, modern): Used for production deployment at www.msaad.co.in
- **Static HTML** (legacy): Original implementation in root directory (index.html, css/, js/)

When making changes, consider which implementation should be updated. Typically, only the Next.js app requires updates.

### Chatbot Customization

To modify chatbot behavior, edit system prompt in `main.py` lines 25-31.

### Environment Variables

- Backend Lambda requires: `OPENAI_API_KEY`
- Next.js application has no required environment variables (chatbot uses public API Gateway endpoint)

### TypeScript Configuration

- Strict mode enabled (`tsconfig.json`)
- Path aliases: `@/` maps to root directory

### Component Patterns

All section components follow a consistent pattern:
- Use `"use client"` directive (client-side rendering for animations)
- Wrapped in `<section>` with unique `id` for navigation
- Use Framer Motion for scroll animations
- Responsive design with Tailwind CSS breakpoints
- Follow dark/light theme via CSS variables

### Known Project Content

- Repository includes legacy HTML/CSS learning projects in subdirectories (coffee-menu, Quiz, Piano, etc.)
- These are standalone educational projects, not part of main portfolio
- GitHub repository: https://github.com/msaad7777/portfolio-website
