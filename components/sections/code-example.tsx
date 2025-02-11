import { CodeBlock } from "@/components/ui/code-block";

export function CodeExampleSection() {
  const codeSnippet = `npx simpli-cli my-project
cd my-project
npm install
npm run dev`;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started in Seconds</h2>
          <p className="mt-4 text-gray-500">Just a few commands to launch your next project</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <CodeBlock code={codeSnippet} className="shadow-lg" />
        </div>
      </div>
    </section>
  );
} 