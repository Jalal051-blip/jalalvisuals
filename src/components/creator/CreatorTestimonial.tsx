"use client";

import FadeIn from "@/components/FadeIn";

const punkter = [
  "Du bliver instrueret i alt — ingen erfaring nødvendig",
  "Du læser sætning for sætning, du skal ikke huske noget udenad",
  "Fair løn for 2-4 timers arbejde — uden at forlade hjemmet",
  "Videografen kommer til dig og tager sig af al teknik",
];

export default function CreatorTestimonial() {
  return (
    <section className="py-24 px-6" style={{ background: "#0d0f1e" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#DC2626" }}>
            — Creatorernes oplevelse
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hør det fra <span style={{ color: "#DC2626" }}>dem selv</span>
          </h2>
          <p className="text-slate-400 text-lg mb-14 max-w-2xl">
            Vores creators fortæller om, hvordan det er at have en videograf forbi — og hvilke tanker de havde omkring samarbejdet.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Video */}
          <FadeIn>
            <div className="flex justify-center md:justify-start">
              <div
                style={{
                  width: "min(300px, 80vw)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 0 60px rgba(220,38,38,0.15), 0 20px 60px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(220,38,38,0.2)",
                }}
              >
                <div style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/BtqPkE7Jzgw?autoplay=1&mute=0&loop=1&playlist=BtqPkE7Jzgw&controls=1&playsinline=1&rel=0&modestbranding=1&cc_load_policy=0"
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

          {/* Punkter */}
          <FadeIn>
            <div className="flex flex-col gap-5">
              {punkter.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(220,38,38,0.15)", border: "1px solid #DC2626" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
