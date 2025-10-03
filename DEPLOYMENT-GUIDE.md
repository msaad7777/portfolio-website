# AWS S3 Deployment Guide

Complete guide to deploy your Next.js portfolio to AWS S3.

## Prerequisites

- AWS Account
- AWS CLI configured (`aws configure`)
- Node.js and npm installed
- Your S3 bucket created

## Step-by-Step Deployment

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Project

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### 3. Create S3 Bucket (if not exists)

```bash
# Create bucket
aws s3 mb s3://your-portfolio-bucket-name --region us-east-1

# Enable static website hosting
aws s3 website s3://your-portfolio-bucket-name \
  --index-document index.html \
  --error-document index.html
```

### 4. Configure Bucket Policy

Create a file `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy \
  --bucket your-portfolio-bucket-name \
  --policy file://bucket-policy.json
```

### 5. Upload to S3

```bash
# Upload all files
aws s3 sync out/ s3://your-portfolio-bucket-name --delete

# Set proper content types
aws s3 sync out/ s3://your-portfolio-bucket-name \
  --delete \
  --cache-control "max-age=31536000" \
  --exclude "*.html" \
  --exclude "*.json"

# HTML files with shorter cache
aws s3 sync out/ s3://your-portfolio-bucket-name \
  --cache-control "max-age=3600" \
  --include "*.html" \
  --include "*.json"
```

### 6. Test Your Website

Your website will be available at:
```
http://your-portfolio-bucket-name.s3-website-us-east-1.amazonaws.com
```

## CloudFront Setup (Recommended)

### Why CloudFront?
- HTTPS support
- Global CDN for faster loading
- Custom domain support
- Better caching

### Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
  --origin-domain-name your-portfolio-bucket-name.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

Or use AWS Console:
1. Go to CloudFront
2. Create Distribution
3. Origin Domain: Your S3 website endpoint
4. Default Root Object: `index.html`
5. Error Pages: Set 404 to redirect to `/index.html` (for client-side routing)

### Invalidate Cache After Updates

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## Custom Domain Setup

### 1. Get SSL Certificate (AWS Certificate Manager)

```bash
# Request certificate in us-east-1 (required for CloudFront)
aws acm request-certificate \
  --domain-name yourdomain.com \
  --subject-alternative-names www.yourdomain.com \
  --validation-method DNS \
  --region us-east-1
```

### 2. Update CloudFront Distribution

Add your custom domain (CNAME) and attach the SSL certificate.

### 3. Update DNS (Route 53 or your provider)

Create A record (Alias) pointing to your CloudFront distribution.

## Automated Deployment Script

Create `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Upload to S3
echo "☁️  Uploading to S3..."
aws s3 sync out/ s3://your-portfolio-bucket-name --delete

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Visit: https://yourdomain.com"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run deployment:
```bash
./deploy.sh
```

## GitHub Actions CI/CD (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: |
          aws s3 sync out/ s3://your-portfolio-bucket-name --delete

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Troubleshooting

### Issue: 403 Forbidden
**Solution**: Check bucket policy allows public read access

### Issue: 404 on page refresh
**Solution**: In CloudFront, set error page 404 to redirect to `/index.html` with 200 status

### Issue: Changes not visible
**Solution**: Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### Issue: Images not loading
**Solution**: Ensure `next.config.js` has:
```javascript
images: {
  unoptimized: true,
}
```

## Cost Optimization

1. **S3 Lifecycle Policies**: Delete old versions
2. **CloudFront**: Use price class (e.g., US/EU only)
3. **Compression**: Enable gzip/brotli in CloudFront
4. **Caching**: Set appropriate cache headers

## Monitoring

### CloudWatch Metrics
- S3 request metrics
- CloudFront metrics (requests, data transfer)

### Setup Alarms
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name high-s3-requests \
  --alarm-description "Alert if S3 requests exceed threshold" \
  --metric-name NumberOfObjects \
  --namespace AWS/S3 \
  --statistic Average \
  --period 300 \
  --threshold 1000 \
  --comparison-operator GreaterThanThreshold
```

## Security Best Practices

1. **Bucket Access**: Use CloudFront, not direct S3 public access
2. **HTTPS Only**: Redirect HTTP to HTTPS in CloudFront
3. **Security Headers**: Add via CloudFront Functions:
   - Content-Security-Policy
   - X-Frame-Options
   - X-Content-Type-Options

## Support

For issues:
- Check AWS CloudWatch logs
- Review S3 bucket permissions
- Verify CloudFront distribution settings

## Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [AWS S3 Static Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
