import { ContentIcon } from "@/components/content-icon";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators } from "@/content/differentiators";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why choose me"
          title="A boutique standard of care"
          description="Premium products, sterilized tools, and undivided attention in a private studio."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.03}>
              <div className="rounded-3xl bg-[#fbf7f3] p-6 dark:bg-stone-900/60">
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-white text-rose-800 shadow-sm dark:bg-stone-950 dark:text-rose-200">
                  <ContentIcon name={item.icon} className="size-5" />
                </span>
                <h3 className="font-heading text-xl text-stone-800 dark:text-stone-100">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
