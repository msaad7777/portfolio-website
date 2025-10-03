# Deploying Next.js as a Dynamic Application on AWS

## Understanding the Difference

### What You Have Now (Static Export):
```
npm run build → Creates 'out' folder → Upload to S3
```
- Just HTML/CSS/JS files
- No server needed
- Cost: $6-7/month

### What You Want (Full Next.js Dynamic):
```
Next.js Server → Handles requests → Server-Side Rendering (SSR)
```
- Server runs continuously
- API routes work
- Dynamic data fetching
- Server-side rendering

---

## AWS Options for Dynamic Next.js

### Option 1: AWS Amplify (RECOMMENDED - Easiest)

**Cost: ~$1-5/month**
**Effort: 10 minutes**

#### Pros:
- ✅ Zero configuration
- ✅ Auto-deploys from GitHub
- ✅ Built-in CI/CD
- ✅ Fully managed
- ✅ Auto-scaling
- ✅ Free SSL certificate
- ✅ **CHEAPER than your current S3 setup!**

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   cd C:/Users/badru/OneDrive/Documents/termproject
   git add .
   git commit -m "Next.js portfolio ready for Amplify"
   git push origin main
   ```

2. **Go to AWS Amplify Console:**
   - https://console.aws.amazon.com/amplify/
   - Click **"New app"** → **"Host web app"**

3. **Connect GitHub:**
   - Select **GitHub**
   - Authorize AWS Amplify
   - Choose your repository
   - Choose branch (main/master)

4. **Configure build settings:**
   Amplify auto-detects Next.js! Default settings work:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

5. **Deploy:**
   - Click **"Save and deploy"**
   - Wait 5 minutes
   - Get your URL: `https://main.d1234abcd.amplifyapp.com`

6. **Add custom domain:**
   - In Amplify console → Domain management
   - Add: `www.msaad.co.in`
   - Follow DNS instructions (update Route 53)

**That's it!** Every push to GitHub auto-deploys.

---

### Option 2: AWS App Runner

**Cost: ~$5-25/month**
**Effort: 30 minutes**

#### Pros:
- ✅ Fully managed containers
- ✅ Auto-scaling
- ✅ Easy setup
- ✅ No Docker knowledge needed

#### Steps:

1. **Create App Runner service:**
   - https://console.aws.amazon.com/apprunner/
   - Click **"Create service"**

2. **Source:**
   - Repository: GitHub
   - Connect to your repo

3. **Deployment settings:**
   - Runtime: Node.js 18
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
   - Port: 3000

4. **Configure:**
   - CPU: 1 vCPU
   - Memory: 2 GB
   - Auto-scaling: 1-10 instances

5. **Deploy and get URL**

---

### Option 3: AWS ECS Fargate (Container-based)

**Cost: ~$15-30/month**
**Effort: 1-2 hours**

#### Pros:
- ✅ Full control
- ✅ Production-grade
- ✅ Scalable

#### Cons:
- ❌ Complex setup
- ❌ More expensive
- ❌ Requires Docker knowledge

#### Steps Summary:
1. Create Dockerfile
2. Push to ECR (Elastic Container Registry)
3. Create ECS cluster
4. Create task definition
5. Create service
6. Setup load balancer

---

### Option 4: AWS Lambda + API Gateway (Serverless Next.js)

**Cost: ~$1-5/month**
**Effort: 30 minutes with SST or Serverless Framework**

#### Using SST (Serverless Stack):

**Cost: Almost FREE (pay per request)**

#### Steps:

1. **Install SST:**
   ```bash
   npm install --save-dev sst
   ```

2. **Create SST config:**
   Create `sst.config.ts`:
   ```typescript
   import { SSTConfig } from "sst";
   import { NextjsSite } from "sst/constructs";

   export default {
     config(input) {
       return {
         name: "portfolio",
         region: "us-east-1",
       };
     },
     stacks(app) {
       app.stack(function Site({ stack }) {
         const site = new NextjsSite(stack, "site", {
           customDomain: "www.msaad.co.in",
         });

         stack.addOutputs({
           SiteUrl: site.url,
         });
       });
     },
   } satisfies SSTConfig;
   ```

3. **Deploy:**
   ```bash
   npx sst deploy --stage production
   ```

That's it! Your Next.js app runs on Lambda.

---

