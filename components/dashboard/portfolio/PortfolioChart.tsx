"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/constants/dashboard";
import { cn } from "@/lib/utils";

interface PortfolioChartProps {
  data: ChartDataPoint[];
  className?: string;
}

// Custom tooltip matching Figma design
// eslint-disable-next-line
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ChartDataPoint;
    return (
      <div
        className={cn(
          "bg-white rounded-lg shadow-xl p-4 border border-gray-200/50",
          "min-w-[220px]"
        )}
      >
        {/* Date */}
        <div className="text-sm font-medium text-gray-900 mb-3">
          {data.date}
        </div>

        {/* Portfolio's worth with green dot */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#00FF88] shrink-0" />
          <span className="text-sm text-gray-600 flex-1">
            Portfolio&apos;s worth
          </span>
          <span className="text-sm font-semibold text-gray-900">
            $
            {data.portfolioWorth.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        {/* Top movers with blue dot */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          <span className="text-sm text-gray-600 flex-1">Top movers</span>
          <span className="text-sm font-semibold text-gray-900">
            {data.topMovers}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

// Custom active dot (green circle marker)
// eslint-disable-next-line
const CustomActiveDot = (props: any) => {
  const { cx, cy } = props;
  return (
    <g>
      {/* Outer glow */}
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill="#00FF88"
        fillOpacity={0.3}
        className="animate-pulse"
      />
      {/* Inner dot */}
      <circle cx={cx} cy={cy} r={4} fill="#00FF88" />
    </g>
  );
};

export default function PortfolioChart({
  data,
  className,
}: PortfolioChartProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          {/* Dashed horizontal grid lines */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2A3036"
            horizontal={true}
            vertical={false}
            strokeOpacity={0.5}
          />

          {/* X-axis: Jan, Feb, March, Apr, May, Jun */}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#97A3B6", fontSize: 12, fontWeight: 400 }}
            interval={0}
            height={30}
          />

          {/* Y-axis: 0, 80, 160, 240, 320 */}
          <YAxis
            domain={[0, 320]}
            ticks={[0, 80, 160, 240, 320]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#97A3B6", fontSize: 12, fontWeight: 400 }}
            width={40}
          />

          {/* Custom tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#00FF88",
              strokeWidth: 1,
              strokeDasharray: "5 5",
            }}
          />

          {/* Green line chart */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00FF88"
            strokeWidth={2.5}
            dot={false}
            activeDot={<CustomActiveDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
