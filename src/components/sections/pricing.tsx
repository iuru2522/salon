import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";

function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rem = minutes % 60;
  return rem ? `${hours} hr ${rem} min` : `${hours} hr`;
}

export function PricingSection() {
  const sorted = [...services].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-[#f7f0ea]/70 px-4 py-20 sm:px-6 dark:bg-stone-900/40"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Price list"
          title="Transparent starting prices"
          description="Final pricing depends on design complexity."
        />
        <FadeIn className="mt-10 overflow-hidden rounded-3xl border border-rose-100/80 bg-white/90 dark:border-stone-800 dark:bg-stone-950/80">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="bg-rose-50/80 text-stone-600 dark:bg-stone-900 dark:text-stone-300">
                <tr>
                  <th className="px-5 py-4 font-medium">Service</th>
                  <th className="px-5 py-4 font-medium">Duration</th>
                  <th className="px-5 py-4 font-medium">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((service) => (
                  <tr
                    key={service.id}
                    className="border-t border-rose-50 dark:border-stone-800"
                  >
                    <td className="px-5 py-4 font-medium text-stone-800 dark:text-stone-100">
                      {service.name}
                    </td>
                    <td className="px-5 py-4 text-stone-600 dark:text-stone-300">
                      {formatDuration(service.durationMinutes)}
                    </td>
                    <td className="px-5 py-4 text-stone-800 dark:text-stone-100">
                      {service.startingPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-rose-50 px-5 py-4 text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
            Final pricing depends on design complexity.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
