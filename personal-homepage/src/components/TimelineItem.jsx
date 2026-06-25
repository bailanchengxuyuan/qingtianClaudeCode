import ScrollReveal from './ScrollReveal';

export default function TimelineItem({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative pl-9 pb-12 last:pb-0">
        {/* Vertical line — hidden on last item */}
        <div className="absolute left-[8px] top-2.5 bottom-0 w-px bg-neutral-200 group-last:hidden" />

        {/* Timeline dot */}
        <div className="absolute left-0 top-2.5 w-[17px] h-[17px] rounded-full border-2 border-neutral-300 bg-neutral-50 transition-colors duration-200 group-hover:border-neutral-500" />

        {/* Period — mono label */}
        <span className="font-mono text-xs text-neutral-400 tracking-wide">
          {item.period}
        </span>

        {/* Role */}
        <h3 className="mt-1.5 text-base font-semibold text-neutral-950 tracking-tight">
          {item.role}
        </h3>

        {/* Company */}
        <p className="mt-0.5 text-sm text-neutral-500">{item.company}</p>

        {/* Description */}
        <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </ScrollReveal>
  );
}
