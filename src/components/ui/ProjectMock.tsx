import type { MockVariant } from '@/types'

/**
 * A stylized browser-window placeholder standing in for a real screenshot.
 * Swap these out for actual project screenshots when you have them — a real
 * screenshot does more selling than any placeholder.
 */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex aspect-[4/3] w-full max-w-[340px] flex-col overflow-hidden rounded-med border border-line bg-surface shadow-card">
      <div className="flex h-[26px] flex-none items-center gap-1.5 border-b border-line bg-elevated px-[11px]">
        <i className="h-2 w-2 rounded-full bg-line" />
        <i className="h-2 w-2 rounded-full bg-line" />
        <i className="h-2 w-2 rounded-full bg-line" />
      </div>
      <div className="flex min-h-0 flex-1 gap-2 p-3">{children}</div>
    </div>
  )
}

const bar = 'rounded bg-ink/10'
const block = 'rounded-lg border border-line bg-elevated'
const accent = 'rounded-lg border border-focus/30 bg-focus/20'

function Board() {
  return (
    <>
      {[0, 1, 2].map((c) => (
        <div key={c} className="flex flex-1 flex-col gap-1.5 rounded-lg border border-line bg-elevated p-2">
          <span className={`${bar} h-2 w-3/5`} />
          <span className={`${c === 0 ? accent : block} h-[34px]`} />
          <span className={`${block} h-[26px]`} />
        </div>
      ))}
    </>
  )
}

function Shop() {
  return (
    <div className="grid flex-1 grid-cols-2 gap-2">
      {[0, 1, 2, 3].map((c) => (
        <div key={c} className="flex flex-col gap-1.5">
          <span className={`${c === 1 ? accent : block} flex-1`} />
          <span className={`${bar} h-2 w-4/5`} />
          <span className={`${bar} h-2 w-3/5`} />
        </div>
      ))}
    </div>
  )
}

function Dash() {
  const heights = [40, 70, 50, 90, 60, 80]
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-lg border border-line bg-elevated p-2">
      <div className="flex gap-2">
        <span className={`${block} h-[30px] flex-1`} />
        <span className={`${accent} h-[30px] flex-1`} />
      </div>
      <div className="flex flex-1 items-end gap-1.5 pt-1.5">
        {heights.map((h, i) => (
          <span key={i} className="flex-1 rounded-t bg-ink/15" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

export function ProjectMock({ variant }: { variant: MockVariant }) {
  return (
    <Frame>
      {variant === 'board' && <Board />}
      {variant === 'shop' && <Shop />}
      {variant === 'dash' && <Dash />}
    </Frame>
  )
}
