# Step-by-Step Deployment Guide for www.msaad.co.in

## 🎯 Your Specific Setup
- **S3 Bucket**: www.msaad.co.in
- **Domain**: msaad.co.in (likely with Route 53)
- **Current Site**: Static HTML/CSS/JS
- **New Site**: Next.js (will be exported to static files)

---

## ⚠️ IMPORTANT: Before You Start

### 1. Backup Your Current Website

**Option A: Using AWS Console**
1. Go to [S3 Console](https://s3.console.aws.amazon.com/s3/buckets/www.msaad.co.in)
2. Select all files in the bucket
3. Click **Actions** → **Download**
4. Save to a backup folder on your computer

**Option B: Using AWS CLI** (Recommended)
```bash
# Create a backup folder
mkdir C:/Users/badru/OneDrive/Documents/termproject/backup-old-site

# Download all current files
aws s3 sync s3://www.msaad.co.in C:/Users/badru/OneDrive/Documents/termproject/backup-old-site
```

### 2. Check Your CloudFront Distribution (If Applicable)

If you're using CloudFront for HTTPS/custom domain:

```bash
# List your CloudFront distributions
aws cloudfront list-distributions --query "DistributionList.Items[*].[Id,DomainName,Origins.Items[0].DomainName]" --output table
```

Look for the distribution that points to `www.msaad.co.in.s3.amazonaws.com` or similar.

**Copy the Distribution ID** - you'll need it later!

---

## 📦 Step 1: Build Your Next.js Site

Open **Command Prompt** or **PowerShell** in your project directory:

```powershell
cd C:/Users/badru/OneDrive/Documents/termproject

# Build the static export
npm run build
```

**What to expect:**
- Build process takes 1-5 minutes
- Creates an `out` folder with all static files
- You'll see: "✓ Compiled successfully"

**If you get errors:**
- Check the error messages
- Most common: TypeScript/ESLint issues
- Contact me with the error message

**Verify the build:**
```powershell
# Check if out folder was created
dir out

# You should see folders like: _next, img, and files like index.html
```

---

## 🔄 Step 2: Deploy to S3 (Choose ONE method)

### Method A: Using the Automated Script (RECOMMENDED)

I've already updated the script with your bucket name: `www.msaad.co.in`

**For PowerShell:**
```powershell
# Make sure you're in the project directory
cd C:/Users/badru/OneDrive/Documents/termproject

# Run the deployment script
.\deploy-to-s3.ps1
```

**For Git Bash/WSL:**
```bash
# Make it executable
chmod +x deploy-to-s3.sh

# Run it
./deploy-to-s3.sh
```

**What the script does:**
1. ✅ Builds your Next.js site
2. ✅ Uploads files to S3
3. ✅ Deletes old files
4. ✅ Sets proper cache headers
5. ✅ Invalidates CloudFront (if configured)

---

### Method B: Manual Deployment (If script doesn't work)

```powershell
# Step 1: Verify AWS credentials
aws sts get-caller-identity

# Step 2: List current S3 bucket contents (optional)
aws s3 ls s3://www.msaad.co.in

# Step 3: Deploy the new site
aws s3 sync out/ s3://www.msaad.co.in --delete

# Step 4: If you have CloudFront, invalidate cache
# Replace YOUR_DISTRIBUTION_ID with actual ID from earlier
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

**Important flags explained:**
- `--delete`: Removes old files from S3 that don't exist in `out/` folder
- This ensures clean deployment without leftover files

---

## 🔍 Step 3: Verify Deployment

### A. Check S3 Bucket

```bash
# List files in your bucket
aws s3 ls s3://www.msaad.co.in --recursive
```

**You should see:**
- `index.html`
- `_next/` folder (Next.js optimized assets)
- `img/` folder (your images)
- Other HTML files (about.html, etc. if they exist)

### B. Test the Website

1. **S3 Website Endpoint:**
   - Go to S3 Console → www.msaad.co.in bucket → Properties → Static website hosting
   - Copy the **Bucket website endpoint** (something like: http://www.msaad.co.in.s3-website-us-east-1.amazonaws.com)
   - Open it in your browser
   - **Test all sections**: Home, About, Skills, Portfolio, Blog, Contact

2. **Your Custom Domain:**
   - Wait 5-10 minutes (for CloudFront cache invalidation if you have it)
   - Visit: http://www.msaad.co.in or https://www.msaad.co.in
   - Test all pages and functionality

### C. Check Key Features

- [ ] Hero section image loads
- [ ] All sections scroll properly
- [ ] Medium blog slider works
- [ ] Contact form appears correctly
- [ ] Dark/Light theme toggle works
- [ ] Chatbot button appears
- [ ] All portfolio images load
- [ ] Medium blog links work

---

## 🐛 Troubleshooting

### Issue 1: AWS CLI Not Configured

**Error:** `Unable to locate credentials`

**Solution:**
```bash
aws configure
```
Enter:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Output format: json

### Issue 2: Build Fails

**Error:** TypeScript/ESLint errors

**Solution:**
```powershell
# Check for errors
npm run dev -- -p 4000

# If dev server works, try building again
npm run build
```

### Issue 3: S3 Sync Fails

**Error:** `Access Denied`

**Solution:**
- Check IAM permissions for S3
- Verify bucket name is correct
- Run: `aws s3 ls` to see if you can list buckets

### Issue 4: Old Content Still Showing

**Reasons:**
1. Browser cache - Try **Ctrl+F5** (hard refresh)
2. CloudFront cache - Wait or invalidate manually
3. Files not deleted - Use `--delete` flag in sync command

**Solution:**
```bash
# Clear browser cache or open incognito/private window
# For CloudFront:
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### Issue 5: 404 Errors on Refresh

**Problem:** Clicking links works, but refreshing page shows 404

**Solution:**
1. Go to S3 Console → www.msaad.co.in
2. Properties → Static website hosting
3. Error document: Set to `index.html`

**For CloudFront users:**
1. Go to CloudFront Console → Your Distribution
2. Error Pages → Create Custom Error Response
3. HTTP Error Code: 404
4. Customize Error Response: Yes
5. Response Page Path: `/index.html`
6. HTTP Response Code: 200

---

## 📋 Post-Deployment Checklist

After successful deployment:

- [ ] Website loads at www.msaad.co.in
- [ ] All images display correctly
- [ ] Blog section shows all 8 Medium articles
- [ ] Contact information is correct (Toronto, email, phone)
- [ ] Hero section shows your professional photo
- [ ] Social media links work (GitHub, LinkedIn, Medium, Twitter)
- [ ] Chatbot button appears (bottom right)
- [ ] Dark/Light mode toggle works
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] All portfolio projects display
- [ ] Skills section shows all categories including FinOps

