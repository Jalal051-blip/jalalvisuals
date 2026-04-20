// Hoved-siden — samler alle sektioner ét sted.
// Sektionerne er bygget som separate komponenter i src/components/
// for at holde koden overskuelig.

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar sidder fast øverst mens du scroller */}
      <Navbar />

      <main className="flex-1">
        {/* Hero — første sektion med det store headline */}
        <HeroSection />

        {/* Kundelogoer i løbende karrusel */}
        <LogoCarousel />

        {/* Portefølje — videoer og billeder */}
        <VideoSection />

        {/* Trustpilot anmeldelser */}
        <ReviewsSection />

        {/* Om mig */}
        <AboutSection />

        {/* Kontaktformular */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
