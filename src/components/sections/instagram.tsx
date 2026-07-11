import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { InstagramIcon } from "@/components/social-icons";
import { instagramPosts, instagramProfileUrl } from "@/content/instagram";
import { cn } from "@/lib/utils";

export function InstagramSection() {
  return (
    <section id="instagram" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Instagram"
          title="Follow the latest sets"
          description="A glimpse of recent work from the private studio."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.03}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-rose-50 dark:bg-stone-900">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-rose-100 dark:text-stone-900 dark:hover:bg-rose-50",
            )}
          >
            <InstagramIcon className="size-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