---

## 🔄 Future Updates

When you need to update your site:

1. **Make changes locally**
2. **Test**: `npm run dev -- -p 4000`
3. **Build**: `npm run build`
4. **Deploy**: `.\deploy-to-s3.ps1`

That's it! Much simpler than before.

---

## 🆘 Need Help?

If you encounter any issues:

1. **Check the error message** - it usually tells you what's wrong
2. **Verify AWS credentials**: `aws sts get-caller-identity`
3. **Check bucket permissions** in AWS Console
4. **Try manual deployment** instead of script
5. **Contact AWS Support** if it's an AWS-specific issue

---

## 📊 What Changed from Old to New Site?

| Aspect | Old Site | New Site |
|--------|----------|----------|
| **Files** | HTML, CSS, JS | Built from `out/` folder |
| **Deployment** | Upload directly | Build first, then upload |
| **Performance** | Good | Better (Next.js optimized) |
| **Maintenance** | Manual updates | Build & deploy script |
| **SEO** | Basic | Improved (Next.js features) |
| **Animations** | Basic | Framer Motion animations |
| **Dark Mode** | Manual | Automatic with system |

---

## ✅ Ready to Deploy?

**Quick Deployment Command:**

```powershell
# Navigate to project
cd C:/Users/badru/OneDrive/Documents/termproject

# Run deployment script (this does everything)
.\deploy-to-s3.ps1
```

**That's it!** The script handles building and deploying automatically.

---

## 📞 Support

If something goes wrong, check:
1. Build completed successfully
2. AWS credentials are configured
3. Bucket name is correct: `www.msaad.co.in`
4. You have write permissions to the bucket

Your site will be live at: **www.msaad.co.in** (or your CloudFront domain if configured)

🎉 **Good luck with the deployment!**
