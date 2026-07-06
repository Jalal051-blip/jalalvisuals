import FadeIn from "@/components/FadeIn";

const rækker = [
  { kategori: "Udstyr",       ugc: "Din egen telefon",                    pro: "Professionelt kamera, lys og lyd" },
  { kategori: "Redigering",   ugc: "Du redigerer selv eller sender råfil", pro: "Vi klarer al redigering" },
  { kategori: "Instruktion",  ugc: "Du bestemmer selv",                   pro: "Vi guider dig løbende på settet" },
  { kategori: "Location",     ugc: "Hjemme hos dig",                      pro: "Hjemme hos dig eller anden location" },
  { kategori: "Manuskript",   ugc: "Du skriver selv",                     pro: "Vi sender et færdigt manuskript på forhånd" },
  { kategori: "Resultat",     ugc: "Autentisk og relaterbart",             pro: "Poleret og professionelt" },
];

export default function CreatorCompare() {
  return (
    <section className="py-20 px-6" style={{ background: "#080a14" }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          {/* Tabelheader */}
          <div className="grid grid-cols-[1fr_1fr_1fr] mb-3 px-4">
            <div />
            <div className="text-center">
              <span className="text-sm font-bold tracking-widest uppercase text-white px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                UGC
              </span>
            </div>
            <div className="text-center">
              <span className="text-sm font-bold tracking-widest uppercase text-white px-4 py-1.5 rounded-full" style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)" }}>
                Professionel
              </span>
            </div>
          </div>

          {/* Rækker */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {rækker.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1fr_1fr] items-center"
                style={{
                  background: i % 2 === 0 ? "#10131f" : "#0d0f1e",
                  borderBottom: i < rækker.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div className="px-5 py-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{r.kategori}</span>
                </div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-white text-sm">{r.ugc}</span>
                </div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(220,38,38,0.15)" }}>
                  <span className="text-white text-sm">{r.pro}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
