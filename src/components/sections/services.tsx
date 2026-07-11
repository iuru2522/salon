import { ContentIcon } from "@/components/content-icon";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";

export function ServicesSection() {
  const sorted = [...services].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[#f7f0ea]/70 px-4 py-20 sm:px-6 dark:bg-stone-900/40"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Thoughtful care for every set"
          description="Elegant essentials and artful upgrades—each with transparent starting prices and timing."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.04}>
              <article className="flex h-full flex-col rounded-3xl border border-rose-100/80 bg-white/80 p-5 shadow-[0_10px_40px_-28px_rgba(90,60,50,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-800 dark:bg-stone-900 dark:text-rose-200">
                  <ContentIcon name={service.icon} className="size-5" />
                </span>
                <h3 className="font-heading text-xl text-stone-800 dark:text-stone-100">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-rose-50 pt-4 text-sm dark:border-stone-800">
                  <span className="font-medium text-stone-800 dark:text-stone-100">
                    {service.startingPrice}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400">
                    {service.durationMinutes} min
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
