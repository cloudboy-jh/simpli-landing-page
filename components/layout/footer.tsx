"use client";

import { Button } from "@/components/ui/button";
import { Cloud, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-6 w-6" />
              <span className="font-bold">SaaSFlow</span>
            </div>
            <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
              Building the future of software development, one feature at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2">
                <li><Button variant="link">Features</Button></li>
                <li><Button variant="link">Pricing</Button></li>
                <li><Button variant="link">Documentation</Button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2">
                <li><Button variant="link">About</Button></li>
                <li><Button variant="link">Blog</Button></li>
                <li><Button variant="link">Careers</Button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon"><Twitter className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Github className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          © 2024 SaaSFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}