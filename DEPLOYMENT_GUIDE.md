# Secure HTTPS Deployment Guide

This guide will help you deploy your website with proper HTTPS encryption to eliminate the browser security warning.

## Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up** at [netlify.com](https://www.netlify.com/)
2. **Connect your Git repository** (GitHub, GitLab, or Bitbucket)
3. Netlify will auto-detect the `netlify.toml` configuration
4. **Add environment variables** in Site Settings > Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. **Deploy!** - HTTPS is automatic with free SSL certificate

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

### Option 2: Vercel

1. **Sign up** at [vercel.com](https://vercel.com/)
2. **Import your Git repository**
3. Vercel will auto-detect the `vercel.json` configuration
4. **Add environment variables** in Project Settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. **Deploy!** - HTTPS is automatic with free SSL certificate

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel login
vercel
```

---

### Option 3: AWS Amplify

1. **Sign in** to [AWS Console](https://console.aws.amazon.com/amplify/)
2. **Create new app** > Connect repository
3. **Build settings** will be auto-detected from your package.json
4. **Add environment variables:**
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. **Deploy!** - Free SSL certificate provided

---

### Option 4: GitHub Pages (with Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then enable GitHub Pages in your repository settings and add secrets.

---

## Security Features Included

All configuration files include:

✅ **Automatic HTTPS redirect** - All HTTP traffic redirected to HTTPS
✅ **HSTS (HTTP Strict Transport Security)** - Forces browsers to always use HTTPS
✅ **X-Frame-Options** - Prevents clickjacking attacks
✅ **X-Content-Type-Options** - Prevents MIME type sniffing
✅ **Content Security Policy** - Protects against XSS attacks
✅ **Proper caching** - Static assets cached for optimal performance
✅ **SPA routing** - All routes properly handled by React Router

---

## Custom Domain Setup

### For Netlify:
1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

### For Vercel:
1. Go to **Project Settings** > **Domains**
2. Add your custom domain
3. Configure DNS records as shown
4. SSL certificate is automatically provisioned

---

## Troubleshooting

### Still seeing the red exclamation point?

1. **Clear your browser cache** - Old HTTP version may be cached
2. **Check you're visiting the HTTPS URL** - Make sure URL starts with `https://`
3. **Wait for DNS propagation** - Can take up to 48 hours for custom domains
4. **Verify SSL certificate** - Click the warning icon to see certificate status

### Build failing?

1. Make sure all dependencies are in `package.json`
2. Verify environment variables are set correctly
3. Check build logs for specific errors
4. Run `npm run build` locally to test

---

## Next Steps After Deployment

1. ✅ Test your site on mobile devices
2. ✅ Verify all forms work correctly
3. ✅ Check that admin login works
4. ✅ Test newsletter signup
5. ✅ Verify contact form emails are being sent
6. ✅ Run Lighthouse audit for performance/security scores

---

## Need Help?

- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **Let's Encrypt (Free SSL):** https://letsencrypt.org/
