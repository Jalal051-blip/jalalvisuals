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

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-24 pb-16">

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
              Her får du et indblik i, hvordan det foregår, når videografen kommer ud til dig — og hvad du kan forvente på dagen.
            </p>

            {/* Tre hurtige punkter */}
            <div className="flex flex-col gap-4">
              {[
                "Vi tager os af alt teknik — lys, lyd og kamera",
                "Du modtager et fuldt brief inden optagelsesdagen",
                "De fleste produktioner er overstået på under 4 timer",
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

        {/* Højre — video */}
        <FadeIn>
          <div className="flex justify-center md:justify-end">
            <div
              className="w-72 md:w-80"
              style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 0 60px rgba(220,38,38,0.2), 0 20px 60px rgba(0,0,0,0.5)",
                border: "1px solid rgba(220,38,38,0.2)",
              }}
            >
              <div style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/w2N5wAXf3LU?autoplay=1&mute=1&loop=1&playlist=w2N5wAXf3LU&controls=0&playsinline=1&rel=0&modestbranding=1"
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
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
