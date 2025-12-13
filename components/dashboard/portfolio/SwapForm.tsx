"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AssetSelector from "./AssetSelector";
import {
  Asset,
  assets,
  formatExchangeRate,
  getExchangeRate,
} from "@/constants/dashboard";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export default function SwapForm() {
  const [sendAmount, setSendAmount] = useState("0.00");
  const [receiveAmount, setReceiveAmount] = useState("0.00");
  const [sendAsset, setSendAsset] = useState<Asset>(assets[0]); // USDT default
  const [receiveAsset, setReceiveAsset] = useState<Asset>(assets[1]); // ETH default

  // Handle send amount change
  const handleSendAmountChange = (value: string) => {
    setSendAmount(value);
    if (value && !isNaN(parseFloat(value))) {
      const currentRate = getExchangeRate(sendAsset.id, receiveAsset.id);
      const calculatedReceive = parseFloat(value) * currentRate;
      setReceiveAmount(calculatedReceive.toFixed(2));
    } else {
      setReceiveAmount("0.00");
    }
  };

  // Handle receive amount change
  const handleReceiveAmountChange = (value: string) => {
    setReceiveAmount(value);
    if (value && !isNaN(parseFloat(value))) {
      const currentRate = getExchangeRate(sendAsset.id, receiveAsset.id);
      const calculatedSend = parseFloat(value) / currentRate;
      setSendAmount(calculatedSend.toFixed(2));
    } else {
      setSendAmount("0.00");
    }
  };

  // Handle send asset change
  const handleSendAssetChange = (asset: Asset) => {
    setSendAsset(asset);
    // Recalculate receive amount
    if (sendAmount && !isNaN(parseFloat(sendAmount))) {
      const newRate = getExchangeRate(asset.id, receiveAsset.id);
      const calculatedReceive = parseFloat(sendAmount) * newRate;
      setReceiveAmount(calculatedReceive.toFixed(2));
    }
  };

  // Handle receive asset change
  const handleReceiveAssetChange = (asset: Asset) => {
    setReceiveAsset(asset);
    // Recalculate receive amount
    if (sendAmount && !isNaN(parseFloat(sendAmount))) {
      const newRate = getExchangeRate(sendAsset.id, asset.id);
      const calculatedReceive = parseFloat(sendAmount) * newRate;
      setReceiveAmount(calculatedReceive.toFixed(2));
    }
  };

  // Swap assets
  const handleSwapAssets = () => {
    // Swap the assets
    const newSendAsset = receiveAsset;
    const newReceiveAsset = sendAsset;
    setSendAsset(newSendAsset);
    setReceiveAsset(newReceiveAsset);

    // Recalculate receive amount based on new exchange rate
    // Keep send amount the same, recalculate receive
    if (sendAmount && !isNaN(parseFloat(sendAmount))) {
      const newExchangeRate = getExchangeRate(
        newSendAsset.id,
        newReceiveAsset.id
      );
      const calculatedReceive = parseFloat(sendAmount) * newExchangeRate;
      setReceiveAmount(calculatedReceive.toFixed(2));
    } else {
      setReceiveAmount("0.00");
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-[#21262B] py-0 relative rounded-xl border border-white/5">
        {/* You send section */}
        <div className="space-y-2 pt-6 px-6">
          <label className="text-sm font-medium text-gray-400">You send</label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={sendAmount}
              onChange={(e) => handleSendAmountChange(e.target.value)}
              placeholder="0.00"
              className={cn(
                "flex-1 h-11 bg-[#2A3036] border border-white/5",
                "text-gray-300 placeholder:text-gray-500",
                "focus-visible:border-[#00FF88]/50 focus-visible:ring-[#00FF88]/20",
                "text-sm",
                "pl-4 pr-2 py-0" // Add horizontal padding
              )}
            />
            <AssetSelector
              selectedAsset={sendAsset}
              onSelect={handleSendAssetChange}
              className="w-[140px]"
            />
          </div>
        </div>

        {/* Swap direction button centered in the horizontal separator */}
        <div className="w-full relative flex items-center">
          <div className="h-px w-full bg-white/10" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              onClick={handleSwapAssets}
              className={cn(
                "w-10 h-10 rounded-full",
                "bg-[#2A3036] border border-white/5",
                "flex items-center justify-center",
                "hover:bg-[#2A3036]/80 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]/50",
                "shadow-lg"
              )}
              aria-label="Swap assets"
            >
              <ArrowUpDown className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* You'll receive section */}
        <div className="space-y-2 pb-6 px-6">
          <label className="text-sm font-medium text-gray-400">
            You&apos;ll receive
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={receiveAmount}
              onChange={(e) => handleReceiveAmountChange(e.target.value)}
              placeholder="0.00"
              className={cn(
                "flex-1 h-11 bg-[#2A3036] border border-white/5",
                "text-gray-300 placeholder:text-gray-500",
                "focus-visible:border-[#00FF88]/50 focus-visible:ring-[#00FF88]/20",
                "text-sm",
                "pl-4 pr-2 py-0" // Add horizontal padding
              )}
            />
            <AssetSelector
              selectedAsset={receiveAsset}
              onSelect={handleReceiveAssetChange}
              className="w-[140px]"
            />
          </div>
          {/* Exchange rate display */}
          <div className="pt-1">
            <p className="text-sm text-gray-400 text-center">
              {formatExchangeRate(receiveAsset, sendAsset)}
            </p>
          </div>
        </div>
      </Card>

      {/* Preview button */}
      <Button
        type="button"
        className={cn(
          "w-full h-11",
          "bg-[#00FF88] hover:bg-[#00FF88]/90",
          "text-[#111316] font-semibold",
          "rounded-md transition-colors"
        )}
      >
        Preview
      </Button>
    </div>
  );
}
