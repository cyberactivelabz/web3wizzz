import { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#$%&@01';

interface ScrambleOptions {
  /** Pause (ms) between morph cycles */
  pause?: number;
  /** Speed (ms) of each frame */
  speed?: number;
}

/**
 * Continuously morphs between a list of phrases using a
 * "text scramble / decode" effect. Respects reduced-motion.
 */
export function useScramble(phrases: string[], options: ScrambleOptions = {}) {
  const { pause = 3200, speed = 42 } = options;
  const [display, setDisplay] = useState(phrases[0]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || phrases.length < 2) {
      setDisplay(phrases[0]);
      return;
    }

    let index = 0;

    const morph = () => {
      index = (index + 1) % phrases.length;
      const from = phrases[(index - 1 + phrases.length) % phrases.length];
      const to = phrases[index];
      const length = Math.max(from.length, to.length);
      const queue = Array.from({ length }, (_, i) => ({
        from: from[i] ?? '',
        to: to[i] ?? '',
        start: Math.floor(Math.random() * 24),
        end: Math.floor(Math.random() * 24) + 24,
      }));

      frameRef.current = 0;
      let last = performance.now();

      const step = (now: number) => {
        if (now - last >= speed) {
          last = now;
          frameRef.current += 1;
          let done = 0;
          let out = '';
          for (const q of queue) {
            if (frameRef.current >= q.end) {
              done += 1;
              out += q.to;
            } else if (frameRef.current >= q.start) {
              out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            } else {
              out += q.from;
            }
          }
          setDisplay(out);
          if (done === queue.length) {
            timeoutRef.current = setTimeout(morph, pause);
            return;
          }
        }
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    };

    timeoutRef.current = setTimeout(morph, pause);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}
