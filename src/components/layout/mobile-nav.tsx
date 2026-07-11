"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, scrollToHash } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "md:hidden",
        )}
        aria-label="Open navigation menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)]">
        <SheetHeader>
          <SheetTitle className="font-heading text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className="rounded-xl px-3 py-3 text-left text-base text-stone-700 transition hover:bg-rose-50 dark:text-stone-200 dark:hover:bg-stone-800"
              onClick={() => {
                scrollToHash(link.href);
                setOpen(false);
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
