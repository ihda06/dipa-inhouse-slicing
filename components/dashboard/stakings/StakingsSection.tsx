"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { stakingSummaries, stakingTransactions } from "@/constants/dashboard";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function StakingsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Filter transactions based on active tab
  const filteredTransactions = stakingTransactions.filter((tx) => {
    if (activeTab === "All") return true;
    if (activeTab === "Staked") return tx.type === "Staked";
    if (activeTab === "Earnings") return tx.type === "Reward";
    if (activeTab === "History") return true; // Show all for history
    return true;
  });

  const handleNextCard = () => {
    setCurrentCardIndex((prev) =>
      prev === stakingSummaries.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card className="bg-[#191D21] p-6 w-full  rounded-xl border border-white/5">
      {/* Header */}
      <h2 className="text-xl font-semibold text-white mb-6">My Stakings</h2>

      {/* Summary Cards Carousel */}
      <div className="relative mb-6 overflow-hidden">
        {/* Cards Container with Animation */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: `-${currentCardIndex * 100}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: `80%`,
            }}
          >
            {stakingSummaries.map((card, index) => {
              const isActive = index === currentCardIndex;
              return (
                <motion.div
                  key={card.id}
                  className={cn(
                    "bg-[#1F2529]  rounded-xl p-4 border border-white/5 shrink-0",
                    "w-full"
                  )}
                  initial={{ opacity: 0.6, scale: 0.95 }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: card.iconBgColor || "#627EEA",
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Image
                        src={card.iconUrl}
                        alt={card.symbol}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </motion.div>

                    {/* Card Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <motion.span
                          className="text-2xl font-bold text-white"
                          initial={false}
                          animate={{ opacity: isActive ? 1 : 0.8 }}
                        >
                          {card.symbol}
                        </motion.span>
                        <motion.span
                          className="text-2xl font-bold text-white"
                          initial={false}
                          animate={{ opacity: isActive ? 1 : 0.8 }}
                        >
                          {card.apr}%
                        </motion.span>
                      </div>
                      <motion.div
                        className="text-sm text-gray-400 mb-2"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                      >
                        {card.stakedAmount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        {card.symbol}
                      </motion.div>
                      <motion.div
                        className="text-xs text-gray-500"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.6 }}
                      >
                        EST. MONTLY EARNS:{" "}
                        {card.estimatedMonthlyEarns.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        {card.symbol.substring(0, 1)}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side Overlay Gradient */}
        {stakingSummaries.length > 1 && (
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#191D21] via-[#191D21]/60 to-transparent pointer-events-none z-10" />
        )}

        {/* Carousel Navigation */}
        {stakingSummaries.length > 1 && (
          <>
            <motion.button
              onClick={handleNextCard}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center z-20 shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </>
        )}

        {/* Carousel Indicators */}
        {stakingSummaries.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {stakingSummaries.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={cn("h-1.5 rounded-full transition-all duration-300")}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to card ${index + 1}`}
              >
                <motion.div
                  className={cn(
                    "h-full rounded-full",
                    index === currentCardIndex ? "bg-white/60" : "bg-white/20"
                  )}
                  animate={{
                    width: index === currentCardIndex ? "2rem" : "0.375rem",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 min-w-0"
        >
          <TabsList className="bg-[#111316] rounded-lg h-auto p-1 gap-1">
            {(["All", "Staked", "Earnings", "History"] as const).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "px-3 py-1.5 text-sm text-gray-400 data-[state=active]:bg-[#191D21] data-[state=active]:text-white data-[state=active]:border-white/10"
                )}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Sort by Dropdown */}
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-[#1F2529] text-gray-400 hover:text-white transition-colors shrink-0">
          Sort by
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {filteredTransactions.map((tx) => (
          <div
            key={tx.id}
            className="bg-[#1F2529] rounded-xl p-4 border border-white/5 flex items-center gap-3"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src={tx.iconUrl}
                alt={tx.name}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Middle-left Section: Amount and Name */}
            <div className="flex-1 min-w-0">
              <div className="text-base font-semibold text-white mb-0.5">
                {tx.amount.toLocaleString("en-US", {
                  minimumFractionDigits: tx.amount < 1 ? 2 : 0,
                  maximumFractionDigits: tx.amount < 1 ? 2 : 0,
                })}{" "}
                {tx.symbol}
              </div>
              <div className="text-xs text-gray-400">{tx.name}</div>
            </div>

            {/* Middle-right Section: Type and Date */}
            <div className="text-right shrink-0 min-w-[80px]">
              <div className="text-base font-semibold text-white mb-0.5">
                {tx.type}
              </div>
              <div className="text-xs text-gray-400">{tx.date}</div>
            </div>

            {/* Right Section: Value and APR */}
            <div className="text-right shrink-0 min-w-[80px]">
              <div className="text-base font-semibold text-white mb-0.5">
                ${tx.value.toLocaleString("en-US")}
              </div>
              <div className="text-xs text-gray-400">APR: {tx.apr}%</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
