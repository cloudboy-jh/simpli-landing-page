import { Github, Rss } from "lucide-react";

export function CommunitySection() {
  const communityLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "Contribute on GitHub",
      description: "Help shape the future of Simpli by contributing to our open-source codebase.",
      link: "https://github.com/Simpli-Framework",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-900",
      hoverColor: "hover:bg-gray-200",
    },
    {
      icon: <Rss className="w-6 h-6" />,
      title: "Development Updates",
      description: "Stay up to date with the latest features, improvements, and community news.",
      link: "#",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverColor: "hover:bg-orange-200",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simpli is open-source and community-driven. Join us in making web development simpler and more accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {communityLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`group p-6 rounded-xl ${item.bgColor} ${item.hoverColor} transition-colors duration-200`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${item.iconColor}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            By participating in our community, you agree to our Community Guidelines and Code of Conduct.
          </p>
        </div>
      </div>
    </section>
  );
} 