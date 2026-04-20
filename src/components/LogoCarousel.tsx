// Logo-karrusel — 10 logoer i evig, uafbrudt loop.
// Dette er en ren server-komponent (ingen "use client", ingen useState/useEffect).
// Det betyder React ALDRIG genrenderer den og animationen stopper aldrig.

type Logo = { type: "tekst"; navn: string } | { type: "billede"; src: string; alt: string; filter?: string; blend?: boolean; h?: string; scale?: number };

// filter "inverter": mørkt logo på hvid baggrund → hvidt logo på sort baggrund (passer til mørkt tema)
// filter "grå":     farvet logo → gråtoner med opacity (beholder formen uden mærkelig farveinversion)
const inverter = "grayscale(1) invert(1) opacity(0.75)";
const grå      = "grayscale(1) opacity(0.70)";

const logos: Logo[] = [
  { type: "billede", src: "/227305-1523083836.png",              alt: "Watery",                filter: inverter, blend: true },
  { type: "billede", src: "/farvexpertencover.png",               alt: "FarveXperten",          filter: grå },
  { type: "billede", src: "/MuscleHouse_white.png",               alt: "Muscle House",           blend: true },
  { type: "billede", src: "/Danbo - blå Logo.png",                alt: "Dan-Bo",                filter: grå },
  { type: "billede", src: "/PITAYA_white.png",                    alt: "Pitaya",                blend: true },
  { type: "billede", src: "/Design uden navn (52).png", alt: "NordiskPuls",  filter: inverter, blend: true },
  { type: "billede", src: "/Logo (transparant).png",    alt: "Nordic Cozy", filter: inverter, blend: true },
  { type: "billede", src: "/ProBrush_white.png",        alt: "ProBrush",    blend: true, scale: 3.5 },
  { type: "billede", src: "/0x0 (2).png", alt: "The Copenhagen Scent", filter: inverter, blend: true },
  { type: "billede", src: "/Confidence logo white.png", alt: "Confidence", blend: true },
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
              className="flex-shrink-0 mx-16 whitespace-nowrap flex items-center justify-center"
            >
              {name.type === "billede" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={name.src} alt={name.alt} className="object-contain" style={{
                  filter: name.filter ?? "grayscale(1) opacity(0.7)",
                  mixBlendMode: name.blend ? "screen" : undefined,
                  height: name.h ?? "3.5rem",
                  width: "auto",
                  transform: name.scale ? `scale(${name.scale})` : undefined,
                }} />
              ) : (
                <span className="text-slate-300 text-sm font-semibold">{name.navn}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
