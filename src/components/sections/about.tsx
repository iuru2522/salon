import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { studio } from "@/content/studio";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-50 dark:bg-stone-900">
            <Image
              src={studio.portraitImage.src}
              alt={studio.portraitImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <SectionHeading
            align="left"
            eyebrow="About"
            title={studio.aboutHeadline}
            className="mx-0"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-300">
            {studio.aboutBody}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-500 dark:text-stone-400">
            {studio.bookingPolicy}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
