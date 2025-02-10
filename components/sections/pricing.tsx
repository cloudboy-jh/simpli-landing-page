"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic support",
      "API access",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "99",
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For large-scale operations",
    features: [
      "Unlimited team members",
      "500GB storage",
      "24/7 dedicated support",
      "Custom solutions",
      "SLA guarantee",
      "Advanced security",
    ],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center md:max-w-[58rem] mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="p-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}