"use client";

import { motion } from "motion/react";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";
import AIInputInterface from "./AiInputInterface";

const features = [
  {
    id: 1,
    title: "AI for the whole team",
    description:
      "Bring workflow automation and AI to the entire organization with apps, chatbots, and integrations.",
    illustration: "chatbot",
  },
  {
    id: 2,
    title: "Enterprise security",
    description:
      "Keep data safe with best-in-class security protocols and AI guardrails.",
    illustration: "security",
  },
  {
    id: 3,
    title: "Integrate everything",
    description:
      "Connect any tool, LLM, or app to orchestrate intelligent workflows.",
    illustration: "integrations",
  },
  {
    id: 4,
    title: "Fast and intuitive",
    description:
      "Build easily with drag and drop, low/no-code and collaboration tools.",
    illustration: "workflow",
  },
];

export default function EnterpriseSection() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <Image
          src="/enterprise-bg.webp"
          alt="Enterprise background"
          fill
          priority
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />
      </div>
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 border-x border-gray-800 relative z-10">
        <div className="px-4 sm:px-8 md:px-12 py-16 md:py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-400">
              AI + AUTOMATION
            </p>
            <h3 className="text-xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Enterprise-ready
              <br />
              automation in seconds
            </h3>
          </motion.div>
          <div className=" space-y-4">
            {/* Feature Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="w-full md:w-[60%]">
                <AIInputInterface />
              </div>
              <div className="w-full md:w-[40%] border border-slate-200/50 rounded-3xl  ">
                <div className="relative flex flex-col w-full h-full p-12">
                  <Image
                    src="/enterprise/bg-2.png"
                    alt="Enterprise secondary background"
                    fill
                    className="object-cover object-center w-full h-full rounded-2xl shadow-lg"
                    draggable={false}
                    priority={false}
                  />
                  <div className="flex flex-1 items-center justify-center">
                    <Image
                      src="/enterprise/object-2.png"
                      alt="Integrations"
                      width={500}
                      height={500}
                      className="size-56 md:size-36 lg:size-56"
                      draggable={false}
                      priority={false}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                      Integrate Everything
                    </h3>
                    <p className="text-base lg:text-lg text-gray-400">
                      Connect any tool, LLM, or app to orchestrate intelligent
                      workflows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="w-full md:w-[40%] flex flex-col p-12 border border-slate-200/50 bg-linear-to-b from-transparent to-blue-900/35 backdrop-blur-3xl rounded-3xl ">
                <div className=" space-y-4">
                  <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                    Integrate Everything
                  </h3>
                  <p className="text-base text-gray-400">
                    Connect any tool, LLM, or app to orchestrate intelligent
                    workflows.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/enterprise/object-3.png"
                    alt="Integrations"
                    width={500}
                    height={500}
                    className="size-72 md:size-40 lg:size-72"
                    draggable={false}
                    priority={false}
                  />
                </div>
              </div>
              <div className="w-full md:w-[60%] flex flex-col p-12 border border-slate-200/50 bg-linear-to-r from-transparent to-blue-900/35 backdrop-blur-3xl rounded-3xl ">
                <div className=" space-y-4">
                  <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                    Fast and Intuitive
                  </h3>
                  <p className="text-base text-gray-400">
                    Build easily with drag and drop, low/no-code and
                    collaboration tools.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <Image
                    src="/enterprise/object-4.png"
                    alt="Integrations"
                    width={500}
                    height={500}
                    className="w-100"
                    draggable={false}
                    priority={false}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
