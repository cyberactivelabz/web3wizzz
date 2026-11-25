import resumeUrl from '../assets/Olubiyi_Elijah_Resume.pdf';

export const PROFILE = {
  alias: 'Web3wizzz',
  realName: 'Olubiyi Elijah',
  role: 'Web3 Developer, DeFi Engineer & Smart Contract Auditor',
  since: 'Building on-chain since 2024',
  intro:
    'I build and break on-chain systems — secure smart contracts, composable DeFi protocols, and the off-chain tooling that keeps them in sync.',
  about:
    'Olubiyi Elijah, known on-chain as Web3wizzz, is a Web3 developer and smart contract auditor working across protocol engineering and security research. Every line of contract code is an economic promise, so it gets treated like one.',
  email: 'eliasworkspace@gmail.com',
  location: 'Lagos, Nigeria 🇳🇬 |Remote worldwide',
  github: 'https://github.com/web3wizzz',
  resume: resumeUrl,
  twitter: 'https://x.com/ox_spade',
  linkedin: 'https://www.linkedin.com/in/web3wizzz',
};

export const DISCOVERY_CALL_HREF =
  'mailto:eliasworkspace@gmail.com?subject=Discovery%20call%20request&body=Hi%20Olubiyi%2C%0A%0AI%27d%20like%20to%20book%20a%20discovery%20call%20about%20a%20Web3%20project.%0A%0AProject%20or%20protocol%3A%20%0AWhat%20I%27d%20like%20to%20discuss%3A%20%0APreferred%20timing%3A%20';

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
  { value: '$2K+', label: 'TVL reviewed' },
  { value: '5+', label: 'Findings reported' },
  { value: '2+', label: 'Years shipping' },
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
    id: 'go-evm-lite',
    title: 'Go EVM Lite',
    kicker: 'Ethereum Virtual Machine in Go',
    description:
      'A lightweight EVM built from scratch to explore bytecode execution, 256-bit arithmetic, memory, storage, gas and contract state.',
    category: 'Tooling',
    tags: ['Go', 'EVM', 'Ethereum'],
    github: 'https://github.com/web3wizzz/go-evm-lite',
  },
  {
    id: 'dash-escrow-payment',
    title: 'DA$H',
    kicker: 'USDC payments on Arc',
    description:
      'A non-custodial USDC payment app with wallet handles, payment requests, QR payments, escrow orders and scheduled payouts.',
    category: 'Protocols',
    tags: ['Solidity', 'React', 'Arc'],
    github: 'https://github.com/web3wizzz/Dash_Escrow_Payment',
  },
  {
    id: 'tank',
    title: 'Tank',
    kicker: 'Verifiable file storage for Web3',
    description:
      'Decentralized file storage with Reed-Solomon redundancy, client-side encryption and on-chain proofs for verifiable retrieval.',
    category: 'Tooling',
    tags: ['Go', 'Solidity', 'TypeScript'],
    github: 'https://github.com/web3wizzz/tank',
  },
  {
    id: 'prova',
    title: 'PROVA',
    kicker: 'Verifiable digital documents',
    description:
      'A Web3-powered platform for signing, verifying and proving the authenticity of digital documents.',
    category: 'Protocols',
    tags: ['Web3', 'Document verification'],
    github: 'https://github.com/web3wizzz/prova',
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
    period: '2024 — Now',
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
