"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Asset, assets } from "@/constants/dashboard";
import { cn } from "@/lib/utils";

interface AssetSelectorProps {
  selectedAsset: Asset;
  onSelect: (asset: Asset) => void;
  className?: string;
  disabled?: boolean;
}

// Asset Icon Component - Circular icon with symbol inside
function AssetIcon({ asset }: { asset: Asset }) {
  const getIconContent = () => {
    switch (asset.symbol) {
      case "USDT":
        return "T";
      case "ETH":
        return "E";
      case "BTC":
        return "₿";
      default:
        return asset.symbol.charAt(0);
    }
  };

  const getIconBgColor = () => {
    switch (asset.symbol) {
      case "USDT":
        return "bg-[#26A17B]"; // Green for USDT
      case "ETH":
        return "bg-[#627EEA]"; // Purple for ETH
      case "BTC":
        return "bg-[#F7931A]"; // Orange for BTC
      default:
        return asset.color ? `bg-[${asset.color}]` : "bg-gray-500";
    }
  };

  return (
    <div
      className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold",
        getIconBgColor()
      )}
    >
      {getIconContent()}
    </div>
  );
}

export default function AssetSelector({
  selectedAsset,
  onSelect,
  className,
  disabled = false,
}: AssetSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      {/* Selected Asset Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md",
          "bg-[#2A3036] border border-white/5",
          "text-gray-300 text-sm font-medium",
          "hover:bg-[#2A3036]/80 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]/50",
          "w-full"
        )}
      >
        {/* Asset Icon */}
        <AssetIcon asset={selectedAsset} />

        {/* Asset Symbol */}
        <span className="text-sm flex-1 text-left">
          {selectedAsset.symbol === "USDT" ? "T USDT" : selectedAsset.symbol}
        </span>

        {/* Chevron Icon */}
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-400 transition-transform shrink-0",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 mt-1 z-50 w-full",
            "bg-[#191D21] border border-white/10 rounded-md",
            "shadow-lg",
            "overflow-hidden"
          )}
        >
          {assets.map((asset) => (
            <button
              key={asset.id}
              type="button"
              onClick={() => {
                onSelect(asset);
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-left",
                "text-sm text-gray-300",
                "hover:bg-[#2A3036] transition-colors",
                "first:rounded-t-md last:rounded-b-md",
                selectedAsset.id === asset.id && "bg-[#2A3036]/50"
              )}
            >
              <AssetIcon asset={asset} />
              <span>{asset.symbol === "USDT" ? "T USDT" : asset.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
