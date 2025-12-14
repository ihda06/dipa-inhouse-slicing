"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface MetricProps {
  value: string;
  label: string;
  suffix?: string;
  isNumber?: boolean;
  className?: string;
}

function Metric({
  value,
  label,
  suffix,
  isNumber = false,
  className,
}: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(isNumber ? "0" : value);

  useEffect(() => {
    if (isInView && isNumber) {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
      const textSuffix = value.replace(/[\d.]/g, "");
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(increment * step, numericValue);
        const decimals = current < 1 ? 1 : 0;
        setDisplayValue(current.toFixed(decimals) + textSuffix);
        if (step >= steps) {
          clearInterval(timer);
          setDisplayValue(value);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, isNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn("flex flex-col items-center text-center p-12", className)}
    >
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {displayValue}
        {suffix && <span className="text-4xl md:text-5xl">{suffix}</span>}
      </div>
      <div className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
        {label}
      </div>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <div className="border-y border-gray-200 ">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 border-x border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <Metric
            value="2M+"
            label="Customers building with monilabs"
            isNumber={true}
          />
          <Metric
            value="SOC 3"
            label="Standard for security and compliance"
            isNumber={false}
            className="border-x border-gray-200"
          />
          <Metric
            value="98%"
            label="Uptime, enterprise-grade reliability"
            isNumber={true}
          />
        </div>
      </div>
    </div>
  );
}
