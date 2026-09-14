import { lazy, Suspense } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MorphName } from '../components/MorphName';
import { ArrowDownIcon } from '../components/Icons';
import { PROFILE } from '../data/content';

// Lazy-load the live chain widget — it fetches RPC data and is not needed for LCP
const ChainPulse = lazy(() => import('../components/ChainPulse'));

const EASE: [number, number, number, number] = [0.21, 0.65, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-heading"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden"
    >
      {/* soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-mint-400/10 blur-3xl dark:bg-mint-400/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-mint-500/10 blur-3xl"
      />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-24 pt-32 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:pt-40"
      >
        <div>
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint-500/30 bg-mint-500/10 px-3 py-1 font-mono text-xs font-medium text-mint-600 dark:text-mint-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-mint-500" aria-hidden="true" />
            open to audits &amp; contract work
          </motion.p>

          <h1 id="hero-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <MorphName
              names={[PROFILE.alias, PROFILE.realName]}
              className="text-gradient block min-h-[1.2em]"
            />
          </h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mt-4 font-mono text-sm font-medium text-ink-700 dark:text-paper-100/80 sm:text-base"
          >
            {PROFILE.title}
          </motion.p>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-700/85 dark:text-paper-100/70 sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-mint-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-mint-500/25 transition-all hover:bg-mint-400 hover:shadow-mint-400/30 focus-visible:ring-offset-paper-50 dark:focus-visible:ring-offset-ink-950"
            >
              View Work
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-300/80 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-mint-500 hover:text-mint-600 dark:border-ink-600 dark:text-paper-100 dark:hover:border-mint-400 dark:hover:text-mint-400"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="hidden justify-end md:flex"
        >
          <Suspense
            fallback={
              <div className="h-[168px] w-full max-w-md animate-pulse rounded-xl border border-ink-300/60 bg-paper-100 dark:border-ink-600/60 dark:bg-ink-800" />
            }
          >
            <ChainPulse />
          </Suspense>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-700/60 transition-colors hover:text-mint-600 md:flex dark:text-paper-100/50 dark:hover:text-mint-400"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDownIcon className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
