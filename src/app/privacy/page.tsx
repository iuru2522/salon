import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${studio.businessName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl text-stone-800 dark:text-stone-100">
        Privacy Policy
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        {studio.businessName} may receive personal information when you contact us
        by phone, email, or social media (such as your name and message details)
        solely to respond to appointment inquiries. We do not sell personal
        information. For questions, contact {studio.email}.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-rose-800 underline-offset-4 hover:underline dark:text-rose-200">
          Back to home
        </Link>
      </p>
    </div>
  );
}
