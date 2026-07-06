import FadeIn from "@/components/FadeIn";

const forskelle = [
  {
    titel: "Udstyr",
    ugc: "Du finder selv en god vinkel og sætter telefonen op",
    pro: "Vi håndterer alt udstyr — kamera, lys og lyd. Du skal bare fokusere på at snakke",
  },
  {
    titel: "Redigering",
    ugc: "Du redigerer selv videoen efterfølgende",
    pro: "Vi klarer al redigering.",
  },
  {
    titel: "Lokation",
    ugc: "Du filmer typisk alene hjemme",
    pro: "Det kan være hjemme hos dig, på et kontor eller udendørs",
  },
  {
    titel: "Manuskript",
    ugc: "Du finder selv på, hvad der skal siges",
    pro: "Vi sender dig et manuskript i god tid.",
  },
  {
    titel: "Instruktion",
    ugc: "Du tager selv beslutninger undervejs",
    pro: "Vi instruerer dig løbende — du behøver ikke at gætte dig frem",
  },
];

export default function CreatorWho() {
  return (
    <section id="hvem" className="py-24 px-6" style={{ background: "#080a14" }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#DC2626" }}>
            — UGC vs. professionel
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hvad er <span style={{ color: "#DC2626" }}>anderledes?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-14 max-w-2xl">
            Er du vant til at filme UGC alene hjemme, er her de vigtigste forskelle — så du ved hvad du går ind til.
          </p>
        </FadeIn>

        {/* Kolonneoverskrifter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 px-1">
          <p className="text-sm font-bold uppercase tracking-widest text-white">UGC</p>
          <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#DC2626" }}>Professionel</p>
        </div>

        <div className="flex flex-col gap-4">
          {forskelle.map((r, i) => (
            <FadeIn key={i}>
              <div
                className="rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="px-6 py-5" style={{ background: "#10131f" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">{r.titel}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.ugc}</p>
                </div>
                <div className="px-6 py-5" style={{ background: "#151829", borderLeft: "1px solid rgba(220,38,38,0.2)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#DC2626" }}>{r.titel}</p>
                  <p className="text-white text-sm leading-relaxed">{r.pro}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
