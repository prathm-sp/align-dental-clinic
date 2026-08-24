# Deploy Align Dental Clinic to Vercel

Step-by-step guide for going live at **aligndentalclinic.com**.

---

## 1. Deploy to Vercel

### Option A — Deploy from GitHub (recommended)

1. **Push code to GitHub**
   - Create a repo at [github.com/new](https://github.com/new)
   - Push this project:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/YOUR_USERNAME/align-dental-clinic.git
     git push -u origin main
     ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (use GitHub)
   - Click **Add New → Project**
   - Select your GitHub repository
   - Framework Preset: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Wait ~2 minutes** — Vercel gives you a URL like `align-dental-clinic.vercel.app`

### Option B — Deploy from your computer (no GitHub)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. From the project folder:
   ```bash
   cd C:\website
   vercel
   ```

3. Follow prompts (login, confirm project name, deploy)

---

## 2. Set `NEXT_PUBLIC_SITE_URL`

This tells the site its own public address for SEO, sitemap, and social sharing.

### On Vercel

1. Open your project on [vercel.com/dashboard](https://vercel.com/dashboard)
2. Go to **Settings → Environment Variables**
3. Add:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://aligndentalclinic.com` |

4. Apply to **Production**, **Preview**, and **Development**
5. Go to **Deployments → Redeploy** (required for env vars to take effect)

### Locally

1. Copy the example file:
   ```bash
   copy .env.example .env.local
   ```
2. Edit `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://aligndentalclinic.com
   ```
3. Restart dev server: `npm run dev`

> **Before you own the domain?** Use the Vercel URL temporarily:
> `NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app`

---

## 3. Connect your domain (aligndentalclinic.com)

1. Vercel project → **Settings → Domains**
2. Add `aligndentalclinic.com` and `www.aligndentalclinic.com`
3. Vercel shows DNS records to add at your domain registrar (GoDaddy, Namecheap, etc.):

   | Type | Name | Value |
   |------|------|-------|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

4. Wait 5–60 minutes for DNS propagation
5. Vercel auto-provisions HTTPS (SSL certificate)

---

## 4. Patient reviews (static)

Reviews are managed in **`src/lib/site-config.ts`** under the `reviews` array. To add or edit a review, update that file and redeploy.

The homepage shows those reviews with a **Leave a review on Google** link pointing to your Google Maps listing. No API keys needed.

---

## 5. Google Search Console (optional)

**You do not need this to launch.** Your site works fine without it.

Search Console is a free Google tool that helps you:
- See if Google has indexed your pages
- Submit your sitemap manually (Google often finds it anyway)
- Monitor search queries that bring visitors (e.g. "dentist Ahilyanagar")
- Get alerts if something breaks in search results

Skip it at launch and add it later when you want SEO insights.

### If you want to set it up later

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://aligndentalclinic.com`
3. Choose **HTML tag** verification → copy the `content="..."` value
4. Add to Vercel: `GOOGLE_SITE_VERIFICATION=that_value`
5. Redeploy → Verify in Search Console
6. Submit sitemap: `sitemap.xml`

---

## 6. Checklist before going live

- [ ] Deployed to Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` set to production URL
- [ ] Custom domain connected
- [ ] Test WhatsApp and phone links on mobile
- [ ] Visit site on phone — check hero images, reviews, contact page
- [ ] (Optional) Google Search Console verified + sitemap submitted

---

## 7. Updating the site later

Every `git push` to `main` auto-deploys on Vercel (if connected to GitHub).

Manual redeploy: Vercel dashboard → **Deployments → Redeploy**

After changing images in `client_details/New images/`:
```bash
npm run process-assets
git add .
git commit -m "Update clinic photos"
git push
```

---

## Need help?

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Google Places API: [developers.google.com/maps/documentation/places/web-service](https://developers.google.com/maps/documentation/places/web-service)
- Search Console help: [support.google.com/webmasters](https://support.google.com/webmasters)
