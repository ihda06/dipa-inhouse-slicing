import PortfolioOverview from "./PortfolioOverview";
import QuickAccess from "./QuickAccess";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <div className="mt-6 relative flex flex-col lg:flex-row gap-6  bg-[#191D21] rounded-xl border border-white/5">
      {/* Portfolio Banner as background */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/dashboard/images/portfolio-banner.webp"
          alt=""
          fill
          priority
          className="object-cover rounded-xl"
          style={{ opacity: 0.25 }}
          draggable={false}
        />
      </div>
      {/* Left Section: Total Portfolio Overview */}
      <PortfolioOverview />
      <div className="hidden lg:block w-px bg-white/5 my-8"></div>

      {/* Right Section: Quick Access */}
      <QuickAccess />
    </div>
  );
}
