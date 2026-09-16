import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE, STATS } from '../data/content';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="gutter scroll-mt-20 py-16 sm:py-20">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-end">
        <SectionHeading title="About" withMarker />

        <Reveal delay={0.08}>
          <p className="text-sm leading-relaxed text-muted md:pb-3">{PROFILE.about}</p>
        </Reveal>
      </div>

      {/* Stat row — three bordered cells, matching the reference proportions */}
      <Reveal delay={0.12}>
        <dl className="mt-10 grid grid-cols-1 border border-line sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-line px-6 py-10 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(2rem,5vw,3rem)] font-semibold tracking-display">
                  {stat.value}
                </span>
                <span className="meta mt-2 block">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
