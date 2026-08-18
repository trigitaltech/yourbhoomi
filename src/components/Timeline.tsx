export type TimelineStep = { title: string; body: string; list?: string[] };

// Numbered process timeline: vertical rail on mobile, 3-column grid from md up.
export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-3">
      <span aria-hidden className="absolute top-2 bottom-2 left-4 w-px bg-rule md:hidden" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 md:block">
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stamp text-sm font-semibold text-white">
            {i + 1}
          </span>
          <div className="md:mt-3">
            <h3 className="text-base font-semibold text-ink">{s.title}</h3>
            <p className="mt-1 text-sm text-ink-2">{s.body}</p>
            {s.list && (
              <ul className="mt-2 space-y-1 text-sm text-ink">
                {s.list.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-seal">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
