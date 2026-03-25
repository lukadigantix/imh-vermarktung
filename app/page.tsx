// import { Navbar } from "@/components/layout/Navbar";
import { NavbarV2 } from "@/components/layout/NavbarV2";
import { Footer } from "@/components/layout/Footer";
// import { HeroSection } from "@/components/sections/HeroSection";
import { HeroSectionV2 } from "@/components/sections/HeroSectionV2";
// import { FeaturedPropertiesSection } from "@/components/sections/FeaturedPropertiesSection";
import { FeaturedPropertiesSectionV2 } from "@/components/sections/FeaturedPropertiesSectionV2";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
// import { VisionSection } from "@/components/sections/VisionSection";
// import { AboutSection } from "@/components/sections/AboutSection";
import { AboutSectionV2 } from "@/components/sections/AboutSectionV2";
// import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServicesSectionV2 } from "@/components/sections/ServicesSectionV2";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <NavbarV2 />
      <main>
        {/* 1. Hero */}
        {/* <HeroSection /> */}
        <HeroSectionV2 />

        {/* 2. Search + Featured Properties */}
        {/* <FeaturedPropertiesSection /> */}
        <FeaturedPropertiesSectionV2 />

        {/* 3. Advantages + Credibility */}
        <CredibilitySection />
        {/* <TestimonialsSection /> */}

        {/* 4. About + Services + FAQ + Contact */}
        {/* <VisionSection /> */}
        {/* <AboutSection /> */}
        <AboutSectionV2 />
        {/* <ServicesSection /> */}
        <ServicesSectionV2 />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
