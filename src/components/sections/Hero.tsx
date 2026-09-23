import { profile } from '@/data/profile'
import { Pill } from '@/components/ui/Pill'
import { Icon } from '@/components/icons'

export function Hero() {
  const { tagline } = profile

  return (
    <section className="py-[clamp(56px,12vw,104px)]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12.5px] font-medium uppercase tracking-wide text-muted">
          <span className="h-[7px] w-[7px] rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,0.22)]" />
          {profile.status}
        </span>

        <h1 className="mt-5 text-[clamp(42px,8.5vw,76px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-[42ch] text-[clamp(17px,2.4vw,21px)] text-muted">
          {tagline.lead}
          <b className="font-semibold text-ink">{tagline.highlight}</b>
          {tagline.tail}
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {profile.socials.map((s) => (
            <Pill key={s.label} href={s.href} variant={s.variant} external={s.external} icon={<Icon name={s.icon} />}>
              {s.label}
            </Pill>
          ))}
        </div>
      </div>
    </section>
  )
}
