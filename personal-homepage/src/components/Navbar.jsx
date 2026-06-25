import { useState, useEffect, useRef } from 'react';
import profile from '../data/profile';

const navLinks = [
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#experience', label: '经历' },
  { href: '#contact', label: '联系' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrolledRef = useRef(false);

  // Scroll state
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const initials = profile.name
    .split('')
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join('');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/80 backdrop-blur-lg border-b border-neutral-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-neutral-950 hover:text-neutral-600 transition-colors duration-200"
        >
          {initials}
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-neutral-950'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {link.label}
                {/* Active indicator — thin underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-neutral-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
