import { motion, useReducedMotion } from 'framer-motion';
import avatar from '../assets/avatar.png';
import { ArrowDownRightIcon } from '../components/Icons';
import { CAPABILITIES, PROFILE } from '../data/content';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section id="top" aria-labelledby="hero-heading" className="gutter pb-16 pt-14 sm:pt-20">
      {/* Display headline — the one loud element on the page */}
      <motion.h1 id="hero-heading" {...rise(0)} className="display text-[clamp(3rem,13vw,9.5rem)]">
        <span className="block text-muted">Explore my</span>
        <span className="block">portfolio</span>
      </motion.h1>

      {/* Meta row: who, portrait, what it says */}
      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1fr)] md:items-start md:gap-6">
        <motion.div {...rise(0.1)} className="order-1">
          <p className="text-sm font-semibold">{PROFILE.realName}</p>
          <p className="meta mt-1">{PROFILE.since}</p>

          <a
            href="#about"
            aria-label="Scroll to the about section"
            className="circle-btn mt-8"
          >
            <ArrowDownRightIcon className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Portrait: high-contrast, centred, the way the reference frames it */}
        <motion.div
          {...rise(0.18)}
          className="order-3 flex justify-center md:order-2"
        >
          <img
            src={avatar}
            alt={`Portrait of ${PROFILE.realName}`}
            width={520}
            height={620}
            className="w-full max-w-[380px] object-contain contrast-125 grayscale"
          />
        </motion.div>

        {/* Right rail: statement, then capabilities stacked flush right */}
        <motion.div {...rise(0.26)} className="order-2 md:order-3 md:text-right">
          <p className="ml-auto max-w-[32ch] text-sm leading-relaxed text-muted">
            {PROFILE.intro}
          </p>

          <ul className="mt-10 space-y-3 md:mt-16">
            {CAPABILITIES.map((item) => (
              <li key={item} className="text-sm font-medium">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
