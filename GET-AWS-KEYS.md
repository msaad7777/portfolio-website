# How to Get AWS Access Keys from AWS Console

## Step-by-Step Guide

### Step 1: Navigate to IAM in AWS Console

1. **You're already in AWS Console** ✅
2. In the search bar at the top, type: **IAM**
3. Click on **IAM** (Identity and Access Management)

   OR

   Go directly to: https://console.aws.amazon.com/iam/

---

### Step 2: Go to Your User

**Option A: Using the IAM Dashboard**
1. In the left sidebar, click **Users**
2. Find and click on your username (likely your email or main account username)

**Option B: Quick Access**
1. Click on your account name in the top right corner
2. Click **Security credentials**

---

### Step 3: Create Access Keys

1. Scroll down to the **Access keys** section
2. You'll see a list of existing access keys (if any)

3. Click **Create access key** button

4. You'll see a warning/selection screen:
   - Select: **Command Line Interface (CLI)**
   - Check the box: "I understand the above recommendation..."
   - Click **Next**

5. (Optional) Add a description tag like: "Portfolio Deployment"
   - Click **Create access key**

---

### Step 4: Save Your Credentials

⚠️ **IMPORTANT**: You can only see the Secret Access Key ONCE!

You'll see:
- **Access key ID**: (starts with AKIA...)
- **Secret access key**: (long random string)

**Save these in one of these ways:**
1. Click **Download .csv file** button (RECOMMENDED)
2. Copy both values to a secure note
3. Leave this tab open until you finish configuration

---

### Step 5: Configure AWS CLI

Now open **Command Prompt** or **PowerShell** and run:

```bash
aws configure
```

**Enter the following when prompted:**

1. **AWS Access Key ID**: Paste the Access key ID you just created
2. **AWS Secret Access Key**: Paste the Secret access key
3. **Default region name**: `us-east-1` (or your bucket region)
4. **Default output format**: `json`

**Example:**
```
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: json
```

---

### Step 6: Verify Configuration

Run this command to verify:
```bash
aws sts get-caller-identity
```

You should see your Account ID and User ARN.

---

### Step 7: Test S3 Access

Try listing your S3 buckets:
```bash
aws s3 ls
```

You should see: `www.msaad.co.in` in the list!

---

## What If You Already Have Access Keys?

### If you see existing access keys:

1. **Check if they're active**:
   - Status column shows "Active"
   - If yes, you might already be using them

2. **If you lost the secret key**:
   - You can't retrieve old secret keys
   - You must create a new access key
   - Delete old unused ones (max 2 per user)

3. **Delete old key** (if needed):
   - Click the X or Delete button next to the old key
   - Confirm deletion
   - Then create a new one

---

## Security Best Practices

✅ **DO:**
- Download the .csv file and store it securely
- Use access keys only on your local machine
- Delete unused/old access keys

❌ **DON'T:**
- Share your secret access key
- Commit access keys to Git
- Email access keys
- Leave inactive keys around

---

## Troubleshooting

### "Access Denied" when creating access keys?

**Reason**: Your IAM user doesn't have permission to create keys

**Solution**:
1. Contact your AWS administrator, OR
2. Use root account credentials (not recommended for production)

### Can't find IAM in the console?

**Direct link**: https://console.aws.amazon.com/iam/

### Already have 2 access keys?

**AWS Limit**: Maximum 2 access keys per user

**Solution**:
1. Delete an old/unused one
2. Then create a new one

---

## Quick Reference

**IAM URL**: https://console.aws.amazon.com/iam/
**Your credentials path**: IAM → Users → [Your Username] → Security credentials → Access keys

**AWS CLI config location**:
- Windows: `C:\Users\badru\.aws\credentials`
- The config is stored securely here after running `aws configure`

---

## After Configuration

Once configured, come back and I'll run:
```bash
aws s3 sync out/ s3://www.msaad.co.in --delete
```

This will deploy your new Next.js portfolio! 🚀
