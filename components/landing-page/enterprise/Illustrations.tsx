"use client";

import {
  Search,
  Mic,
  Code,
  Grid3x3,
  Plus,
  Lock,
  Zap,
  MessageSquare,
} from "lucide-react";

// Chatbot Illustration - AI for the whole team
export function ChatbotIllustration() {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      {/* Input Field */}
      <div className="relative">
        <input
          type="text"
          placeholder="Ask anythings..."
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 backdrop-blur-sm"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white/60 transition-colors hover:bg-white/20">
          <Plus className="h-4 w-4" />
        </button>
        <button className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/20">
          <Search className="h-3.5 w-3.5" />
          Web Search
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white/60 transition-colors hover:bg-white/20">
          <Mic className="h-4 w-4" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white/60 transition-colors hover:bg-white/20">
          <Code className="h-4 w-4" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white/60 transition-colors hover:bg-white/20">
          <Grid3x3 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// Security Illustration - Enterprise security
export function SecurityIllustration() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative">
        {/* Outer Glow Circle */}
        <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/20 blur-xl" />

        {/* Inner Circle */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm">
          {/* Padlock Icon */}
          <Lock className="h-16 w-16 text-white/90" strokeWidth={1.5} />

          {/* Network Pattern Overlay */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40" />
            <div className="absolute left-1/4 top-1/4 h-0.5 w-0.5 rounded-full bg-white/30" />
            <div className="absolute right-1/4 top-1/4 h-0.5 w-0.5 rounded-full bg-white/30" />
            <div className="absolute bottom-1/4 left-1/4 h-0.5 w-0.5 rounded-full bg-white/30" />
            <div className="absolute bottom-1/4 right-1/4 h-0.5 w-0.5 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Integrations Illustration - Integrate everything
export function IntegrationsIllustration() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-40 w-40">
        {/* Central Icon */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
          <span className="text-2xl font-bold text-white">ID</span>
        </div>

        {/* Connected Icons */}
        {/* Top - Google Drive */}
        <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
          <div className="h-6 w-6 rounded-sm bg-white/20" />
        </div>

        {/* Left - Database/Cloud */}
        <div className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-md">
          <div className="h-5 w-5 rounded-full border-2 border-white/30" />
        </div>

        {/* Right - Gmail */}
        <div className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 shadow-md">
          <span className="text-lg font-bold text-white">M</span>
        </div>

        {/* Bottom - Calendar/Tasks */}
        <div className="absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 shadow-md">
          <div className="h-5 w-5 border-2 border-white/30" />
        </div>

        {/* Connection Lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 160 160"
        >
          {/* Top line */}
          <line
            x1="80"
            y1="80"
            x2="80"
            y2="20"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          {/* Left line */}
          <line
            x1="80"
            y1="80"
            x2="20"
            y2="80"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          {/* Right line */}
          <line
            x1="80"
            y1="80"
            x2="140"
            y2="80"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          {/* Bottom line */}
          <line
            x1="80"
            y1="80"
            x2="80"
            y2="140"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </svg>
      </div>
    </div>
  );
}

// Workflow Illustration - Fast and intuitive
export function WorkflowIllustration() {
  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="flex w-full items-center justify-between gap-3">
        {/* Seller Bubble */}
        <div className="flex flex-1 items-center justify-center rounded-full bg-blue-500/30 px-4 py-2 backdrop-blur-sm">
          <span className="text-xs font-medium text-white">Seller</span>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <div className="h-0.5 w-8 bg-white/30" />
          <div className="h-0 w-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white/30" />
        </div>

        {/* AI Chatbots Center */}
        <div className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 shadow-lg">
          <Zap className="h-4 w-4 text-white" />
          <span className="text-xs font-semibold text-white">AI Chatbots</span>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <div className="h-0 w-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white/30" />
          <div className="h-0.5 w-8 bg-white/30" />
        </div>

        {/* Customer Bubble */}
        <div className="flex flex-1 items-center justify-center rounded-full bg-blue-500/30 px-4 py-2 backdrop-blur-sm">
          <span className="text-xs font-medium text-white">Customer</span>
        </div>
      </div>
    </div>
  );
}
