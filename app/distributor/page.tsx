import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { DistributorForm } from "./DistributorForm";

export const metadata: Metadata = {
  title: "Become a Distributor | SFB",
  description:
    "Apply to become a distributor for Snaxzastic and Crespology. Tell us your business, territory, and trade profile.",
};

export default function DistributorPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <div className="bg-ink px-4 pt-14 pb-12 text-background sm:px-10 sm:pt-18 sm:pb-16">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 text-xs font-bold tracking-[0.22em] text-snax-400 uppercase">
                Trade enquiry
              </div>
              <h1 className="m-0 mb-4 font-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-7xl">
                Become a
                <br />
                distributor
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-background/74">
                Bring Snaxzastic and Crespology to your territory. Tell us
                about your business and coverage, our sales team reviews
                every enquiry and comes back with catalog, pricing and terms.
              </p>
            </div>
            <div className="flex items-end justify-center">
              <div className="relative h-[140px] w-[100px] -rotate-[8deg] sm:h-[180px] sm:w-[130px]">
                <Image
                  src="/products/p-nimbu-roasted-chana.png"
                  alt="Nimbu Pudina Roasted Chana pack"
                  fill
                  sizes="130px"
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="relative z-[2] -ml-6 h-[160px] w-[120px] sm:-ml-8 sm:h-[210px] sm:w-[150px]">
                <Image
                  src="/products/p-cheeseballs-herbs.png"
                  alt="Cheese Balls pack"
                  fill
                  sizes="150px"
                  className="object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="relative -ml-6 h-[140px] w-[100px] rotate-[8deg] sm:-ml-8 sm:h-[180px] sm:w-[130px]">
                <Image
                  src="/products/p-krunchit-tomato.png"
                  alt="Krunchit Spanish Tomato pack"
                  fill
                  sizes="130px"
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-10 sm:py-14">
          <DistributorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
