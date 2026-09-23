import { profile } from '@/data/profile'
import { Pill } from '@/components/ui/Pill'
import { Icon } from '@/components/icons'

export function Contact() {
  const socials = profile.socials.filter((s) => s.icon === 'github' || s.icon === 'linkedin')

  return (
    <section id="contact" className="py-[clamp(48px,8vw,88px)]">
      <div className="mx-auto w-full max-w-[1080px] px-6 text-center">
        <h2 className="mb-3.5 text-[clamp(30px,6vw,52px)] font-extrabold tracking-[-0.035em] text-balance">
          Let’s build something.
        </h2>
        <p className="mx-auto mb-[30px] max-w-[44ch] text-lg text-muted">
          I’m open to frontend roles and the occasional freelance project. The fastest way to reach me is email.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          <Pill href={`mailto:${profile.email}`} variant="solid" icon={<Icon name="mail" />}>
            {profile.email}
          </Pill>
          {socials.map((s) => (
            <Pill key={s.label} href={s.href} variant="ghost" external={s.external} icon={<Icon name={s.icon} />}>
              {s.label}
            </Pill>
          ))}
        </div>
      </div>
    </section>
  )
}
