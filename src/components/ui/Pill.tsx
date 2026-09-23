import type { ReactNode } from 'react'
import type { PillVariant } from '@/types'

type PillProps = {
  href: string
  children: ReactNode
  variant?: PillVariant
  icon?: ReactNode
  external?: boolean
}

const base =
  'inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-sm font-semibold ' +
  'transition duration-150 will-change-transform focus-visible:outline-none'

const styles: Record<PillVariant, string> = {
  solid: 'bg-pill text-pill-fg hover:-translate-y-0.5 hover:shadow-lift',
  ghost: 'border border-line text-ink hover:-translate-y-0.5 hover:border-ink',
}

/** A pill-shaped link — the primary call-to-action element across the site. */
export function Pill({ href, children, variant = 'ghost', icon, external }: PillProps) {
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon ? <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span> : null}
      {children}
    </a>
  )
}
