import type { StudioProfile } from "@/lib/content-types";

export const studio: StudioProfile = {
  businessName: "Lumina Nails",
  tagline: "Private studio · Appointment only",
  headline: "Luxury Nail Care Designed Just For You",
  subheadline:
    "Personalized manicures and nail art in a relaxing private studio. Every appointment is focused on quality, attention to detail, and healthy nails.",
  aboutHeadline: "Meet Your Nail Artist",
  aboutBody:
    "I'm passionate about nail care and the quiet confidence that comes from beautifully finished hands. With years of experience and a focus on healthy nail practices, I work one-on-one in a calm private studio using premium products. Every appointment is unhurried—shaped around your lifestyle, your inspiration, and meticulous attention to detail—so you leave feeling polished, cared for, and relaxed.",
  portraitImage: {
    src: "/images/about/artist-portrait.jpg",
    alt: "Portrait of the Lumina Nails technician in the private studio",
    width: 900,
    height: 1100,
  },
  heroImage: {
    src: "/images/hero/manicure-hero.jpg",
    alt: "Close-up of elegantly manicured nails with soft blush polish",
    width: 1600,
    height: 1000,
  },
  addressLines: ["128 Rosewood Lane, Suite 2", "Brookline, MA 02445"],
  phone: "(617) 555-0148",
  email: "hello@luminanails.example",
  hours: [
    { label: "Tue–Fri", value: "10:00 AM – 6:00 PM" },
    { label: "Saturday", value: "9:00 AM – 4:00 PM" },
    { label: "Sun–Mon", value: "Closed · By appointment only" },
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Brookline%20MA&t=&z=14&ie=UTF8&iwloc=&output=embed",
  averageRating: 4.9,
  ratingScale: 5,
  bookingPolicy:
    "All services are by appointment only. Walk-ins are not accepted so every guest receives focused, unhurried care.",
  socialLinks: [
    {
      network: "instagram",
      url: "https://instagram.com/",
      label: "Follow Lumina Nails on Instagram",
    },
    {
      network: "facebook",
      url: "https://facebook.com/",
      label: "Visit Lumina Nails on Facebook",
    },
  ],
  streetAddress: "128 Rosewood Lane, Suite 2",
  addressLocality: "Brookline",
  addressRegion: "MA",
  postalCode: "02445",
  addressCountry: "US",
};
