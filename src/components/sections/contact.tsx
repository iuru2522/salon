"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { studio } from "@/content/studio";

export function ContactSection() {
  const [mapFailed, setMapFailed] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Visit the private studio"
          description="Reach out by phone or social to request your appointment-only visit."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-rose-100/80 bg-white/80 p-6 dark:border-stone-800 dark:bg-stone-950/70 sm:p-8">
              <h3 className="font-heading text-xl text-stone-800 dark:text-stone-100">
                Studio details
              </h3>
              <address className="mt-4 space-y-1 text-sm not-italic text-stone-600 dark:text-stone-300">
                {studio.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <p className="mt-4 flex items-center gap-2 text-sm text-stone-700 dark:text-stone-200">
                <Phone className="size-4" aria-hidden />
                <a href={`tel:${studio.phone.replace(/[^\d+]/g, "")}`}>
                  {studio.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                <a
                  href={`mailto:${studio.email}`}
                  className="hover:text-rose-800 dark:hover:text-rose-200"
                >
                  {studio.email}
                </a>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-stone-600 dark:text-stone-300">
                {studio.hours.map((block) => (
                  <li key={block.label}>
                    <span className="font-medium text-stone-800 dark:text-stone-100">
                      {block.label}:
                    </span>{" "}
                    {block.value}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                {studio.socialLinks.map((social) => {
                  const Icon =
                    social.network === "instagram" ? InstagramIcon : FacebookIcon;
                  return (
                    <a
                      key={social.network}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-rose-200/80 bg-[#fbf7f3] text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="overflow-hidden rounded-3xl border border-rose-100/80 dark:border-stone-800">
              {studio.mapEmbedUrl && !mapFailed ? (
                <iframe
                  title="Studio location map"
                  src={studio.mapEmbedUrl}
                  className="h-full min-h-72 w-full border-0 lg:min-h-[22rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setMapFailed(true)}
                />
              ) : (
                <div className="flex min-h-72 items-center justify-center bg-rose-50 px-6 text-center text-sm text-stone-600 dark:bg-stone-900 dark:text-stone-300 lg:min-h-[22rem]">
                  Map unavailable. Visit us at {studio.addressLines.join(", ")}.
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
