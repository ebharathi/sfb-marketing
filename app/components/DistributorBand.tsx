import { Reveal } from "./Reveal";

export function DistributorBand() {
  return (
    <section
      id="distributor"
      className="relative overflow-hidden bg-gradient-to-r from-snax-500 via-snax-400 to-cresp-500 py-16 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-10">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-ink-950/60">
            Trade partner?
          </p>
          <h3 className="mt-2 max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            Become a Distributor
          </h3>
          <p className="mt-2 max-w-lg text-ink-950/70">
            Bring Snaxzastic and Crespology to your territory. Tell us your
            business, your coverage, and we&apos;ll get back with catalog,
            pricing, and terms.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="/distributor"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-950 px-7 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Enquire to become a distributor
            <span aria-hidden>&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
