"use client";
import { useEffect, useRef, useState } from "react";

// Ease-out expo: starter hurtigt, bremser meget blødt mod slutningen
function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function RollingDigit({ digit }: { digit: number }) {
  return (
    // Ydre span: clipping-vindue — kun 1 tegn højt, bredde bestemmes af fonten
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        overflow: "hidden",
        height: "1.2em",
        verticalAlign: "middle",
        fontVariantNumeric: "tabular-nums", // monospaced cifre — ingen sidelæns hop
      }}
    >
      {/* Indre strip: ruller vertikalt via GPU-accelereret transform */}
      <span
        style={{
          display: "block",
          transform: `translateY(calc(-${digit} * 1.2em))`,
          transition: "transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)", // smooth decel
          willChange: "transform", // GPU-layer hint
        }}
      >
        {Array.from({ length: 10 }, (_, d) => (
          <span key={d} style={{ display: "block", height: "1.2em", lineHeight: "1.2em" }}>
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

function RollingCounter({ target, duration = 5000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const prevRef = useRef(0); // undgår unødvendige re-renders

  useEffect(() => {
    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / duration, 1);
      const next = Math.round(easeOutExpo(t) * target);

      // Opdater kun state når tallet faktisk ændrer sig
      if (next !== prevRef.current) {
        prevRef.current = next;
        setCount(next);
      }

      if (t < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDone(true);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current); };
  }, [target, duration]);

  const digits = String(count).padStart(String(target).length, "0").split("").map(Number);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {/* Visuelle cifre — skjult for skærmlæsere under animation */}
      {digits.map((digit, i) => (
        <RollingDigit key={i} digit={digit} />
      ))}
      <span aria-hidden="true" style={{ marginLeft: "0.1em" }}>+</span>

      {/* Tilgængelighed: skærmlæser annoncerer det endelige tal når animationen slutter */}
      <span
        aria-live="polite"
        aria-atomic="true"
        style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}
      >
        {done ? `${target}+` : ""}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  const fadeStyle = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform" as const,
  });

  return (
    <section
      id="hjem"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-20 pb-10 overflow-hidden"
    >
      {/* Lag 1 — grovkornet støj (overlay) */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.12,
          mixBlendMode: "overlay",
        }}
      />
      {/* Lag 2 — finkornet støj (screen) — dobbelt dithering effekt */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px 150px",
          opacity: 0.07,
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── Video baggrund ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Mørkt overlay så tekst er læsbar */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 60%, rgba(8,10,20,0.9) 100%)",
          }}
        />
      </div>

      {/* Indhold */}
      <div className="relative z-10 max-w-4xl mx-auto text-center" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)" }}>
        {/* Hoved-overskrift */}
        <h1 style={fadeStyle(0)} className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-5">
          Videoer der kan mærkes på <span className="text-[#DC2626]">omsætningen.</span>
        </h1>

        {/* Undertekst */}
        <p style={{ ...fadeStyle(240), color: "rgba(148,163,184,0.8)" }} className="text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Vi står for manuskript, redigering og optagelse,{" "}
          <br className="sm:hidden" />så du kan fokusere på det, du er god til.
        </p>

        {/* Knapper */}
        <style>{`
          @keyframes wave-shimmer {
            0%, 70%  { transform: translateX(-160%) skewX(-12deg); opacity: 0; }
            74%      { opacity: 1; }
            100%     { transform: translateX(160%) skewX(-12deg); opacity: 0; }
          }
          .wave-shimmer::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.40) 50%, transparent 100%);
            animation: wave-shimmer 9s ease-in-out infinite;
          }
        `}</style>
        <div style={fadeStyle(440)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#kontakt"
            className="wave-shimmer relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold text-sm sm:text-base transition-colors w-full sm:w-auto text-center"
          >
            Få et tilbud
          </a>
          <a
            href="#arbejde"
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-sm sm:text-base transition-colors w-full sm:w-auto text-center"
          >
            Se arbejde
          </a>
        </div>
      </div>

      {/* Statistik-badges nedenfor */}
      <div style={fadeStyle(680)} className="relative z-10 mt-10 flex flex-wrap justify-center gap-6 text-center">
        {/* Projekter leveret */}
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-white">
            <RollingCounter target={125} />
          </span>
          <span className="text-slate-400 text-xs sm:text-sm mt-1">Projekter leveret</span>
        </div>

        {/* Trustpilot badge */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">4,8</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00b67a">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-slate-400 text-xs sm:text-sm">Trustpilot</span>
          </div>
        </div>

        {/* Års erfaring */}
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-white">11</span>
          <span className="text-slate-400 text-xs sm:text-sm mt-1">Års erfaring</span>
        </div>
      </div>

      {/* Pil ned — indikerer at der er mere indhold */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-500"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
