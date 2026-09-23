/** A status chip with a leading dot — used for the "In progress" marker. */
export function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-[11px] py-1 text-xs font-semibold text-chip-fg">
      <span className="h-1.5 w-1.5 rounded-full bg-chip-dot" />
      {children}
    </span>
  )
}
