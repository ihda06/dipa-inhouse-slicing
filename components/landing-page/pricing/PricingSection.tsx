"use client";

import { motion } from "motion/react";
import { PricingToggle } from "./PricingToggle";
import { PricingCard } from "./PricingCard";

export function PricingSection() {
  return (
    <section className="  border-x border-gray-200 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-600">
            PRICING
          </p>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Start for free
            <br />
            Get used to winning
          </h2>
          <PricingToggle />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-12 pt-3"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <PricingCard
              title="Basic"
              description="Kickstart your product research in your business at no cost."
              price="$0 / month"
              features={[
                "25 users",
                "Email and live chat support",
                "AI power-ups",
              ]}
              ctaText="Current Plan"
              isCurrentPlan={true}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <PricingCard
              title="Enterprise"
              description="Fuel your product workflow with more advanced research."
              price="$12 / month"
              features={[
                "Unlimited workspace",
                "Advanced admin permissions and app controls",
                "Annual task limits",
              ]}
              ctaText="Upgrade Now"
              isPopular={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
