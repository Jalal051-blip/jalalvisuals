// Logo-karrusel — 10 logoer i evig, uafbrudt loop.
// Dette er en ren server-komponent (ingen "use client", ingen useState/useEffect).
// Det betyder React ALDRIG genrenderer den og animationen stopper aldrig.

type Logo = { type: "tekst"; navn: string } | { type: "billede"; src: string; alt: string; filter?: string; blend?: boolean; h?: string; scale?: number; ml?: string };

// filter "inverter": mørkt logo på hvid baggrund → hvidt logo på sort baggrund (passer til mørkt tema)
// filter "grå":     farvet logo → gråtoner med opacity (beholder formen uden mærkelig farveinversion)
const inverter = "grayscale(1) invert(1) opacity(0.75)";
const grå      = "grayscale(1) opacity(0.70)";

const logos: Logo[] = [
  { type: "billede", src: "/227305-1523083836.webp",              alt: "Watery",                filter: inverter, blend: true },
  { type: "billede", src: "/farvexpertencover.webp",               alt: "FarveXperten",          filter: "grayscale(1) invert(1) brightness(1.8) opacity(0.85)", blend: true },
  { type: "billede", src: "/Danbo - blå Logo.webp",                alt: "Dan-Bo",                filter: grå },
  { type: "billede", src: "/PITAYA_white.webp",                    alt: "Pitaya",                blend: true },
  { type: "billede", src: "/Design uden navn (52).webp", alt: "NordiskPuls",  filter: inverter, blend: true },
  { type: "billede", src: "/Logo (transparant).webp",    alt: "Nordic Cozy", filter: inverter, blend: true },
  { type: "billede", src: "/ProBrush_white.webp",        alt: "ProBrush",    blend: true, scale: 3.5 },
  { type: "billede", src: "/THE_COPENHAGEN_SCENT_white.webp", alt: "The Copenhagen Scent", blend: true, scale: 2.5, h: "4rem", ml: "4rem" },
  { type: "billede", src: "/Confidence logo white.webp", alt: "Confidence", blend: true },
  { type: "billede", src: "/wispy.webp",                 alt: "Wispy",      filter: grå },
  { type: "billede", src: "/Logo_Ubbe_RGB.webp",        alt: "Ubbe",       filter: inverter, blend: true },
];

// 2 gentagelser = ~6500px per kopi — dækker ultrawide (3440px+).
// To kopier renderes — animation går 0 → -50% = præcis én kopi-bredde.
const singleCopy = [...logos, ...logos];

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
                <img src={name.src} alt={name.alt} decoding="async" className="object-contain" style={{
                  filter: name.filter ?? "grayscale(1) opacity(0.7)",
                  mixBlendMode: name.blend ? "screen" : undefined,
                  height: name.h ?? "3.5rem",
                  width: "auto",
                  transform: name.scale ? `scale(${name.scale})` : undefined,
                  marginLeft: name.ml ?? undefined,
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
