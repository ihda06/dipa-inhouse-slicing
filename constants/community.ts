// Community post data structure
export interface CommunityPost {
  id: string;
  username: string;
  avatarUrl: string; // Path to avatar image
  timestamp: string; // e.g., "1h ago", "4h ago"
  content: string; // Post content text
  likes: number; // Number of likes
  comments: number; // Number of comments
}

// Community posts dummy data
export const communityPosts: CommunityPost[] = [
  {
    id: "1",
    username: "btcWhale",
    avatarUrl: "/dashboard/icons/Avatar.svg",
    timestamp: "1h ago",
    content: "Market looks bullish, but don't forget to secure profits! 💰",
    likes: 29,
    comments: 5,
  },
  {
    id: "2",
    username: "cryptoNin",
    avatarUrl: "/dashboard/icons/Avatar.svg",
    timestamp: "4h ago",
    content: "Anyone staking just doubled after the latest update! 🚀",
    likes: 9,
    comments: 3,
  },
  {
    id: "3",
    username: "ethTrader",
    avatarUrl: "/dashboard/icons/Avatar.svg",
    timestamp: "6h ago",
    content:
      "ETH breaking resistance levels. This could be the start of something big! 📈",
    likes: 45,
    comments: 12,
  },
  {
    id: "4",
    username: "defiMaster",
    avatarUrl: "/dashboard/icons/Avatar.svg",
    timestamp: "8h ago",
    content:
      "New DeFi protocol launching next week. Early access for stakers! ⚡",
    likes: 67,
    comments: 18,
  },
  {
    id: "5",
    username: "cryptoAnalyst",
    avatarUrl: "/dashboard/icons/Avatar.svg",
    timestamp: "12h ago",
    content:
      "Technical analysis shows strong support at current levels. HODL! 💎",
    likes: 34,
    comments: 8,
  },
  {
    id: "6",
    username: "nftCollector",
    avatarUrl: "/dashboard/icons/Avatar.svg",
    timestamp: "1d ago",
    content: "NFT market heating up again. Time to diversify the portfolio! 🎨",
    likes: 52,
    comments: 15,
  },
];
