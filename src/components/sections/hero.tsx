"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContentIcon } from "@/components/content-icon";
import { FadeIn } from "@/components/fade-in";
import { studio } from "@/content/studio";
import { trustBadges } from "@/content/trust-badges";
import { scrollToHash } from "@/lib/navigation";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-rose-100/70 dark:border-stone-800"
    >
      <div className="absolute inset-0">
        <Image
          src={studio.heroImage.src}
          alt={studio.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf7f3]/95 via-[#fbf7f3]/78 to-[#fbf7f3]/25 dark:from-stone-950/95 dark:via-stone-950/75 dark:to-stone-950/30" />
      </div>
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <FadeIn className="max-w-xl space-y-6">
          <p className="text-xs font-medium tracking-[0.24em] text-rose-800/80 uppercase dark:text-rose-200/80">
            {studio.businessName}
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
            {studio.headline}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-stone-700 sm:text-lg dark:text-stone-300">
            {studio.subheadline}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full bg-stone-900 px-7 text-stone-50 hover:bg-stone-800 dark:bg-rose-100 dark:text-stone-900 dark:hover:bg-rose-50"
              onClick={() => scrollToHash("#portfolio")}
            >
              View Portfolio
            </Button>
          </div>
          <ul className="grid gap-3 pt-4 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <li
                key={badge.id}
                className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/80 text-rose-800 shadow-sm dark:bg-stone-900/80 dark:text-rose-200">
                  <ContentIcon name={badge.icon} className="size-4" />
                </span>
                {badge.label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
