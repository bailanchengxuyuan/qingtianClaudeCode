import { ArrowUp } from './Icons';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-neutral-200/80">
      <div className="mx-auto max-w-3xl flex items-center justify-between">
        <p className="font-mono text-[11px] text-neutral-400 tracking-wide">
          &copy; {YEAR}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400 hover:text-neutral-700 transition-colors duration-200 tracking-wide"
          aria-label="返回顶部"
        >
          <ArrowUp size={12} />
          <span>回到顶部</span>
        </button>
      </div>
    </footer>
  );
}
