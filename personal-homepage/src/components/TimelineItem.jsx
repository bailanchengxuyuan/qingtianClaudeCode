import ScrollReveal from './ScrollReveal';

export default function TimelineItem({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative pl-8 pb-10 last:pb-0">
        {/* Line */}
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-neutral-200 last:hidden" />
        {/* Dot */}
        <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-neutral-300 bg-neutral-50" />

        <div>
          <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
            {item.period}
          </span>
          <h3 className="mt-1 text-base font-semibold text-neutral-950">
            {item.role}
          </h3>
          <p className="mt-0.5 text-sm text-neutral-500">{item.company}</p>
          <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
