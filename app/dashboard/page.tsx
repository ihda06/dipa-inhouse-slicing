import SecurityBanner from "@/components/dashboard/SecurityBanner";
import PortfolioSection from "@/components/dashboard/portfolio/PortfolioSection";
import AssetsSection from "@/components/dashboard/assets/AssetsSection";
import PortfolioBreakdown from "@/components/dashboard/portfolio/PortfolioBreakdown";
import MarketsTable from "@/components/dashboard/markets/MarketsTable";
import StakingsSection from "@/components/dashboard/stakings/StakingsSection";
import CommunitySection from "@/components/dashboard/community/CommunitySection";

export default function DashboardPage() {
  return (
    <div className="space-y-3 w-full">
      <SecurityBanner />
      <PortfolioSection />
      <div className="flex gap-3 w-full">
        <div className="w-[60%] space-y-3">
          <div className="grid w-full grid-cols-2 gap-3">
            {/* assets section */}
            <AssetsSection />
            {/* portfolio breakdown section */}
            <PortfolioBreakdown />
          </div>
          {/* table section */}
          <MarketsTable />
        </div>
        <div className="w-[40%] grid grid-cols-1 gap-3">
          {/* my stakings section */}
          <StakingsSection />
          {/* community section */}
          <div className="flex items-start">
            <CommunitySection />
          </div>
        </div>
      </div>
    </div>
  );
}
