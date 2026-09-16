import { PROFILE } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="gutter mx-auto w-full max-w-[1180px] border-t border-white/15">
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-[11px] text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.alias} — {PROFILE.realName}
          </p>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
