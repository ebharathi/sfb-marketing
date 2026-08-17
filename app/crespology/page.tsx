import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Marquee } from "../components/Marquee";
import { TrustStrip } from "../components/TrustStrip";
import { ProductGrid } from "../components/ProductGrid";
import { CRESP_PRODUCTS, crespTheme } from "../components/FlavourShowcase";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Crespology | Crispy Vibes Only",
  description:
    "Crafted crunch, every single bite. Cheese Balls, Krunchit Spanish Tomato, Makhana and the full Crespology range.",
};

const TESTIMONIALS = [
  { quote: "Cheese Balls disappear off the shelf faster than we restock.", tag: "Cheese Balls" },
  { quote: "Krunchit Tomato is the first thing to sell out at our store.", tag: "Retail partner" },
  { quote: "Consistent quality, on-time delivery, easy to work with.", tag: "Distributor partner" },
];

export default function CrespologyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <div className="relative overflow-hidden bg-[linear-gradient(160deg,#D8452A_0%,#A8281B_48%,#2A0F0B_48.2%,#1B0906_100%)]">
          <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-4 py-16 sm:px-10 sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:py-0">
            <div>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-background/35 bg-background/14 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-background uppercase">
                The expert in crunch
              </div>
              <div className="mb-2.5 font-display text-xl tracking-[0.32em] text-background/62 uppercase sm:text-2xl">
                Crespology
              </div>
              <h1 className="m-0 mb-6 font-display text-6xl uppercase leading-[0.84] tracking-tight text-background sm:text-8xl lg:text-[112px]">
                Crispy
                <br />
                Vibes Only
              </h1>
              <p className="mb-9 max-w-lg text-lg leading-relaxed text-background/80 sm:text-xl">
                Crafted crunch, every single bite. Indulgent cheese, bold
                tomato, and light makhana, built for people who take crunch
                seriously.
              </p>
              <div className="mb-7 flex flex-wrap gap-3.5">
                <a
                  href="#flavours"
                  className="inline-flex items-center gap-2.5 rounded-full bg-background px-7 py-4 text-base font-semibold text-cresp-600 transition-colors hover:bg-ink hover:text-background"
                >
                  Explore flavours <span aria-hidden>&rarr;</span>
                </a>
                <a
                  href="/distributor"
                  className="inline-flex items-center rounded-full border-[1.5px] border-background/50 px-7 py-4 text-base font-semibold text-background transition-colors hover:bg-background/14"
                >
                  Stock our packs
                </a>
              </div>
              <div className="text-[13px] font-semibold tracking-[0.1em] text-background/60 uppercase">
                Cheese Balls &amp; Krunchit Spanish Tomato
              </div>
            </div>
            <div className="relative flex min-h-[420px] items-center justify-center py-10 sm:min-h-[560px]">
              <div className="absolute h-[400px] w-[400px] animate-sfb-spin rounded-full border-[1.5px] border-dashed border-background/30 sm:h-[540px] sm:w-[540px]" />
              <div
                className="absolute h-[300px] w-[300px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(216,69,42,0.55), rgba(216,69,42,0) 70%)",
                }}
              />
              <div className="animate-collide-left relative z-[2] h-[300px] w-[220px] sm:h-[400px] sm:w-[300px]">
                <Image
                  src="/products/p-cheeseballs-herbs.png"
                  alt="Cheese Balls, Cheese and Herbs pack"
                  fill
                  priority
                  sizes="300px"
                  className="object-contain drop-shadow-[0_44px_60px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="animate-collide-right relative z-[1] -ml-16 h-[250px] w-[180px] sm:h-[340px] sm:w-[250px]">
                <Image
                  src="/products/p-krunchit-tomato.png"
                  alt="Krunchit Spanish Tomato pack"
                  fill
                  sizes="250px"
                  className="object-contain drop-shadow-[0_36px_52px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>

        <Marquee dotColors={["#D8452A", "#D8452A"]} />
        <TrustStrip accent="text-cresp-400" />

        <section id="flavours" className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="mb-3 text-xs font-bold tracking-[0.22em] text-cresp-600 uppercase">
                The lineup
              </div>
              <h2 className="m-0 font-display text-4xl uppercase leading-[0.94] sm:text-6xl">
                Pick your crunch
              </h2>
            </div>
          </div>
          <ProductGrid
            products={CRESP_PRODUCTS}
            theme={crespTheme}
            showAllLabel={`Show all ${CRESP_PRODUCTS.length} flavours`}
          />

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-5 rounded-2xl border border-dashed border-ink/28 bg-ink/4 p-6">
              <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-[repeating-linear-gradient(135deg,rgba(216,69,42,0.2)_0_10px,rgba(216,69,42,0.06)_10px_20px)] text-center font-mono text-[10px] text-ink/60">
                pack shot needed
              </div>
              <div>
                <h3 className="m-0 mb-1.5 font-display text-lg uppercase">
                  Mini Rings, Twist Tadka
                </h3>
                <p className="m-0 text-sm leading-relaxed text-ink/58">
                  In the catalog artwork, awaiting packaging photography.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-2xl bg-cresp-bg p-6 text-background">
              <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl border border-dashed border-background/30 bg-[repeating-linear-gradient(135deg,rgba(251,246,233,0.16)_0_10px,rgba(251,246,233,0.05)_10px_20px)] text-center font-mono text-[10px] text-background/70">
                range artwork
              </div>
              <div>
                <div className="mb-1.5 text-[10px] font-bold tracking-[0.18em] text-cresp-label uppercase">
                  Coming soon
                </div>
                <h3 className="m-0 mb-1.5 font-display text-lg uppercase">
                  Puffzilla range
                </h3>
                <p className="m-0 text-sm leading-relaxed text-background/62">
                  The next Crespology format. Trade partners get first look.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between gap-10 rounded-[26px] bg-cresp-600 p-8 text-background sm:p-13">
              <div>
                <div className="mb-4 text-xs font-bold tracking-[0.22em] text-snax-400 uppercase">
                  Why Crespology
                </div>
                <h2 className="m-0 mb-4.5 font-display text-4xl uppercase leading-[0.98] sm:text-5xl">
                  Crunch is
                  <br />
                  the whole craft
                </h2>
                <p className="max-w-lg text-lg leading-relaxed text-background/80">
                  Texture first: puff, ring and ball shapes are tuned so the
                  first bite snaps instead of crumbling. Then the seasoning
                  goes on, cheese, herbs, Spanish tomato, peri-peri.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-5 border-t border-background/24 pt-7">
                <div>
                  <div className="font-display text-2xl text-snax-400 sm:text-4xl">13</div>
                  <div className="mt-1 text-xs text-background/72 sm:text-[13px]">Crafted flavours</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-snax-400 sm:text-4xl">4</div>
                  <div className="mt-1 text-xs text-background/72 sm:text-[13px]">
                    Formats: balls, rings, Krunchit, makhana
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl text-snax-400 sm:text-4xl">₹5 / ₹10</div>
                  <div className="mt-1 text-xs text-background/72 sm:text-[13px]">MRP pack tiers</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-[26px] bg-cresp-400 p-7 text-background sm:p-10">
              <div className="text-xs font-bold tracking-[0.22em] text-background/72 uppercase">
                Brand film
              </div>
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-3.5 rounded-[18px] border border-dashed border-background/45 bg-[repeating-linear-gradient(135deg,rgba(27,23,16,0.16)_0_10px,rgba(27,23,16,0.06)_10px_20px)] sm:min-h-[240px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-xl text-cresp-400">
                  &#9654;
                </div>
                <div className="text-center font-mono text-xs leading-relaxed text-background/85">
                  autoplay hero video
                  <br />
                  cheese balls falling into a bowl
                </div>
              </div>
              <div className="text-[15px] leading-relaxed text-background/85">
                Drop the 12-second macro reel here. Muted autoplay, looping,
                no controls.
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
                <div className="mb-3.5 text-sm tracking-wide text-cresp-400">
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
              <div className="mb-3.5 text-xs font-bold tracking-[0.22em] text-cresp-400 uppercase">
                Trade partner?
              </div>
              <h2 className="m-0 mb-4 font-display text-4xl uppercase leading-[0.96] text-background sm:text-6xl">
                Become a distributor
              </h2>
              <p className="mb-7 max-w-md text-lg leading-relaxed text-background/72">
                Bring Crespology to your territory. Tell us your business,
                your coverage, and we&apos;ll get back with catalog,
                pricing, and terms.
              </p>
              <a
                href="/distributor"
                className="inline-flex items-center gap-2.5 rounded-full bg-cresp-400 px-8 py-4 text-base font-bold text-background transition-colors hover:bg-background hover:text-cresp-600"
              >
                Enquire to become a distributor <span aria-hidden>&rarr;</span>
              </a>
            </div>
            <div className="flex items-end justify-center">
              <div className="relative h-[150px] w-[110px] -rotate-[8deg] sm:h-[200px] sm:w-[150px]">
                <Image
                  src="/products/p-krunchit-kpop.png"
                  alt="Krunchit K-Pop pack"
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
                  src="/products/p-makhana-peri-peri.png"
                  alt="Peri-Peri Makhana pack"
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
