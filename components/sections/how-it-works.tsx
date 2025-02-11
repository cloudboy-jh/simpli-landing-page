import { Terminal, Paintbrush, Rocket } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Terminal,
      title: "Run the CLI",
      description: "Get started quickly with a single command: npx simpli-cli my-project",
    },
    {
      icon: Paintbrush,
      title: "Customize the Project",
      description: "Modify the generated code to match your needs and add your own features",
    },
    {
      icon: Rocket,
      title: "Deploy with Vercel",
      description: "Push your code and deploy instantly with Vercel for a production-ready site",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mt-4 text-gray-500">Get your project up and running in three simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 