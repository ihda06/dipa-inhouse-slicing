"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional for now as per requirements
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-md"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Subscribe to our newsletter
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          required
        />
        <Button
          type="submit"
          className="bg-linear-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 whitespace-nowrap"
        >
          Subscribe
        </Button>
      </form>
    </motion.div>
  );
}
