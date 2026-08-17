const STATS = [
  { value: "27", label: "Flavours across both brands" },
  { value: "₹5 / ₹10", label: "MRP pack tiers" },
  { value: "1", label: "Owned manufacturing plant" },
];

export function OurStory() {
  return (
    <section id="story" className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-between gap-10 rounded-[26px] bg-green p-8 text-background sm:p-13">
          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.22em] text-snax-400 uppercase">
              Our story
            </div>
            <h2 className="m-0 mb-4.5 font-display text-4xl uppercase leading-[0.98] sm:text-5xl">
              One house,
              <br />
              two crunches
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-background/78">
              Slayd Foods Bharat makes both brands at its own Tarapur MIDC
              plant. Snaxzastic roasts; Crespology crafts. Same sourcing
              discipline, same hygiene standards, two very different bites.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 border-t border-background/22 pt-7">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl text-snax-400 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-background/70 sm:text-[13px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-[26px] border border-ink/10 bg-white p-6 sm:p-9">
          <div className="text-xs font-bold tracking-[0.22em] text-ink/50 uppercase">
            Brand films
          </div>
          <div className="grid flex-grow grid-rows-2 gap-4">
            <div className="flex min-h-[120px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-dashed border-ink/30 bg-[repeating-linear-gradient(135deg,rgba(242,196,56,0.28)_0_10px,rgba(242,196,56,0.1)_10px_20px)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lg text-snax-400">
                &#9654;
              </div>
              <div className="text-center font-mono text-[11px] leading-relaxed text-ink/70">
                snaxzastic reel
                <br />
                chana tumbling, seasoning visible
              </div>
            </div>
            <div className="flex min-h-[120px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-dashed border-ink/30 bg-[repeating-linear-gradient(135deg,rgba(216,69,42,0.26)_0_10px,rgba(216,69,42,0.08)_10px_20px)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lg text-cresp-400">
                &#9654;
              </div>
              <div className="text-center font-mono text-[11px] leading-relaxed text-ink/70">
                crespology reel
                <br />
                cheese balls falling into bowl
              </div>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-ink/60">
            One 12-second muted autoplay loop per brand, per the asset
            checklist.
          </div>
        </div>
      </div>
    </section>
  );
}
