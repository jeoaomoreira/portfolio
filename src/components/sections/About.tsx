import { skills } from '@/data/skills'
import { Tag } from '@/components/ui/Tag'

export function About() {
  return (
    <section id="about" className="py-[clamp(48px,8vw,88px)]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-[clamp(24px,4vw,34px)] font-bold tracking-tight">About</h2>
          <span className="font-mono text-[12.5px] text-faint">who i am</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-[clamp(28px,5vw,60px)] md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <p className="max-w-[58ch] text-[clamp(16px,2vw,18px)]">
              I’m a frontend developer who cares about the details users feel but rarely notice — how fast a page
              paints, whether a form works with a keyboard, how a layout holds up on a small screen.
            </p>
            <p className="max-w-[58ch] text-[clamp(16px,2vw,18px)] text-muted">
              I work most often in React and TypeScript, and I’m comfortable owning a feature end to end: talking
              through the problem, building the interface, and shipping it. I’m currently looking for a frontend role on
              a team that ships thoughtfully.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface p-6 shadow-card">
            {skills.map((group) => (
              <div key={group.label} className="mt-[18px] first:mt-0">
                <div className="mb-2.5 font-mono text-[11.5px] uppercase tracking-wide text-faint">{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
