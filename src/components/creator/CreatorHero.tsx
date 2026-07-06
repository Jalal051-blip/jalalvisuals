"use client";

import FadeIn from "@/components/FadeIn";

export default function CreatorHero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{ background: "#0d0f1e" }}
    >
      {/* Baggrunds-glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(220,38,38,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center">

        {/* Venstre — tekst */}
        <FadeIn>
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: "#DC2626" }}>
              — Creator samarbejde
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Sådan arbejder vi<br />
              <span style={{ color: "#DC2626" }}>sammen med dig</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Her får du et indblik i, hvordan samarbejdet foregår, og forskellen på, når videografen kommer ud til dig, og når du selv skal optage.
            </p>

            {/* Tre hurtige punkter */}
            <div className="flex flex-col gap-4">
              {[
                "Fair betalt løn for din tid",
                "Film hjemmefra i dine egne omgivelser",
                "Ingen erfaring krævet — vi guider dig hele vejen",
              ].map((punkt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(220,38,38,0.15)", border: "1px solid #DC2626" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{punkt}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Højre — to videoer */}
        <FadeIn>
          <div className="flex justify-center md:justify-end gap-4 items-start">
            {[
              { id: "w2N5wAXf3LU", label: "UGC" },
              { id: "-hpWdzlUHG4", label: "Professionel" },
            ].map((video, i) => (
              <div key={i} className="flex flex-col items-center gap-3 shrink-0" style={{ width: "min(264px, 42vw)" }}>
                <div
                  className="w-full"
                  style={{
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                    boxShadow: "0 0 40px rgba(220,38,38,0.15), 0 20px 40px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(220,38,38,0.15)",
                  }}
                >
                  <div style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&playsinline=1&rel=0&modestbranding=1`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-wide text-white px-4 py-1.5 rounded-full" style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", color: "#DC2626" }}>
                  {video.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
