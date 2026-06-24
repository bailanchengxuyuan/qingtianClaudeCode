import { motion } from 'framer-motion';
import { GitHub, X, LinkedIn, Mail, ArrowDown } from './Icons';
import profile from '../data/profile';

const iconMap = {
  github: GitHub,
  twitter: X,
  linkedin: LinkedIn,
  email: Mail,
};

const socialKeys = Object.keys(profile.social);

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
          {profile.name}
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-6 text-lg sm:text-xl text-neutral-500 font-light max-w-lg leading-relaxed"
      >
        {profile.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
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
        {socialKeys.map((key) => {
          const Icon = iconMap[key];
          const href =
            key === 'email'
              ? `mailto:${profile.social.email}`
              : profile.social[key];
          return (
            <a
              key={key}
              href={href}
              target={key !== 'email' ? '_blank' : undefined}
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-950 transition-colors"
              aria-label={key}
            >
              <Icon size={20} strokeWidth={1.5} />
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
        <ArrowDown size={24} strokeWidth={1} />
      </motion.a>
    </section>
  );
}
