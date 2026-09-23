import type { IconName } from '@/types'
import type { ReactElement, SVGProps } from 'react'

/**
 * Inline SVG icons. Brand marks (GitHub, LinkedIn) use a filled path; the rest
 * are stroked line icons that inherit `currentColor`.
 */

type IconProps = SVGProps<SVGSVGElement>

const stroke = (d: string) => (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d={d} />
  </svg>
)

export const GithubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.23.72-.5v-1.9c-2.94.64-3.56-1.26-3.56-1.26-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.35-.27-4.82-1.18-4.82-5.23 0-1.16.41-2.1 1.09-2.84-.11-.27-.47-1.34.1-2.8 0 0 .89-.28 2.9 1.08a10.1 10.1 0 0 1 5.28 0c2.01-1.36 2.9-1.08 2.9-1.08.57 1.46.21 2.53.1 2.8.68.74 1.09 1.68 1.09 2.84 0 4.06-2.48 4.95-4.84 5.22.38.33.72.98.72 1.98v2.93c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
)

export const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H9V9Z" />
  </svg>
)

export const DocIcon = stroke('M14 3v5h5M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5ZM9 13h6M9 17h6')
export const MailIcon = stroke('M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3.5 6.5l8.5 6 8.5-6')
export const ArrowIcon = stroke('M7 17 17 7M9 7h8v8')
export const CodeIcon = stroke('m9 18-6-6 6-6M15 6l6 6-6 6')
export const BulbIcon = stroke('M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3Z')
export const LockIcon = stroke('M6 10V8a6 6 0 0 1 12 0v2M5 10h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z')
export const SunIcon = stroke('M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z')
export const MoonIcon = stroke('M21 13a8 8 0 1 1-9.9-9.8 6 6 0 0 0 9.9 9.8Z')

const registry: Record<IconName, (props: IconProps) => ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  doc: DocIcon,
  mail: MailIcon,
  arrow: ArrowIcon,
  code: CodeIcon,
  bulb: BulbIcon,
  lock: LockIcon,
  sun: SunIcon,
  moon: MoonIcon,
}

/** Render an icon by name (used by data-driven links). */
export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Cmp = registry[name]
  return <Cmp {...props} />
}
