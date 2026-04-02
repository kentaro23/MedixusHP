import { CtaSection } from "@/components/sections/cta";
import { DifferentiationSection } from "@/components/sections/differentiation";
import { FutureSection } from "@/components/sections/future";
import { HeroSection } from "@/components/sections/hero";
import { IdentitySection } from "@/components/sections/identity";
import { OsArchitectureSection } from "@/components/sections/os-architecture";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { WhyNowSection } from "@/components/sections/why-now";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <IdentitySection />
      <OsArchitectureSection />
      <WhyNowSection />
      <DifferentiationSection />
      <FutureSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
