# Align Dental Clinic Website

A modern, SEO-optimized website for **Align Dental Clinic** — Dr. Aishwarya Aditya Mestry's dental practice in Ahilyanagar, Maharashtra.

Built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- Premium, original design with navy/gold brand palette
- 5 pages + individual service detail pages
- Patient reviews, FAQ, and before/after comparison sliders
- WhatsApp & click-to-call contact flow
- Full SEO: metadata, JSON-LD schema (reviews, FAQ, services), sitemap, robots.txt, OG images
- Favicon and PWA icons
- Optimized WebP images, static generation for fast page loads
- Responsive design with subtle scroll animations
- Marathi subtitles on key sections for local audience

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Process Assets

After updating logo or clinic photos in `client_details/New images/`:

```bash
npm run process-assets
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://aligndentalclinic.com`) |

## Deploy

Recommended: [Vercel](https://vercel.com)

```bash
npm run build
npm start
```

Set environment variables in your hosting dashboard before going live.

**Full deployment guide:** see [DEPLOY.md](./DEPLOY.md) for Vercel, domain, Google Reviews, and Search Console setup.

## Project Structure

```
src/
├── app/              # Pages (including /services/[slug])
├── components/       # UI, layout, and page sections
├── lib/              # Site config, metadata, schema, utils
└── styles/           # Global CSS and Tailwind theme
```

All clinic content is centralized in `src/lib/site-config.ts` for easy updates.

## Updating Content

Edit `src/lib/site-config.ts` for:
- Contact details, hours, address
- Services, reviews, FAQs
- Gallery images and doctor bio

Then run `npm run process-assets` if images changed.
