# PowerShell Deployment script for Next.js static site to AWS S3
# Usage: .\deploy-to-s3.ps1

# Configuration - UPDATE THESE VALUES
$S3_BUCKET = "www.msaad.co.in"  # Your S3 bucket name
$CLOUDFRONT_DISTRIBUTION_ID = ""  # Optional: Replace with your CloudFront distribution ID if you have one

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# Step 1: Build the Next.js static export
Write-Host "📦 Building Next.js static export..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Step 2: Check if out folder exists
if (-Not (Test-Path "out")) {
    Write-Host "❌ Error: 'out' folder not found!" -ForegroundColor Red
    exit 1
}

# Step 3: Sync to S3
Write-Host "☁️  Uploading to S3 bucket: $S3_BUCKET..." -ForegroundColor Yellow
aws s3 sync out/ s3://$S3_BUCKET --delete --cache-control "public, max-age=31536000, immutable" --exclude "*.html" --exclude "*.json"
aws s3 sync out/ s3://$S3_BUCKET --delete --cache-control "public, max-age=0, must-revalidate" --include "*.html" --include "*.json"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ S3 sync failed! Check your AWS credentials and bucket name." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Files uploaded to S3 successfully!" -ForegroundColor Green

# Step 4: Invalidate CloudFront cache (optional)
if ($CLOUDFRONT_DISTRIBUTION_ID -ne "") {
    Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    Write-Host "✅ CloudFront cache invalidated!" -ForegroundColor Green
}

Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host "Your site should be live at your S3 bucket URL" -ForegroundColor Cyan
