"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const spørgsmål = [
  {
    q: "Hvor meget tjener man?",
    a: "Det afhænger af opgaven. Typisk honoreres man med mellem 750-1.500 kr. for et shoot på 2-4 timer.",
  },
  {
    q: "Hvor skal der filmes?",
    a: "Oftest hjemme hos creatoren selv. De fleste produkter, der skal laves video af, kræver et hjemligt miljø, og derfor er det oplagt. Det er også en fordel, fordi creatoren dermed sparer transporttid og -omkostninger.",
  },
  {
    q: "Må der gerne være andre hjemme, mens der filmes?",
    a: "Ja, det er der faktisk i langt de fleste tilfælde. De må endda være i samme rum, så længe der er stille, og det ikke er forstyrrende, når der trykkes optag.",
  },
  {
    q: "Hvor lang tid tager det?",
    a: "De fleste projekter tager 3-4 timer.",
  },
  {
    q: "Hvad skal jeg sige i videoerne?",
    a: "Vi laver et manuskript på forhånd, som bliver sendt til creatoren, så man kan forberede sig, hvis man har lyst.",
  },
  {
    q: "Skal man huske manuskriptet udenad?",
    a: "Slet ikke – det tror mange. Man skal blot orientere sig i manuskriptet inden optagelsesdagen. Når der skal filmes, tager man det sætning for sætning med en pause ind imellem, så man kan huske den næste sætning.",
  },
  {
    q: "Hvad skal man have på?",
    a: "Det afhænger af opgaven. Det kan være kontortøj, hjemmetøj eller sportstøj, og det oplyser vi gerne om på forhånd. Dog skal man have 4-6 forskellige trøjer, da der skiftes trøje mellem hver video, så der er variation.",
  },
  {
    q: "Hvor bliver videoerne vist?",
    a: "Som udgangspunkt bliver de vist og markedsført på sociale medier samt på kundens egen hjemmeside.",
  },
  {
    q: "Skal man have erfaring?",
    a: "Du behøver ingen erfaring, så længe du er tryg foran kameraet og taler flydende dansk uden accent.",
  },
  {
    q: "Får jeg produkterne?",
    a: "Som udgangspunkt nej. Produkterne skal bruges til flere shoots bagefter.",
  },
];

export default function CreatorFAQ() {
  const [åben, setÅben] = useState<number | null>(null);

  function toggle(i: number) {
    setÅben(åben === i ? null : i);
  }

  return (
    <section className="py-16 px-6" style={{ background: "#0d0f1e" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#DC2626" }}>
            — FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ofte stillede <span style={{ color: "#DC2626" }}>spørgsmål</span>
          </h2>
          <p className="text-slate-400 mb-8 text-base">
            Har du et spørgsmål, der ikke er besvaret her? Ring eller skriv til os.
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
