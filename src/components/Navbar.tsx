import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/content';
import {
  CloseIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from './Icons';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const reduce = useReducedMotion();

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('web3wizzz-theme', next ? 'dark' : 'light');
    setDark(next);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur">
      <nav
        className="gutter mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between border-b border-line"
        aria-label="Primary"
      >
        <a href="#top" className="text-sm font-semibold tracking-display">
          {PROFILE.alias}
          <span className="text-muted">.dev</span>
        </a>

        {/* Pill navigation, as on the reference sheet */}
        <ul className="hidden items-center gap-1 rounded-full border border-line p-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="pill pill-idle border-transparent hover:bg-shell">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink sm:flex"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Profile on X"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink sm:flex"
          >
            <XIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink sm:flex"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:eliasworkspace247@gmail.com?cc=web3wizzz@outlook.com&subject=Web3%20Project%20Inquiry&body=Hi%20there%2C%20I'd%20like%20to%20discuss%20a%20project..."
            aria-label="Email Web3wizzz"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink sm:flex"
          >
            <MailIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-panel"
          >
            {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
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
            className="overflow-hidden border-b border-line bg-surface md:hidden"
          >
            <ul className="gutter mx-auto w-full max-w-[1180px] py-4">
              {LINKS.map((link) => (
                <li key={link.href} className="border-b border-line last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-semibold tracking-display"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
