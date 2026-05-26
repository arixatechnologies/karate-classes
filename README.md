# Mahira Karate Classes Website

Premium, responsive Next.js website for **Mahira Karate Classes** / **Mahira Shotokan Karate-Do India**.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- CSS animations for lightweight premium motion
- SEO metadata, Open Graph, Twitter cards, sitemap, robots, and JSON-LD schema

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

- `/` Home
- `/about`
- `/classes`
- `/benefits`
- `/gallery`
- `/instructor`
- `/timings`
- `/contact`

## Image Placement

The site includes SVG placeholders so the layout works immediately. Replace them with generated or real academy photos using these exact WebP paths:

| Asset | Path | Alt text |
| --- | --- | --- |
| Hero image | `/public/images/home/karate-classes-hero-action.png` | Student practicing karate self defense at Mahira Karate Classes in Vizag |
| Kids karate | `/public/images/classes/kids-karate-training-vizag.png` | Kids karate training class in Vizag |
| Girls self defense | `/public/images/classes/girls-self-defense-karate-class.png` | Girls self defense karate class in Vizag |
| Instructor | `/public/images/instructor/karate-sensei-instructor-profile.png` | Experienced karate sensei instructor at Mahira Karate Classes |
| Gallery cover | `/public/images/gallery/mahira-karate-gallery-cover.png` | Karate training gallery at Mahira Karate Classes |
| Open Graph | `/public/images/og/mahira-karate-classes-og-image.png` | Mahira Karate Classes website preview image |

The current project includes generated PNG images plus SVG fallbacks. Replace the PNGs with final photography or optimized WebP images when you have official class photos.

## Logo

The flyer was not available in this workspace, so the header uses a recreated MSKI-style institute mark built in React. Replace `components/logo.tsx` with the official logo image if you add it later, ideally at:

```text
/public/images/brand/mahira-karate-logo.webp
```

## SEO Setup

Global metadata is in `app/layout.tsx`. Per-page metadata is inside each route. Local SEO schema is in `app/page.tsx`.

Configured SEO features:

- LocalBusiness schema
- SportsActivityLocation schema
- Address and phone details
- Opening hours
- Local keywords for Vizag, BHEL, kids karate, girls self defense, and Shotokan karate
- `app/sitemap.ts`
- `app/robots.ts`
- Open Graph and Twitter card metadata

Update `site.baseUrl` in `data/site.ts` before deployment.

## Customization

Main content and contact data live in `data/site.ts`.

Important values:

- Phone numbers
- WhatsApp number
- Address
- Timings
- Instructor profile
- Navigation
- Benefits
- Class cards
- Gallery items
- SEO keywords

## Deployment

1. Add final WebP images.
2. Set `site.baseUrl` in `data/site.ts` to the production domain.
3. Run:

```bash
npm run build
```

4. Deploy to Vercel, Netlify, or any Node-compatible hosting provider.