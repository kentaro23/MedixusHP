import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Technology } from "@/components/Technology";
import { Comparison } from "@/components/Comparison";
import { Pipeline } from "@/components/Pipeline";
import { BusinessModel } from "@/components/BusinessModel";
import { Team } from "@/components/Team";
import { News } from "@/components/News";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <div className="section-divider" aria-hidden="true" />
        <HowItWorks />
        <Technology />
        <Comparison />
        <Pipeline />
        <BusinessModel />
        <Team />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
