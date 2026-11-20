# Nambuku

Modern technology studio for small businesses in Guanacaste, Costa Rica. This repo
holds **both the company website and the company documentation**.

## Structure

```
docs/
├── company/      Business foundations, brand, pricing, services
│   └── foundations.md   ✓ vision, positioning, offer ladder, 12-mo goals
└── website/      Website architecture & content plans (in progress)

src/               The Nambuku website (Astro + TypeScript + Tailwind v4)
```

## Stack

Astro 5 · TypeScript 5 · Tailwind CSS v4 · GSAP · Lenis · oxlint.

## Scripts

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + production build → dist/
npm run preview    # preview the build
npm run lint       # oxlint
```

## Status

Foundations set (`docs/company/foundations.md`). Website is a fresh scaffold with
a placeholder page — full design & architecture next.
