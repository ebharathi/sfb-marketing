import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Marquee } from "../components/Marquee";
import { TrustStrip } from "../components/TrustStrip";
import { ProductGrid } from "../components/ProductGrid";
import { SNAX_PRODUCTS, snaxTheme } from "../components/FlavourShowcase";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Snaxzastic | Snacking Anywhere",
  description:
    "Roasted right, zinged with nimbu-pudina. Nimbu Pudina Roasted Chana, Roasted Peanuts, Bhujia and the full Snaxzastic range.",
};

const TESTIMONIALS = [
  { quote: "Insane flavour, solid crunch every single time.", tag: "Roasted Chana" },
  { quote: "My go-to counter snack. Customers keep coming back for these.", tag: "Retail partner" },
  { quote: "Zero compromise on taste. Roasted peanuts are on repeat at home.", tag: "Roasted Peanuts" },
];

export default function SnaxzasticPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <div className="relative overflow-hidden bg-[linear-gradient(160deg,#F2C438_0%,#E8B02A_46%,#1E6B45_46.2%,#175338_100%)]">
          <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-4 py-16 sm:px-10 sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:py-0">
            <div>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ink/22 bg-ink/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-ink uppercase">
                Roasted, never fried
              </div>
              <div className="mb-2.5 font-display text-xl tracking-[0.32em] text-ink/60 uppercase sm:text-2xl">
                Snaxzastic
              </div>
              <h1 className="m-0 mb-6 font-display text-6xl uppercase leading-[0.84] tracking-tight text-ink sm:text-8xl lg:text-[116px]">
                Snacking
                <br />
                Anywhere
              </h1>
              <p className="mb-9 max-w-lg text-lg leading-relaxed text-ink/78 sm:text-xl">
                Roasted right, zinged with nimbu-pudina. A tangy, everyday
                snack you can reach for wherever you are.
              </p>
              <div className="mb-7 flex flex-wrap gap-3.5">
                <a
                  href="#flavours"
                  className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-base font-semibold text-background transition-colors hover:bg-green"
                >
                  Explore flavours <span aria-hidden>&rarr;</span>
                </a>
                <a
                  href="/distributor"
                  className="inline-flex items-center rounded-full border-[1.5px] border-ink/40 px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-ink/8"
                >
                  Stock our packs
                </a>
              </div>
              <div className="text-[13px] font-semibold tracking-[0.1em] text-ink/55 uppercase">
                Nimbu Pudina Roasted Chana &amp; Roasted Peanuts
              </div>
            </div>
            <div className="relative flex min-h-[420px] items-center justify-center py-10 sm:min-h-[560px]">
              <div className="absolute h-[400px] w-[400px] animate-sfb-spin rounded-full border-[1.5px] border-dashed border-background/30 sm:h-[540px] sm:w-[540px]" />
              <div
                className="absolute h-[300px] w-[300px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(242,196,56,0.4), rgba(242,196,56,0) 70%)",
                }}
              />
              <div className="animate-collide-left relative z-[2] h-[300px] w-[220px] sm:h-[400px] sm:w-[300px]">
                <Image
                  src="/products/p-nimbu-roasted-chana.png"
                  alt="Nimbu Pudina Roasted Chana pack"
                  fill
                  priority
                  sizes="300px"
                  className="object-contain drop-shadow-[0_44px_60px_rgba(0,0,0,0.42)]"
                />
              </div>
              <div className="animate-collide-right relative z-[1] -ml-16 h-[250px] w-[180px] sm:h-[340px] sm:w-[250px]">
                <Image
                  src="/products/p-nimbu-coated-peanuts.png"
                  alt="Nimbu Pudina Coated Peanuts pack"
                  fill
                  sizes="250px"
                  className="object-contain drop-shadow-[0_36px_52px_rgba(0,0,0,0.38)]"
                />
              </div>
            </div>
          </div>
        </div>

        <Marquee dotColors={["#F2C438", "#F2C438"]} />
        <TrustStrip accent="text-green" />

        <section id="flavours" className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="mb-3 text-xs font-bold tracking-[0.22em] text-green uppercase">
                The lineup
              </div>
              <h2 className="m-0 font-display text-4xl uppercase leading-[0.94] sm:text-6xl">
                Pick your crunch
              </h2>
            </div>
          </div>
          <ProductGrid
            products={SNAX_PRODUCTS}
            theme={snaxTheme}
            showAllLabel={`Show all ${SNAX_PRODUCTS.length} flavours`}
          />
        </section>

        <section className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between gap-10 rounded-[26px] bg-green p-8 text-background sm:p-13">
              <div>
                <div className="mb-4 text-xs font-bold tracking-[0.22em] text-snax-400 uppercase">
                  Why roasted
                </div>
                <h2 className="m-0 mb-4.5 font-display text-4xl uppercase leading-[0.98] sm:text-5xl">
                  Flavour from
                  <br />
                  seasoning, not oil
                </h2>
                <p className="max-w-lg text-lg leading-relaxed text-background/78">
                  Roasting keeps the bite dry and the flavour sharp. The
                  nimbu-pudina blend lands on the surface and stays there, so
                  the last piece in the pack tastes like the first.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-5 border-t border-background/22 pt-7">
                <div>
                  <div className="font-display text-2xl text-snax-400 sm:text-4xl">14</div>
                  <div className="mt-1 text-xs text-background/70 sm:text-[13px]">Roasted flavours</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-snax-400 sm:text-4xl">₹5 / ₹10</div>
                  <div className="mt-1 text-xs text-background/70 sm:text-[13px]">MRP pack tiers</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-snax-400 sm:text-4xl">0</div>
                  <div className="mt-1 text-xs text-background/70 sm:text-[13px]">Frying, ever</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-[26px] bg-snax-400 p-7 sm:p-10">
              <div className="text-xs font-bold tracking-[0.22em] text-ink/60 uppercase">
                Brand film
              </div>
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-3.5 rounded-[18px] border border-dashed border-ink/35 bg-[repeating-linear-gradient(135deg,rgba(27,23,16,0.09)_0_10px,rgba(27,23,16,0.03)_10px_20px)] sm:min-h-[240px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-xl text-snax-400">
                  &#9654;
                </div>
                <div className="text-center font-mono text-xs leading-relaxed text-ink/70">
                  autoplay hero video
                  <br />
                  chana tumbling, seasoning visible
                </div>
              </div>
              <div className="text-[15px] leading-relaxed text-ink/75">
                Drop the 12-second product reel here. Muted autoplay,
                looping, no controls.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
          <h2 className="m-0 mb-8 font-display text-4xl uppercase leading-none sm:text-5xl">
            Tried. Tasted. Loved.
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.quote} className="rounded-2xl border border-ink/10 bg-white p-7">
                <div className="mb-3.5 text-sm tracking-wide text-snax-400">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="m-0 mb-5 text-base leading-relaxed">{t.quote}</p>
                <div className="text-[13px] text-ink/50">
                  Placeholder review &middot; {t.tag}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 pt-16 pb-16 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="grid grid-cols-1 items-center gap-8 rounded-[26px] bg-ink p-8 sm:p-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3.5 text-xs font-bold tracking-[0.22em] text-snax-400 uppercase">
                Trade partner?
              </div>
              <h2 className="m-0 mb-4 font-display text-4xl uppercase leading-[0.96] text-background sm:text-6xl">
                Become a distributor
              </h2>
              <p className="mb-7 max-w-md text-lg leading-relaxed text-background/72">
                Bring Snaxzastic to your territory. Tell us your business,
                your coverage, and we&apos;ll get back with catalog, pricing,
                and terms.
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
                  src="/products/p-chana-dal.png"
                  alt="Chatori Chana Dal pack"
                  fill
                  sizes="150px"
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="relative z-[2] -ml-6 h-[170px] w-[130px] sm:-ml-8 sm:h-[230px] sm:w-[170px]">
                <Image
                  src="/products/p-nimbu-roasted-chana.png"
                  alt="Nimbu Pudina Roasted Chana pack"
                  fill
                  sizes="170px"
                  className="object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="relative -ml-6 h-[150px] w-[110px] rotate-[8deg] sm:-ml-8 sm:h-[200px] sm:w-[150px]">
                <Image
                  src="/products/p-moong-dal.png"
                  alt="Magic Moong Dal pack"
                  fill
                  sizes="150px"
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
