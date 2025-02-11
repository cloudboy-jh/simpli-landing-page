import { Check, X, AlertTriangle } from "lucide-react";

export function ComparisonSection() {
  const features = [
    {
      name: "Prebuilt UI",
      simpli: true,
      diySetup: false,
      otherTools: "partial",
    },
    {
      name: "One-click CLI",
      simpli: true,
      diySetup: false,
      otherTools: false,
    },
    {
      name: "Preconfigured backend (Coming Soon)",
      simpli: true,
      diySetup: false,
      otherTools: true,
    },
  ];

  const renderStatus = (status: boolean | string) => {
    if (status === true) {
      return <Check className="w-6 h-6 text-green-500 mx-auto" />;
    } else if (status === false) {
      return <X className="w-6 h-6 text-red-500 mx-auto" />;
    } else if (status === "partial") {
      return <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto" />;
    }
    return null;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How does Simpli compare?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Simpli stacks up against manually setting up Next.js, using templates from GitHub,
            or other full-stack tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-4 gap-4 p-6 bg-gray-100 font-semibold text-center">
              <div className="text-left">Feature</div>
              <div>Simpli</div>
              <div>DIY Setup</div>
              <div>Other Tools</div>
            </div>
            
            {/* Mobile and Desktop Content */}
            <div className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <div key={index}>
                  {/* Desktop View */}
                  <div className="hidden md:grid grid-cols-4 gap-4 p-6 items-center text-center">
                    <div className="text-left font-medium">{feature.name}</div>
                    <div>{renderStatus(feature.simpli)}</div>
                    <div>{renderStatus(feature.diySetup)}</div>
                    <div>{renderStatus(feature.otherTools)}</div>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden p-6">
                    <div className="font-semibold mb-4">{feature.name}</div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex flex-col items-center">
                        <div className="text-gray-600 mb-2">Simpli</div>
                        {renderStatus(feature.simpli)}
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-gray-600 mb-2">DIY Setup</div>
                        {renderStatus(feature.diySetup)}
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-gray-600 mb-2">Other Tools</div>
                        {renderStatus(feature.otherTools)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 