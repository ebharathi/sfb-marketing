import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote: "Insane flavour, solid crunch every single time.",
    initials: "PR",
    name: "Placeholder review",
    tag: "Snaxzastic, Roasted Chana",
    accent: "bg-snax-500",
  },
  {
    quote: "My go-to counter snack. Customers keep coming back for these.",
    initials: "PR",
    name: "Placeholder review",
    tag: "Retail partner",
    accent: "bg-cresp-500",
  },
  {
    quote: "Cheese Balls disappear off the shelf faster than we restock.",
    initials: "PR",
    name: "Placeholder review",
    tag: "Crespology, Cheese Balls",
    accent: "bg-cresp-600",
  },
  {
    quote: "Consistent quality, on-time delivery, easy to work with.",
    initials: "PR",
    name: "Placeholder review",
    tag: "Distributor partner",
    accent: "bg-snax-600",
  },
  {
    quote: "Zero compromise on taste. Roasted peanuts are on repeat at home.",
    initials: "PR",
    name: "Placeholder review",
    tag: "Snaxzastic, Roasted Peanuts",
    accent: "bg-snax-400",
  },
  {
    quote: "Krunchit Tomato is the first thing to sell out at our store.",
    initials: "PR",
    name: "Placeholder review",
    tag: "Retail partner",
    accent: "bg-cresp-400",
  },
];

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex h-full w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-white p-6 text-ink-950 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
      <div className="flex gap-0.5 text-sm text-snax-500" aria-hidden>
        {"★★★★★"}
      </div>
      <p className="mt-3 text-sm font-medium leading-relaxed text-ink-950/85">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${t.accent}`}
        >
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-ink-950">{t.name}</p>
          <p className="text-xs text-ink-950/50">{t.tag}</p>
        </div>
      </div>
    </div>
  );
}

export function SocialProof() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="story" className="bg-ink-950 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tried. Tasted. Loved.
          </h3>
          <p className="mt-3 max-w-xl text-white/60">
            Placeholder quotes. Swap in real customer and distributor
            testimonials once gathered.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-5 pl-4 sm:pl-6 lg:pl-10">
          {loop.map((t, i) => (
            <Card key={`${t.quote}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
