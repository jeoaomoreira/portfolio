import type { Project } from '@/types'

/**
 * Your projects. To add one, append an object to this array — the Work section
 * renders the list automatically. Three treatments are modeled:
 *   1. Personal work  → live demo + code links
 *   2. Client work    → `isPrivate: true`, shows a confidentiality note (no links)
 *   3. In progress     → `inProgress: true`, shows an "In progress" chip
 */
export const projects: Project[] = [
  {
    id: 'nimbus',
    kind: 'Personal project',
    title: 'Nimbus',
    oneLiner: 'A real-time collaborative task board.',
    description:
      'Small teams kept losing track of who owned what across scattered chats. I built a live kanban board with presence indicators and instant drag-and-drop sync — test teams cut their “what’s the status?” messages by roughly 40%.',
    decision:
      'Used optimistic UI with server-side reconciliation, so a card moves the instant you drag it even on a flaky connection — then quietly corrects if the server disagrees.',
    stack: ['React', 'TypeScript', 'Node', 'WebSocket', 'PostgreSQL'],
    mock: 'board',
    links: [
      { label: 'Live demo', href: '#', variant: 'solid', icon: 'arrow' },
      { label: 'View code', href: '#', variant: 'ghost', icon: 'code' },
    ],
  },
  {
    id: 'boutique',
    kind: 'Client work',
    title: 'Boutique storefront',
    oneLiner: 'A headless e-commerce store for a fashion retailer.',
    description:
      'Replaced a slow, template-locked store with a custom headless build and a streamlined checkout. Launch week handled 3× the retailer’s previous peak traffic with zero downtime.',
    decision:
      'Chose static generation with incremental revalidation so product pages load in under a second while inventory and prices still stay fresh within minutes.',
    stack: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind'],
    mock: 'shop',
    isPrivate: true,
  },
  {
    id: 'pulse',
    kind: 'Currently building',
    title: 'Pulse',
    oneLiner: 'A lightweight analytics dashboard for indie makers.',
    description:
      'A privacy-friendly analytics tool for people running small side projects who find the big platforms overkill. Exploring clean data-viz and a setup that takes one script tag and under a minute.',
    decision:
      'Experimenting with pre-aggregating events at write time so dashboards stay instant without a heavy warehouse behind them.',
    stack: ['React', 'Recharts', 'Supabase'],
    mock: 'dash',
    inProgress: true,
  },
]
