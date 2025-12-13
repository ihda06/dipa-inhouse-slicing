"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ChevronsUpDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Icon component helper for SVG icons

function Icon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("w-4 h-4 shrink-0", className)}
      width={16}
      height={16}
    />
  );
}

export default function SidebarDashboard() {
  const watchlistItems = [
    {
      name: "Bitcoin",
      icon: "/dashboard/images/Bitcoin_3D.png",
      price: "$63,250.00",
      change: "+2.14%",
      isPositive: true,
    },
    {
      name: "Ethereum",
      icon: "/dashboard/images/Ethereum_3D.png",
      price: "$3,180.40",
      change: "-0.72%",
      isPositive: false,
    },
    {
      name: "Solana",
      icon: "/dashboard/images/Solana_3D.png",
      price: "$145.75",
      change: "+1.08%",
      isPositive: true,
    },
  ];

  return (
    <Sidebar className="text-white border-r border-white/10">
      <SidebarHeader className="px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-2xl font-bold text-white">StableVault</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        {/* User Profile Section */}
        <div className="flex items-center gap-2 w-full p-3 mb-2 bg-gray-800/50 rounded-lg border border-white/5">
          <Avatar>
            <AvatarImage src="/dashboard/icons/Avatar.svg" />
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-white min-w-0">
            <p className="text-sm font-medium truncate">Giyu Tomizawa</p>
            <p className="text-xs text-gray-400 truncate">giyuuzw@mail.com</p>
          </div>
          <ChevronsUpDown className="w-4 h-4 text-white shrink-0" />
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive
                className="duration-300 flex items-center gap-2 data-[active=true]:bg-[linear-gradient(169deg,rgba(42,48,54,0.80)_7.14%,#2A3036_181.56%)]  data-[active=true]:border data-[active=true]:border-white/5"
              >
                <Icon
                  src="/dashboard/icons/layout-grid-01.svg"
                  alt="Dashboard"
                />
                <span className="text-white">Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon
                  src="/dashboard/icons/currency-bitcoin-circle.svg"
                  alt="My Assets"
                />
                <span className="text-white">My Assets</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon src="/dashboard/icons/coins-swap-02.svg" alt="Trade" />
                <span className="text-white">Trade</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon src="/dashboard/icons/diamond-01.svg" alt="Staking" />
                <span className="text-white">Staking</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon
                  src="/dashboard/icons/cryptocurrency-02.svg"
                  alt="Market"
                />
                <span className="text-white">Market</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <div className="px-2">
          <SidebarSeparator className="mx-0 bg-white/10" />
        </div>

        {/* Secondary Navigation */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon
                  src="/dashboard/icons/Newspaper.svg"
                  alt="News & Trends"
                />
                <span className="text-white">News & Trends</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon src="/dashboard/icons/Files.svg" alt="Watchlist" />
                <span className="text-white">Watchlist</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="duration-300">
                <Icon src="/dashboard/icons/bar-chart-10.svg" alt="Analytics" />
                <span className="text-white">Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <div className="px-2">
          <SidebarSeparator className="mx-0 bg-white/10" />
        </div>
        {/* My Watchlist Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 uppercase text-xs px-2">
            My Watchlist
          </SidebarGroupLabel>
          <SidebarMenu>
            {watchlistItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton className="duration-300 h-auto py-2">
                  <div className="relative w-6 h-6 shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start min-w-0">
                    <span className="text-gray-400 text-xs font-medium truncate w-full">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm truncate w-full">
                        {item.price}
                      </span>
                      <Badge
                        variant={item.isPositive ? "default" : "destructive"}
                        className={cn(
                          "shrink-0 text-xs font-medium rounded-sm py-1 px-1.5 bg-gray-100/10 hover:bg-transparent border border-gray-100/10 duration-300 transition-all",
                          item.isPositive ? " text-green-500" : " text-red-500"
                        )}
                      >
                        {item.change}
                        {item.isPositive ? (
                          <ArrowUpRight className="w-3 h-3 mr-[0.3px]" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 mr-[0.3px]" />
                        )}
                      </Badge>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-2 flex flex-col gap-2">
        <SidebarMenuButton className="duration-300">
          <Icon src="/dashboard/icons/help-octagon.svg" alt="Help center" />
          <span className="text-white">Help center</span>
        </SidebarMenuButton>
        <SidebarMenuButton className="duration-300">
          <Icon src="/dashboard/icons/gift-01.svg" alt="Referral" />
          <span className="text-white">Referral</span>
        </SidebarMenuButton>

        {/* Promotional Card */}
        <div className="relative p-4 rounded-lg mt-2 overflow-hidden border border-gray-700/50">
          {/* Background pattern effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/dashboard/images/bg-card-cta.png"
              alt="Background"
              fill
              className="object-cover"
              sizes="100%"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gray-900/60" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-start gap-3">
            {/* Bitcoin 3D Image */}
            <div className="relative w-24 h-24 shrink-0 opacity-90">
              <Image
                src="/dashboard/images/3d-coin.png"
                alt="Bitcoin"
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-sm mb-1">
                Earn while you sleep
              </h3>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                Put your idle crypto to work with flexible yield options.
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="h-7 px-3 text-xs bg-gray-700 hover:bg-gray-600 text-white border-0"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
