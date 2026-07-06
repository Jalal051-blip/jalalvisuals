import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreatorHero from "@/components/creator/CreatorHero";
import CreatorWho from "@/components/creator/CreatorWho";
import CreatorProcess from "@/components/creator/CreatorProcess";
import CreatorFAQ from "@/components/creator/CreatorFAQ";
import CreatorCTA from "@/components/creator/CreatorCTA";

export const metadata = {
  title: "Bliv Creator — JalalVisuals",
  description: "Optræd i professionelle videoer for danske virksomheder. Intet krav om erfaring — vi guider dig hele vejen.",
};

export default function CreatorPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CreatorHero />
<CreatorWho />
        <CreatorProcess />
        <CreatorFAQ />
        <CreatorCTA />
      </main>
      <Footer />
    </>
  );
}
