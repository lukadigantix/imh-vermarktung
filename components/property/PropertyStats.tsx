type StatItem = {
  label: string;
  value: string | number;
};

type PropertyStatsProps = {
  stats: StatItem[];
};

export function PropertyStats({ stats }: PropertyStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-px bg-brand-border sm:grid-cols-3 lg:grid-cols-5">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-1 bg-white px-4 py-5 text-center"
        >
          <span className="font-display text-2xl font-light text-brand-dark">
            {value}
          </span>
          <span className="font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-brand-muted">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
