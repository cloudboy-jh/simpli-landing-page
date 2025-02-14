'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const screenshots = [
  {
    src: '/screenshots/simpli-homepage.png',
    alt: 'Simpli Homepage - Modern dashboard interface',
  },
  {
    src: '/screenshots/simpli-dashboard.png',
    alt: 'Simpli Dashboard - Comprehensive overview',
  },
  {
    src: '/screenshots/simpli-analytics.png',
    alt: 'Simpli Analytics - Data visualization',
  },
  {
    src: '/screenshots/simpli-settings.png',
    alt: 'Simpli Settings - Customization options',
  },
  {
    src: '/screenshots/simpli-customers.png',
    alt: 'Simpli Customer Profile - User management',
  },
];

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setIsImageLoading(true); // Reset loading state when opening
    }
  };

  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto relative">
          <Collapsible className="w-full" open={isOpen} onOpenChange={handleOpenChange}>
            <CollapsibleTrigger className="flex items-center gap-2 mx-auto mb-4 text-xl font-semibold hover:opacity-80 bg-gray-100/50 px-6 py-2 rounded-lg transition-colors hover:bg-gray-200/50">
              Component Gallery
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
              <Carousel
                opts={{
                  align: 'center',
                  loop: true,
                }}
                className="w-full border-2 border-black rounded-xl p-4 sm:p-6"
              >
                <CarouselContent>
                  {screenshots.map((screenshot, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          className={`object-contain transition-opacity duration-500 ${
                            isImageLoading ? 'opacity-0' : 'opacity-100'
                          }`}
                          priority={index === 0}
                          onLoadingComplete={() => setIsImageLoading(false)}
                          onLoad={() => setIsImageLoading(false)}
                        />
                        {isImageLoading && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-700 rounded-full animate-spin"></div>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-10">
                  <CarouselPrevious className="h-12 w-12" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-10">
                  <CarouselNext className="h-12 w-12" />
                </div>
              </Carousel>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
} 