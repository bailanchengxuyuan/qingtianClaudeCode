import { ArrowUp } from './Icons';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-3xl flex items-center justify-between">
        <p className="text-xs text-neutral-400">
          &copy; {YEAR} All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="返回顶部"
        >
          <ArrowUp size={14} />
          <span>返回顶部</span>
        </button>
      </div>
    </footer>
  );
}
