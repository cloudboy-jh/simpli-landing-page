"use client";

import { Button } from "@/components/ui/button";
import { Origami, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CodeBlock } from "@/components/ui/code-block";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigateToFAQ = () => {
    router.push('/info');
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    router.push('/');
    setIsMenuOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToWhatsNext = () => {
    const whatsNextSection = document.getElementById('whats-next-section');
    if (whatsNextSection) {
      whatsNextSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div onClick={scrollToTop} className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Origami className="h-8 w-8" />
          <span className="text-2xl font-bold">Simpli</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-base" onClick={scrollToWhatsNext}>Coming Soon..</Button>
          <Button variant="ghost" className="text-base" onClick={scrollToAbout}>About</Button>
          <Button variant="ghost" className="text-base" onClick={navigateToFAQ}>FAQ</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-base">
                Our App Starters
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[400px] sm:w-[500px]">
              <div className="p-4 space-y-4">
                <div className="mb-2">
                  <h3 className="text-sm font-medium mb-2">Frontend</h3>
                  <CodeBlock code="npx simpli-frontend my-project" />
                </div>
                <div className="mb-2">
                  <h3 className="text-sm font-medium mb-2">Marketplace</h3>
                  <CodeBlock code="npx simpli-marketplacev1 my-new-project" />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Docs</h3>
                  <CodeBlock code="npx simpli-docsv1 my-docs-project" />
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-col space-y-4 p-4">
            <Button variant="ghost" className="text-base w-full justify-start" onClick={scrollToWhatsNext}>Coming Soon..</Button>
            <Button variant="ghost" className="text-base w-full justify-start" onClick={scrollToAbout}>About</Button>
            <Button variant="ghost" className="text-base w-full justify-start" onClick={navigateToFAQ}>FAQ</Button>
            <div className="w-full p-4 border rounded-lg bg-background/95 space-y-4">
              <div className="mb-2">
                <h3 className="text-sm font-medium mb-2">Frontend</h3>
                <CodeBlock code="npx simpli-frontend my-project" />
              </div>
              <div className="mb-2">
                <h3 className="text-sm font-medium mb-2">Marketplace</h3>
                <CodeBlock code="npx simpli-marketplacev1 my-new-project" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Docs</h3>
                <CodeBlock code="npx simpli-docsv1 my-docs-project" />
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}