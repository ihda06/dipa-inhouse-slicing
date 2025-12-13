"use client";

import { useState } from "react";
import { LineChart as LineChartIcon, BarChart3 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PortfolioChart from "./PortfolioChart";
import {
  portfolioData,
  TIME_RANGES,
  type TimeRange,
  getFilteredChartData,
  formatCurrency,
  formatPercentageChange,
} from "@/constants/dashboard";
import { cn } from "@/lib/utils";

export default function PortfolioOverview() {
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("6M");
  const [chartType, setChartType] = useState<"line" | "candlestick">("line");

  const filteredChartData = getFilteredChartData(selectedTimeRange);

  return (
    <div className="rounded-xl p-6 text-white flex-1">
      <div className="flex justify-between items-start">
        {/* Portfolio Summary Section */}
        <div className="mb-6">
          <h2 className="mb-4 text-sm font-medium text-gray-400">
            Total portfolio
          </h2>

          <div className="flex items-start gap-3">
            {/* Large portfolio value */}
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-white leading-tight">
                {formatCurrency(portfolioData.currentValue)}
              </span>
              {/* Absolute change */}
              <span className="text-sm text-gray-400 mt-1">
                {portfolioData.absoluteChange >= 0 ? "+" : "-"}
                {formatCurrency(Math.abs(portfolioData.absoluteChange))}
              </span>
            </div>

            {/* Percentage change badge */}
            <Badge
              className={cn(
                "bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30",
                "px-2.5 py-0.5 text-xs font-medium",
                "h-fit mt-1"
              )}
            >
              {formatPercentageChange(portfolioData.percentageChange)}%
            </Badge>
          </div>
        </div>

        {/* Time Range Tabs and Chart Type Icons */}
        <div className="mb-4 flex items-center gap-1 justify-between">
          {/* Time Range Tabs */}
          <Tabs
            value={selectedTimeRange}
            onValueChange={(value) => setSelectedTimeRange(value as TimeRange)}
            className="w-auto"
          >
            <TabsList className="h-9 bg-[#111316] p-1 rounded-md">
              {TIME_RANGES.map((range) => (
                <TabsTrigger
                  key={range}
                  value={range}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-md",
                    "data-[state=active]:bg-[#2A3036] data-[state=active]:text-white",
                    "data-[state=inactive]:text-gray-400",
                    "transition-colors"
                  )}
                >
                  {range}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Chart Type Icons - Wrapped in container like TabsList */}
          <div className="h-9 bg-[#111316] p-1 rounded-md flex items-center gap-1">
            <button
              onClick={() => setChartType("line")}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                chartType === "line"
                  ? "bg-[#2A3036] text-white"
                  : "text-gray-400 hover:text-gray-300"
              )}
              aria-label="Line chart"
            >
              <LineChartIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => setChartType("candlestick")}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                chartType === "candlestick"
                  ? "bg-[#2A3036] text-white"
                  : "text-gray-400 hover:text-gray-300"
              )}
              aria-label="Candlestick chart"
            >
              <BarChart3 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[320px] w-full">
        {chartType === "line" ? (
          <PortfolioChart data={filteredChartData} />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Candlestick chart view coming soon
          </div>
        )}
      </div>
    </div>
  );
}
