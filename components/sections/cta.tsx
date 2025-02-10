"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to get started?
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
            Join thousands of satisfied users who are already building amazing
            products with our platform.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}