import { FadeIn } from "@/components/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/content/faq";

export function FaqSection() {
  const sorted = [...faqItems].sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#f7f0ea]/70 px-4 py-20 sm:px-6 dark:bg-stone-900/40"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you book"
          description="Everything you need to know about appointments, care, and studio policies."
        />
        <FadeIn className="mt-10 rounded-3xl border border-rose-100/80 bg-white/90 px-5 dark:border-stone-800 dark:bg-stone-950/80">
          <Accordion className="w-full">
            {sorted.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-stone-800 dark:text-stone-100">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 dark:text-stone-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
