import { PROFILE } from '../data/content';

export function Footer() {
  return (
    <footer className="border-t border-ink-200 dark:border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 font-mono text-xs text-ink-400 sm:flex-row md:px-8 dark:text-paper-300/40">
        <p>
          © {new Date().getFullYear()} {PROFILE.alias} · {PROFILE.realName}
        </p>
        <p aria-hidden="true" className="text-mint-600/70 dark:text-mint-400/60">
          {'//'} react · typescript · tailwind · framer-motion
        </p>
        <a href="#top" className="transition-colors hover:text-mint-600 dark:hover:text-mint-400">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
