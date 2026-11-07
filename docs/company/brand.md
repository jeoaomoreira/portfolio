# Raíz — Brand & Design System (v1)

> Visual identity for the Raíz website. Live reference page: `/estilo` (dev only, noindex).
> Encoded as tokens in [src/styles/global.css](../../src/styles/global.css).
> _Decided 2026-11-07 · See also: [foundations.md](./foundations.md), [website-architecture.md](./website-architecture.md)_

## Direction

**"Rooted locally, modern globally."** The audience is a Guanacaste small-business owner — a soda, hotel, or tour operator — not a design-savvy creative. So the look is **warm, grounded, and trustworthy**, with modern clarity and craft. We explicitly rejected the default "creative studio" aesthetic (dark, monochrome, animation-heavy): it would read as cold and intimidating to the ICP.

## Color

Earth + growth + warmth — the colors of Guanacaste soil and nature. All text/UI pairs verified **≥ 4.5:1 (WCAG AA)**.

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Canvas | `--color-canvas` | `#FAF6F0` | Warm paper page background |
| Surface | `--color-surface` | `#FFFFFF` | Cards |
| Sand | `--color-sand` | `#F1E9DD` | Subtle warm fills |
| Ink | `--color-ink` | `#1F1A17` | Headings & body text |
| Muted | `--color-muted` | `#6B6259` | Secondary text |
| **Brand** (green) | `--color-brand` | `#2F5D45` | Marca, enlaces, trust accents — roots/growth |
| Brand strong | `--color-brand-strong` | `#244A37` | Hover/pressed |
| **Accent** (terracotta) | `--color-accent` | `#B8502E` | Primary CTAs — energy, Guanacaste earth |
| Accent strong | `--color-accent-strong` | `#9C3F22` | Hover/pressed |
| Border | `--color-border` | `#E7DED2` | Lines |

**Color logic:** green = roots, trust, calm (brand identity, links). Terracotta = warmth, action (every CTA). Cream keeps it soft and inviting. WhatsApp green (`#25D366`) is reserved **only** for the floating WhatsApp button and WhatsApp links — it's a platform signal, not a brand color.

## Typography

- **Display — Fraunces** (variable serif, optical sizing). Warm, modern, a little editorial → craft + establishment + trust. Used for all headings.
- **Body/UI — Inter.** Clean, neutral, excellent legibility for Spanish accents. Used for everything else.

> We overrode the design-skill's font suggestions (too playful — Fredoka/Amatic — or too generic — Poppins/Open Sans). Fraunces + Inter is distinctive without being quirky.

## Shape & motion

- Radius token `--radius: 0.875rem` (pills for buttons).
- Buttons: `scale(0.97)` on press, strong ease-out — responsive feel (per emil-design-eng). Respect `prefers-reduced-motion`.
- Rules kept from `ui-ux-pro-max`: SVG icons only (no emoji), visible focus, 4.5:1 contrast, 44px touch targets, test at 375/768/1024/1440.

## Component conventions

- `.btn` + `.btn-accent` (terracotta CTA) / `.btn-ghost` (outline) / `.btn-sm` — defined in `global.css`.
- Headings auto-use Fraunces via a base rule; no per-heading font class needed.

## Open / next

- Logo: wordmark only for now (Fraunces "Raíz"). A real mark/icon is a later step.
- `public/og.png` social image still to design in these colors.
- Dark mode: not built yet (tokens make it straightforward later).
