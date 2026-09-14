export const PROFILE = {
  alias: 'Web3wizzz',
  realName: 'Olubiyi Elijah',
  title: 'Web3 Developer · Smart Contract Auditor · DeFi Engineer',
  tagline:
    'I build and break on-chain systems — secure smart contracts, composable DeFi protocols, and the tooling that connects them to the web.',
  email: 'hello@web3wizzz.dev',
  location: 'Lagos, Nigeria · Remote worldwide',
  github: 'https://github.com/web3wizzz',
  twitter: 'https://x.com/web3wizzz',
  linkedin: 'https://www.linkedin.com/in/web3wizzz',
};

export interface SkillGroup {
  category: string;
  blurb: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Smart Contracts',
    blurb: 'EVM-native development, upgrade patterns, gas optimization.',
    skills: ['Solidity', 'Foundry', 'Hardhat', 'OpenZeppelin', 'EIPs / ERC standards'],
  },
  {
    category: 'Systems / Backend',
    blurb: 'High-throughput indexers, relayers, and off-chain services.',
    skills: ['Go', 'Rust', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Web3 Integration',
    blurb: 'Wallets, RPC providers, and contract interaction layers.',
    skills: ['ethers.js', 'web3.js', 'viem', 'wagmi', 'WalletConnect'],
  },
  {
    category: 'Frontend',
    blurb: 'Type-safe interfaces with premium motion and accessibility.',
    skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  audit?: string;
  /** false = placeholder card awaiting real details */
  featured?: boolean;
  placeholder?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'vault-sentinel',
    title: 'Vault Sentinel',
    description:
      'Independent security review of an ERC-4626 yield vault: reentrancy surface, share-price manipulation, and rounding-edge cases. 3 critical-severity findings resolved pre-launch.',
    tags: ['Solidity', 'ERC-4626', 'Foundry', 'Security'],
    github: 'https://github.com/web3wizzz',
    audit: 'https://github.com/web3wizzz',
    featured: true,
  },
  {
    id: 'chain-pulse',
    title: 'ChainPulse',
    description:
      'Live chain-telemetry widget built with an ethers.js-compatible provider pattern — block height, base fee, and gas oracle with automatic failover across public RPC endpoints.',
    tags: ['ethers.js', 'TypeScript', 'React', 'RPC'],
    github: 'https://github.com/web3wizzz',
    demo: '#chain-pulse',
    featured: true,
  },
  {
    id: 'placeholder-1',
    title: 'Your Project Here',
    description:
      'Placeholder — replace with a DeFi protocol, tooling, or audit engagement. Add a two-sentence description, tags, and your links.',
    tags: ['Solidity', 'DeFi'],
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    title: 'Your Project Here',
    description:
      'Placeholder — replace with a DeFi protocol, tooling, or audit engagement. Add a two-sentence description, tags, and your links.',
    tags: ['Rust', 'Go'],
    placeholder: true,
  },
  {
    id: 'placeholder-3',
    title: 'Your Project Here',
    description:
      'Placeholder — replace with a DeFi protocol, tooling, or audit engagement. Add a two-sentence description, tags, and your links.',
    tags: ['React', 'ethers.js'],
    placeholder: true,
  },
  {
    id: 'placeholder-4',
    title: 'Your Project Here',
    description:
      'Placeholder — replace with a DeFi protocol, tooling, or audit engagement. Add a two-sentence description, tags, and your links.',
    tags: ['Security', 'Audit'],
    placeholder: true,
  },
];

export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  summary: string;
  highlights: string[];
}

export const TIMELINE: TimelineEntry[] = [
  {
    period: '2024 — Present',
    role: 'Independent Smart Contract Auditor',
    org: 'Freelance · Contract',
    summary:
      'Security reviews for DeFi protocols pre- and post-launch, with a focus on lending markets, vaults, and cross-chain messaging.',
    highlights: [
      'Delivered N findings across N audits', // <- personalize
      'Foundry-invariant fuzzing harnesses',
      'Public audit reports & PoCs',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'DeFi Protocol Developer',
    org: 'Contract · Remote',
    summary:
      'Built and shipped core protocol contracts and the frontend integrations that sit on top of them.',
    highlights: [
      'ERC-4626 vault architecture',
      'ethers.js / wagmi integration layer',
      'Gas optimization: −N% on hot paths', // <- personalize
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Web3 Integration Engineer',
    org: 'Contract · Remote',
    summary:
      'Wallet connectivity, contract-read/write pipelines, and indexer-backed dashboards for early-stage teams.',
    highlights: [
      'WalletConnect v2 + SIWE auth',
      'Custom RPC failover providers',
      'Type-safe ABI pipelines',
    ],
  },
];

export const FOCUS_AREAS = [
  {
    title: 'Smart Contract Security',
    body: 'Threat modeling, manual review, invariant fuzzing, and PoC-driven reporting. I hunt reentrancy, oracle manipulation, and privilege-escalation bugs before mainnet does.',
  },
  {
    title: 'DeFi Protocol Development',
    body: 'Vaults, AMMs, lending markets, and staking systems — designed for composability, audited patterns, and clean upgrade paths.',
  },
  {
    title: 'Systems Programming',
    body: 'Indexers, relayers, and MEV-aware bots in Go and Rust. Off-chain infrastructure that stays in sync with the chain and survives reorgs.',
  },
];
