"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { assetHoldings } from "@/constants/dashboard";
import { cn } from "@/lib/utils";

export default function AssetsSection() {
  return (
    <div className="bg-[#191D21] rounded-xl border border-white/5 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Your Assets</h2>
        <Link
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          See all
        </Link>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-2 gap-4 mb-4 pb-3 border-b border-white/5">
        <div className="text-sm font-medium text-gray-400">Amount</div>
        <div className="text-sm font-medium text-gray-400 text-right">
          Value & Change
        </div>
      </div>

      {/* Asset List */}
      <div className="space-y-4">
        {assetHoldings.map((asset) => {
          const isPositive = asset.changePercentage >= 0;
          const changeColor = isPositive ? "text-[#00FF88]" : "text-red-500";

          return (
            <div
              key={asset.id}
              className="flex items-center justify-between py-2"
            >
              {/* Left: Icon, Amount, Name */}
              <div className="flex items-center gap-3 flex-1">
                {/* Asset Icon */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={asset.iconUrl}
                    alt={asset.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                {/* Amount and Name */}
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-white">
                    {asset.amount.toLocaleString("en-US", {
                      minimumFractionDigits: asset.amount < 1 ? 2 : 0,
                      maximumFractionDigits: asset.amount < 1 ? 2 : 0,
                    })}{" "}
                    {asset.symbol}
                  </span>
                  <span className="text-sm text-gray-400">{asset.name}</span>
                </div>
              </div>

              {/* Right: Value and Change */}
              <div className="flex flex-col items-end">
                <span className="text-base font-semibold text-white">
                  {asset.value >= 1000
                    ? `$${asset.value.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}`
                    : `$${asset.value.toFixed(2)}`}
                </span>
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium",
                    changeColor
                  )}
                >
                  {isPositive ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  <span>
                    {isPositive ? "+" : ""}
                    {asset.changePercentage.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
