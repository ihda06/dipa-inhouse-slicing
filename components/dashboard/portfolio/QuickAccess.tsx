"use client";

import { useState } from "react";
import { ArrowLeftRight, Box, ArrowRightLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SwapForm from "./SwapForm";
import { ActionType } from "@/constants/dashboard";
import { cn } from "@/lib/utils";

export default function QuickAccess() {
  const [activeTab, setActiveTab] = useState<ActionType>("Swap");

  return (
    <div className={cn("p-6 space-y-6")}>
      {/* Title */}
      <h2 className="text-xl font-semibold text-white">Quick Access</h2>

      {/* Action Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as ActionType)}
        className="w-full"
      >
        <TabsList
          className={cn(
            "w-full bg-[#111316] rounded-lg",
            "grid grid-cols-4 gap-1 p-1",
            "h-auto"
          )}
        >
          {/* Swap Tab */}
          <TabsTrigger
            value="Swap"
            className={cn(
              "flex items-center justify-center gap-1.5",
              "px-3 py-1.5 text-sm",
              "data-[state=active]:bg-[#191D21] data-[state=active]:text-white data-[state=active]:border-white/10",
              "data-[state=inactive]:text-gray-400",
              "transition-colors"
            )}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span className="font-medium">Swap</span>
          </TabsTrigger>

          {/* Deposit Tab */}
          <TabsTrigger
            value="Deposit"
            className={cn(
              "flex items-center justify-center gap-1.5",
              "px-3 py-1.5 text-sm",
              "data-[state=active]:bg-[#191D21] data-[state=active]:text-white data-[state=active]:border-white/10",
              "data-[state=inactive]:text-gray-400",
              "transition-colors"
            )}
          >
            <Box className="w-4 h-4" />
            <span className="font-medium">Deposit</span>
          </TabsTrigger>

          {/* Withdraw Tab */}
          <TabsTrigger
            value="Withdraw"
            className={cn(
              "flex items-center justify-center gap-1.5",
              "px-3 py-1.5 text-sm",
              "data-[state=active]:bg-[#191D21] data-[state=active]:text-white data-[state=active]:border-white/10",
              "data-[state=inactive]:text-gray-400",
              "transition-colors"
            )}
          >
            <Box className="w-4 h-4 rotate-180" />
            <span className="font-medium">Withdraw</span>
          </TabsTrigger>

          {/* Transfer Tab */}
          <TabsTrigger
            value="Transfer"
            className={cn(
              "flex items-center justify-center gap-1.5",
              "px-3 py-1.5 text-sm",
              "data-[state=active]:bg-[#191D21] data-[state=active]:text-white data-[state=active]:border-white/10",
              "data-[state=inactive]:text-gray-400",
              "transition-colors"
            )}
          >
            <ArrowRightLeft className="w-4 h-4" />
            <span className="font-medium">Transfer</span>
          </TabsTrigger>
        </TabsList>

        {/* Swap Content */}
        <TabsContent value="Swap" className="mt-6">
          <SwapForm />
        </TabsContent>

        {/* Deposit Content */}
        <TabsContent value="Deposit" className="mt-6">
          <div className="py-8 text-center">
            <p className="text-gray-400 text-sm">
              Deposit functionality coming soon
            </p>
          </div>
        </TabsContent>

        {/* Withdraw Content */}
        <TabsContent value="Withdraw" className="mt-6">
          <div className="py-8 text-center">
            <p className="text-gray-400 text-sm">
              Withdraw functionality coming soon
            </p>
          </div>
        </TabsContent>

        {/* Transfer Content */}
        <TabsContent value="Transfer" className="mt-6">
          <div className="py-8 text-center">
            <p className="text-gray-400 text-sm">
              Transfer functionality coming soon
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
