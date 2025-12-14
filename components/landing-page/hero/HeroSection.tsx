"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "./HeroIllustration";
import { TrustedBy } from "./TrustedBy";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative bg-white overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
        {/* Content wrapper with border and background */}
        <div className="relative overflow-hidden bg-white">
          {/* Background image - only covers the content area, not padding */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Home.png"
              alt="Hero background illustration"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            {/* Overlay to ensure text readability - subtle overlay to maintain background visibility */}
            <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/30 to-transparent" />
          </div>

          {/* Content wrapper */}
          <div className="relative border border-gray-200 z-10 pb-10 pt-24 md:pt-16 lg:pt-24 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-7xl mx-auto">
              {/* AI Solution Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>AI SOLUTION</span>
                </div>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                  {/* Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
                  >
                    Turn workflow into{" "}
                    <span className="text-blue-600">AI agent automations.</span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                  >
                    Powerful and production-ready, our cloud platform has the
                    solutions you need to succeed.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button
                      size="lg"
                      className="bg-linear-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 h-12 px-8 text-base font-medium"
                    >
                      Get started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right Column - Illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative z-10"
                >
                  {/* Chat Interface Mockup - Overlay on background image */}
                  <HeroIllustration />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Outside background with white background */}
      <section className="bg-white border-y border-gray-200">
        <div className=" px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TrustedBy />
          </motion.div>
        </div>
      </section>
    </>
  );
}
