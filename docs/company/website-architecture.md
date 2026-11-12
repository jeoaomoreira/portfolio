# Raíz — Website Architecture

> The architecture of **raiz** (the studio's own site). Its one job: turn completed work into the next client's confidence.
> _Last updated: 2026-11-07 · See also: [foundations.md](./foundations.md)_

## 1. What this site is for

This is a **lead-generation showcase**, not a brochure. One visitor matters: a Guanacaste small-business owner deciding whether to trust Raíz. Everything serves one conversion:

> **Owner sees proof → messages Raíz on WhatsApp → books a free consult.**

Design implications:
- **Spanish-first.** The buyer is a local owner, not a tourist. (English is a future toggle, not a launch requirement.)
- **WhatsApp is the primary CTA**, not a contact form — it's how Guanacaste does business. Form is the fallback.
- **Case studies are the engine**, not an afterthought page. They appear on the home page and have their own detail pages built to convert.
- **Mobile-first.** Owners will open this on a phone, likely from a Facebook/WhatsApp link.

## 2. Conversion model

| Layer | Goal | Mechanism |
|-------|------|-----------|
| **Primary** | Start a conversation | Sticky WhatsApp button (every screen) + hero CTA |
| **Secondary** | Build trust before contact | Case studies, local story, testimonials |
| **Tertiary** | Capture the not-ready | Contact form, Google Business link |

Success metric for the site = **consults booked** (feeds the "land first clients" goal in foundations §8).

## 3. Sitemap (routes)

```
/                       Inicio        — pitch + proof, the whole story in one scroll
/proyectos              Proyectos     — all case studies (the showcase hub)
/proyectos/:slug        Caso          — single case study (the core sales asset)
/servicios              Servicios     — offer ladder + Plan Raíz, pricing
/nosotros               Nosotros      — the local story (trust moat)
/contacto               Contacto      — WhatsApp, form, location, Google profile
```

Keep it to these 5 top-level pages at launch. No blog yet (add in Q3 for SEO when there's capacity to write).

**Navigation:** `Inicio · Proyectos · Servicios · Nosotros · Contacto` + a visually distinct **"Hablemos"** button (WhatsApp).

## 4. Home page (`/`) — section order

The order is the sales argument. Each section answers the owner's next unspoken question.

1. **Hero** — "¿Qué hacen?" → one-liner value prop + primary CTA + a real screenshot of recent work. No stock photos.
2. **Social proof strip** — "¿Alguien confía en ellos?" → names/logos of businesses worked with.
3. **El problema** — "¿Me entienden?" → empathy: invisible on Google, outdated page, competitors winning. (foundations §6)
4. **Casos destacados (2–3)** — "¿Saben hacerlo?" → the proof. Each links to its detail page. **This is the most important section on the site.**
5. **Qué hacemos** — "¿Qué me darían?" → the offer, simplified: sitio moderno + Google + cuidado continuo (Plan Raíz). Link to /servicios.
6. **Cómo trabajamos** — "¿Es complicado?" → 3 plain steps (claridad value). Removes friction/fear.
7. **Por qué Raíz** — "¿Por qué ellos?" → the local wedge: rooted in Guanacaste, in person, long-term. (foundations §4)
8. **CTA final + contacto** — "Listo." → WhatsApp + form.

## 5. Case study detail (`/proyectos/:slug`) — the template

The single highest-leverage template on the site. Every completed project becomes one. Structure:

1. **Header** — client name · sector · Tempate/Guanacaste location · year
2. **El reto** — where they started (the "before", honestly)
3. **Lo que hicimos** — services delivered (chips: Lanzamiento / Google / Plan Raíz)
4. **El resultado** — before→after visual, any metrics (more llamadas, reservas, visibilidad), + **testimonial** if available
5. **Visit link** — live site
6. **CTA** — "¿Querés algo así para tu negocio? Hablemos."

## 6. Content data model

The site is data-driven — case studies are content, not hand-coded pages. Define one typed collection; all showcase surfaces (home features, /proyectos grid, detail pages) read from it.

```ts
type CaseStudy = {
  slug: string;            // url: /proyectos/:slug
  client: string;
  sector: string;          // soda, hotel, tour, salón…
  location: string;        // "Tempate, Guanacaste"
  year: number;
  featured: boolean;       // show on home page
  services: ("lanzamiento" | "renovacion" | "plan-raiz")[];
  problem: string;         // "El reto"
  solution: string;        // "Lo que hicimos"
  result: string;          // "El resultado"
  metrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
  images: { before?: string; after: string; gallery?: string[] };
};
```

This maps 1:1 to the components to build, and lets the first 3 case studies (foundations §8, Q1) drop in as data.

## 7. Rendering & SEO — DECIDED: Astro ✅

> **Decision (2026-11-07): Astro.** Static HTML per route, strong SEO, good social/link previews, reuses React components as islands. Replaces the Vite SPA scaffold.

**The flag from Point 2.** Raíz sells *"get found on Google."* A studio whose own site can't rank has a credibility problem. The current stack (Vite + React SPA) ships an empty HTML shell — weak for SEO and social link previews (the Facebook/WhatsApp cards owners will share).

Three options:

| Option | Effort | SEO | Verdict |
|--------|--------|-----|---------|
| Stay SPA, add `react-helmet` + pre-render plugin (`vite-plugin-ssg` / `vite-react-ssg`) | Low | OK | Acceptable minimum |
| **Migrate to Astro** (keep React components as islands) | Medium | Excellent | **Recommended** — static HTML, fast, content-site native, easy case-study pages from data/Markdown |
| Migrate to Next.js | Medium-High | Excellent | Overkill for a 5-page content site |

**Recommendation: Astro.** It's purpose-built for a fast, SEO-strong content/showcase site, renders real HTML per route (great link previews), and reuses the React work. Decide this *before* building pages — it changes the project skeleton. The animation/design skills (`emil-design-eng`, `apple-design`) apply either way.

## 8. Build order (suggested)

1. ~~Decide §7 (rendering stack)~~ → **Astro** ✅
2. Scaffold Astro project (replace Vite SPA) + Tailwind + base layout.
3. Page skeleton + routing + nav/footer + sticky WhatsApp.
3. `CaseStudy` data model + 1 real case study end-to-end (proves the template).
4. Home page sections.
5. Remaining pages (/servicios, /nosotros, /contacto).
6. Polish pass with the design/animation skills.

> Pricing numbers live in a separate pricing doc (foundations §7). /servicios links to them once defined.
