"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

const toolkitFeatures = [
  {
    id: 1,
    name: "AI Chatbots",
    iconPath: "/toolkit/ai-chatbots.svg",
    description:
      "Powerful and production-ready, our cloud platform has the solutions you need to succeed.",
    isActive: true,
  },
  {
    id: 2,
    name: "Workflows",
    iconPath: "/toolkit/workflows.svg",
    description: "",
    isActive: false,
  },
  {
    id: 3,
    name: "Tables",
    iconPath: "/toolkit/Table.svg",
    description: "",
    isActive: false,
  },
  {
    id: 4,
    name: "Interfaces",
    iconPath: "/toolkit/interface.svg",
    description: "",
    isActive: false,
  },
];

export function ToolkitSection() {
  return (
    <section className="bg-white py-8 lg:py-14 border-x border-gray-200 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          {/* Left Panel - Chatbot Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full aspect-4/5 max-w-md mx-auto lg:max-w-full">
              <Image
                src="/chat-mock.webp"
                alt="AI Chatbot interface mockup"
                fill
                className="object-contain"
                priority
                quality={90}
              />
            </div>
          </motion.div>

          {/* Right Panel - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 space-y-8 lg:order-2"
          >
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                TOOLKIT
              </h2>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                Complete toolkit for AI automation
              </h3>
            </div>

            {/* Feature List */}
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
              className=""
            >
              {toolkitFeatures.map((feature) => {
                return (
                  <motion.div
                    key={feature.id}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="group cursor-pointer transition-all"
                  >
                    <div
                      className={cn(
                        "flex gap-4 py-3 border-b border-gray-200 items-center",
                        feature.isActive && "border-blue-600 items-start"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors",
                          feature.isActive && "bg-blue-600"
                        )}
                      >
                        <Image
                          src={feature.iconPath}
                          alt={`${feature.name} icon`}
                          width={24}
                          height={24}
                          className={
                            feature.isActive ? "brightness-0 invert" : ""
                          }
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4
                          className={`text-lg font-semibold transition-colors ${
                            feature.isActive
                              ? "text-gray-900"
                              : "text-gray-700 group-hover:text-gray-900"
                          }`}
                        >
                          {feature.name}
                        </h4>
                        {feature.description && (
                          <p className="text-sm leading-relaxed text-gray-600">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
