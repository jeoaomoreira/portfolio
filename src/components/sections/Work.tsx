import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export function Work() {
  return (
    <section id="work" className="py-[clamp(48px,8vw,88px)]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-[clamp(24px,4vw,34px)] font-bold tracking-tight">Selected work</h2>
          <span className="font-mono text-[12.5px] text-faint">
            {String(projects.length).padStart(2, '0')} / projects
          </span>
        </div>

        <div className="flex flex-col gap-[22px]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
