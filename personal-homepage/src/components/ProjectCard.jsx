import ScrollReveal from './ScrollReveal';
import { ExternalLink, GitHub } from './Icons';

export default function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative rounded-2xl border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
        {/* Top accent line — appears on hover */}
        <div className="absolute top-0 left-4 right-4 h-px bg-neutral-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-neutral-950 tracking-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 hover:text-neutral-700 transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitHub size={18} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 hover:text-neutral-700 transition-colors duration-200"
                aria-label="Visit site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-mono text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
