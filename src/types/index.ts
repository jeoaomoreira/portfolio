/** Shared domain types for the portfolio content. */

export type IconName =
  | 'github'
  | 'linkedin'
  | 'doc'
  | 'mail'
  | 'arrow'
  | 'code'
  | 'bulb'
  | 'lock'
  | 'sun'
  | 'moon'

export type PillVariant = 'solid' | 'ghost'

export type SocialLink = {
  label: string
  href: string
  icon: IconName
  variant: PillVariant
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean
}

export type ProjectLink = {
  label: string
  href: string
  variant: PillVariant
  icon: IconName
}

/** Which placeholder mock UI to render as the project's "screenshot". */
export type MockVariant = 'board' | 'shop' | 'dash'

export type Project = {
  id: string
  /** e.g. "Personal project", "Client work", "Currently building". */
  kind: string
  title: string
  oneLiner: string
  description: string
  /** The single engineering decision worth highlighting to a recruiter. */
  decision: string
  stack: string[]
  mock: MockVariant
  inProgress?: boolean
  /** Private/client work: show a confidentiality note instead of links. */
  isPrivate?: boolean
  links?: ProjectLink[]
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type Profile = {
  name: string
  initials: string
  status: string
  tagline: {
    lead: string
    highlight: string
    tail: string
  }
  email: string
  socials: SocialLink[]
}
