"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          !isAnnual ? "text-gray-900" : "text-gray-500"
        )}
      >
        Monthly
      </span>
      <Switch
        checked={isAnnual}
        onCheckedChange={setIsAnnual}
        className="data-[state=checked]:bg-blue-600"
      />
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            isAnnual ? "text-gray-900" : "text-gray-500"
          )}
        >
          Annual
        </span>
        {isAnnual && (
          <Badge className="bg-blue-500 text-white border-0 rounded-md px-2 py-0.5 text-xs font-medium">
            10% OFF
          </Badge>
        )}
      </div>
    </div>
  );
}
