# ⚡ Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1️⃣ Rename & Install
```bash
# Backup old package.json
mv package.json package-old.json

# Use new package.json
mv package-new.json package.json

# Install all dependencies
npm install

# Install animation library
npm install tailwindcss-animate
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

Open browser: **http://localhost:3000** 🎉

### 3️⃣ Deploy to AWS S3
```bash
# Build static files
npm run build

# Upload to S3 (replace with your bucket name)
aws s3 sync out/ s3://your-bucket-name --delete
```

---

## 📝 Essential Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Preview production build |
| `npm run lint` | Check code quality |

---

## 🎨 Customize Your Content

### Must Update These Files:

1. **Hero Section** → `components/sections/hero-section.tsx`
   - Your name, title, bio
   - Social media links

2. **Experience** → `components/sections/experience-section.tsx`
   - **CRITICAL**: Replace with YOUR real work history
   - Current content is placeholder!

3. **Skills** → `components/sections/skills-section.tsx`
   - Adjust skill percentages
   - Add/remove technologies

4. **Portfolio** → `components/sections/portfolio-section.tsx`
   - Add your real projects
   - Update images and descriptions

5. **About** → `components/sections/about-section.tsx`
   - Write your actual bio
   - Update highlights

---

## 🖼️ Images Location

All images go in: `public/img/`

Required images:
- `/img/SAAD2.jpg` - Hero section
- `/img/SAAD1.jpg` - About section
- `/img/portfolio-01.jpg` to `/img/portfolio-06.jpg` - Projects

---

## 🌓 Features Included

✅ Dark Mode (auto-detects system preference)
✅ Responsive Design (mobile-first)
✅ AI Chatbot (uses your AWS Lambda)
✅ Smooth Animations
✅ SEO Optimized
✅ Fast Performance
✅ AWS S3 Ready

---

## 🔧 Troubleshooting

**Can't run `npm run dev`?**
→ Delete `node_modules` and `package-lock.json`, then `npm install` again

**TypeScript errors?**
→ `npm install --save-dev @types/react@latest @types/react-dom@latest`

**Images not showing?**
→ Ensure images are in `public/img/` and paths start with `/img/`

**Module not found?**
→ `npm install [missing-package-name]`

---

## 📚 Full Documentation

- `SETUP-INSTRUCTIONS.md` - Complete setup guide
- `DEPLOYMENT-GUIDE.md` - AWS S3 deployment
- `README-NEW.md` - Project overview

---

## 🎯 Before Deploying

- [ ] Update all personal information
- [ ] Replace placeholder content
- [ ] Test on mobile (F12 → Toggle Device Toolbar)
- [ ] Check all images load correctly
- [ ] Test dark mode
- [ ] Run `npm run build` successfully
- [ ] Test chatbot functionality

---

## 🆘 Common First-Time Issues

**Q: Package.json has old dependencies?**
A: Use `package-new.json` (rename it to `package.json`)

**Q: Site looks broken?**
A: Make sure you ran `npm install tailwindcss-animate`

**Q: Chatbot not working?**
A: Check your AWS Lambda endpoint in `components/chatbot.tsx`

---

## 📞 Your Info to Update

Current placeholders:
- Name: Mohammed Faiz Ahmed
- Email: badruddinsaad14@gmail.com
- Phone: 431-726-3434
- Location: Toronto, Canada

Update these in:
- `components/sections/hero-section.tsx`
- `components/sections/contact-section.tsx`
- `components/footer.tsx`
- `app/layout.tsx` (metadata)

---

**You're ready to go! Run `npm run dev` and start customizing! 🚀**
