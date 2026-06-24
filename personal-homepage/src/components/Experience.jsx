import ScrollReveal from './ScrollReveal';
import TimelineItem from './TimelineItem';
import profile from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            经历
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          {profile.experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
