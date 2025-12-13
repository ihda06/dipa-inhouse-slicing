"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  isCurrentPlan?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  ctaText,
  isPopular = false,
  isCurrentPlan = false,
  className,
}: PricingCardProps) {
  return (
    <div className="relative pt-2 hover:-translate-y-1 transition-all duration-300">
      {isPopular && (
        <div className="w-full bg-linear-to-b from-blue-600 to-white text-center pt-3 text-white h-full rounded-3xl text-xs absolute -top-8 left-0 right-0 z-10">
          BEST VALUE
        </div>
      )}

      <Card
        className={cn(
          "relative z-10 mx-[0.8px] flex h-full flex-col  bg-white text-gray-900 ",
          isPopular && "bg-linear-to-b from-white to-blue-100 border-none",
          className
        )}
      >
        <CardHeader className="pb-4 grid grid-cols-2">
          <h3 className={cn("text-lg font-bold")}>{title}</h3>
          <p className={cn("text-sm")}>{description}</p>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-6">
          <div className="grid grid-cols-2">
            <div className="flex items-baseline gap-2">
              <span className={cn("text-3xl font-boldtext-gray-900")}>
                {price.split(" ")[0]}
              </span>
              <span className={cn("text-lgtext-gray-600")}>
                {price.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <div className="flex justify-start">
              <Button
                className={cn(
                  "rounded-full duration-300 cursor-pointer",
                  isPopular &&
                    "bg-linear-to-b from-blue-400 to-blue-700 text-white hover:bg-blue-800"
                )}
                variant={isCurrentPlan ? "outline" : "default"}
              >
                {ctaText}
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <ul className="flex flex-1 flex-col gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check
                  className={cn("mt-0.5 h-5 w-5 shrink-0 text-blue-600")}
                />
                <span className={cn("text-sm text-gray-700")}>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

