const items = [
  "HEART RATE",
  "SLEEP",
  "SpO2",
  "ENERGY SCORE",
  "TITANIUM",
  "GALAXY AI",
  "24/7",
  "10 ATM",
];

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-border py-6 select-none">
      <div className={`marquee ${reverse ? "marquee-rev" : ""}`}>
        {row.map((t, i) => (
          <span
            key={i}
            className="display flex items-center whitespace-nowrap px-8 text-4xl text-fg sm:text-6xl"
          >
            {t}
            <span className="mx-8 inline-block h-2 w-2 rounded-full bg-muted align-middle" />
          </span>
        ))}
      </div>
    </div>
  );
}
