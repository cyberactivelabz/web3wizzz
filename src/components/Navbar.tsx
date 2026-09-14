import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close the menu on Escape for keyboard users
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-300/50 bg-paper-50/85 backdrop-blur-md dark:border-ink-600/50 dark:bg-ink-950/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-ink-900 dark:text-paper-50"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-mint-500/15 text-mint-600 transition-transform duration-300 group-hover:rotate-12 dark:text-mint-400"
          >
            ⟨/⟩
          </span>
          {PROFILE.alias}
          <span className="hidden text-xs font-normal text-ink-700/60 dark:text-paper-100/50 sm:inline">
            .dev
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700/80 transition-colors hover:bg-ink-200/60 hover:text-ink-900 dark:text-paper-100/70 dark:hover:bg-ink-800 dark:hover:text-paper-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg border border-ink-300/70 md:hidden dark:border-ink-600"
          >
            <span
              aria-hidden="true"
              className={`h-[2px] w-4 rounded bg-ink-900 transition-transform duration-200 dark:bg-paper-50 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              aria-hidden="true"
              className={`h-[2px] w-4 rounded bg-ink-900 transition-opacity duration-200 dark:bg-paper-50 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              aria-hidden="true"
              className={`h-[2px] w-4 rounded bg-ink-900 transition-transform duration-200 dark:bg-paper-50 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-ink-300/50 bg-paper-50/95 backdrop-blur-md md:hidden dark:border-ink-600/50 dark:bg-ink-950/95"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-200/60 dark:text-paper-100 dark:hover:bg-ink-800"
                  >
                    <span className="mr-3 font-mono text-xs text-mint-600 dark:text-mint-400">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
