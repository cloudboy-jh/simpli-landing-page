"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhatsNextSection } from "@/components/sections/whats-next";
import { AboutSection } from "@/components/sections/about";
import { UseCasesSection } from "@/components/sections/use-cases";
import { GifDemo } from "@/components/sections/GifDemo";
import { Gallery } from "@/components/sections/Gallery";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="-mt-4">
          <HeroSection setIsSearchOpen={setIsSearchOpen} />
        </div>
        <div className={`transition-all duration-500 ease-in-out ${isSearchOpen ? 'mt-8' : '-mt-24'}`}>
          <GifDemo />
        </div>
        <Gallery />
        <UseCasesSection />
        <HowItWorksSection />
        <WhatsNextSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}