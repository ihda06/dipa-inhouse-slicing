"use client";

import { Search, Settings, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function HeaderDashboard() {
  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50 p-3 bg-[#191D21] border-b border-white/5 flex items-center justify-between px-6">
      <div className="flex items-center justify-between">
        {/* Left: Dashboard Title */}
        <h1 className="text-gray-300 text-base font-medium">Dashboard</h1>

        {/* Center: Search Input */}
        <div className="flex-1 max-w-md mx-8 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
            <Input
              type="search"
              placeholder="Search here..."
              className={cn(
                "w-full pl-10 pr-20 h-9",
                "bg-[#2A3036] border-white/5 text-gray-300",
                "placeholder:text-gray-500",
                "focus-visible:border-white/10 focus-visible:ring-white/10"
              )}
            />
            <Badge
              variant="outline"
              className={cn(
                "absolute right-2 h-5 px-1.5 rounded-sm",
                "bg-transparent border-white/10 text-gray-400",
                "text-xs font-normal"
              )}
            >
              ⌘K
            </Badge>
          </div>
        </div>
      </div>

      {/* Right: Settings and Notifications */}
      <div className="flex items-center gap-3">
        {/* Settings Button */}
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-9 px-3 gap-2",
            "bg-[#2A3036] border-white/5 text-gray-300",
            "hover:bg-[#2A3036]/80 hover:border-white/10"
          )}
        >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Button>

        {/* Notification Bell with Badge */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-9 w-9",
              "text-gray-300 hover:bg-[#2A3036] hover:text-gray-200"
            )}
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
          </Button>
          {/* Notification Badge */}
          <span
            className={cn(
              "absolute top-1.5 right-1.5",
              "w-2 h-2 rounded-full",
              "bg-red-500 border border-[#1A1F24]"
            )}
            aria-label="New notifications"
          />
        </div>
      </div>
    </header>
  );
}
