import { motion } from 'framer-motion';
import { ArrowDown, SOCIAL_ICONS, EASE_OUT } from './Icons';
import profile from '../data/profile';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* Name — dramatic serif display */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-neutral-950 leading-none"
      >
        {profile.name}
      </motion.h1>

      {/* Decorative rule — the signature element */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
        className="mt-8 h-px w-16 bg-neutral-300 origin-center"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT }}
        className="mt-8 text-lg sm:text-xl text-neutral-500 font-light max-w-lg leading-relaxed"
      >
        {profile.tagline}
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT }}
        className="mt-4 text-base text-neutral-400 font-light max-w-md leading-relaxed"
      >
        {profile.subtitle}
      </motion.p>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 flex items-center gap-5"
      >
        {Object.entries(profile.social).map(([key, href]) => {
          const Icon = SOCIAL_ICONS[key];
          if (!Icon) return null;
          return (
            <a
              key={key}
              href={key === 'email' ? `mailto:${href}` : href}
              target={key !== 'email' ? '_blank' : undefined}
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-950 transition-colors duration-200"
              aria-label={key}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.7 },
          y: { duration: 2, delay: 1, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 text-neutral-300 hover:text-neutral-500 transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
