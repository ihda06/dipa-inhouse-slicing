"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const portfolioData = [
  { name: "BTC", value: 45, color: "#4ade80" },
  { name: "ETH", value: 30, color: "#22d3ee" },
  { name: "ADA", value: 15, color: "#06b6d4" },
  { name: "Others", value: 10, color: "#52525b" },
];

const chartConfig = {
  btc: { label: "BTC", color: "#4ade80" },
  eth: { label: "ETH", color: "#22d3ee" },
  ada: { label: "ADA", color: "#06b6d4" },
  others: { label: "Others", color: "#52525b" },
};

export default function PortfolioBreakdown() {
  return (
    <Card className="w-full  border border-white/5 bg-[#191D21] text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <h2 className="text-2xl font-semibold">Portfolio Breakdown</h2>
        <button className="text-sm text-gray-400 hover:text-gray-300">
          See all
        </button>
      </CardHeader>
      <CardContent className="pb-8">
        <div className="mx-auto max-w-[400px] mt-8">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="60%"
                startAngle={180}
                endAngle={0}
                innerRadius={100}
                outerRadius={130}
                dataKey="value"
                strokeWidth={0}
                paddingAngle={3}
                cornerRadius={10}
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-gray-700 bg-[#1a1d24] p-3 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-sm"
                            style={{
                              backgroundColor: payload[0].payload.color,
                            }}
                          />
                          <span className="text-sm font-medium text-white">
                            {payload[0].name}
                          </span>
                        </div>
                        <p className="mt-1 text-lg font-bold text-white">
                          {payload[0].value}%
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <text
                x="50%"
                y="52%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white text-3xl font-bold"
              >
                BTC
              </text>
              <text
                x="50%"
                y="61%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-500 text-xs uppercase tracking-wider"
              >
                LARGEST HOLDING
              </text>
            </PieChart>
          </ChartContainer>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4 text-center">
          {[...portfolioData].reverse().map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-sm"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
              <span className="text-2xl font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
