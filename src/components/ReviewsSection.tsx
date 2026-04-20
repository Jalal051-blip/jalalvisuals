import FadeIn from "@/components/FadeIn";

// Trustpilot anmeldelser — 5 udvalgte anmeldelser fra jalalvisuals.dk

const anmeldelser = [
  {
    navn: "Morten Graversen",
    initialer: "MG",
    farve: "#e8d5a3",
    dato: "25. nov. 2025",
    titel: "vi i webshopskolen bruger jalalvisuals...",
    tekst:
      "vi i webshopskolen bruger jalalvisuals fast. Sindssyg god kommunikation, han brænder virkelig virkelig for det, og han overleverer og underpromiser. Han gør det virkelig godt, og har oprigtigt virkelig overleveret ift. hvad vi betaler ham. Han er en af de dygtigste til at levere ecommerce content i DK efter min mening.",
  },
  {
    navn: "Christian Roland",
    initialer: "CR",
    farve: "#a8d5e2",
    dato: "25. nov. 2025",
    titel: "10/10 kvalitet, kommunikation og service",
    tekst:
      "Jeg brugte Jalalvisuals til et projekt, og er meget tilfreds. Det hele gik super hurtigt, og Jalal svarede ekstremt hurtigt når jeg havde rettelser og script, model, shootdag osv. blev gjort klar på ingen tid. Det endelige resultat var også lige i skabet. Jalal valgte på egen regning at tage en ekstra skydedag for at få det fikset. Det ser man ikke mange andre steder, så kæmpe anbefaling herfra!",
  },
  {
    navn: "Ida Dolleris",
    initialer: "ID",
    farve: "#b8e8c8",
    dato: "14. sep. 2025",
    titel: "10/10 oplevelse - Wispy Social Run",
    tekst:
      "Vi brugte Jalal og hans kollega som fotografer til vores Social Run i Aarhus med 170 deltagere – og vi kunne ikke være mere tilfredse! De var super professionelle, ekstremt dedikerede og fangede præcis den stemning vi ønskede. Vi kan varmt anbefale Jalal Visuals til alle der ønsker professionelt content.",
  },
  {
    navn: "Joseph",
    initialer: "J",
    farve: "#c8b8e8",
    dato: "22. nov. 2025",
    titel: "Professionelt samarbejde og høj kvalitet",
    tekst:
      "Jeg har haft et rigtig godt og effektivt samarbejde med Jalal. Jeg er ejer af BodyFlex, og jeg oplevede en klar og hurtig kommunikation gennem hele processen. Der var god og konstruktiv sparring undervejs, og kvaliteten af det færdige materiale var helt i top. Kan varmt anbefales.",
  },
  {
    navn: "Hans-Kristian Sabro Kok",
    initialer: "HS",
    farve: "#e8c8b8",
    dato: "1. jun. 2025",
    titel: "Watery x Jalalvisuals",
    tekst:
      "Vi har hos Watery arbejdet med Jalal en del gange efterhånden. Altid top-professionel på både skydning og i redigering. Anbefaling herfra!",
  },
  {
    navn: "Patrick Mau",
    initialer: "PM",
    farve: "#f0c8d8",
    dato: "17. sep. 2025",
    titel: "Topkvalitets-content fra JalalVisuals",
    tekst:
      "Topkvalitets-content fra JalalVisuals! Jeg driver et marketingbureau og kan trygt sige at Jalal leverer højkonverterende video- og billedmateriale til mine kunders hjemmesider og annoncer og leverer bedre service og priser end mange af konkurrenterne. Kan varmt anbefales herfra 🔥",
  },
];

function Stjerner() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00b67a">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0c18]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-2 text-[#DC2626] text-sm font-semibold mb-3">
            <span className="w-4 h-[2px] bg-[#DC2626]" />
            Anmeldelser
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Hvad siger{" "}
              <span className="text-[#DC2626]">kunderne?</span>
            </h2>
            <a
              href="https://dk.trustpilot.com/review/jalalvisuals.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Se alle anmeldelser på Trustpilot
            </a>
          </div>
        </FadeIn>

        {/* Anmeldelseskort */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {anmeldelser.map((a, i) => (
            <FadeIn
              key={i}
              delay={Math.min(i * 160, 640)}
              className="bg-[#151829] border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
            >
              {/* Navn og dato */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#0d0f1e] flex-shrink-0"
                    style={{ backgroundColor: a.farve }}
                  >
                    {a.initialer}
                  </div>
                  <span className="text-white text-sm font-semibold">{a.navn}</span>
                </div>
                <span className="text-slate-500 text-xs">{a.dato}</span>
              </div>

              {/* Stjerner */}
              <Stjerner />

              {/* Titel */}
              <p className="text-white text-sm font-semibold leading-snug">{a.titel}</p>

              {/* Anmeldelsestekst */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{a.tekst}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
