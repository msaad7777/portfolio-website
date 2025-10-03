#!/bin/bash

# Deployment script for Next.js static site to AWS S3
# Usage: ./deploy-to-s3.sh

# Configuration - UPDATE THESE VALUES
S3_BUCKET="www.msaad.co.in"  # Your S3 bucket name
CLOUDFRONT_DISTRIBUTION_ID=""  # Optional: Replace with your CloudFront distribution ID if you have one

echo "🚀 Starting deployment process..."

# Step 1: Build the Next.js static export
echo "📦 Building Next.js static export..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Step 2: Check if out folder exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' folder not found!"
    exit 1
fi

# Step 3: Sync to S3
echo "☁️  Uploading to S3 bucket: $S3_BUCKET..."
aws s3 sync out/ s3://$S3_BUCKET --delete --cache-control "public, max-age=31536000, immutable" --exclude "*.html" --exclude "*.json"
aws s3 sync out/ s3://$S3_BUCKET --delete --cache-control "public, max-age=0, must-revalidate" --include "*.html" --include "*.json"

if [ $? -ne 0 ]; then
    echo "❌ S3 sync failed! Check your AWS credentials and bucket name."
    exit 1
fi

echo "✅ Files uploaded to S3 successfully!"

# Step 4: Invalidate CloudFront cache (optional)
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    echo "✅ CloudFront cache invalidated!"
fi

echo "🎉 Deployment completed successfully!"
echo "Your site should be live at your S3 bucket URL"
