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
import FadeIn from "@/components/FadeIn";

// Kategorier til tab-filteret
const kategorier = [
  { id: "ecom", label: "E-Commerce" },
  { id: "service", label: "Service" },
  { id: "explainer", label: "Explainer" },
  { id: "foto", label: "Foto" },
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
    videoUrl: "-hpWdzlUHG4",
  },
  {
    id: 20,
    titel: "Produktvideo 2",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "Bz1DwqE6cyo",
  },
  {
    id: 21,
    titel: "Produktvideo 3",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "BfG7s9MfhEI",
    thumbnailVariant: "1",
  },
  {
    id: 22,
    titel: "Produktvideo 4",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "AZF_oK5xyyU",
    thumbnailVariant: "3",
  },
  {
    id: 25,
    titel: "Produktvideo 5",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "qbuQWMqgYt0",
  },
  {
    id: 26,
    titel: "Produktvideo 6",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "NGBNLJDN4ss",
    thumbnailVariant: "2",
  },
  {
    id: 27,
    titel: "Produktvideo 7",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "RRmPtKdmh-o",
    thumbnailVariant: "3",
  },
  {
    id: 28,
    titel: "Produktvideo 8",
    kategori: "video",
    tags: ["ecom"],
    src: null,
    videoUrl: "JXfc1PVHF3s",
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
    format: "portrait",
    tags: [],
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
    format: "portrait",
    tags: [],
    src: null,
    videoUrl: null,
  },
  {
    id: 7,
    titel: "E-Commerce Pakke",
    kategori: "foto",
    format: "square",
    tags: [],
    src: "https://res.cloudinary.com/djwqhffal/image/upload/c_fill,ar_1:1,g_auto/v1775768727/T%C3%B8rrestativ_-_hero_-_different_angle_ljpqxs.jpg",
    videoUrl: null,
  },
  {
    id: 15,
    titel: "Produktfoto 2",
    kategori: "foto",
    format: "square",
    tags: [],
    src: "https://res.cloudinary.com/djwqhffal/image/upload/c_fill,ar_1:1,g_auto/v1775768709/VID03579_h2xot4.jpg",
    videoUrl: null,
  },
  {
    id: 16,
    titel: "Produktfoto 3",
    kategori: "foto",
    format: "square",
    tags: [],
    src: "https://res.cloudinary.com/djwqhffal/image/upload/c_fill,ar_1:1,g_auto/v1775768375/final-image-1763151646051.7292_uw0lki.jpg",
    videoUrl: null,
  },
  {
    id: 17,
    titel: "Produktfoto 4",
    kategori: "foto",
    format: "square",
    tags: [],
    src: "https://res.cloudinary.com/djwqhffal/image/upload/c_fill,ar_1:1,g_auto/v1775768600/VID02518_uugfis.jpg",
    videoUrl: null,
  },
  {
    id: 18,
    titel: "Produktfoto 5",
    kategori: "foto",
    format: "square",
    tags: [],
    src: "https://res.cloudinary.com/djwqhffal/image/upload/c_fill,ar_1:1,g_auto/v1775768429/VID03429_jxbsfh.jpg",
    videoUrl: null,
  },
  {
    id: 19,
    titel: "Produktfoto 6",
    kategori: "foto",
    format: "square",
    tags: [],
    src: "https://res.cloudinary.com/djwqhffal/image/upload/c_fill,ar_1:1,g_auto/v1775768668/VID02104_tqqf3k.jpg",
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
  {
    id: 13,
    titel: "Explainer Video 1",
    kategori: "explainer",
    tags: [],
    src: null,
    videoUrl: "2BfHggWhF9M",
  },
  {
    id: 14,
    titel: "Explainer Video 2",
    kategori: "explainer",
    tags: [],
    src: null,
    videoUrl: "FtP9pBpHpmk",
  },
  {
    id: 23,
    titel: "Explainer Video 3",
    kategori: "explainer",
    tags: [],
    src: null,
    videoUrl: "SznqIEN4veo",
  },
  {
    id: 24,
    titel: "Explainer Video 4",
    kategori: "explainer",
    tags: [],
    src: null,
    videoUrl: "mVpfVSjjLQM",
  },
  {
    id: 29,
    titel: "Explainer Video 5",
    kategori: "explainer",
    tags: [],
    src: null,
    videoUrl: "df2EEq_W1eM",
  },
  {
    id: 9,
    titel: "Service Video 1",
    kategori: "service",
    tags: [],
    src: null,
    videoUrl: "37U4Og0wJDg",
  },
  {
    id: 10,
    titel: "Service Video 2",
    kategori: "service",
    tags: [],
    src: null,
    videoUrl: "dpdPlGSw2iU",
  },
  {
    id: 11,
    titel: "Service Video 3",
    kategori: "service",
    tags: [],
    src: null,
    videoUrl: "PqqG0WPK52w",
  },
  {
    id: 12,
    titel: "Service Video 4",
    kategori: "service",
    tags: [],
    src: null,
    videoUrl: "51ubo2BhdRI",
  },
];

type Projekt = (typeof projekter)[number] & { format?: string };

