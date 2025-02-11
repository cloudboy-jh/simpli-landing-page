"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq-section" className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-12 text-4xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="text-left">
          <AccordionItem value="item-1">
            <AccordionTrigger>What&apos;s included in Simpli?</AccordionTrigger>
            <AccordionContent>
              Simpli includes a comprehensive suite of tools and features designed to streamline your development workflow. This includes automated code analysis, intelligent suggestions, real-time collaboration features, and seamless integration with popular development tools and platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do I need to configure anything manually?</AccordionTrigger>
            <AccordionContent>
              No, Simpli works right out of the box with smart defaults. While you can customize settings to match your preferences, the platform is designed to be immediately useful with zero configuration required.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is Simpli open-source?</AccordionTrigger>
            <AccordionContent>
              Simpli is an open-source framework built to simplify software development. Our CLI and framework are fully available for developers to use, modify, and contribute to.
              We actively support open-source development and integrate with widely used tools like Next.js, Tailwind, and Supabase. Contributions are welcome—join us on GitHub!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I use Simpli with an existing project?</AccordionTrigger>
            <AccordionContent>
              Simpli is designed primarily for new projects but can be integrated into existing ones in a few ways:
              <ul className="list-disc pl-6 mt-2">
                <li>Use the Simpli CLI to generate frontend templates and merge them into your repo</li>
                <li>Extract Simpli components (UI, layouts, themes) and drop them into your Next.js app</li>
                <li>Leverage Simpli&apos;s prebuilt structure while keeping your backend setup</li>
              </ul>
              While Simpli works best for starting new projects, parts of it can be adopted into existing workflows.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
} 