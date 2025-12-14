import type { Metadata } from "next";
import Header from "@/components/landing-page/header/Header";
import HeroSection from "@/components/landing-page/hero/HeroSection";
import { ToolkitSection } from "@/components/toolkit/ToolkitSection";
import EnterpriseSection from "@/components/landing-page/enterprise/EnterpriseSection";
import PlatformSection from "@/components/landing-page/platform/PlatformSection";
import CTASection from "@/components/landing-page/cta/CTASection";
import { PricingSection } from "@/components/landing-page/pricing/PricingSection";
import Footer from "@/components/landing-page/footer/Footer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Turn workflow into AI agent automations. Powerful and production-ready cloud platform with solutions you need to succeed.",
};

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
