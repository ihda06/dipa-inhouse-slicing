"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Metrics from "./Metrics";

export default function PlatformSection() {
  return (
    <>
      <section className="bg-linear-to-b from-white to-blue-50 pt-8 lg:pt-14 overflow-hidden border-x border-gray-200 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wider">
                THE PLATFORM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 max-w-4xl mx-auto">
              Connected AI orchestration platform
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful and production-ready, our cloud platform has the
              solutions you need to succeed.
            </p>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-7xl mx-auto rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <Image
                src="/dashboard.webp"
                alt="Connected AI orchestration platform dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Metrics */}
        </div>
      </section>
      <Metrics />
    </>
  );
}
