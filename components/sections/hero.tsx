"use client";

import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="rounded-full">
              ✨ New CLI Released
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build faster, Ship smarter
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The all-in-one framework for modern development. Skip the setup, focus on shipping
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}