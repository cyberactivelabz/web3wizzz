import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const FOCUS_AREAS = [
  {
    title: 'Smart Contract Security',
    description:
      'Audits, invariant testing, and adversarial review of Solidity code — from DeFi primitives to NFT infrastructure.',
    icon: (
      <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4Zm-3 9 3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'DeFi Protocol Development',
    description:
      'AMMs, lending markets, staking, and yield strategies — architected for composability and economic safety.',
    icon: (
      <path d="M4 19h16M6 19V9m6 10V5m6 14v-8" strokeLinecap="round" />
    ),
  },
  {
    title: 'Systems Programming',
    description:
      'High-throughput indexers, relayers, and backend services in Go and Rust that keep dApps fast and reliable.',
    icon: (
      <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
    ),
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="about"
        title="About"
        description="The person behind the handle."
      />

      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-ink-600 dark:text-paper-300/80">
            <p>
              <strong className="font-semibold text-ink-900 dark:text-paper-50">
                Olubiyi Elijah — better known on-chain as Web3wizzz
              </strong>{' '}
              — is a Web3 developer and smart contract auditor who lives at the intersection of
              protocol engineering and security research.
            </p>
            <p>
              His work spans the full stack of decentralized systems: writing and auditing Solidity
              contracts, building resilient DeFi primitives, and shipping the Go/Rust infrastructure
              and React frontends that tie it all together. The philosophy is simple —{' '}
              <em className="not-italic text-mint-600 dark:text-mint-400">
                every line of contract code is an economic promise, so it gets treated like one.
              </em>
            </p>
            <p>
              From invariant testing and fuzzing to formal review of protocol invariants, the goal
              is always the same: ship systems that move real value and sleep soundly doing it.
            </p>

            <div className="rounded-xl border border-ink-200 bg-paper-100 p-5 font-mono text-sm dark:border-ink-700 dark:bg-ink-900">
              <p className="text-ink-500 dark:text-paper-300/50">// currently</p>
              <p className="mt-1">
                <span className="text-mint-600 dark:text-mint-400">status</span>
                <span className="text-ink-400 dark:text-paper-300/40"> = </span>
                "auditing &amp; building in DeFi"
              </p>
              <p>
                <span className="text-mint-600 dark:text-mint-400">open_to</span>
                <span className="text-ink-400 dark:text-paper-300/40"> = </span>
                ["audits", "contracts", "defi builds"]
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {FOCUS_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={0.08 * i}>
              <article className="group rounded-xl border border-ink-200 bg-paper-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint-500/50 hover:shadow-lg hover:shadow-mint-500/5 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-mint-400/40">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-mint-500/10 text-mint-600 transition-transform duration-300 group-hover:scale-110 dark:text-mint-400">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      {area.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold">{area.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-paper-300/60">
                      {area.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
