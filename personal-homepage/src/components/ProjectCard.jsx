import ScrollReveal from './ScrollReveal';
import { ExternalLink, GitHub } from './Icons';

export default function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group rounded-2xl border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-neutral-950">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 hover:text-neutral-700 transition-colors"
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
                className="text-neutral-300 hover:text-neutral-700 transition-colors"
                aria-label="Visit site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-neutral-400 font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
