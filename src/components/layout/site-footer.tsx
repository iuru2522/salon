import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { studio } from "@/content/studio";
import { navLinks } from "@/lib/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-100 bg-[#f3ebe4] dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-heading text-2xl text-stone-800 dark:text-stone-100">
            {studio.businessName}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {studio.tagline}. {studio.bookingPolicy}
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-stone-500 uppercase">
            Explore
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-stone-700 transition hover:text-rose-800 dark:text-stone-300 dark:hover:text-rose-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-stone-500 uppercase">
            Connect
          </p>
          <div className="mb-4 flex gap-3">
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
                  className="inline-flex size-10 items-center justify-center rounded-full border border-rose-200/80 bg-white/70 text-stone-700 transition hover:border-rose-300 hover:text-rose-800 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-300">
            <li>
              <Link href="/privacy" className="hover:text-rose-800 dark:hover:text-rose-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-rose-800 dark:hover:text-rose-200">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rose-100/80 px-4 py-5 text-center text-xs text-stone-500 dark:border-stone-800 dark:text-stone-400">
        © {year} {studio.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
