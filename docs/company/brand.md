# Nambuku — Brand & Design System (v1)

> Visual identity for the Nambuku website. Live reference page: `/estilo` (dev only, noindex).
> Encoded as tokens in [src/styles/global.css](../../src/styles/global.css).
> _Decided 2026-11-07 · See also: [foundations.md](./foundations.md), [website-architecture.md](./website-architecture.md)_

## Name

**Nambuku** — `nam-BU-ku`. Three open syllables, stress on the second.

The studio is named in the sound-world of **Chorotega (Mangue)**, the language of
Guanacaste's first people. It is a **coined** name, not a dictionary word, and
that distinction matters:

- It is **built on `nambu`**, the Chorotega element for *water*. Attested as
  `nimbu` in Brinton's 1886 vocabulary; as `nambu` in that source's
  `nambu sangui` ("cotton mantle", where Rocha's manuscript has `nimbu ranguma`);
  and as `nimbo` inside the real Guanacaste toponym **Nimboyores**, which Quirós
  glosses as *agua*.
- It obeys the language's own phonology. Brinton records that in Mangue
  "all syllables are open; that is, they all end in a vowel sound" — `na-mbu-ku`
  does.
- **It has no documented literal meaning.** Chorotega has no living speakers and
  a thinly recorded lexicon, so most of its words cannot be translated at all.

### Rule for public copy

Never write *"Nambuku means X in Chorotega."* It means nothing on record, and this
brand rests on being genuinely from here — an invented etymology is the one claim
a journalist, a cultural organisation or a Guaitil artisan could check and
disprove.

Say this instead, and only this:

> Nambuku takes its name from `nambu`, the Chorotega word for water — in the
> driest province of Costa Rica.

Water is the organising idea: scarce here, and the thing every living thing
depends on.

### Before launch

Check the name with the Chorotega community at **Matambú** (Hojancha/Nicoya, the
last Chorotega territory in Costa Rica) and with the potters at **Guaitil** — out
of respect, and because that conversation is itself a brand asset. Never name the
studio after either place: those names belong to living communities.

**Sources:** Brinton, *Notes on the Mangue* (1886) · Quirós Rodríguez,
*Toponimia indígena de la provincia de Guanacaste*.

## Direction

**"Rooted locally, modern globally."** The audience is a Guanacaste small-business owner — a soda, hotel, or tour operator — not a design-savvy creative. So the look is **warm, grounded, and trustworthy**, with modern clarity and craft. We explicitly rejected the default "creative studio" aesthetic (dark, monochrome, animation-heavy): it would read as cold and intimidating to the ICP.

## Mark

A lowercase **n** with an exit stroke, followed by a dot — it reads as "n.", the
wordmark's initial rather than a picture of anything. Drawn as a *stroked* path
(22 units wide, round caps and joins), not an outline, so the weight stays even at
every size and the curves keep one continuous thickness. The artwork measures
130×106; the viewBox is `43 47 146 122`, i.e. **8 units of padding on every side**.
That padding is load-bearing — drawn to its own tight box the round caps sit exactly
on the viewport edge and the browser shaves them, so the mark renders with flat,
chopped ends at small sizes. Keep the padding on any export.

- Source: [public/logo.svg](../../public/logo.svg) · inline: `src/components/Logo.astro` (`<Logo />`)
- `currentColor` throughout — it reverses to white on the dark hero card with no second file.
- Favicon: white on `--color-ink`, 22/100 corner radius. Checked legible at 16px.

**Lockup.** Mark left of the wordmark, `0.4em` gap, mark set to `0.82em` and
vertically centred — the mark is an x-height glyph with no ascender, so at that
size it reads as the wordmark's peer rather than as another letter. Used in the nav
and the footer. Note the sizing rules need `:global()`: the `<svg>` is Logo.astro's
root element and carries *that* component's Astro scope, not the parent's.

## Color

Earth + growth + warmth — the colors of Guanacaste soil and nature. All text/UI pairs verified **≥ 4.5:1 (WCAG AA)**.

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Canvas | `--color-canvas` | `#FAF6F0` | Warm paper page background |
| Surface | `--color-surface` | `#FFFFFF` | Cards |
| Sand | `--color-sand` | `#F1E9DD` | Subtle warm fills |
| Ink | `--color-ink` | `#1F1A17` | Headings & body text |
| Muted | `--color-muted` | `#6B6259` | Secondary text |
| **Brand** (green) | `--color-brand` | `#2F5D45` | Marca, enlaces, trust accents — growth, calm |
| Brand strong | `--color-brand-strong` | `#244A37` | Hover/pressed |
| **Accent** (terracotta) | `--color-accent` | `#B8502E` | Primary CTAs — energy, Guanacaste earth |
| Accent strong | `--color-accent-strong` | `#9C3F22` | Hover/pressed |
| Border | `--color-border` | `#E7DED2` | Lines |

**Color logic:** green = growth, trust, calm (brand identity, links). Terracotta = warmth, action (every CTA). Cream keeps it soft and inviting. WhatsApp green (`#25D366`) is reserved **only** for the floating WhatsApp button and WhatsApp links — it's a platform signal, not a brand color.

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

- The hero deliberately keeps the wordmark alone — at that size the type *is* the
  mark, and setting the glyph beside it would compete.
- **`brand-book.html` and `raiz-brand-book.pdf` are stale.** Both still show the old
  sprout mark and its roots rationale, and still describe the studio as *Estudio web*.
  Regenerate them against the mark above; the PDF was never touched by the rename
  and still reads "Raíz" throughout.
- `public/og.png` social image still to design in these colors.
- Dark mode: not built yet (tokens make it straightforward later).
