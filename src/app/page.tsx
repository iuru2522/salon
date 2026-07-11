import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { InstagramSection } from "@/components/sections/instagram";
import { PortfolioSection } from "@/components/sections/portfolio";
import { PricingSection } from "@/components/sections/pricing";
import { ReviewsSection } from "@/components/sections/reviews";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseSection } from "@/components/sections/why-choose";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <ReviewsSection />
      <PricingSection />
      <FaqSection />
      <InstagramSection />
      <ContactSection />
    </>
  );
}
