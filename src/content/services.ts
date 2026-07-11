import type { ServiceOffering } from "@/lib/content-types";

export const services: ServiceOffering[] = [
  {
    id: "classic-manicure",
    name: "Classic Manicure",
    description:
      "Gentle shaping, cuticle care, and a polished finish for naturally healthy nails.",
    startingPrice: "From $35",
    durationMinutes: 45,
    icon: "hand",
    sortOrder: 1,
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    description:
      "Long-wearing gel color with a glossy, chip-resistant finish and careful removal guidance.",
    startingPrice: "From $55",
    durationMinutes: 60,
    icon: "sparkle",
    sortOrder: 2,
  },
  {
    id: "biab-overlay",
    name: "BIAB Overlay",
    description:
      "Builder-in-a-bottle strength and structure for flexible, natural-looking length.",
    startingPrice: "From $70",
    durationMinutes: 75,
    icon: "layers",
    sortOrder: 3,
  },
  {
    id: "gel-extensions",
    name: "Gel Extensions",
    description:
      "Custom length and shape with durable gel extensions tailored to your lifestyle.",
    startingPrice: "From $95",
    durationMinutes: 120,
    icon: "gem",
    sortOrder: 4,
  },
  {
    id: "nail-art",
    name: "Nail Art",
    description:
      "From soft minimal details to statement designs—crafted to match your inspiration.",
    startingPrice: "From $15",
    durationMinutes: 30,
    icon: "palette",
    sortOrder: 5,
  },
  {
    id: "nail-repair",
    name: "Nail Repair",
    description:
      "Thoughtful repairs that restore strength and symmetry without compromising nail health.",
    startingPrice: "From $20",
    durationMinutes: 30,
    icon: "wrench",
    sortOrder: 6,
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description:
      "A soothing pedicure focused on comfort, clean finish, and lasting polish.",
    startingPrice: "From $50",
    durationMinutes: 60,
    icon: "footprints",
    sortOrder: 7,
  },
  {
    id: "removal",
    name: "Removal",
    description:
      "Gentle gel or extension removal with aftercare to keep nails resilient.",
    startingPrice: "From $25",
    durationMinutes: 30,
    icon: "eraser",
    sortOrder: 8,
  },
];
