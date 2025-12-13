"use client";

import { useMemo } from "react";
import Image from "next/image";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import type { MarketData } from "@/constants/dashboard";
import {
  formatMarketCap,
  formatCirculatingSupply,
} from "@/constants/dashboard";
import { cn } from "@/lib/utils";

export function useMarketColumns(): ColumnDef<MarketData>[] {
  return useMemo(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="h-auto p-0 hover:bg-transparent text-gray-400 hover:text-white font-medium cursor-pointer"
            >
              Name
              {column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-3 w-3" />
              ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-3 w-3" />
              ) : (
                <ArrowUpDown className="ml-2 h-3 w-3" />
              )}
            </Button>
          );
        },
        cell: ({ row }) => {
          const market = row.original;
          return (
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={market.iconUrl}
                  alt={market.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-white">
                  {market.symbol}
                </span>
                <span className="text-sm text-gray-400">{market.name}</span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "price",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="h-auto p-0 hover:bg-transparent text-gray-400 hover:text-white font-medium cursor-pointer"
            >
              Price (USD)
              {column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-3 w-3" />
              ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-3 w-3" />
              ) : (
                <ArrowUpDown className="ml-2 h-3 w-3" />
              )}
            </Button>
          );
        },
        cell: ({ row }) => {
          const price = row.original.price;
          return (
            <span className="text-base text-white">
              $
              {price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          );
        },
      },
      {
        accessorKey: "marketCap",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="h-auto p-0 hover:bg-transparent text-gray-400 hover:text-white font-medium cursor-pointer"
            >
              Market Cap (USD)
              {column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-3 w-3" />
              ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-3 w-3" />
              ) : (
                <ArrowUpDown className="ml-2 h-3 w-3" />
              )}
            </Button>
          );
        },
        cell: ({ row }) => {
          return (
            <span className="text-base text-white">
              {formatMarketCap(row.original.marketCap)}
            </span>
          );
        },
      },
      {
        accessorKey: "circulatingSupply",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="h-auto p-0 hover:bg-transparent text-gray-400 hover:text-white font-medium cursor-pointer"
            >
              Circulating Supply
              {column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-3 w-3" />
              ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-3 w-3" />
              ) : (
                <ArrowUpDown className="ml-2 h-3 w-3" />
              )}
            </Button>
          );
        },
        cell: ({ row }) => {
          const market = row.original;
          return (
            <span className="text-base text-white">
              {formatCirculatingSupply(market.circulatingSupply, market.symbol)}
            </span>
          );
        },
      },
      {
        accessorKey: "change24h",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="h-auto p-0 hover:bg-transparent text-gray-400 hover:text-white font-medium cursor-pointer"
            >
              Change 24h
              {column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-3 w-3" />
              ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-3 w-3" />
              ) : (
                <ArrowUpDown className="ml-2 h-3 w-3" />
              )}
            </Button>
          );
        },
        cell: ({ row }) => {
          const change = row.original.change24h;
          const isPositive = change > 0;
          const isZero = change === 0;
          const changeColor = isPositive
            ? "text-[#00FF88]"
            : isZero
            ? "text-gray-400"
            : "text-red-500";

          return (
            <span className={cn("text-base font-medium", changeColor)}>
              {isPositive ? "+" : ""}
              {change.toFixed(2)}%
            </span>
          );
        },
      },
    ],
    []
  );
}
