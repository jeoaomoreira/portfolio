# Portfolio — Architecture

A single-page personal portfolio for **Gerardo Moreira**, aimed at recruiters
and hiring managers. This document explains how the project is put together, why
the pieces are the way they are, and how to change things safely.

---

## 1. Stack & rationale

| Concern      | Choice                     | Why                                                                                 |
| ------------ | -------------------------- | ----------------------------------------------------------------------------------- |
| Build tool   | **Vite 6**                 | Instant dev server, fast production builds, first-class TS + React support.         |
| UI library   | **React 19**               | Component model keeps sections and primitives isolated and reusable.                |
| Language     | **TypeScript (strict)**    | Catches content/prop mistakes at build time; signals competence to recruiters.      |
| Styling      | **Tailwind CSS v4**        | Utility-first, no separate CSS files per component; design tokens live in one place. |
| Fonts        | **Inter + JetBrains Mono** | Inter carries the brand; mono is used only for small technical labels/tags.          |

**Content is data-driven.** Nothing about *you* is hard-coded inside a
component. Your name, links, projects, and skills live in `src/data/*`, typed by
`src/types`. Components render whatever the data says. To update the site, you
edit data files — not JSX.

---

## 2. Folder structure

```
Portfolio/
├── index.html               # HTML shell; loads fonts + pre-paint theme script
├── vite.config.ts           # Vite plugins (react, tailwind) + "@/" path alias
├── tsconfig.json            # Solution file → references app + node configs
├── tsconfig.app.json        # TypeScript config for the app (src/)
├── tsconfig.node.json       # TypeScript config for vite.config.ts
├── public/                  # Static assets served as-is (put resume.pdf here)
│
└── src/
    ├── main.tsx             # React entry — mounts <App/> into #root
    ├── App.tsx              # Page composition (Header → sections → Footer)
    ├── index.css            # Tailwind import, design tokens, theme, base styles
    ├── vite-env.d.ts        # Vite client type reference
    │
    ├── types/
    │   └── index.ts         # Shared types: Project, SkillGroup, Profile, etc.
    │
    ├── data/                # ← EDIT THESE to change site content
    │   ├── profile.ts       # Name, tagline, email, social links
    │   ├── projects.ts      # The project list
    │   └── skills.ts        # Grouped skills
    │
    ├── hooks/
    │   └── useTheme.ts      # Light/dark state, persistence, <html> class toggle
    │
    └── components/
        ├── icons.tsx        # Inline SVG icons + Icon({name}) lookup
        ├── ProjectCard.tsx  # One project (personal / private / in-progress)
        │
        ├── ui/              # Reusable presentational primitives
        │   ├── Pill.tsx     # Pill-shaped link (solid / ghost)
        │   ├── Tag.tsx      # Mono tech/skill tag
        │   ├── Chip.tsx     # Status chip ("In progress")
        │   └── ProjectMock.tsx  # Placeholder "screenshot" UI
        │
        ├── layout/
        │   ├── Header.tsx   # Sticky nav + brand mark + theme toggle
        │   └── Footer.tsx
        │
        └── sections/        # Full-width page sections
            ├── Hero.tsx
            ├── Work.tsx     # Maps over projects → ProjectCard
            ├── About.tsx
            └── Contact.tsx
```

**Layering (imports point downward, never up):**

```
data / types  →  used by  →  sections & cards  →  composed by  →  App
      ui primitives (Pill, Tag, Chip, ProjectMock, icons) sit beside components
```

The `@/` alias (configured in both `vite.config.ts` and `tsconfig.app.json`)
means imports read `@/components/ui/Pill` instead of `../../ui/Pill`.

---

## 3. Theming (light / dark)

The brand is **light** (light-gray canvas, near-black text); dark is a fully
supported alternate.

- **Tokens** are declared once in `src/index.css` as CSS custom properties on
  `:root` (light) and overridden under `.dark`. Example: `--canvas`, `--ink`,
  `--pill`, `--line`, `--shadow-*`.
- `@theme inline { --color-canvas: var(--canvas); ... }` maps those variables
  into Tailwind's namespaces, so utilities like `bg-canvas`, `text-ink`,
  `rounded-card`, `shadow-lift` resolve to the live variable.
- Because every utility points at a variable, **flipping the `.dark` class on
  `<html>` re-themes the whole page** — components need no `dark:` variants.
- `useTheme` owns the state, persists the choice to `localStorage`, and toggles
  the class. A tiny script in `index.html` applies the stored/system theme
  *before paint* to avoid a flash of the wrong colors.

**To retheme the site, edit the token values in `index.css` — nothing else.**

---

## 4. How to make common changes

**Change your name / tagline / links** → `src/data/profile.ts`.

**Add a project** → append an object to the array in `src/data/projects.ts`:

```ts
{
  id: 'my-project',
  kind: 'Personal project',
  title: 'Project name',
  oneLiner: 'One line on what it is.',
  description: 'Problem → what you built → result.',
  decision: 'The one engineering decision worth highlighting.',
  stack: ['React', 'TypeScript'],
  mock: 'board',              // 'board' | 'shop' | 'dash' placeholder art
  // Then ONE of:
  links: [                    // public project
    { label: 'Live demo', href: 'https://…', variant: 'solid', icon: 'arrow' },
    { label: 'View code', href: 'https://…', variant: 'ghost', icon: 'code' },
  ],
  // isPrivate: true,         // client work → shows confidentiality note, no links
  // inProgress: true,        // shows an "In progress" chip
}
```

**Update skills** → `src/data/skills.ts`.

**Add a section** → create it in `src/components/sections/`, then drop it into
`src/App.tsx`.

**Replace a placeholder screenshot** → swap `ProjectMock` in `ProjectCard.tsx`
for a real `<img>` (put the image in `public/`). Real screenshots sell far
better than the placeholders.

---

## 5. Commands

```bash
npm run dev        # start dev server at http://localhost:5173
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # serve the production build locally
npm run typecheck  # type-check only
```

---

## 6. Deployment

The output is a static site (`dist/`), so any static host works. Recommended:
**Vercel** or **Netlify** — connect the Git repo, and they auto-detect Vite
(build command `npm run build`, output dir `dist`). No server or database is
involved.

Before deploying: drop your real `resume.pdf` into `public/` and fill in the
real URLs in `profile.ts` and `projects.ts`.

---

## 7. Security notes

This portfolio has **no backend, no secrets, and no environment variables** — it
is purely static. That is deliberate and keeps it safe to open-source.

Two rules to keep it that way:

1. **Never commit secrets.** If you later add a contact form or analytics that
   needs a key, put it in `.env` (already git-ignored) and never hard-code it.
2. **Don't link private client repos.** Client projects use `isPrivate: true`
   and show a confidentiality note instead of a repo/demo link — exposing a
   client's source or live store is the actual risk, not showing the project
   exists.
