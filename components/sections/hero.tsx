"use client";

import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";

export function HeroSection() {
  return (
    <section className="pt-10 pb-24">
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
              Run one command → Get a fully structured Next.js app with UI & TailwindCSS, instantly.
            </p>
          </div>
          <div className="w-full max-w-xl pt-8">
            <CodeBlock code="npx simpli-frontend my-project" />
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400">
              No Fluff. Just ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}