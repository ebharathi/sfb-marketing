import Image from "next/image";

export function DistributorBand() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-16 pb-16 sm:px-10 sm:pt-24 sm:pb-24">
      <div
        id="distributor"
        className="grid grid-cols-1 items-center gap-8 rounded-[26px] bg-ink p-8 sm:p-14 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[0.22em] text-snax-400 uppercase">
            Trade partner?
          </div>
          <h2 className="m-0 mb-4 font-display text-4xl uppercase leading-[0.96] text-background sm:text-6xl">
            Become a distributor
          </h2>
          <p className="mb-7 max-w-md text-lg leading-relaxed text-background/72">
            Bring Snaxzastic and Crespology to your territory. Tell us your
            business, your coverage, and we&apos;ll get back with catalog,
            pricing, and terms.
          </p>
          <a
            href="/distributor"
            className="inline-flex items-center gap-2.5 rounded-full bg-snax-400 px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-background"
          >
            Enquire to become a distributor <span aria-hidden>&rarr;</span>
          </a>
        </div>
        <div className="flex items-end justify-center">
          <div className="relative h-[150px] w-[110px] -rotate-[8deg] sm:h-[200px] sm:w-[150px]">
            <Image
              src="/products/p-nimbu-roasted-chana.png"
              alt="Nimbu Pudina Roasted Chana pack"
              fill
              sizes="150px"
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="relative z-[2] -ml-6 h-[170px] w-[130px] sm:-ml-8 sm:h-[230px] sm:w-[170px]">
            <Image
              src="/products/p-cheeseballs-herbs.png"
              alt="Cheese Balls pack"
              fill
              sizes="170px"
              className="object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="relative -ml-6 h-[150px] w-[110px] rotate-[8deg] sm:-ml-8 sm:h-[200px] sm:w-[150px]">
            <Image
              src="/products/p-krunchit-tomato.png"
              alt="Krunchit Spanish Tomato pack"
              fill
              sizes="150px"
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
