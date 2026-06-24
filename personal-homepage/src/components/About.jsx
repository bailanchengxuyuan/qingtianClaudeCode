import ScrollReveal from './ScrollReveal';
import profile from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            关于我
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-5">
          <div className="sm:col-span-3 space-y-4">
            {profile.about.bio.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <div className="sm:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {profile.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-950"
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
