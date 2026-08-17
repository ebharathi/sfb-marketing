import type { Metadata } from "next";
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
      <main className="flex flex-1 flex-col pt-28 pb-20 lg:pt-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-950/50">
            Trade partner enquiry
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
            Become a Distributor
          </h1>
          <p className="mt-3 max-w-xl text-ink-950/70">
            Bring Snaxzastic and Crespology to your territory. Fill in your
            business and territory details and our team will follow up with
            catalog, pricing, and terms.
          </p>

          <DistributorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
