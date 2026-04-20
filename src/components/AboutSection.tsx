"use client";

import { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/FadeIn";

export default function AboutSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const [synlig, setSynlig] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSynlig(true); },
      { threshold: 0.2 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="om-mig" className="py-24 px-6 bg-[#151829]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Venstre side — billede fylder præcis samme højde som tekstkolonnen */}
          <FadeIn className="relative">
            <div className="w-full h-full max-w-sm mx-auto rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/VID06368 - Kopi.jpg"
                alt="Jalal"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </FadeIn>

          {/* Højre side — tekst */}
          <FadeIn delay={300}>
            <div className="flex items-center gap-2 text-[#DC2626] text-sm font-semibold mb-4">
              <span className="w-4 h-[2px] bg-[#DC2626]" />
              Om mig
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Derfor skal du vælge<br />
              <span className="text-[#DC2626]">Jalal Visuals</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              Jeg er freelance videograf og fotograf med fokus på at skabe
              visuelt indhold, der ikke bare ser godt ud — men som faktisk
              virker.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              Jeg arbejder primært med e-commerce virksomheder og
              servicevirksomheder, der ønsker at løfte deres brand med
              professionelle videoer og billeder. Jeg hyres også ind af
              marketingbureauer til produktioner, der kræver et skarpt øje og
              en erfaren hånd.
            </p>

            {/* Hvad jeg tilbyder */}
            <div ref={listRef} className="space-y-3 mb-10">
              {[
                "Produktvideoer til sociale medier & annoncer",
                "Brand- og virksomhedsfilm",
                "Produktfotografering til webshops",
                "Tæt samarbejde med marketingbureauer",
              ].map((punkt, i) => (
                <div
                  key={punkt}
                  className="flex items-start gap-3"
                  style={{
                    opacity: synlig ? 1 : 0,
                    transform: synlig ? "translateX(0)" : "translateX(-36px)",
                    transition: `opacity 0.5s ease ${i * 110}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 110}ms`,
                  }}
                >
                  <span className="w-5 h-5 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 text-sm">{punkt}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold transition-colors"
            >
              Lad os tale om dit projekt
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
