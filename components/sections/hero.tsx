"use client";

import { Badge } from "@/components/ui/badge";
import ActionSearchBar from "@/components/action-search-bar";
import { Dispatch, SetStateAction } from "react";

interface HeroSectionProps {
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
}

export function HeroSection({ setIsSearchOpen }: HeroSectionProps) {
  return (
    <section className="pt-8 pb-8">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-3 mb-4">
            <Badge variant="secondary" className="rounded-full text-base px-4 py-1">
              ✨ New CLIs Released
            </Badge>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Build faster, Ship smarter
            </h1>
          </div>
          <div className="w-full max-w-3xl">
            <ActionSearchBar setIsSearchOpen={setIsSearchOpen} />
          </div>
        </div>
      </div>
    </section>
  );
}