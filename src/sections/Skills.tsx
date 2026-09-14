import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const SKILL_GROUPS = [
  {
    category: 'Smart Contracts',
    blurb: 'EVM protocol logic, battle-tested',
    skills: ['Solidity'],
  },
  {
    category: 'Systems / Backend',
    blurb: 'Infrastructure that never sleeps',
    skills: ['Go', 'Rust'],
  },
  {
    category: 'Web3 Integration',
    blurb: 'Wallets, reads, writes, events',
    skills: ['web3.js', 'ethers.js'],
  },
  {
    category: 'Frontend',
    blurb: 'Fast, accessible dApp interfaces',
    skills: ['TypeScript', 'React', 'Tailwind CSS'],
  },
];

const TOOLING = [
  'Foundry',
  'Hardhat',
  'OpenZeppelin',
  'Slither',
  'Echidna',
  'The Graph',
  'IPFS',
  'Docker',
  'PostgreSQL',
  'Git',
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-y border-ink-200 bg-paper-100/60 dark:border-ink-800 dark:bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="02"
          eyebrow="skills"
          title="Skills"
          description="The toolkit, grouped by where it operates in the stack."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={0.07 * i} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-ink-200 bg-paper-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint-500/50 hover:shadow-lg hover:shadow-mint-500/5 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-mint-400/40">
                <p className="font-mono text-xs uppercase tracking-wider text-mint-600 dark:text-mint-400">
                  {group.category}
                </p>
                <p className="mt-1 text-xs text-ink-500 dark:text-paper-300/50">{group.blurb}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 rounded-lg border border-ink-200/80 px-3 py-2 font-mono text-sm transition-colors group-hover:border-mint-500/30 dark:border-ink-700 dark:group-hover:border-mint-400/20"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-mint-500" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-paper-300/50">
              Tooling &amp; ecosystem
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {TOOLING.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-ink-200 bg-paper-50 px-4 py-1.5 font-mono text-xs text-ink-600 transition-colors hover:border-mint-500/50 hover:text-mint-600 dark:border-ink-700 dark:bg-ink-900 dark:text-paper-300/70 dark:hover:border-mint-400/40 dark:hover:text-mint-400"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
