import { Reveal } from "./Reveal";

const CLAIMS = [
  { icon: "✓", label: "Quality checked ingredients" },
  { icon: "✦", label: "Hygienic manufacturing" },
  { icon: "◆", label: "No compromise recipes" },
  { icon: "●", label: "Freshly packed" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-ink-950/8 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6 lg:px-10">
        {CLAIMS.map((claim, i) => (
          <Reveal key={claim.label} delay={i * 0.06} y={12}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-950 text-sm font-bold text-white">
                {claim.icon}
              </span>
              <span className="text-sm font-semibold text-ink-950/80">
                {claim.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