### Option 5: EC2 Instance (Traditional Server)

**Cost: ~$10-50/month**
**Effort: 2-3 hours**

#### Cons:
- ❌ Have to manage server
- ❌ Manual scaling
- ❌ Security updates
- ❌ More expensive

**Not recommended** for a portfolio site.

---

## Cost Comparison

| Option | Monthly Cost | Effort | Auto-Deploy | SSL |
|--------|--------------|--------|-------------|-----|
| **Current S3** | $6-7 | Done | ❌ | ✅ |
| **Amplify** | $1-5 | 10 min | ✅ | ✅ |
| **App Runner** | $5-25 | 30 min | ✅ | ✅ |
| **ECS Fargate** | $15-30 | 2 hours | ✅ | ✅ |
| **Lambda (SST)** | $1-5 | 30 min | ✅ | ✅ |
| **EC2** | $10-50 | 3 hours | ❌ | Need setup |

---

## My Strong Recommendation: AWS Amplify

### Why?
1. ✅ **CHEAPER** than your current setup ($1-5 vs $6-7)
2. ✅ **EASIER** than S3 (no manual uploads)
3. ✅ **Auto-deploys** from GitHub
4. ✅ **Full Next.js support** (SSR, API routes, everything)
5. ✅ **Free SSL** certificate
6. ✅ **Built for Next.js**
7. ✅ **Preview deployments** for testing

### What you get:
- Push to GitHub → Auto build → Auto deploy
- Every feature branch gets a preview URL
- Zero server management
- Automatic scaling
- Built-in monitoring

---

## Step-by-Step: Deploy to Amplify (RECOMMENDED)

### Step 1: Prepare Your Code

```bash
cd C:/Users/badru/OneDrive/Documents/termproject

# Remove build output (not needed for Amplify)
rm -rf out .next

# Initialize git if not already
git init
git add .
git commit -m "Next.js portfolio for Amplify"
```

### Step 2: Push to GitHub

If you don't have a GitHub repo:

```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Amplify

1. **Go to:** https://console.aws.amazon.com/amplify/
2. **Click:** "New app" → "Host web app"
3. **Select:** GitHub
4. **Authorize** AWS Amplify to access GitHub
5. **Select** your repository and branch
6. **Review** build settings (auto-detected)
7. **Click:** "Save and deploy"

**Wait 5-10 minutes...**

### Step 4: Get Your URL

You'll get: `https://main.d1234.amplifyapp.com`

Test all features:
- ✅ Chatbot works
- ✅ Forms work
- ✅ Everything is live!

### Step 5: Add Custom Domain (Optional)

1. In Amplify console → **Domain management**
2. Click **"Add domain"**
3. Enter: `msaad.co.in`
4. Amplify gives you DNS records
5. Update Route 53 with the records
6. Wait for SSL certificate (15 min)

**Done!** Your site is at `www.msaad.co.in`

---

## What About Your Current S3 Setup?

### Option A: Keep both temporarily
- Old site: `www.msaad.co.in` (S3)
- New site: `new.msaad.co.in` (Amplify)
- Test new site, then switch DNS

### Option B: Direct switch
- Deploy to Amplify
- Point `www.msaad.co.in` to Amplify
- Delete S3 content (or keep as backup)

---

## Next.js Config for Amplify

Your current `next.config.js` has `output: 'export'` which is for static sites.

**For Amplify, remove that line:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove: output: 'export',
  images: {
    unoptimized: true,
  },
  // Amplify handles everything else
}

module.exports = nextConfig
```

I can update this for you!

---

## Alternative: Vercel (Not AWS, but Worth Mentioning)

**If you want the ABSOLUTE easiest:**

1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repo
4. Click deploy

**Cost:** FREE for personal projects!

**Pros:**
- Made by Next.js creators
- Zero configuration
- Free SSL, CDN, everything
- Custom domains free

**Cons:**
- Not AWS (if that matters to you)

---

## What Do You Want to Do?

### Option A: Deploy to Amplify (My Recommendation)
- Cheaper than S3
- Easier deployment
- Full Next.js features
- I'll help you set it up!

### Option B: Keep Static S3
- What you have now
- Already working
- Chatbot works via Lambda

### Option C: Try Vercel First
- FREE
- Easiest possible
- Test before AWS commitment

Let me know which option you prefer and I'll help you deploy! 🚀
