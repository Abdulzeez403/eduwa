import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { VisionSection } from "@/components/sections/vision-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <VisionSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
    </main>
  );
}
