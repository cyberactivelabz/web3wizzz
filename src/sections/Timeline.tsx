import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { TIMELINE } from '../data/content';

export function Timeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y border-ink-200 bg-paper-100/60 dark:border-ink-800 dark:bg-ink-900/40"
    >
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="04"
          eyebrow="experience"
          title="Experience"
          description="Contract and freelance history across protocol engineering and security."
        />

        <ol className="relative ml-3 space-y-12 border-l border-ink-200 dark:border-ink-700">
          {TIMELINE.map((entry, i) => (
            <li key={entry.period} className="relative pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-mint-500 bg-paper-50 dark:bg-ink-950"
              />
              <Reveal delay={i * 0.08}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-mint-600 dark:text-mint-400">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink-900 dark:text-paper-50">
                  {entry.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-ink-500 dark:text-paper-300/60">
                  {entry.org}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-paper-300/70">
                  {entry.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-md border border-ink-200 bg-paper-50 px-2.5 py-1 font-mono text-[11px] text-ink-500 dark:border-ink-700 dark:bg-ink-800 dark:text-paper-300/70"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
