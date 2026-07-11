"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/content/reviews";
import { studio } from "@/content/studio";

export function ReviewsSection() {
  const sorted = [...reviews].sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-[#f7f0ea]/70 px-4 py-20 sm:px-6 dark:bg-stone-900/40"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by returning clients"
        />
        <FadeIn className="mt-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-stone-700 shadow-sm dark:bg-stone-950/70 dark:text-stone-200">
            <span aria-hidden>★★★★★</span>
            <span>
              {studio.averageRating}/{studio.ratingScale}
            </span>
          </p>
        </FadeIn>
        <FadeIn className="relative mt-10 px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {sorted.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2">
                  <article className="h-full rounded-3xl border border-rose-100/80 bg-white/90 p-6 dark:border-stone-800 dark:bg-stone-950/80">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.photo.src}
                        alt={review.photo.alt}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-stone-800 dark:text-stone-100">
                          {review.customerName}
                        </p>
                        <p className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`size-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-stone-300"}`}
                            />
                          ))}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                      {review.body}
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
