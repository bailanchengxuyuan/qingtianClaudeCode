import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import profile from '../data/profile';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            项目
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {profile.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
