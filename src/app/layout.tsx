import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { studio } from "@/content/studio";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${studio.businessName} | Luxury Nail Technician & Gel Manicures`,
    template: `%s | ${studio.businessName}`,
  },
  description:
    "Appointment-only luxury nail care: gel manicures, BIAB, nail art, and pedicures in a private studio. Healthy nails, premium products, personal attention.",
  keywords: [
    "nail salon",
    "nail technician",
    "gel nails",
    "manicure",
    "pedicure",
    "nail art",
    "BIAB nails",
    "luxury nails",
  ],
  authors: [{ name: studio.businessName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: studio.businessName,
    title: `${studio.businessName} | Luxury Nail Care`,
    description:
      "Personalized manicures and nail art in a relaxing private studio. Appointment only.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: studio.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${studio.businessName} | Luxury Nail Care`,
    description:
      "Personalized manicures and nail art in a relaxing private studio. Appointment only.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cormorant.variable} min-h-screen bg-[#fbf7f3] font-sans text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <JsonLd />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
