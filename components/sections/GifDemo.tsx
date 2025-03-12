'use client';

import Image from 'next/image';

export const GifDemo = () => {
  return (
    <section className="pt-2 pb-8 sm:pt-4 sm:pb-16">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto">
          {/* GIF Container */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/static/simpli.gif"
              alt="Simpli CLI Demo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 