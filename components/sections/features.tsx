"use client";

import { Card } from "@/components/ui/card";
import { Code2, Package, FileStack } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  code?: string;
}

const features: Feature[] = [
  {
    icon: FileStack,
    title: "Modern Framework",
    description: "A prebuilt, opinionated foundation.",
  },
  {
    icon: Package,
    title: "Try the CLI",
    description: "A frontend template ready to go for you to build with.",
    code: "npx simpli-frontend my-project"
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Built by developers for anyone to use.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid gap-20 lg:grid-cols-3 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="p-12 flex flex-col">
              <feature.icon className="h-16 w-16 mb-8" />
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
                {feature.description}
              </p>
              {feature.code && (
                <CodeBlock code={feature.code} className="mt-auto" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}