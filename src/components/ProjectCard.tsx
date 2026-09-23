import type { Project } from '@/types'
import { Pill } from '@/components/ui/Pill'
import { Tag } from '@/components/ui/Tag'
import { Chip } from '@/components/ui/Chip'
import { ProjectMock } from '@/components/ui/ProjectMock'
import { BulbIcon, Icon, LockIcon } from '@/components/icons'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid grid-cols-1 overflow-hidden rounded-card border border-line bg-surface shadow-card transition duration-[250ms] hover:-translate-y-[3px] hover:border-ink/15 hover:shadow-lift md:grid-cols-[1.05fr_1fr]">
      {/* Body */}
      <div className="flex flex-col p-[clamp(24px,3vw,36px)]">
        <div className="mb-3.5 flex items-center gap-2">
          <span className="font-mono text-[11.5px] font-medium uppercase tracking-wide text-muted">
            {project.kind}
          </span>
          {project.inProgress && <Chip>In progress</Chip>}
        </div>

        <h3 className="mb-2 text-[clamp(20px,3vw,25px)] font-bold tracking-tight">{project.title}</h3>
        <p className="mb-3.5 font-medium">{project.oneLiner}</p>
        <p className="mb-[18px] max-w-[46ch] text-[15px] text-muted">{project.description}</p>

        <div className="mb-5 flex gap-2.5 rounded-med border border-line bg-ink/[0.04] p-[13px] text-[13.5px]">
          <BulbIcon className="mt-px h-[17px] w-[17px] flex-none text-muted" />
          <span>
            <b className="font-semibold">Decision — </b>
            {project.decision}
          </span>
        </div>

        <div className="mb-[22px] flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {project.isPrivate ? (
          <div className="mt-auto flex items-start gap-2.5 rounded-med border border-dashed border-line bg-elevated p-[13px] text-[13.5px] text-muted">
            <LockIcon className="mt-0.5 h-4 w-4 flex-none" />
            <span>
              Built for a private client, so the source and live store aren’t public. Happy to walk through the
              architecture and my role in an interview.
            </span>
          </div>
        ) : (
          <div className="mt-auto flex flex-wrap gap-2.5">
            {project.links?.map((l) => (
              <Pill key={l.label} href={l.href} variant={l.variant} external icon={<Icon name={l.icon} />}>
                {l.label}
              </Pill>
            ))}
          </div>
        )}
      </div>

      {/* Visual */}
      <div className="order-first grid min-h-[210px] place-items-center border-b border-line bg-elevated p-[26px] md:order-none md:min-h-[260px] md:border-b-0 md:border-l">
        <ProjectMock variant={project.mock} />
      </div>
    </article>
  )
}
