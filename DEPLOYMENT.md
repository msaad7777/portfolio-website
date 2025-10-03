# Deployment Guide for Next.js Portfolio to AWS S3

## Prerequisites

1. **AWS CLI installed and configured**
   ```bash
   aws configure
   ```
   Enter your:
   - AWS Access Key ID
   - AWS Secret Access Key
   - Default region (e.g., us-east-1)
   - Default output format (json)

2. **Node.js and npm installed** (already have this ✅)

## Deployment Steps

### Method 1: Using Deployment Script (Recommended)

#### For Windows PowerShell:

1. **Edit the script** `deploy-to-s3.ps1`:
   - Update `$S3_BUCKET` with your actual S3 bucket name
   - Optionally update `$CLOUDFRONT_DISTRIBUTION_ID` if you use CloudFront

2. **Run the script**:
   ```powershell
   .\deploy-to-s3.ps1
   ```

#### For Git Bash/WSL:

1. **Edit the script** `deploy-to-s3.sh`:
   - Update `S3_BUCKET` with your actual S3 bucket name
   - Optionally update `CLOUDFRONT_DISTRIBUTION_ID` if you use CloudFront

2. **Make it executable and run**:
   ```bash
   chmod +x deploy-to-s3.sh
   ./deploy-to-s3.sh
   ```

### Method 2: Manual Deployment

1. **Build the static export**:
   ```bash
   npm run build
   ```
   This creates an `out` folder with all static files.

2. **Upload to S3**:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache** (if using CloudFront):
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

### Method 3: AWS Console (Manual Upload)

1. Build the project: `npm run build`
2. Go to AWS S3 Console
3. Open your bucket
4. Delete old files or create a backup
5. Upload all files from the `out` folder
6. Ensure public read permissions are set

## S3 Bucket Configuration

Your S3 bucket should be configured for static website hosting:

1. **Go to S3 bucket** → Properties → Static website hosting
2. **Enable** static website hosting
3. **Index document**: `index.html`
4. **Error document**: `404.html`

## Important Notes

### Next.js vs Static HTML Differences:

✅ **What's the same:**
- Still deploys as static files to S3
- Same bucket configuration
- Same URL structure

✅ **What's different:**
- Must run `npm run build` before deploying (creates `out` folder)
- Folder structure inside `out` includes Next.js optimized files
- Better performance with automatic optimizations
- Clean URLs with trailing slashes (already configured)

### Cache Control

The deployment scripts set different cache headers:
- **HTML/JSON files**: `cache-control: public, max-age=0, must-revalidate` (always fresh)
- **Static assets** (JS, CSS, images): `cache-control: public, max-age=31536000, immutable` (1 year)

This ensures users always get the latest HTML while assets are cached for performance.

## Troubleshooting

### Build fails
- Check for TypeScript/ESLint errors
- Run `npm run dev` first to ensure everything works locally

### S3 sync fails
- Verify AWS credentials: `aws sts get-caller-identity`
- Check bucket name is correct
- Ensure you have write permissions to the bucket

### 404 errors on refresh
- Make sure S3 static website hosting is enabled
- Set error document to `index.html` in S3 settings
- If using CloudFront, configure custom error responses

## Your Current Setup

- **Bucket name**: Replace with your actual bucket name in the scripts
- **Region**: Your bucket region
- **Build output**: `out` folder (configured in `next.config.js`)
- **CloudFront**: Optional but recommended for HTTPS and better performance

## First-Time Deployment Checklist

- [ ] AWS CLI configured with credentials
- [ ] S3 bucket created and configured for static hosting
- [ ] Bucket name updated in deployment script
- [ ] Run `npm run build` successfully
- [ ] Deploy to S3
- [ ] Verify site is live
- [ ] Set up CloudFront (optional but recommended)
- [ ] Configure custom domain (optional)

## Continuous Deployment

For future updates:
1. Make your changes locally
2. Test with `npm run dev -- -p 4000`
3. Build: `npm run build`
4. Deploy: `.\deploy-to-s3.ps1` (or the bash version)
5. Verify the changes are live

That's it! Your Next.js portfolio will deploy just like your previous static site, but with better performance and modern features.
