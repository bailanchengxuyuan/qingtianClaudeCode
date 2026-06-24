import { ArrowUp } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-3xl flex items-center justify-between">
        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={14} strokeWidth={1.5} />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}
