"use client";

// VideoSection — portefølje-sektion med tab-filtrering.
//
// "use client" er nødvendig her fordi vi bruger useState til at holde styr
// på hvilken fane (tab) er aktiv.
//
// Vidéo-thumbnails vises i 9:16 format (portræt).
// Tricket er paddingBottom: "177.78%" — CSS beregner padding-bottom
// relativt til elementets BREDDE, ikke højde. 177.78% = 16/9 × 100,
// hvilket tvinger elementet til at have en højde på 177.78% af sin bredde
// — altså 9:16 format.

import { useState } from "react";

// Kategorier til tab-filteret
const kategorier = [
  { id: "video", label: "Video" },
  { id: "foto", label: "Foto" },
  { id: "ecom", label: "E-Commerce" },
];

// Eksempel-data — erstat med dine rigtige projekter.
// For at tilføje et rigtig thumbnail-billede:
// 1. Gem billedet i mappen: public/thumbnails/
// 2. Sæt src til f.eks. "/thumbnails/projekt1.jpg"
// 3. Sæt videoUrl til YouTube- eller Vimeo-link hvis det er en video
const projekter = [
  {
    id: 1,
    titel: "Produktvideo — Mode",
    kategori: "video",
    tags: ["ecom"],
    src: null,         // erstat med "/thumbnails/projekt1.jpg"
    videoUrl: null,    // erstat med dit YouTube/Vimeo link
  },
  {
    id: 2,
    titel: "Branding — Service",
    kategori: "video",
    tags: [],
    src: null,
    videoUrl: null,
  },
  {
    id: 3,
    titel: "Produktfoto — Kosmetik",
    kategori: "foto",
    tags: ["ecom"],
    src: null,
    videoUrl: null,
  },
  {
    id: 4,
    titel: "Virksomhedsfilm",
    kategori: "video",
    tags: [],
    src: null,
    videoUrl: null,
  },
  {
    id: 6,
    titel: "Portræt & Team",
    kategori: "foto",
    tags: [],
    src: null,
    videoUrl: null,
  },
  {
    id: 7,
    titel: "E-Commerce Pakke",
    kategori: "foto",
    tags: ["ecom"],
    src: null,
    videoUrl: null,
  },
  {
    id: 8,
    titel: "Event Dokumentation",
    kategori: "video",
    tags: [],
    src: null,
    videoUrl: null,
  },
];

export default function VideoSection() {
  const [aktivKategori, setAktivKategori] = useState("video");

  // Filtrer projekter baseret på aktiv fane
  const filtrerede = projekter.filter((p) => {
    if (aktivKategori === "alle") return true;
    if (aktivKategori === "ecom") return p.tags.includes("ecom");
    return p.kategori === aktivKategori;
  });

  return (
    <section id="arbejde" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sektion-header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#DC2626] text-sm font-semibold mb-3">
            <span className="w-4 h-[2px] bg-[#DC2626]" />
            Mit arbejde
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Videoer og billeder{" "}
            <span className="text-slate-400">der konverterer</span>
          </h2>
        </div>

        {/* Tab-filter knapper */}
        <div className="flex flex-wrap gap-3 mb-10">
          {kategorier.map((kat) => (
            <button
              key={kat.id}
              onClick={() => setAktivKategori(kat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                aktivKategori === kat.id
                  ? "bg-[#DC2626] text-white"
                  : "border border-white/20 text-slate-300 hover:border-white/40 hover:text-white"
              }`}
            >
              {kat.label}
            </button>
          ))}
        </div>

        {/* Grid med 9:16 thumbnail-kort */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtrerede.map((projekt) => (
            <div key={projekt.id} className="group relative">
              {/* 9:16 aspect ratio container */}
              <div
                className="relative w-full rounded-xl overflow-hidden"
                style={{ paddingBottom: "177.78%" }}
              >
                {projekt.src ? (
                  // Rigtig thumbnail — vises når du tilføjer billeder
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={projekt.src}
                    alt={projekt.titel}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder — vises indtil du tilføjer rigtige billeder
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e2240] to-[#151829] flex flex-col items-center justify-center p-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#DC2626]/40 flex items-center justify-center mb-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="2"
                      >
                        {projekt.kategori === "video" ? (
                          <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                        ) : (
                          <>
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </>
                        )}
                      </svg>
                    </div>
                    <p className="text-slate-400 text-xs text-center leading-tight">
                      {projekt.titel}
                    </p>
                  </div>
                )}

                {/* Hover-overlay med play-knap (kun for videoer) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    {projekt.kategori === "video" && (
                      <div className="w-14 h-14 rounded-full bg-[#DC2626] flex items-center justify-center shadow-lg">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                    <span className="text-white text-xs font-medium px-3 text-center">
                      {projekt.titel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Opfordring til kontakt */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Vil du have lavet noget lignende til din virksomhed?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold transition-colors"
          >
            Kontakt mig
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
