import { CheckCircle2, Clock, Origami, Terminal, Component, Shield, Database, Plug, ServerCog, KeyRound } from "lucide-react";

export function WhatsNextSection() {
  const readyFeatures = [
    {
      text: "Simpli Framework - A modern, lightweight framework for building web applications",
      icon: Origami
    },
    {
      text: "Frontend CLI - Rapidly generate and customize frontend projects",
      icon: Terminal
    },
    {
      text: "Component Library - Ready-to-use UI components",
      icon: Component
    },
    {
      text: "TypeScript Support - Built-in type safety and better DX",
      icon: Shield
    }
  ];

  const comingFeatures = [
    {
      text: "Backend CLI - Generate backend services with ease",
      icon: ServerCog
    },
    {
      text: "Plugin System - Extend functionality with custom plugins",
      icon: Plug
    },
    {
      text: "Database Integrations - Seamless database setup and management",
      icon: Database
    },
    {
      text: "Authentication Templates - Pre-built auth solutions",
      icon: KeyRound
    }
  ];

  return (
    <section id="whats-next-section" className="py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What&apos;s Next for Simpli</h2>
          <p className="mt-4 text-gray-500">Our roadmap for making development even simpler</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Ready Today Column */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <h3 className="text-2xl font-semibold">What&apos;s Ready Today</h3>
            </div>
            <ul className="space-y-4">
              {readyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Coming Soon Column */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-semibold">Coming Soon</h3>
            </div>
            <ul className="space-y-4">
              {comingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 