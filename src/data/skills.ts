import type { SkillGroup } from '@/types'

/** Skills, grouped. Recruiters scan these — keep them honest and specific. */
export const skills: SkillGroup[] = [
  { label: 'Core', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { label: 'Frameworks', items: ['React', 'Next.js', 'Node', 'Express'] },
  { label: 'Tooling & data', items: ['Vite', 'PostgreSQL', 'Git', 'Figma', 'Vercel'] },
]
