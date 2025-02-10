"use client";

import { Card } from "@/components/ui/card";
import { Code2, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy your applications in seconds with our optimized infrastructure.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Built by developers for developers, with extensive API support.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <feature.icon className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}