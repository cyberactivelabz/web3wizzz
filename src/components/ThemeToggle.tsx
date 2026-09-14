import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-ink-300/70 text-ink-700 transition-colors hover:border-mint-500 hover:text-mint-600 dark:border-ink-600 dark:text-paper-100/80 dark:hover:border-mint-400 dark:hover:text-mint-400"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={reduce ? false : { opacity: 0, rotate: -60, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, rotate: 60, scale: 0.7 }}
          transition={{ duration: 0.18 }}
          className="flex"
        >
          {isDark ? (
            <MoonIcon className="h-4 w-4" />
          ) : (
            <SunIcon className="h-4 w-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
