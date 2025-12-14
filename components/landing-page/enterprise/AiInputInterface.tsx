import { motion } from "motion/react";
import { Plus, Globe, Mic, Sparkles } from "lucide-react";

import PulsingGrid2 from "./PulseGrid2";

const AIInputInterface = () => {
  return (
    <div className="relative w-full p-12 bg-linear-to-b from-transparent to-blue-900/35 backdrop-blur-3xl border border-slate-200/50 rounded-3xl overflow-hidden flex flex-col items-center justify-center font-sans">
      <div className="absolute z-0 bottom-0">
        <PulsingGrid2 />
      </div>

      {/* --- Main Content Content --- */}
      <div className="relative z-10 w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-2xl font-medium text-slate-300 tracking-tight mb-4">
            AI for the whole team
          </h1>
          <p className="text-lg text-slate-300/80 max-w-2xl leading-relaxed">
            Bring workflow automation and AI to the entire organization with
            apps, chatbots, and integrations.
          </p>
        </motion.div>

        {/* Input Card Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="w-full lg:px-10 "
        >
          {/* The Card Container */}
          <div className="group relative w-full  bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-4 shadow-2xl shadow-slate-900/20 overflow-hidden">
            {/* Inner subtle gradient glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-50" />

            <div className="flex flex-col h-48 justify-between">
              {/* Text Area Input */}
              <input
                type="text"
                placeholder="Ask anythings ..."
                className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-xl outline-none px-2 mt-2"
              />

              {/* Bottom Actions Bar */}
              <div className="flex items-center justify-between mt-auto">
                {/* Left Actions */}
                <div className="flex items-center gap-3">
                  {/* Plus Button */}
                  <button className="p-3 rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                    <Plus size={20} />
                  </button>

                  {/* Web Search Pill */}
                  <button className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                    <Globe size={18} />
                    <span className="text-sm font-medium">Web Search</span>
                  </button>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                  {/* Mic Button */}
                  <button className="p-3 rounded-full bg-slate-700/30 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                    <Mic size={20} />
                  </button>

                  {/* Magic Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 group-hover:shadow-blue-500/60 transition-shadow"
                  >
                    <Sparkles
                      size={20}
                      fill="currentColor"
                      className="text-white"
                    />

                    {/* Pulsing Glow Ring */}
                    <span className="absolute inset-0 rounded-full ring-2 ring-white/20 animate-pulse" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInputInterface;
