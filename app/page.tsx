import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { TrustStrip } from "./components/TrustStrip";
import { FlavourShowcase } from "./components/FlavourShowcase";
import { OurStory } from "./components/OurStory";
import { SocialProof } from "./components/SocialProof";
import { DistributorBand } from "./components/DistributorBand";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Marquee />
        <TrustStrip />
        <FlavourShowcase />
        <OurStory />
        <SocialProof />
        <DistributorBand />
      </main>
      <Footer />
    </div>
  );
}
