import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MorphNameProps {
  names: [string, string];
  intervalMs?: number;
  className?: string;
}

/**
 * Alternates between the alias and real name with a letter-by-letter
 * crossfade/slide morph. The full text is exposed to screen readers
 * once, while the animated copy is aria-hidden.
 */
export function MorphName({
  names,
  intervalMs = 4200,
  className,
}: MorphNameProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const name = names[index];
  const letters = Array.from(name);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % names.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [names.length, intervalMs]);

  if (reduce) {
    return (
      <span className={className}>
        {names[0]}
        <span className="mx-2 opacity-50" aria-hidden="true">/</span>
        <span className="opacity-80">{names[1]}</span>
        <span className="sr-only">, also known as {names[1]}</span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span className="sr-only">{names[0]}, also known as {names[1]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={name}
          aria-hidden="true"
          className="inline-block whitespace-nowrap"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            show: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
            exit: { transition: { staggerChildren: 0.015, staggerDirection: -1 } },
          }}
        >
          {letters.map((ch, i) => (
            <motion.span
              key={`${name}-${i}`}
              className="inline-block will-change-transform"
              variants={{
                hidden: { opacity: 0, y: '0.5em', filter: 'blur(6px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.4, ease: [0.21, 0.65, 0.36, 1] },
                },
                exit: {
                  opacity: 0,
                  y: '-0.4em',
                  filter: 'blur(6px)',
                  transition: { duration: 0.22, ease: 'easeIn' },
                },
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
