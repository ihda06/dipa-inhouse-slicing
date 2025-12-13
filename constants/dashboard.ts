// Portfolio data structure
export interface PortfolioData {
  currentValue: number;
  percentageChange: number;
  absoluteChange: number;
}

// Chart data point structure
export interface ChartDataPoint {
  month: string;
  value: number;
  date: string; // Full date for tooltip (e.g., "March 19, 2025")
  portfolioWorth: number; // Portfolio worth for tooltip
  topMovers: string; // Top movers as string (e.g., "BTC & ETH")
}

// Tooltip data structure
export interface TooltipData {
  date: string;
  portfolioWorth: number;
  topMovers: string;
}

// Time range options
export const TIME_RANGES = ["All", "1W", "1M", "3M", "6M", "1Y"] as const;
export type TimeRange = (typeof TIME_RANGES)[number];

// Portfolio data (matching Figma: $94.726.50, +0.33, +$2.987)
export const portfolioData: PortfolioData = {
  currentValue: 94726.5,
  percentageChange: 0.33,
  absoluteChange: 2987,
};

// Chart data points (6 months: Jan-Jun) matching Figma design
// Y-axis values: 0, 80, 160, 240, 320 (scaled to portfolio values)
// Based on Figma, the chart shows fluctuations with a dip in March/April
export const chartData: ChartDataPoint[] = [
  {
    month: "Jan",
    value: 85, // Scaled value for chart (0-320 range)
    date: "January 15, 2025",
    portfolioWorth: 85000,
    topMovers: "BTC & ETH",
  },
  {
    month: "Feb",
    value: 100,
    date: "February 12, 2025",
    portfolioWorth: 92000,
    topMovers: "ETH & BTC",
  },
  {
    month: "March",
    value: 60, // Dip shown in Figma
    date: "March 19, 2025", // Exact date from Figma tooltip
    portfolioWorth: 21738, // Value from Figma tooltip
    topMovers: "BTC & ETH", // Exact format from Figma
  },
  {
    month: "Apr",
    value: 70,
    date: "April 8, 2025",
    portfolioWorth: 75000,
    topMovers: "ETH & BTC",
  },
  {
    month: "May",
    value: 120,
    date: "May 22, 2025",
    portfolioWorth: 88000,
    topMovers: "BTC & ETH",
  },
  {
    month: "Jun",
    value: 160, // Recovery towards June
    date: "June 15, 2025",
    portfolioWorth: 94726.5, // Current value
    topMovers: "ETH & BTC",
  },
];

// Filter chart data based on time range
export function getFilteredChartData(timeRange: TimeRange): ChartDataPoint[] {
  switch (timeRange) {
    case "All":
      return chartData;
    case "1W":
      // Return last week's data (last 2 points for demo)
      return chartData.slice(-2);
    case "1M":
      // Return last month's data (last 1 point for demo)
      return chartData.slice(-1);
    case "3M":
      // Return last 3 months
      return chartData.slice(-3);
    case "6M":
      // Return all 6 months (default active)
      return chartData;
    case "1Y":
      // For 1Y, we'll use all available data
      return chartData;
    default:
      return chartData;
  }
}

// Format currency with dots as thousand separators (matching Figma: $94.726.50)
export function formatCurrency(value: number): string {
  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // Replace only thousand separators (commas) with dots, keep decimal point as is
  // Split by decimal point, replace commas in integer part, then rejoin
  const parts = formatted.split(".");
  const integerPart = parts[0].replace(/,/g, ".");
  return `$${parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart}`;
}

