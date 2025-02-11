'use client';

import { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [code]);

  return (
    <div className={cn("relative rounded-lg overflow-hidden", className)}>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
        aria-label={isCopied ? "Copied to clipboard" : "Copy to clipboard"}
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-zinc-400" />
        )}
      </button>
      <SyntaxHighlighter
        language="bash"
        style={dracula}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          padding: '1rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
} 