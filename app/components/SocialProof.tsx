const TESTIMONIALS = [
  { quote: "Insane flavour, solid crunch every single time.", tag: "Roasted Chana" },
  { quote: "Cheese Balls disappear off the shelf faster than we restock.", tag: "Crespology" },
  { quote: "Consistent quality, on-time delivery, easy to work with.", tag: "Distributor partner" },
  { quote: "Krunchit Tomato is the first thing to sell out at our store.", tag: "Retail partner" },
];

export function SocialProof() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
      <h2 className="m-0 mb-7 font-display text-4xl uppercase leading-none sm:mb-8 sm:text-5xl">
        Tried. Tasted. Loved.
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.quote}
            className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-7"
          >
            <div className="mb-3 text-sm tracking-wide text-snax-400">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="m-0 mb-4.5 text-base leading-relaxed">{t.quote}</p>
            <div className="text-[13px] text-ink/50">
              Placeholder review &middot; {t.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
