"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Skeleton } from "@/components/ui/skeleton";
import { portfolioItems } from "@/content/portfolio";
import type { PortfolioCategory } from "@/lib/content-types";
import { filterPortfolioItems, portfolioFilters } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [filter, setFilter] = useState<PortfolioCategory>("all");
  const items = useMemo(
    () => filterPortfolioItems(portfolioItems, filter),
    [filter],
  );

  return (
    <section id="portfolio" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work that speaks softly"
          description="Filter by style to find the finish that feels like you."
        />
        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Portfolio filters"
        >
          {portfolioFilters.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                filter === option.id
                  ? "bg-stone-900 text-stone-50 dark:bg-rose-100 dark:text-stone-900"
                  : "bg-rose-50 text-stone-700 hover:bg-rose-100 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
        {items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-rose-200 px-6 py-16 text-center dark:border-stone-700">
            <p className="text-stone-600 dark:text-stone-300">
              No looks in this category yet.
            </p>
            <button
              type="button"
              className="mt-4 text-sm font-medium text-rose-800 underline-offset-4 hover:underline dark:text-rose-200"
              onClick={() => setFilter("all")}
            >
              View all
            </button>
          </div>
        ) : (
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.03} className="mb-4 break-inside-avoid">
                <figure className="group relative overflow-hidden rounded-3xl bg-rose-50 dark:bg-stone-900">
                  <div className="relative aspect-[4/5] w-full">
                    <Skeleton className="absolute inset-0 rounded-none" />
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      loading="lazy"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {item.title ? (
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-stone-950/70 to-transparent px-4 py-5 text-sm text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.title}
                    </figcaption>
                  ) : null}
                </figure>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
