import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 border-t border-border md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col gap-3 border-b border-border px-2 py-10 sm:border-r sm:last:border-r-0"
          >
            <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
            <span className="display text-5xl sm:text-6xl">{s.value}</span>
            <span className="text-sm text-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