// Hvert kort styrer sin egen afspilnings-tilstand
function ProjektKort({ projekt, paddingBottom, fillHeight }: { projekt: Projekt; paddingBottom?: string; fillHeight?: boolean }) {
  const [spiller, setSpiller] = useState(false);
  const harVideo = !!projekt.videoUrl;
  // Brug YouTube auto-thumbnail hvis intet manuelt thumbnail er sat
  const variant = (projekt as { thumbnailVariant?: string }).thumbnailVariant ?? "hqdefault";
  const thumbnail = projekt.src ?? (harVideo ? `https://img.youtube.com/vi/${projekt.videoUrl}/${variant}.jpg` : null);

  const indhold = (
    <>
      {spiller && harVideo ? (
        /* ── Inline YouTube-afspiller ── */
        <iframe
          src={`https://www.youtube.com/embed/${projekt.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : thumbnail ? (
        /* ── Thumbnail med play-knap overlay ── */
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={projekt.titel}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              const img = e.currentTarget;
              // Fallback-kæde: valgt variant → hqdefault → mqdefault
              if (!img.src.includes("hqdefault") && !img.src.includes("mqdefault")) {
                img.src = img.src.replace(/\/[^/]+\.jpg$/, "/hqdefault.jpg");
              } else if (img.src.includes("hqdefault")) {
                img.src = img.src.replace("hqdefault", "mqdefault");
              }
            }}
          />
          {harVideo && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#DC2626] flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </>
      ) : (
        /* ── Placeholder (ingen thumbnail eller video endnu) ── */
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e2240] to-[#151829] flex flex-col items-center justify-center p-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#DC2626]/40 flex items-center justify-center mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
              {projekt.kategori === "foto" ? (
                <>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </>
              ) : (
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              )}
            </svg>
          </div>
          <p className="text-slate-400 text-xs text-center leading-tight">{projekt.titel}</p>
        </div>
      )}
    </>
  );

  if (fillHeight) {
    return (
      <div
        className={`group relative rounded-xl overflow-hidden w-full h-full ${harVideo && !spiller ? "cursor-pointer" : ""}`}
        onClick={harVideo && !spiller ? () => setSpiller(true) : undefined}
      >
        {indhold}
      </div>
    );
  }
  return (
    <div
      className={`group relative ${harVideo && !spiller ? "cursor-pointer" : ""}`}
      onClick={harVideo && !spiller ? () => setSpiller(true) : undefined}
    >
      <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom }}>
        {indhold}
      </div>
    </div>
  );
}

export default function VideoSection() {
  const [aktivKategori, setAktivKategori] = useState("ecom");
  const [side, setSide] = useState(0);
  // Explainer viser 2 pr. side (1 række), alle andre 4 pr. side
  const perSide = aktivKategori === "explainer" ? 2 : 4;

  // Filtrer projekter baseret på aktiv fane
  const filtrerede = projekter.filter((p) => {
    if (aktivKategori === "alle") return true;
    if (aktivKategori === "ecom") return (p.tags as string[]).includes("ecom");
    return p.kategori === aktivKategori;
  });

  // Pagination — alle tabs undtagen foto
  const brugerPagination = aktivKategori !== "foto";
  const antalSider = brugerPagination ? Math.ceil(filtrerede.length / perSide) : 1;
  const visteProjekter = brugerPagination
    ? filtrerede.slice(side * perSide, side * perSide + perSide)
    : filtrerede;

  const skiftTab = (id: string) => {
    setAktivKategori(id);
    setSide(0);
  };

  return (
    <section id="arbejde" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sektion-header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-2 text-[#DC2626] text-sm font-semibold mb-3">
            <span className="w-4 h-[2px] bg-[#DC2626]" />
            Mit arbejde
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Videoer{" "}
            <span className="text-white">der </span><span className="text-[#DC2626]">konverterer</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            Vi laver knivskarpe videoer, der skaber salg. Gennem flere år har vi lært, hvad der virker — og hvad der ikke gør. Den erfaring er din genvej til resultater.
          </p>
        </FadeIn>

        {/* Tab-filter knapper */}
        <FadeIn delay={240} className="flex flex-wrap gap-3 mb-10">
          {kategorier.map((kat) => (
            <button
              key={kat.id}
              onClick={() => skiftTab(kat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                aktivKategori === kat.id
                  ? "bg-[#DC2626] text-white"
                  : "border border-white/20 text-slate-300 hover:border-white/40 hover:text-white"
              }`}
            >
              {kat.label}
            </button>
          ))}
        </FadeIn>

        {/* Grid — foto: 2 rækker × 3 kolonner 1:1, explainer: 16:9 i 2 kolonner, resten: 9:16 i 4 kolonner */}
        {aktivKategori === "foto" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtrerede.filter((p) => p.format === "square").map((projekt) => (
              <ProjektKort key={projekt.id} projekt={projekt} paddingBottom="100%" />
            ))}
          </div>
        ) : (
          <div className={aktivKategori === "explainer" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
            {visteProjekter.map((projekt) => (
              <ProjektKort
                key={projekt.id}
                projekt={projekt}
                paddingBottom={projekt.kategori === "explainer" ? "56.25%" : "177.78%"}
              />
            ))}
          </div>
        )}

        {/* Pagination pile — vises kun når der er flere sider */}
        {brugerPagination && antalSider > 1 && (
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setSide((s) => Math.max(0, s - 1))}
                disabled={side === 0}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Prik-indikator */}
              <div className="flex gap-2">
                {Array.from({ length: antalSider }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === side ? "bg-[#DC2626]" : "bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setSide((s) => Math.min(antalSider - 1, s + 1))}
                disabled={side === antalSider - 1}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Opfordring til kontakt */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Vil du have lavet noget lignende til din virksomhed?
          </p>
          <a
            href="#kontakt"
            className="wave-shimmer relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold transition-colors"
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
