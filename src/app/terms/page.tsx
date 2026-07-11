import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${studio.businessName}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl text-stone-800 dark:text-stone-100">
        Terms
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        Services at {studio.businessName} are provided by appointment only.
        Pricing shown on this website is starting pricing and may vary with
        design complexity. Please provide at least 24 hours&apos; notice to
        cancel or reschedule.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-rose-800 underline-offset-4 hover:underline dark:text-rose-200">
          Back to home
        </Link>
      </p>
    </div>
  );
}
