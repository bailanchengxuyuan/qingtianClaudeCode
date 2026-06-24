import ScrollReveal from './ScrollReveal';
import { GitHub, X, LinkedIn, Mail } from './Icons';
import profile from '../data/profile';

const iconMap = {
  github: { Icon: GitHub, label: 'GitHub' },
  twitter: { Icon: X, label: 'X' },
  linkedin: { Icon: LinkedIn, label: 'LinkedIn' },
  email: { Icon: Mail, label: 'Email' },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            联系我
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-base text-neutral-500">
            如果有合作机会或只是想打个招呼，欢迎联系。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href={`mailto:${profile.social.email}`}
            className="mt-8 inline-block text-2xl sm:text-3xl font-semibold text-neutral-950 hover:text-neutral-600 transition-colors tracking-tight"
          >
            {profile.social.email}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-6">
            {Object.entries(profile.social)
              .filter(([key]) => key !== 'email')
              .map(([key, href]) => {
                const { Icon, label } = iconMap[key];
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-950 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">
                      {label}
                    </span>
                  </a>
                );
              })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
