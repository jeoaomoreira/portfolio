/** A tech-stack / skill tag. Monospace to read as "technical". */
export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-line bg-surface px-[11px] py-[5px] font-mono text-xs font-medium text-muted">
      {children}
    </span>
  )
}
