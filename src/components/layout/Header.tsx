import { profile } from '@/data/profile'
import { useTheme } from '@/hooks/useTheme'
import { MoonIcon, SunIcon } from '@/components/icons'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

/** Sticky top navigation with the brand mark, section links, and theme toggle. */
export function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[62px] w-full max-w-[1080px] items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="rounded-xl border-[1.5px] border-ink px-2.5 py-[5px] text-[15px] font-extrabold tracking-tight"
        >
          {profile.initials}
        </a>

        <nav className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-ink/5 hover:text-ink sm:inline-block"
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="grid h-[38px] w-[38px] place-items-center rounded-full border border-line bg-surface text-ink transition hover:-translate-y-px hover:border-faint"
          >
            {theme === 'light' ? <MoonIcon className="h-[18px] w-[18px]" /> : <SunIcon className="h-[18px] w-[18px]" />}
          </button>
        </nav>
      </div>
    </header>
  )
}
