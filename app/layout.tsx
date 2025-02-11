import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simpli',
  description: 'The all-in-one platform for modern teams. Streamline your workflow, collaborate seamlessly, and ship products faster.',
  icons: {
    icon: '/simplilpicon.png',
    apple: '/simplilpicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}