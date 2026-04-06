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

// 5 gentagelser = ~6500px per kopi — dækker super ultrawide (5120px+).
// To kopier renderes — animation går 0 → -50% = præcis én kopi-bredde.
const singleCopy = [...logos, ...logos, ...logos, ...logos, ...logos];

export default function LogoCarousel() {
  return (
    <section className="py-10 border-y border-white/10">
      {/* overflow-hidden sidder her — direkte forælder til sporet */}
      <div className="relative overflow-hidden">
        {/* Gradient-masker */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d0f1e, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d0f1e, transparent)" }}
        />

        {/* To kopier af singleCopy — animation -50% = præcis én kopi */}
        <div className="carousel-infinite flex w-max">
          {[...singleCopy, ...singleCopy].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-semibold whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
