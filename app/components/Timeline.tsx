export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-8">
      {items.map((item, idx) => (
        <li key={idx} className="ml-4">
          <div className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-brand" />
          <h3 className="font-semibold tracking-tight">
            {item.title} — <span className="text-brand">{item.company}</span>
          </h3>
          <p className="muted text-sm">{item.period}</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            {item.details.map((d, i) => (
              <li key={i} className="muted">
                {d}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
