import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { TIMELINE } from '../data/content';

export function Timeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="gutter scroll-mt-20 py-16 sm:py-20"
    >
      <SectionHeading title="Experience" />

      {/* A plain ruled table — the years carry the structure, no extra chrome */}
      <ol className="mt-10 border-t border-line">
        {TIMELINE.map((entry, i) => (
          <Reveal key={entry.period} delay={i * 0.06}>
            <li className="grid gap-3 border-b border-line py-8 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-8">
              <p className="meta pt-1">{entry.period}</p>

              <div>
                <h3 className="text-base font-semibold tracking-display">{entry.role}</h3>
                <p className="mt-1 text-xs text-muted">{entry.org}</p>
              </div>

              <p className="max-w-[56ch] text-sm leading-relaxed text-muted">{entry.summary}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
