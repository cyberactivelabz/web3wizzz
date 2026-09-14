import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { PROFILE } from '../data/content';

/**
 * ChainPulse — live Ethereum mainnet telemetry.
 * Uses the same JSON-RPC provider pattern as ethers.js (`new JsonRpcProvider(url)`)
 * without shipping the full library, keeping the bundle lean.
 * Lazy-loaded via React.lazy from the Hero section.
 */

const RPC_ENDPOINTS = [
  'https://eth.llamarpc.com',
  'https://ethereum-rpc.publicnode.com',
  'https://cloudflare-eth.com',
];

interface ChainState {
  blockNumber: number | null;
  gasGwei: string | null;
  latencyMs: number | null;
  endpoint: string | null;
  error: boolean;
}

const INITIAL: ChainState = {
  blockNumber: null,
  gasGwei: null,
  latencyMs: null,
  endpoint: null,
  error: false,
};

async function rpcCall<T>(url: string, method: string, params: unknown[] = []): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  if (!res.ok) throw new Error(`RPC ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error(json.error.message);
  return json.result as T;
}

export default function ChainPulse() {
  const [state, setState] = useState<ChainState>(INITIAL);
  const [refreshing, setRefreshing] = useState(false);
  const mounted = useRef(true);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    for (const endpoint of RPC_ENDPOINTS) {
      const start = performance.now();
      try {
        const [blockHex, gasHex] = await Promise.all([
          rpcCall<string>(endpoint, 'eth_blockNumber'),
          rpcCall<string>(endpoint, 'eth_gasPrice'),
        ]);
        if (!mounted.current) return;
        setState({
          blockNumber: parseInt(blockHex, 16),
          gasGwei: (parseInt(gasHex, 16) / 1e9).toFixed(2),
          latencyMs: Math.round(performance.now() - start),
          endpoint: new URL(endpoint).hostname,
          error: false,
        });
        setRefreshing(false);
        return;
      } catch {
        // failover to the next endpoint
      }
    }
    if (mounted.current) {
      setState((s) => ({ ...s, error: true }));
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    refresh();
    const id = window.setInterval(refresh, 20_000);
    return () => {
      mounted.current = false;
      window.clearInterval(id);
    };
  }, [refresh]);

  const stat = (
    label: string,
    value: string,
    mono = true,
  ): ReactNode => (
    <div className="min-w-0">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700/60 dark:text-paper-100/50">
        {label}
      </dt>
      <dd
        className={`mt-1 truncate text-sm font-semibold text-ink-900 dark:text-paper-50 ${
          mono ? 'font-mono tabular-nums' : ''
        }`}
      >
        {value}
      </dd>
    </div>
  );

  return (
    <div
      id="chain-pulse"
      className="w-full max-w-md rounded-xl border border-ink-300/60 bg-paper-100/80 p-4 shadow-lg shadow-ink-900/5 backdrop-blur dark:border-ink-600/60 dark:bg-ink-800/70 dark:shadow-black/30"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              state.error
                ? 'bg-red-500'
                : 'bg-mint-500 animate-pulse-slow'
            }`}
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-900 dark:text-paper-50">
            ChainPulse · mainnet
          </span>
        </div>
        <button
          type="button"
          onClick={refresh}
          disabled={refreshing}
          className="rounded-md border border-ink-300/70 px-2.5 py-1 font-mono text-[11px] text-ink-700 transition-colors hover:border-mint-500 hover:text-mint-600 disabled:opacity-50 dark:border-ink-600 dark:text-paper-100/70 dark:hover:text-mint-400"
        >
          {refreshing ? 'syncing…' : 'refresh'}
        </button>
      </div>

      <p className="mb-3 font-mono text-[11px] leading-relaxed text-ink-700/70 dark:text-paper-100/50">
        {`// ethers.js pattern: new JsonRpcProvider("${state.endpoint ?? '…'}")`}
      </p>

      {state.error ? (
        <p role="status" className="font-mono text-xs text-red-500">
          all RPC endpoints unreachable — try again shortly
        </p>
      ) : (
        <dl className="grid grid-cols-3 gap-3">
          {stat('block', state.blockNumber?.toLocaleString() ?? '—')}
          {stat('gas', state.gasGwei ? `${state.gasGwei} gwei` : '—')}
          {stat('latency', state.latencyMs != null ? `${state.latencyMs} ms` : '—')}
        </dl>
      )}

      <p className="mt-3 font-mono text-[10px] text-ink-700/50 dark:text-paper-100/40">
        live demo by {PROFILE.alias} · auto-syncs every 20s
      </p>
    </div>
  );
}