// Format percentage change
export function formatPercentageChange(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}`;
}

// Asset data structure
export interface Asset {
  id: string;
  symbol: string;
  name: string;
  icon: string; // Icon component name or emoji/unicode
  color?: string; // Optional color for icon background
}

// Action types for Quick Access
export type ActionType = "Swap" | "Deposit" | "Withdraw" | "Transfer";

// Asset list (USDT, ETH, BTC, etc.)
export const assets: Asset[] = [
  {
    id: "usdt",
    symbol: "USDT",
    name: "Tether",
    icon: "💵", // Using emoji for now, can be replaced with icon component
    color: "#26A17B",
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    icon: "💜", // Purple for ETH
    color: "#627EEA",
  },
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    icon: "🟠", // Orange for BTC
    color: "#F7931A",
  },
];

// Exchange rates (base: USDT)
// Format: { fromAssetId: { toAssetId: rate } }
export const exchangeRates: Record<string, Record<string, number>> = {
  usdt: {
    eth: 1 / 1850, // 1 ETH = 1,850 USDT, so 1 USDT = 1/1850 ETH
    btc: 1 / 45000, // Example: 1 BTC = 45,000 USDT
  },
  eth: {
    usdt: 1850, // 1 ETH = 1,850 USDT
    btc: 1850 / 45000, // ETH to BTC rate
  },
  btc: {
    usdt: 45000, // 1 BTC = 45,000 USDT
    eth: 45000 / 1850, // BTC to ETH rate
  },
};

// Get exchange rate between two assets
export function getExchangeRate(
  fromAssetId: string,
  toAssetId: string
): number {
  if (fromAssetId === toAssetId) return 1;
  return exchangeRates[fromAssetId]?.[toAssetId] || 1;
}

// Format exchange rate display (e.g., "1 ETH = 1,850 USDT")
export function formatExchangeRate(fromAsset: Asset, toAsset: Asset): string {
  const rate = getExchangeRate(fromAsset.id, toAsset.id);
  return `1 ${fromAsset.symbol} = ${rate.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })} ${toAsset.symbol}`;
}

// Action types with icons
export const ACTION_TYPES: ActionType[] = [
  "Swap",
  "Deposit",
  "Withdraw",
  "Transfer",
];

// Asset holding data structure (for Assets section)
export interface AssetHolding {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  value: number; // Value in USD
  changePercentage: number; // Positive or negative percentage change
  iconUrl: string; // Path to icon image
}

// Asset holdings dummy data (matching Figma design)
export const assetHoldings: AssetHolding[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.05,
    value: 63000,
    changePercentage: 3.25,
    iconUrl: "/dashboard/images/Bitcoin_3D.png",
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    amount: 1.2,
    value: 2450,
    changePercentage: 1.12,
    iconUrl: "/dashboard/images/Ethereum_3D.png",
  },
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    amount: 3200,
    value: 0.42,
    changePercentage: -1.54,
    iconUrl: "/dashboard/images/usdcoin_3D.png",
  },
];

// Market data structure for Markets table
export interface MarketData {
  id: string;
  symbol: string;
  name: string;
  iconUrl: string;
  price: number; // Price in USD
  marketCap: number; // Market cap in USD
  circulatingSupply: number; // Circulating supply
  change24h: number; // 24h change percentage
}

// Market data dummy data (matching Figma design)
export const marketData: MarketData[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    iconUrl: "/dashboard/images/Bitcoin_3D.png",
    price: 64230.15,
    marketCap: 1265000000,
    circulatingSupply: 19700000,
    change24h: 2.31,
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    iconUrl: "/dashboard/images/Ethereum_3D.png",
    price: 3280.4,
    marketCap: 394000000,
    circulatingSupply: 120000000,
    change24h: 1.12,
  },
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    iconUrl: "/dashboard/images/usdcoin_3D.png",
    price: 1.0,
    marketCap: 112000000,
    circulatingSupply: 112000000,
    change24h: 0.01,
  },
  {
    id: "shib",
    symbol: "SHIB",
    name: "Shiba Inu",
    iconUrl: "/dashboard/images/3d-coin.png", // Using placeholder, can be replaced
    price: 2.35,
    marketCap: 117500000,
    circulatingSupply: 50000000,
    change24h: 0.0,
  },
  {
    id: "atom",
    symbol: "ATOM",
    name: "Cosmos",
    iconUrl: "/dashboard/images/3d-coin.png", // Using placeholder, can be replaced
    price: 580.2,
    marketCap: 89500000,
    circulatingSupply: 154000000,
    change24h: -0.56,
  },
  {
    id: "eos",
    symbol: "EOS",
    name: "EOS",
    iconUrl: "/dashboard/images/3d-coin.png", // Using placeholder, can be replaced
    price: 145.75,
    marketCap: 65800000,
    circulatingSupply: 451000000,
    change24h: 3.87,
  },
];

// Format market cap with commas
export function formatMarketCap(value: number): string {
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

// Format circulating supply
export function formatCirculatingSupply(value: number, symbol: string): string {
  return `${value.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })} ${symbol}`;
}

// Staking summary card data structure
export interface StakingSummary {
  id: string;
  symbol: string;
  apr: number; // APR percentage
  stakedAmount: number;
  estimatedMonthlyEarns: number;
  iconUrl: string;
  iconBgColor?: string;
}

// Staking summary data (matching Figma design)
export const stakingSummaries: StakingSummary[] = [
  {
    id: "eth",
    symbol: "ETH",
    apr: 18.5,
    stakedAmount: 5.32,
    estimatedMonthlyEarns: 0.08,
    iconUrl: "/dashboard/images/Ethereum_3D.png",
    iconBgColor: "#627EEA",
  },
  {
    id: "usdc",
    symbol: "USDC",
    apr: 11.2,
    stakedAmount: 10.7,
    estimatedMonthlyEarns: 0.29,
    iconUrl: "/dashboard/images/usdcoin_3D.png",
    iconBgColor: "#2775CA",
  },
];

// Staking transaction type
export type StakingTransactionType = "Staked" | "Unstaked" | "Reward";

// Staking transaction data structure
export interface StakingTransaction {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  type: StakingTransactionType;
  date: string; // Format: YYYY-MM-DD
  value: number; // Value in USD
  apr: number; // APR percentage
  iconUrl: string;
}

// Staking transactions data (matching Figma design)
export const stakingTransactions: StakingTransaction[] = [
  {
    id: "matic-1",
    symbol: "MATIC",
    name: "Polygon",
    amount: 2.5,
    type: "Staked",
    date: "2025-08-19",
    value: 6250,
    apr: 18.5,
    iconUrl: "/dashboard/images/polygon_3D.png",
  },
  {
    id: "avax-1",
    symbol: "AVAX",
    name: "Avalanche",
    amount: 1000,
    type: "Unstaked",
    date: "2025-08-19",
    value: 420,
    apr: 8.2,
    iconUrl: "/dashboard/images/avalanche_3D.png",
  },
  {
    id: "ape-1",
    symbol: "APE",
    name: "ApeCoin",
    amount: 0.15,
    type: "Reward",
    date: "2025-08-19",
    value: 27,
    apr: 11.2,
    iconUrl: "/dashboard/images/apecoin_3D.png", // Placeholder - replace when APE icon available
  },
];
