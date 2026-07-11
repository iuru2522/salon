"use client";

import Link from "next/link";
import { studio } from "@/content/studio";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, scrollToHash } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-[#fbf7f3]/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#home"
          className="font-heading text-xl tracking-tight text-stone-800 dark:text-stone-100"
          onClick={(event) => {
            event.preventDefault();
            scrollToHash("#home");
          }}
        >
          {studio.businessName}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className="rounded-full px-3 py-2 text-sm text-stone-600 transition hover:bg-rose-50 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white"
              onClick={() => scrollToHash(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
