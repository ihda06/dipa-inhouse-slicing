"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SecurityBanner() {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden",
        "bg-[#191D21] border border-white/5",
        "flex items-center gap-6 py-2 px-5"
      )}
    >
      {/* Absolute positioned security element image on the left */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-2/3 pointer-events-none select-none">
        <Image
          src="/dashboard/images/security-element.webp"
          alt="Security Element"
          width={300}
          height={580}
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
      {/* Left: Security Icon */}
      <div className="shrink-0 relative w-20 h-20 overflow-hidden">
        <Image
          src="/dashboard/icons/Icon.png"
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

      {/* Absolute positioned security element image on the left */}
      <div className="absolute -right-7 top-1/2 -translate-y-1/2  pointer-events-none select-none">
        <Image
          src="/dashboard/images/banner-pattern.png"
          alt="Security Element"
          width={300}
          height={580}
          className="object-contain"
          priority
          draggable={false}
        />
      </div>

      {/* Right: Button with Pattern Background */}
      <div className="shrink-0 relative overflow-hidden rounded-lg">
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
