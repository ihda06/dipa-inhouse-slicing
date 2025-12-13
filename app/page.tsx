import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import { ToolkitSection } from "@/components/toolkit/ToolkitSection";
import EnterpriseSection from "@/components/enterprise/EnterpriseSection";
import PlatformSection from "@/components/platform/PlatformSection";
import CTASection from "@/components/cta/CTASection";
import { PricingSection } from "@/components/pricing/PricingSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <HeroSection />
        <ToolkitSection />
        <EnterpriseSection />
        <PlatformSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
