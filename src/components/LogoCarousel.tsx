// Logo-karrusel — 10 logoer i evig, uafbrudt loop.
// Dette er en ren server-komponent (ingen "use client", ingen useState/useEffect).
// Det betyder React ALDRIG genrenderer den og animationen stopper aldrig.

const logos = [
  "Klient 1",
  "Klient 2",
  "Klient 3",
  "Klient 4",
  "Klient 5",
  "Klient 6",
  "Klient 7",
  "Klient 8",
  "Klient 9",
  "Klient 10",
];

export default function LogoCarousel() {
  return (
    <section className="py-10 border-y border-white/10 overflow-hidden">
      <div className="relative">
        {/* Gradient-masker på siderne */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d0f1e, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d0f1e, transparent)" }}
        />

        {/* Sporet med 2 kopier — animation defineret via inline style med translate3d (GPU) */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll-left 30s linear infinite",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Kopi 1 */}
          {logos.map((name) => (
            <div
              key={`a-${name}`}
              style={{ marginRight: "32px" }}
              className="flex-shrink-0 px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-semibold whitespace-nowrap"
            >
              {name}
            </div>
          ))}

          {/* Kopi 2 — identisk kopi, sikrer problemfrit loop */}
          {logos.map((name) => (
            <div
              key={`b-${name}`}
              style={{ marginRight: "32px" }}
              className="flex-shrink-0 px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-semibold whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
