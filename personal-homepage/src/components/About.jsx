import ScrollReveal from './ScrollReveal';
import profile from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="section-rule" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            关于我
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-5">
          {/* Bio */}
          <div className="sm:col-span-3 space-y-5">
            {profile.about.bio.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Skills */}
          <div className="sm:col-span-2">
            <ScrollReveal delay={0.2}>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-100/80 px-3 py-1.5 text-xs font-mono text-neutral-600 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-200/60 hover:text-neutral-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
