"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "SaaSFlow has transformed how we build and deploy applications. The speed and reliability are unmatched.",
    name: "Sarah Chen",
    title: "CTO at TechCorp",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?&w=64&h=64&fit=crop&crop=faces&q=80",
  },
  {
    quote: "The developer experience is incredible. It's clear this was built with developers in mind.",
    name: "Alex Rivera",
    title: "Lead Developer at StartupX",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&w=64&h=64&fit=crop&crop=faces&q=80",
  },
  {
    quote: "Security and performance in one package. SaaSFlow has exceeded all our expectations.",
    name: "Emily Watson",
    title: "Security Engineer at SecureNet",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=64&h=64&fit=crop&crop=faces&q=80",
  },
  {
    quote: "The support team is amazing. They've helped us scale from startup to enterprise seamlessly.",
    name: "Michael Park",
    title: "DevOps Lead at GrowthCo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=64&h=64&fit=crop&crop=faces&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Loved by developers worldwide
        </h2>
        <Carousel className="mx-auto max-w-4xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          "{testimonial.quote}"
                        </p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}