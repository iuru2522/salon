import type { Review } from "@/lib/content-types";

export const reviews: Review[] = [
  {
    id: "r1",
    customerName: "Amelia R.",
    photo: {
      src: "/images/reviews/client-1.jpg",
      alt: "Portrait of Amelia R.",
      width: 200,
      height: 200,
    },
    rating: 5,
    body: "The most peaceful nail appointment I've ever had. My gel set lasted beautifully and my nails still feel healthy.",
    sortOrder: 1,
  },
  {
    id: "r2",
    customerName: "Sofia M.",
    photo: {
      src: "/images/reviews/client-2.jpg",
      alt: "Portrait of Sofia M.",
      width: 200,
      height: 200,
    },
    rating: 5,
    body: "She listened to every detail of my inspiration photos and made them even better. True boutique care.",
    sortOrder: 2,
  },
  {
    id: "r3",
    customerName: "Priya K.",
    photo: {
      src: "/images/reviews/client-3.jpg",
      alt: "Portrait of Priya K.",
      width: 200,
      height: 200,
    },
    rating: 5,
    body: "Impeccable sanitation, soft lighting, and flawless BIAB. I finally found my forever nail artist.",
    sortOrder: 3,
  },
  {
    id: "r4",
    customerName: "Elena V.",
    photo: {
      src: "/images/reviews/client-4.jpg",
      alt: "Portrait of Elena V.",
      width: 200,
      height: 200,
    },
    rating: 5,
    body: "Appointment-only is such a giftâ€”no rush, no noise, just careful work and gorgeous results.",
    sortOrder: 4,
  },
  {
    id: "r5",
    customerName: "Maya L.",
    photo: {
      src: "/images/reviews/client-5.jpg",
      alt: "Portrait of Maya L.",
      width: 200,
      height: 200,
    },
    rating: 5,
    body: "From the French tips to the aftercare tips, everything felt premium and personal.",
    sortOrder: 5,
  },
];
