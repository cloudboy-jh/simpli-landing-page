"use client";

import { Button } from "@/components/ui/button";
import { Origami, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Origami className="h-8 w-8" />
              <span className="font-bold">Simpli</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Resources</h4>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://nextjs.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <Image
                    src="https://nextjs.org/static/favicon/favicon-32x32.png"
                    alt="Next.js"
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                  Next.js
                </a>
                <a 
                  href="https://tailwindcss.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <Image
                    src="https://tailwindcss.com/favicons/favicon-32x32.png"
                    alt="Tailwind CSS"
                    width={20}
                    height={20}
                  />
                  Tailwind
                </a>
                <a 
                  href="https://lucide.dev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <Image
                    src="https://lucide.dev/favicon.ico"
                    alt="Lucide Icons"
                    width={20}
                    height={20}
                  />
                  Lucide
                </a>
                <a 
                  href="https://ui.shadcn.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <Image
                    src="https://ui.shadcn.com/favicon.ico"
                    alt="shadcn/ui"
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                  shadcn/ui
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Company</h4>
              <div className="flex flex-col space-y-4">
                <a href="#about-section" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="/info" className="text-gray-600 hover:text-gray-900">FAQ</a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/Jackhortonlol" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/cloudboy-jh"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jack-s-horton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          © 2025 Simpli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}