import { motion } from 'framer-motion';
import { ArrowDown, SOCIAL_ICONS, EASE_OUT } from './Icons';
import profile from '../data/profile';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.1]"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
        className="mt-6 text-lg sm:text-xl text-neutral-500 font-light max-w-lg leading-relaxed"
      >
        {profile.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT }}
        className="mt-4 text-base text-neutral-400 font-light max-w-md leading-relaxed"
      >
        {profile.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
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
              className="text-neutral-400 hover:text-neutral-950 transition-colors"
              aria-label={key}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-10 text-neutral-300 hover:text-neutral-600 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
