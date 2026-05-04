import FadeIn from "@/components/FadeIn";

const trin = [
  {
    nummer: "01",
    titel: "Brief & Script",
    kort: "Vi analyserer dit brand og dine konkurrenter for at skabe unikke scripts, der skiller sig ud fra mængden.",
    detalje: "Sådan rammer budskabet præcis.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    nummer: "02",
    titel: "Optagelse",
    kort: "Vi optager stilrene scener i høj kvalitet med afsæt i mange års erfaring.",
    detalje: "Vi tester vinkler og finder det perfekte shot.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" fill="#DC2626" stroke="none" />
      </svg>
    ),
  },
  {
    nummer: "03",
    titel: "Redigering",
    kort: "Vi implementerer fængende elementer, der gør, at hele videoen bliver set til ende.",
    detalje: "Hvert sekund er der for at konvertere.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Timeline-linje */}
        <line x1="2" y1="12" x2="22" y2="12" />
        {/* Markørpunkter */}
        <circle cx="6" cy="12" r="2" fill="#DC2626" stroke="none" />
        <circle cx="13" cy="12" r="2" fill="#DC2626" stroke="none" />
        <circle cx="19" cy="12" r="2" fill="#DC2626" stroke="none" />
        {/* Lodrette linjer over/under */}
        <line x1="6" y1="7" x2="6" y2="10" />
        <line x1="13" y1="14" x2="13" y2="17" />
        <line x1="19" y1="7" x2="19" y2="10" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#0d0f1e]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-[#DC2626] text-sm font-semibold mb-3">
            <span className="w-4 h-[2px] bg-[#DC2626]" />
            Vores proces
            <span className="w-4 h-[2px] bg-[#DC2626]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Sådan arbejder{" "}
            <span className="text-[#DC2626]">vi</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            En simpel og effektiv proces — fra første brief til færdigt materiale klar til brug.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trin.map((t, i) => (
            <FadeIn key={t.nummer} delay={i * 150}>
              <div className="relative bg-[#151829] border border-white/10 rounded-2xl p-7 flex flex-col gap-5 h-full hover:border-[#DC2626]/30 transition-colors">
                {/* Nummer */}
                <span className="text-[#DC2626]/20 text-6xl font-black absolute top-4 right-6 select-none leading-none">
                  {t.nummer}
                </span>

                {/* Ikon */}
                <div className="w-14 h-14 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0">
                  {t.icon}
                </div>

                {/* Tekst */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold text-lg">{t.titel}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{t.kort}</p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
