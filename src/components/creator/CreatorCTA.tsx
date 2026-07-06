"use client";

import FadeIn from "@/components/FadeIn";

export default function CreatorCTA() {
  return (
    <section id="kontakt-creator" className="py-24 px-6" style={{ background: "#080a14" }}>
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#DC2626" }}>
            — Har du spørgsmål?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lyder det som noget <span style={{ color: "#DC2626" }}>for dig?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Skriv til os eller ring — vi fortæller gerne mere om, hvad det konkret ville indebære for dig.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4560535289"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-colors"
              style={{ background: "#DC2626" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#b91c1c")}
              onMouseLeave={e => (e.currentTarget.style.background = "#DC2626")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.47-1.47a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Ring til os
            </a>
            <a
              href="mailto:info@jalalvisuals.dk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-slate-300 font-semibold text-base transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send en mail
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
