import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { MinusIcon, PlusIcon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { SERVICES } from '../data/content';

/**
 * Numbered service rows that open in place. The numbering is meaningful here:
 * the list runs from the work most teams start with to the retainer that
 * follows it.
 */
export function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="gutter scroll-mt-20 py-16 sm:py-20"
    >
      <SectionHeading
        title="What I do"
        align="center"
        description="Audits, protocol work and the off-chain services around them — scoped so you know what lands and when."
      />

      <div className="mx-auto mt-10 max-w-3xl">
        {SERVICES.map((service, i) => {
          const open = openIndex === i;
          const panelId = `service-panel-${i}`;

          return (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className={`flex w-full items-center gap-4 rounded-full py-4 pl-2 pr-2 text-left transition-colors duration-200 ${
                      open ? 'bg-ink text-white' : 'hover:bg-panel'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                        open ? 'border-white/40 text-white' : 'border-line text-muted'
                      }`}
                    >
                      {i + 1}
                    </span>

                    <span className="flex-1 text-sm font-semibold sm:text-base">
                      {service.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                        open ? 'border-white/40 text-white' : 'border-line text-ink'
                      }`}
                    >
                      {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={reduce ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-6 pl-14 pt-4 sm:pl-16">
                        <p className="max-w-[60ch] text-sm leading-relaxed text-muted">
                          {service.summary}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {service.points.map((point) => (
                            <li
                              key={point}
                              className="rounded-full border border-line px-3 py-1 text-[11px] font-medium"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
