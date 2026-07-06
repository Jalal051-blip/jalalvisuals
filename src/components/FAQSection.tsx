"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const spørgsmål = [
  {
    q: "Hvad koster det?",
    a: "Det kommer helt an på, hvor meget der skal filmes. Kontakt os for et uforpligtende tilbud tilpasset dit projekt.",
  },
  {
    q: "Hvor hurtigt får jeg svar?",
    a: "Inden for 24 timer. Hvis du ringer, kan du forvente et endnu hurtigere svar.",
  },
  {
    q: "Hvor skal der filmes?",
    a: "Det kommer helt an på projektet. Det er en blanding af hjemme hos en statist, på et kontor, i et studie, udendørs og i lagerhaller.",
  },
  {
    q: "Hvor lang tid tager det, før projektet er færdigt?",
    a: "Vi sigter efter 10–14 dage efter optagelsesdato. Det er muligt at få det endnu hurtigere efter aftale.",
  },
  {
    q: "Hvor lang tid tager det at filme?",
    a: "Langt de fleste projekter bliver filmet på under 4 timer.",
  },
  {
    q: "Hvad skal jeg være forberedt på?",
    a: "Vi fortæller dig præcis, hvad du skal være forberedt på, afhængigt af hvad der skal filmes.",
  },
  {
    q: "Skal jeg selv stå foran kameraet?",
    a: "Det korte svar er nej, det behøver du ikke. Det er ikke alle, der har lyst til at stå foran kameraet, og det er helt normalt. Derfor kan man i stedet få en statist til at stå foran kameraet.",
  },
  {
    q: "Hvad skal der siges i videoerne?",
    a: "Vi laver et første udkast til manuskriptet ud fra de informationer, I giver os. Herefter retter vi det til efter ønske, indtil det sidder lige i skabet.",
  },
  {
    q: "Laver I også marketing?",
    a: "Ja, det gør vi. Vi ønsker at give dig mere salg gennem videoer. Dette opnår vi blandt andet med vores samarbejdspartner inden for marketing.",
  },
  {
    q: "Hvilke videoer skal der filmes?",
    a: "Det kan vi gøre jer klogere på, efter vi kender jeres mål.",
  },
  {
    q: "Ejer jeg rettighederne til videoen?",
    a: "Når det færdige materiale er afleveret, er det jeres for altid, og I kan bruge det til præcis det, I har lyst til.",
  },
];

export default function FAQSection() {
  const [åben, setÅben] = useState<number | null>(null);

  function toggle(i: number) {
    setÅben(åben === i ? null : i);
  }

  return (
    <section id="faq" className="py-16 px-6" style={{ background: "#0d0f1e" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#DC2626" }}>
            — FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ofte stillede <span style={{ color: "#DC2626" }}>spørgsmål</span>
          </h2>
          <p className="text-slate-400 mb-8 text-base">
            Har du et spørgsmål, der ikke er besvaret her? Skriv til os — vi svarer inden for 24 timer.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-2">
          {spørgsmål.map((item, i) => {
            const erÅben = åben === i;
            return (
              <FadeIn key={i}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: "#10131f",
                    border: erÅben ? "1px solid #DC2626" : "1px solid rgba(255,255,255,0.08)",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4"
                  >
                    <span className="text-white font-semibold text-sm leading-snug">
                      {item.q}
                    </span>
                    <span
                      className="shrink-0"
                      style={{
                        color: "#DC2626",
                        transform: erÅben ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "1.2rem",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: erÅben ? "300px" : "0px",
                      opacity: erÅben ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease, opacity 0.3s ease",
                    }}
                  >
                    <div
                      className="px-5 pb-4 text-slate-300 text-sm leading-relaxed"
                      style={{ borderTop: "1px solid rgba(220,38,38,0.25)" }}
                    >
                      <div className="pt-3">{item.a}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
