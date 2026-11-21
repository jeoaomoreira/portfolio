# Nambuku — Brand & Design System (v2)

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

**Pure White · Deep Black · Neutral Grey, with one Kinetic Orange accent.** The
page carries no color of its own, so the orange earns all the attention. Surfaces
follow a soft-UI model: a light grey canvas with white elements lifted by shadows
rather than borders. Encoded in [src/styles/global.css](../../src/styles/global.css).

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Canvas | `--color-canvas` | `#ECEEF2` | Light grey page background |
| **Pure White** | `--color-surface` | `#FFFFFF` | Cards and raised elements |
| Sand | `--color-sand` | `#E4E7EC` | Recessed / placeholder fills |
| **Neutral Grey** | `--color-grey` | `#8A8D99` | Mid slate for secondary marks |
| **Deep Black** | `--color-ink` | `#0A0A0A` | Headings and body text |
| Muted | `--color-muted` | `#6B6E76` | Secondary text |
| Brand | `--color-brand` | `#0A0A0A` | Carries the mono weight |
| Brand strong | `--color-brand-strong` | `#000000` | Hover / pressed |
| **Kinetic Orange** | `--color-accent` | `#FB5321` | Primary CTAs, kickers, accent marks |
| Accent strong | `--color-accent-strong` | `#E2430F` | Hover / pressed |
| Border | `--color-border` | `#E4E4E7` | Lines |

**What each one is for**

- **Pure White** — clarity, simplicity, minimalism. It creates the breathing space
  in the layout and is what makes the accent register.
- **Deep Black** — strength, confidence, contrast. It carries the dark surfaces
  (the hero card) and gives the work a premium, deliberate feel.
- **Neutral Grey** — balance and stability. A soft ground that raises contrast and
  pushes the accents forward.
- **Kinetic Orange** — energy, motion, action. Every primary CTA, and nothing else.

Contrast: all text/UI pairs are verified **≥ 4.5:1 (WCAG AA)**, with one deliberate
exception — large bold text on orange, held to the 3:1 large-text bar.

WhatsApp is rendered in the accent rather than WhatsApp green, so the palette
stays unified; `--color-whatsapp` exists only so that choice is revertible in one
edit.

## Typography

**Geist, for everything.** One typeface across display and body — a modern
grotesque that reads as technical and current, which is what *Estudio tecnológico*
should look like. `Geist Mono` for code and small technical labels.

- `--font-display` and `--font-sans` both resolve to **Geist**; there is no
  display/body pairing to keep in sync.
- `--font-mono` is **Geist Mono**.
- Display scale: **64 / 48 / 32 / 24 / 20 / 18 px**.
- Geist covers Spanish diacritics and punctuation (á é í ó ú ñ ¿ ¡) at every weight.

## Shape & motion

- Radius token `--radius: 0.875rem` (pills for buttons).
- **Soft-UI elevation.** White elements sit on the grey canvas lifted by paired
  shadows — a grey tint below-right and a white counter-shadow above-left
  (`--shadow-raised`, `--shadow-raised-lg`, `--shadow-soft`, `--shadow-pressed`).
  Borders are the exception, not the default.
- Shared easing: `--ease-out-strong` (`cubic-bezier(0.23, 1, 0.32, 1)`), matched
  in GSAP via CustomEase so CSS and JS motion agree.
- Buttons: `scale(0.97)` on press, strong ease-out — responsive feel (per emil-design-eng). Respect `prefers-reduced-motion`.
- Rules kept from `ui-ux-pro-max`: SVG icons only (no emoji), visible focus, 4.5:1 contrast, 44px touch targets, test at 375/768/1024/1440.

## Component conventions

- `.btn` + `.btn-accent` (Kinetic Orange CTA) / `.btn-ghost` (outline) / `.btn-sm` — defined in `global.css`.
- Headings auto-use `--font-display` (Geist) via a base rule; no per-heading font class needed.

## Open / next

- The hero deliberately keeps the wordmark alone — at that size the type *is* the
  mark, and setting the glyph beside it would compete.
- **`raiz-brand-book.pdf` is stale and cannot be regenerated from the toolchain.**
  [brand-book.html](./brand-book.html) is current (v2: new name page, new mark, new
  copy), but the PDF export predates the rename and still reads "Raíz" throughout
  with the old sprout. To refresh it: open `brand-book.html` in a browser,
  Print → Save as PDF, and replace the file under a `nambuku-` name.
- `public/og.png` social image still to design in these colors.
- Dark mode: not built yet (tokens make it straightforward later).
