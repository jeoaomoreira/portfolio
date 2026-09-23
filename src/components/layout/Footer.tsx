import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line py-[30px]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-wrap items-center justify-between gap-3 px-6 text-[13px] text-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React · TypeScript · Inter</span>
      </div>
    </footer>
  )
}
