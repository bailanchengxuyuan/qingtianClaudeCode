import ScrollReveal from './ScrollReveal';
import { SOCIAL_ICONS } from './Icons';
import profile from '../data/profile';

const socialLinks = Object.entries(profile.social)
  .filter(([key]) => key !== 'email')
  .map(([key, href]) => ({
    key,
    href,
    Icon: SOCIAL_ICONS[key],
    label: key === 'twitter' ? 'X' : key[0].toUpperCase() + key.slice(1),
  }));

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
            {socialLinks.map(({ key, href, Icon, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-950 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
