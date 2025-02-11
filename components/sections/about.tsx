"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about-section" className="py-32">
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About us
          </h2>
          
          <div className="mx-auto max-w-[700px] space-y-4 text-gray-500 dark:text-gray-400 text-lg">
            <p className="px-4">
              Simpli is an open-source framework + CLI that helps developers skip the setup 
              and focus on getting past the blank page.
            </p>
            
            <div className="space-y-4">
              <p className="px-4">
                With a fully preconfigured stack including:
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 py-4">
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src="https://nextjs.org/static/favicon/favicon-32x32.png"
                    alt="Next.js"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="text-base font-bold">Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src="https://tailwindcss.com/favicons/favicon-32x32.png"
                    alt="Tailwind CSS"
                    width={32}
                    height={32}
                  />
                  <span className="text-base font-bold">Tailwind</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src="https://supabase.com/favicon/favicon-32x32.png"
                    alt="Supabase"
                    width={32}
                    height={32}
                  />
                  <span className="text-base font-bold">Supabase</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src="https://ui.shadcn.com/favicon.ico"
                    alt="ShadCN UI"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="text-base font-bold">shadcn/ui</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src="https://lucide.dev/favicon.ico"
                    alt="Lucide Icons"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="text-base font-bold">Lucide</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
              <div className="relative aspect-square h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image 
                  src="/notionpfp2.PNG"
                  alt="Cloudboy-jh profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 96px) 100vw, 96px"
                />
              </div>
              <p>
                Created by Cloudboy-jh, a developer passionate about cutting through complexity and making software frictionless. With experience in building software as his day job, and also selling Software at the enterprise level.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 px-4">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/Simpli-Framework" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full justify-center"
              >
                <Github className="h-5 w-5" />
                Explore on GitHub
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://www.linkedin.com/in/jack-s-horton/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full justify-center"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 