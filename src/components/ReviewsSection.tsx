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
    navn: "MQM Biler ApS",
    initialer: "M",
    farve: "#4285F4",
    dato: "for 2 år siden",
    titel: "5/5 — Google anmeldelse",
    tekst:
      "Jalal fra JalalVisuals har været vores content-samarbejdspartner de sidste 16 mdr. Hans evne til altid komme med nye ideer hvad angår billeder og video af biler er vi utrolig overrasket over! Kæmpe anbefaling herfra.",
    google: true,
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
    navn: "Fitcube Aps",
    initialer: "F",
    farve: "#4285F4",
    dato: "for ét år siden",
    titel: "5/5 — Google anmeldelse",
    tekst:
      "Vi har brugt Jalal Visuals til at lave billeder og video af vores launch party og produktvideo af vores første Fitcube. Han fangede essensen af hvad vi vil og fik det kogt sammen i nogle lækre videoer. Klart anbefaling her fra.",
    google: true,
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

function Stjerner({ google }: { google?: boolean }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={google ? "#FFC107" : "#00b67a"}>
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
            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/search?q=jalalvisuals+googleanmeldelser"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.6 5.1C9.6 39.5 16.3 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.4 4.3-4.5 5.7l6.2 5.2C40.8 35.5 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
                </svg>
                Se alle anmeldelser på Google
              </a>
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
          </div>
          <p className="text-slate-400 leading-relaxed max-w-2xl mt-4">
            Vi bliver valgt igen og igen af vores kunder og samarbejdspartnere. Det gør de, fordi vi skaber gode resultater og holder, hvad vi lover. Det bevidner vores anmeldelser også.
          </p>

          {/* Platform-badges */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* Google badge */}
            <a
              href="https://www.google.com/search?q=jalalvisuals+googleanmeldelser"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#151829] border border-white/10 hover:border-white/25 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.6 5.1C9.6 39.5 16.3 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.4 4.3-4.5 5.7l6.2 5.2C40.8 35.5 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                  <span className="text-white text-sm font-bold ml-1">5,0</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">106+ Google anmeldelser</p>
              </div>
            </a>

            {/* Trustpilot badge */}
            <a
              href="https://dk.trustpilot.com/review/jalalvisuals.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#151829] border border-white/10 hover:border-white/25 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                  <span className="text-white text-sm font-bold ml-1">4,8</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">47+ Trustpilot anmeldelser</p>
              </div>
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

              {/* Platform */}
              {"google" in a && a.google ? (
                <div className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.6 5.1C9.6 39.5 16.3 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.4 4.3-4.5 5.7l6.2 5.2C40.8 35.5 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
                  </svg>
                  <span className="text-slate-500 text-xs">Google</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-slate-500 text-xs">Trustpilot</span>
                </div>
              )}

              {/* Stjerner */}
              <Stjerner google={"google" in a && a.google === true} />

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
