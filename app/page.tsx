"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CodeExampleSection } from "@/components/sections/code-example";
import { WhatsNextSection } from "@/components/sections/whats-next";
import { FAQSection } from "@/components/sections/faq";
import { UseCasesSection } from "@/components/sections/use-cases";
import { ComparisonSection } from "@/components/sections/comparison";
import { CommunitySection } from "@/components/sections/community";
import { AboutSection } from "@/components/sections/about";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <ComparisonSection />
        <HowItWorksSection />
        <CodeExampleSection />
        <WhatsNextSection />
        <AboutSection />
        <FAQSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}