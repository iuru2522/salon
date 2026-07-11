import type { FaqItem } from "@/lib/content-types";

export const faqItems: FaqItem[] = [
  {
    id: "faq-duration",
    question: "How long does a manicure last?",
    answer:
      "A classic manicure typically looks fresh for about a week. Gel manicures and BIAB overlays often last two to three weeks with proper care. Longevity depends on lifestyle, aftercare, and the service you choose.",
    sortOrder: 1,
  },
  {
    id: "faq-walkins",
    question: "Do you accept walk-ins?",
    answer:
      "No. Lumina Nails is appointment only so every guest receives focused, unhurried care in a private studio. Please reach out by phone or social to request a time.",
    sortOrder: 2,
  },
  {
    id: "faq-payment",
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit and debit cards, Apple Pay, and cash. Gratuity is always appreciated but never expected.",
    sortOrder: 3,
  },
  {
    id: "faq-inspiration",
    question: "Can I bring inspiration photos?",
    answer:
      "Absolutely—please do. Inspiration photos help us refine shape, color, and art together so your set feels personal and intentional.",
    sortOrder: 4,
  },
  {
    id: "faq-cancel",
    question: "What is your cancellation policy?",
    answer:
      "Please provide at least 24 hours' notice if you need to reschedule or cancel. Late cancellations or no-shows may require a deposit for future bookings so studio time can be offered to other clients.",
    sortOrder: 5,
  },
];
