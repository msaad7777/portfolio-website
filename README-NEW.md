# Mohammed Faiz Ahmed - Portfolio Website

Modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with TypeScript
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: System-aware theme switching
- **Animations**: Smooth transitions with Framer Motion
- **AI Chatbot**: Integrated SAADAI assistant powered by OpenAI
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance**: Optimized images and code splitting
- **AWS S3 Ready**: Static export for S3 deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: AWS S3 + CloudFront

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## 🏗️ Build for Production

### For local testing:
```bash
npm run build
npm start
```

### For AWS S3 deployment:
```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📤 Deploying to AWS S3

### Option 1: AWS Console
1. Build the project: `npm run build`
2. Upload the entire `out/` folder to your S3 bucket
3. Enable static website hosting in S3 bucket settings
4. Set `index.html` as the index document
5. Make the bucket public or use CloudFront

### Option 2: AWS CLI
```bash
# Build the project
npm run build

# Sync to S3 bucket
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache (if using CloudFront)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## 🎨 Customization

### Update Personal Information

1. **Edit content in components**:
   - `components/sections/hero-section.tsx` - Hero section text and links
   - `components/sections/about-section.tsx` - About section content
   - `components/sections/experience-section.tsx` - Work experience
   - `components/sections/skills-section.tsx` - Skills and certifications
   - `components/sections/portfolio-section.tsx` - Portfolio projects

2. **Replace images**:
   - Place your images in the `public/img/` directory
   - Update image paths in components

3. **Update metadata** in `app/layout.tsx`:
   - Title, description, keywords
   - Open Graph tags

### Customize Theme

Edit `app/globals.css` to change colors:
```css
:root {
  --accent: 60 90% 60%; /* Your brand color */
  /* ... other color variables */
}
```

### Configure Chatbot

The chatbot connects to your existing AWS Lambda endpoint. Update the API URL in `components/chatbot.tsx`:
```typescript
const response = await fetch("YOUR_API_ENDPOINT", {
  // ...
});
```

## 📁 Project Structure

```
termproject/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/               # UI components (shadcn)
│   ├── navigation.tsx    # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── chatbot.tsx       # AI chatbot
│   └── theme-provider.tsx
├── lib/                   # Utility functions
├── public/               # Static assets
│   └── img/             # Images
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS config
└── tsconfig.json         # TypeScript config
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Notes

- The old HTML/CSS/JS files are preserved for reference
- Images are in the `public/img/` directory (reused from old site)
- The chatbot uses your existing AWS Lambda backend
- Dark mode is enabled by default with system preference detection

## 🎯 DevOps/MLOps Focused Features

- Showcases cloud infrastructure experience
- Highlights Kubernetes and container orchestration
- Demonstrates CI/CD pipeline expertise
- ML model deployment projects
- Infrastructure as Code examples

## 📞 Contact

- **Email**: badruddinsaad14@gmail.com
- **Phone**: 431-726-3434
- **LinkedIn**: [badruddin-saad](https://www.linkedin.com/in/badruddin-saad)
- **GitHub**: [msaad7777](https://github.com/msaad7777)

## 📄 License

© 2025 Mohammed Badruddin Saad. All rights reserved.
