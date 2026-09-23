import type { Profile } from '@/types'

/**
 * Your identity + contact links. Edit these values freely — nothing here is
 * wired to a backend. Replace the placeholder hrefs with your real profiles,
 * and drop a `resume.pdf` into /public for the Résumé link to work.
 */
export const profile: Profile = {
  name: 'Gerardo Moreira',
  initials: 'GM',
  status: 'Available for frontend roles',
  tagline: {
    lead: 'Frontend developer building ',
    highlight: 'fast, accessible web interfaces',
    tail: ' — from the first component to a production deploy.',
  },
  email: 'gerardomoreira2000@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github', variant: 'solid', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin', variant: 'ghost', external: true },
    { label: 'Résumé', href: '/resume.pdf', icon: 'doc', variant: 'ghost', external: true },
    { label: 'Email', href: 'mailto:gerardomoreira2000@gmail.com', icon: 'mail', variant: 'ghost' },
  ],
}
