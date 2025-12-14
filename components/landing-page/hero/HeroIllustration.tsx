"use client";

import { motion } from "motion/react";
import { Plus, Globe, Mic, Sparkles } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-[200px] md:h-[600px] flex items-center justify-center">
      {/* Background image already contains the central hub, integration icons, and output blocks */}
      {/* Only showing the chat interface mockup as an overlay */}

      {/* Chat Interface Mockup - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-[20px] lg:bottom-[100px] right-0 md:right-8 w-64 md:w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 md:p-4"
        style={{
          transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Chat Header */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              AI Chatbot
            </div>
            <div className="text-xs text-gray-500">Online</div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Ask anythings ..."
            className="w-full px-4 py-3 pr-20 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
              <Globe className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
