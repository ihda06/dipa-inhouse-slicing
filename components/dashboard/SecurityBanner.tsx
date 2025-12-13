"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SecurityBanner() {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden",
        "bg-[#2A3036] border border-white/5",
        "flex items-center gap-6 p-6"
      )}
    >
      {/* Left: Security Icon */}
      <div className="shrink-0 relative w-20 h-20 overflow-hidden">
        <Image
          src="/dashboard/images/object-banner.png"
          alt="Security shield icon"
          fill
          className="object-contain"
          style={{ position: "absolute" }}
        />
      </div>

      {/* Middle: Text Content */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold">
          Your assets, fully protected
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Keep your funds safe with bank-grade encryption and 2FA security.
          Activate additional protection for complete peace of mind.
        </p>
      </div>

      {/* Right: Button with Pattern Background */}
      <div className="shrink-0 relative overflow-hidden rounded-lg">
        {/* Pattern Background - extends behind button area */}
        <div className="absolute -inset-4">
          <Image
            src="/dashboard/images/banner-pattern.png"
            alt="Pattern background"
            fill
            className="object-cover"
            style={{ position: "absolute", opacity: 0.4 }}
          />
        </div>
        {/* Button */}
        <Button
          variant="outline"
          className={cn(
            "relative z-10",
            "border-[#4ADE80] text-[#4ADE80]",
            "bg-transparent hover:bg-[#4ADE80]/10",
            "hover:border-[#4ADE80] hover:text-[#4ADE80]",
            "px-6 py-2.5 font-medium rounded-lg"
          )}
        >
          Enable security
        </Button>
      </div>
    </div>
  );
}
