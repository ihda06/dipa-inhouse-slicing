"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChatbotIllustration,
  SecurityIllustration,
  IntegrationsIllustration,
  WorkflowIllustration,
} from "./Illustrations";

interface Feature {
  id: number;
  title: string;
  description: string;
  illustration: "chatbot" | "security" | "integrations" | "workflow";
}

interface FeatureCardProps {
  feature: Feature;
}

const illustrationMap = {
  chatbot: ChatbotIllustration,
  security: SecurityIllustration,
  integrations: IntegrationsIllustration,
  workflow: WorkflowIllustration,
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Illustration = illustrationMap[feature.illustration];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="group h-full border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-white">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <p className="text-sm leading-relaxed text-white/80">
            {feature.description}
          </p>
          <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg">
            <Illustration />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
