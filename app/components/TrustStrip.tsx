const CLAIMS = [
  {
    icon: "✓",
    label: "Quality checked ingredients",
    body: "Every batch is screened before it enters the line.",
  },
  {
    icon: "✦",
    label: "Hygienic manufacturing",
    body: "Made at our Tarapur MIDC plant under audited conditions.",
  },
  {
    icon: "◆",
    label: "No compromise recipes",
    body: "Recipes locked at source, no substitutions to hit a price.",
  },
  {
    icon: "●",
    label: "Freshly packed",
    body: "Sealed on line and dispatched fast, so shelf crunch holds.",
  },
];

export function TrustStrip({ accent = "text-green" as string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-12 sm:px-10 sm:pt-20">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {CLAIMS.map((claim) => (
          <div
            key={claim.label}
            className="rounded-xl border border-ink/10 bg-white p-4 sm:rounded-2xl sm:p-6"
          >
            <div className={`mb-2 font-display text-xl sm:mb-3 sm:text-3xl ${accent}`}>
              {claim.icon}
            </div>
            <div className="mb-1 text-xs font-semibold sm:mb-1.5 sm:text-base">
              {claim.label}
            </div>
            <div className="hidden text-sm leading-relaxed text-ink/55 sm:block">
              {claim.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
