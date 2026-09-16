export const PROFILE = {
  alias: 'Web3wizzz',
  realName: 'Olubiyi Elijah',
  role: 'Smart contract auditor & DeFi engineer',
  since: 'Building on-chain since 2021',
  intro:
    'I build and break on-chain systems — secure smart contracts, composable DeFi protocols, and the off-chain tooling that keeps them in sync.',
  about:
    'Olubiyi Elijah, known on-chain as Web3wizzz, is a Web3 developer and smart contract auditor working across protocol engineering and security research. Every line of contract code is an economic promise, so it gets treated like one.',
  email: 'hello@web3wizzz.dev',
  location: 'Lagos, Nigeria — remote worldwide',
  github: 'https://github.com/web3wizzz',
  twitter: 'https://x.com/web3wizzz',
  linkedin: 'https://www.linkedin.com/in/web3wizzz',
};

/** Short capability list shown down the right edge of the hero. */
export const CAPABILITIES = [
  'Contract audits',
  'DeFi protocols',
  'ERC standards',
  'Indexers & relayers',
  'Wallet integration',
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '$5M+', label: 'TVL reviewed' },
  { value: '40+', label: 'Findings reported' },
  { value: '4+', label: 'Years shipping' },
];

export interface Project {
  id: string;
  title: string;
  kicker: string;
  description: string;
  category: 'Audits' | 'Protocols' | 'Tooling';
  tags: string[];
  github?: string;
  demo?: string;
  report?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'vault-sentinel',
    title: 'Vault Sentinel',
    kicker: 'ERC-4626 security review',
    description:
      'Independent review of a yield vault: reentrancy surface, share-price manipulation and rounding edges. Three critical findings resolved before launch.',
    category: 'Audits',
    tags: ['Solidity', 'ERC-4626', 'Foundry'],
    github: 'https://github.com/web3wizzz',
    report: 'https://github.com/web3wizzz',
  },
  {
    id: 'lending-market',
    title: 'Aperture Markets',
    kicker: 'Isolated lending pools',
    description:
      'Isolated-pair lending market with oracle-guarded liquidations, permissioned risk tiers and an upgrade path that keeps storage layout stable.',
    category: 'Protocols',
    tags: ['Solidity', 'DeFi', 'Oracles'],
    github: 'https://github.com/web3wizzz',
  },
  {
    id: 'chain-pulse',
    title: 'ChainPulse',
    kicker: 'Live chain telemetry',
    description:
      'Block height, base fee and gas oracle in one widget, with automatic failover across public RPC endpoints when a provider degrades.',
    category: 'Tooling',
    tags: ['TypeScript', 'ethers.js', 'React'],
    github: 'https://github.com/web3wizzz',
    demo: 'https://github.com/web3wizzz',
  },
  {
    id: 'reorg-indexer',
    title: 'Reorg-safe Indexer',
    kicker: 'Event pipeline in Go',
    description:
      'Log indexer that survives reorgs by keeping a rollback window, replaying canonical blocks and reconciling state without dropping events.',
    category: 'Tooling',
    tags: ['Go', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/web3wizzz',
  },
  {
    id: 'staking-audit',
    title: 'Helix Staking',
    kicker: 'Pre-launch audit',
    description:
      'Reward-accounting review of a staking system: precision loss on claim, unchecked delegate transfer and a griefing vector on emergency exit.',
    category: 'Audits',
    tags: ['Solidity', 'Staking', 'Echidna'],
    report: 'https://github.com/web3wizzz',
  },
  {
    id: 'amm-router',
    title: 'Split Router',
    kicker: 'Multi-hop AMM routing',
    description:
      'Gas-aware router that splits an order across pools, prices each hop off-chain and settles in a single call with slippage bounds per leg.',
    category: 'Protocols',
    tags: ['Solidity', 'AMM', 'Gas'],
    github: 'https://github.com/web3wizzz',
  },
];

export const PROJECT_FILTERS = ['All work', 'Audits', 'Protocols', 'Tooling'] as const;

export interface Service {
  title: string;
  summary: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    title: 'Smart contract audits',
    summary:
      'Manual review backed by invariant fuzzing, with a written report you can hand to your community.',
    points: ['Threat model & scoping', 'Manual review + Foundry invariants', 'PoC for every finding', 'Fix review included'],
  },
  {
    title: 'DeFi protocol development',
    summary:
      'Vaults, lending markets, AMMs and staking, designed for composability and a clean upgrade path.',
    points: ['Architecture & storage layout', 'Reference implementation', 'Test suite and fork tests', 'Deployment scripts'],
  },
  {
    title: 'Indexers & relayers',
    summary:
      'Off-chain services in Go and Rust that stay in sync with the chain and survive reorgs.',
    points: ['Reorg-safe event pipelines', 'RPC failover', 'Queueing and retries', 'Observability built in'],
  },
  {
    title: 'Wallet & dApp integration',
    summary:
      'The layer between your contracts and the browser: connection, signing, and honest error states.',
    points: ['WalletConnect v2 + SIWE', 'Type-safe ABI pipeline', 'Transaction status UX', 'Gas estimation'],
  },
  {
    title: 'Security retainers',
    summary:
      'Ongoing review for teams that ship weekly, so changes get looked at before they reach mainnet.',
    points: ['PR-level contract review', 'Upgrade diffing', 'Incident response on call', 'Monthly report'],
  },
];

export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  summary: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    period: '2024 — now',
    role: 'Independent smart contract auditor',
    org: 'Freelance · contract',
    summary:
      'Security reviews for DeFi protocols before and after launch, focused on lending markets, vaults and cross-chain messaging.',
  },
  {
    period: '2023 — 2024',
    role: 'DeFi protocol developer',
    org: 'Contract · remote',
    summary:
      'Shipped core protocol contracts and the integration layer on top of them, from vault architecture to the wagmi hooks the app runs on.',
  },
  {
    period: '2021 — 2023',
    role: 'Web3 integration engineer',
    org: 'Contract · remote',
    summary:
      'Wallet connectivity, contract read/write pipelines and indexer-backed dashboards for early-stage teams.',
  },
];
