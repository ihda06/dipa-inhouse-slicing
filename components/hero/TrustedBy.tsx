"use client";

import { motion } from "motion/react";

const companies = [
  { name: "eBay", logo: "eBay" },
  { name: "Expedia", logo: "Expedia" },
  { name: "DocuSign", logo: "DocuSign" },
  { name: "Phantom", logo: "Phantom" },
];

export function TrustedBy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 w-full">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gray-600 p-4 border-x border-gray-200 text-sm md:text-base font-medium whitespace-nowrap flex items-center col-span-2"
      >
        Trusted by 100+ world&apos;s best brand
      </motion.div>

      {/* Logos Grid */}
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border-r border-gray-200 p-4 w-full md:p-6 flex items-center justify-center hover:border-blue-600 hover:border hover:text-blue-600 transition-all duration-200 cursor-pointer"
        >
          {company.logo === "Expedia" ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-lg md:text-xl">
                {company.name}
              </span>
            </div>
          ) : (
            <span className="text-gray-800 font-semibold text-lg md:text-xl">
              {company.logo}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
