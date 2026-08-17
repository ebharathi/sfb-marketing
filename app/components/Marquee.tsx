const ITEMS = [
  "Quality checked ingredients",
  "Hygienic manufacturing",
  "No compromise recipes",
  "Freshly packed",
];

export function Marquee({ dotColors = ["#F2C438", "#D8452A"] as [string, string] }) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10 font-display text-lg tracking-[0.24em] whitespace-nowrap text-background uppercase">
      {ITEMS.map((item, i) => (
        <span key={item} className="flex items-center gap-10">
          <span>{item}</span>
          <span style={{ color: dotColors[i % 2] }}>&#10022;</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-ink py-4">
      <div className="animate-sfb-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
