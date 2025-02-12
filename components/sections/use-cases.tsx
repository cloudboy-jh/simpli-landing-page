import { Code2, Rocket, Flag, Building2 } from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Solo Developers",
      description: "Get an app started instantly.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Startups",
      description: "Build faster without overhead.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Hackathon Teams",
      description: "Generate a working UI in minutes.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Technical Founders",
      description: "Focus on the product, not setup.",
      bgColor: "bg-rose-100",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who is Simpli for?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`mb-4 p-3 rounded-full ${useCase.bgColor}`}>
                <div className={useCase.iconColor}>{useCase.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 