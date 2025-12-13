"use client";

import { motion } from "motion/react";
import { Plus, Globe, Mic, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const suggestedPrompts = [
  "What is Moniveo",
  "AI Enhance your Finance Operations",
  "AI Enhance your business",
];

const chatMessages = [
  {
    id: 1,
    text: "AI Enhance your Finance Operations",
    isUser: true,
  },
];

export function ChatbotMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          AI CHATBOTS
        </h3>

        {/* Chat Card */}
        <Card className="shadow-lg">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-xl pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/20">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <p className="text-sm font-medium text-white">
                Welcome! How can we help you today?
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-6">
            {/* Suggested Prompts */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-wrap gap-2"
            >
              {suggestedPrompts.map((prompt, index) => (
                <motion.button
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-300"
                >
                  {prompt}
                </motion.button>
              ))}
            </motion.div>

            {/* Chat Messages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="space-y-3"
            >
              {chatMessages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Input Area */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-gray-500 hover:text-gray-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 text-xs text-gray-600 hover:text-gray-800"
              >
                <Globe className="h-3.5 w-3.5" />
                Web Search
              </Button>
              <Input
                placeholder="Ask anythings ..."
                className="flex-1 border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-gray-500 hover:text-gray-700"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                className="h-8 w-8 shrink-0 bg-blue-600 text-white hover:bg-blue-700"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
