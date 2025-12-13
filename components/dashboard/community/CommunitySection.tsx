"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Heart, MessageCircle, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { communityPosts, type CommunityPost } from "@/constants/community";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface PostCardProps {
  post: CommunityPost;
  isActive: boolean;
}

function PostCard({ post, isActive }: PostCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-[#1F2529] rounded-xl p-4 border border-white/5 shrink-0",
        "w-full"
      )}
      initial={{ opacity: 0.6, scale: 0.95 }}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* User Info */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <motion.div
          className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-white/10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Image
            src={post.avatarUrl}
            alt={post.username}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Username and Timestamp */}
        <div className="flex-1 min-w-0">
          <motion.div
            className="text-sm font-semibold text-white mb-0.5"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0.8 }}
          >
            {post.username}
          </motion.div>
          <motion.div
            className="text-xs text-gray-400"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0.7 }}
          >
            {post.timestamp}
          </motion.div>
        </div>
      </div>

      {/* Post Content */}
      <motion.div
        className="text-sm text-white/90 mb-4 leading-relaxed"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0.8 }}
      >
        {post.content}
      </motion.div>

      {/* Engagement Metrics */}
      <div className="flex items-center gap-4">
        {/* Likes */}
        <motion.button
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Heart className="w-4 h-4" />
          <span className="text-xs">{post.likes}</span>
        </motion.button>

        {/* Comments */}
        <motion.button
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">{post.comments}</span>
        </motion.button>

        {/* Share */}
        <motion.button
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors ml-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function CommunitySection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prev) =>
      prev === communityPosts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card className="bg-[#191D21] border-white/5 p-6 w-full rounded-xl">
      {/* Header */}
      <h2 className="text-xl font-semibold text-white mb-6">Community</h2>

      {/* Carousel Container */}
      <div className="relative mb-6 overflow-hidden">
        {/* Cards Container with Animation */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: `-${currentCardIndex * 100}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: `80%`,
            }}
          >
            {communityPosts.map((post, index) => {
              const isActive = index === currentCardIndex;
              return <PostCard key={post.id} post={post} isActive={isActive} />;
            })}
          </motion.div>
        </div>

        {/* Right Side Overlay Gradient */}
        {communityPosts.length > 1 && (
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#191D21] via-[#191D21]/60 to-transparent pointer-events-none z-10" />
        )}

        {/* Carousel Navigation */}
        {communityPosts.length > 1 && (
          <motion.button
            onClick={handleNextCard}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center z-20 shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label="Next post"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        )}

        {/* Carousel Indicators */}
        {communityPosts.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {communityPosts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={cn("h-1.5 rounded-full transition-all duration-300")}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to post ${index + 1}`}
              >
                <motion.div
                  className={cn(
                    "h-full rounded-full",
                    index === currentCardIndex ? "bg-white/60" : "bg-white/20"
                  )}
                  animate={{
                    width: index === currentCardIndex ? "2rem" : "0.375rem",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
