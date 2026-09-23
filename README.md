# Gerardo Moreira — Portfolio

A fast, accessible single-page developer portfolio built with **Vite + React +
TypeScript + Tailwind CSS**. Light/dark theming, recruiter-focused layout, and
data-driven content.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload.   |
| `npm run build`     | Type-check and build to `dist/`.        |
| `npm run preview`   | Preview the production build locally.   |
| `npm run typecheck` | Type-check without building.            |

## Editing content

All content lives in `src/data/`:

- `profile.ts` — name, tagline, email, social links
- `projects.ts` — your projects
- `skills.ts` — grouped skills

Drop your `resume.pdf` into `public/` so the Résumé link works.

## Learn more

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the full structure, theming
system, and how-to guide.
