# cedriccreed — Portfolio

Personal portfolio of **Cedric Lavin**, Full Stack Developer based in Concepción, Chile.

Built with a dark brutalist editorial aesthetic, parallax effects, and ES/EN internationalization.

## Live

[https://cedriccreed-portafolio.vercel.app](https://cedriccreed-portafolio.vercel.app)

## Tech Stack

- **Next.js 16** — App Router
- **TypeScript 5** — strict mode
- **Tailwind CSS v4** — CSS-first, no config file
- **CSS custom** — brutalist design system
- **Syne + Inter** — Google Fonts
- **Vercel Analytics**
- **Deploy:** Vercel

## Features

- Dark brutalist editorial design
- Parallax effect on hero and projects
- Animated cursor blob
- Infinite tech stack marquee
- Language switcher ES / EN
- Fully mobile responsive
- Complete SEO — OpenGraph, Twitter Cards, robots, sitemap-ready
- 7 security headers configured
- Optimized images via Next.js Image
- Custom CC favicon

## Project Structure

```
app/
  globals.css             # Global styles and design tokens
  layout.tsx              # Root layout, fonts, metadata, SEO
  page.tsx                # Main page — all UI and content
lib/
  language-context.tsx    # ES/EN i18n context
public/
  foto-cedric-lavin.png   # Hero photo
  cc-logo-icon.png        # Favicon
  cedriccreed_blanco.svg  # Brand logo
  sequre-quantum.png      # QRNG project preview
  biogps-page-web.png     # BioGPS project preview
  personajes-biblicos.png # Biblicos project preview
  api-rest.png            # API REST project preview
```

## Getting Started

**Requirements:** Node.js 22+, pnpm 11+

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) after running `pnpm dev`.

## Projects

| Project       | Type       | Year | Links          |
|---------------|------------|------|----------------|
| QRNG Platform | Full Stack | 2025 | Private        |
| GPS LL301     | Frontend   | 2026 | Demo / Code    |
| BioGPS        | Frontend   | 2026 | Demo           |
| Biblicos      | Frontend   | 2025 | Demo / Code    |
| API REST      | Backend    | 2025 | Code           |

## Security Headers

Configured in `next.config.mjs`:

| Header | Value |
|--------|-------|
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation=() |
| X-DNS-Prefetch-Control | on |
| Strict-Transport-Security | max-age=63072000 |
| X-XSS-Protection | 1; mode=block |

## Author

**Cedric Lavin**

- Email: [cedriclavin@gmail.com](mailto:cedriclavin@gmail.com)
- GitHub: [github.com/cedriccreed](https://github.com/cedriccreed)
- LinkedIn: [linkedin.com/in/cedric-lavin-alarcon-b9949424a](https://www.linkedin.com/in/cedric-lavin-alarcon-b9949424a)
- Location: Concepción, Chile
