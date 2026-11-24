# 🚀 Portfolio Setup Instructions

Your modern Next.js portfolio has been created! Follow these steps to get it running.

## ✅ What's Been Created

A complete, modern portfolio website with:
- ✨ Next.js 14 with TypeScript
- 🎨 Tailwind CSS + shadcn/ui components
- 🌓 Dark mode with system preference detection
- 📱 Fully responsive design
- 🤖 Integrated AI chatbot (SAADAI)
- ⚡ Optimized performance
- 🔍 SEO ready

## 📋 Quick Start

### Step 1: Install Dependencies

**IMPORTANT**: First, update your package.json:

1. Rename `package-new.json` to `package.json` (backup the old one if needed)
   ```bash
   mv package.json package-old.json
   mv package-new.json package.json
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   This will install:
   - Next.js 14
   - React 18
   - TypeScript
   - Tailwind CSS
   - Framer Motion (animations)
   - Lucide React (icons)
   - And all other required packages

### Step 2: Install Additional Required Package

```bash
npm install tailwindcss-animate
```

### Step 3: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your new portfolio! 🎉

## 🎨 Customization Checklist

### 1. Update Personal Information

Edit these files to update your information:

#### Hero Section (`components/sections/hero-section.tsx`)
- Update name, title, description
- Update social media links

#### About Section (`components/sections/about-section.tsx`)
- Update biography text
- Update highlights

#### Experience Section (`components/sections/experience-section.tsx`)
- **IMPORTANT**: Update with your REAL work experience
- The current content is placeholder data
- Add your actual companies, dates, and achievements

#### Skills Section (`components/sections/skills-section.tsx`)
- Adjust skill levels based on your expertise
- Add/remove skills as needed
- Update certifications

#### Portfolio Section (`components/sections/portfolio-section.tsx`)
- Add your actual projects
- Update project descriptions, images, and links
- Adjust categories

#### Contact Section (`components/sections/contact-section.tsx`)
- Update contact information
- Connect form to your email service (optional)

### 2. Replace Images

Your existing images in `img/` are already being used, but you may want to:

1. Ensure these images exist and look good:
   - `/img/SAAD2.jpg` - Main hero image
   - `/img/SAAD1.jpg` - About section image
   - `/img/portfolio-01.jpg` through `/img/portfolio-06.jpg` - Project images

2. Add a favicon:
   - Place `favicon.ico` in the `app/` directory

### 3. Customize Colors & Theme

Edit `app/globals.css` to change the accent color:

```css
:root {
  --accent: 60 90% 60%; /* Change this to your brand color */
}
```

[Use this HSL color picker](https://hslpicker.com/)

### 4. Update Metadata for SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description here...",
  keywords: ["your", "keywords", "here"],
  // ... update other fields
}
```

## 🏗️ Building for Production

### Test Production Build Locally

```bash
npm run build
npm start
```

### Export for AWS S3

```bash
npm run build
```

The static files will be in the `out/` directory, ready to upload to S3.

## 📤 Deployment to AWS S3

See `DEPLOYMENT-GUIDE.md` for detailed AWS S3 deployment instructions.

Quick version:

```bash
# Build
npm run build

# Upload to S3
aws s3 sync out/ s3://your-bucket-name --delete

# If using CloudFront, invalidate cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 🤖 Chatbot Configuration

The chatbot (`components/chatbot.tsx`) is already configured to use your existing AWS Lambda endpoint:

```
https://djjjwa2ev2.execute-api.us-east-1.amazonaws.com/Prod
```

If you need to update it:
1. Open `components/chatbot.tsx`
2. Find the `fetch` call
3. Update the URL

## 📁 File Structure Overview

```
termproject/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, fonts, theme)
│   ├── page.tsx                  # Home page (imports all sections)
│   └── globals.css               # Global styles & theme
│
├── components/
│   ├── sections/                 # Page sections
│   │   ├── hero-section.tsx     # Hero/intro
│   │   ├── about-section.tsx    # About me
│   │   ├── experience-section.tsx # Work experience
│   │   ├── skills-section.tsx   # Skills & certifications
│   │   ├── portfolio-section.tsx # Projects grid
│   │   └── contact-section.tsx  # Contact form
│   │
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   │
│   ├── navigation.tsx            # Top navigation bar
│   ├── footer.tsx                # Footer with links
│   ├── chatbot.tsx              # AI chatbot widget
│   └── theme-provider.tsx       # Dark mode provider
│
├── lib/
│   └── utils.ts                  # Utility functions
│
├── public/
│   └── img/                      # Your images (existing)
│
├── next.config.js                # Next.js config (S3 export settings)
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies & scripts
```

## 🔧 Common Issues & Solutions

### Issue: Module not found errors
**Solution**: Run `npm install` again

### Issue: TypeScript errors
**Solution**:
```bash
npm install --save-dev @types/react@latest @types/react-dom@latest
```

### Issue: Tailwind classes not working
**Solution**: Ensure `tailwind.config.ts` includes all component paths

### Issue: Images not showing
**Solution**:
- Ensure images are in `public/img/`
- Use `/img/filename.jpg` not `./img/filename.jpg`

### Issue: Dark mode not working
**Solution**: Check browser console for errors, ensure theme-provider is properly set up

## 📱 Testing Responsiveness

Test your site on different screen sizes:

1. **Mobile**: 375px - 768px
2. **Tablet**: 768px - 1024px
3. **Desktop**: 1024px+

Use browser DevTools (F12) → Toggle Device Toolbar

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Lazy Loading**: Images outside viewport load on scroll
3. **Code Splitting**: Next.js handles this automatically
4. **Caching**: Set proper cache headers in S3/CloudFront

## 🎯 Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Run dev server (`npm run dev`)
3. ✅ Update personal information in all sections
4. ✅ Replace placeholder content with your real data
5. ✅ Test on mobile devices
6. ✅ Build for production (`npm run build`)
7. ✅ Deploy to AWS S3 (see DEPLOYMENT-GUIDE.md)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Pro Tips

1. **Use Git**: Commit your changes regularly
2. **Environment Variables**: Use `.env.local` for secrets (never commit this!)
3. **Test Builds**: Always test `npm run build` before deploying
4. **Mobile First**: Design for mobile, then scale up
5. **Accessibility**: Ensure proper alt texts, ARIA labels, keyboard navigation

## 🆘 Need Help?

If you encounter issues:

1. Check the error message carefully
2. Search the error on Google/Stack Overflow
3. Check Next.js documentation
4. Review the README-NEW.md for more details

## 🎉 You're All Set!

Your portfolio is ready to showcase your 10+ years of DevOps/MLOps/SRE experience!

Remember to:
- Keep your content updated
- Add new projects as you complete them
- Update your skills and certifications
- Monitor your site's performance

Good luck! 🚀
