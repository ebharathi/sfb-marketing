import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { FlavourShowcase } from "./components/FlavourShowcase";
import { SocialProof } from "./components/SocialProof";
import { DistributorBand } from "./components/DistributorBand";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustStrip />
        <FlavourShowcase />
        <SocialProof />
        <DistributorBand />
      </main>
      <Footer />
    </div>
  );
}
