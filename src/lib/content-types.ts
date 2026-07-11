export type ImageRef = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HoursBlock = {
  label: string;
  value: string;
};

export type PortfolioCategory =
  | "all"
  | "french"
  | "gel"
  | "nail-art"
  | "short"
  | "long";

export type SocialNetwork = "instagram" | "facebook";

export type SocialLink = {
  network: SocialNetwork;
  url: string;
  label: string;
};

export type StudioProfile = {
  businessName: string;
  tagline?: string;
  headline: string;
  subheadline: string;
  aboutHeadline: string;
  aboutBody: string;
  portraitImage: ImageRef;
  heroImage: ImageRef;
  addressLines: string[];
  phone: string;
  email: string;
  hours: HoursBlock[];
  mapEmbedUrl: string;
  averageRating: number;
  ratingScale: number;
  bookingPolicy: string;
  socialLinks: SocialLink[];
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

export type ServiceOffering = {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  durationMinutes: number;
  icon: string;
  sortOrder: number;
};

export type Differentiator = {
  id: string;
  title: string;
  description?: string;
  icon: string;
};

export type PortfolioItem = {
  id: string;
  title?: string;
  image: ImageRef;
  categories: Exclude<PortfolioCategory, "all">[];
  sortOrder?: number;
};

export type Review = {
  id: string;
  customerName: string;
  photo: ImageRef;
  rating: number;
  body: string;
  sortOrder?: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  sortOrder?: number;
};

export type InstagramPost = {
  id: string;
  image: ImageRef;
  href?: string;
};

export type TrustBadge = {
  id: string;
  label: string;
  icon?: string;
};
