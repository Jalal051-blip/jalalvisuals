import FadeIn from "@/components/FadeIn";

const trin = [
  {
    nr: "01",
    titel: "Du modtager en briefing",
    tekst: "Inden optagelsesdagen sender vi dig alt, hvad du skal vide: hvad der skal filmes, hvad der skal siges, hvad du skal have på, og hvornår vi mødes. Ingen overraskelser.",
  },
  {
    nr: "02",
    titel: "Vi mødes på lokation",
    tekst: "Vi sætter udstyr op, mens du slapper af. Du behøver ikke tænke på lys, lyd eller kameravinkler — det er vores job.",
  },
  {
    nr: "03",
    titel: "Opvarmning og gennemgang",
    tekst: "Inden vi begynder, gennemgår vi manuskriptet sammen. Første gennemkørsel er altid bare en prøve — der er ingen forventning om at det skal sidde perfekt første gang.",
  },
  {
    nr: "04",
    titel: "Vi filmer",
    tekst: "Vi tager det i dit tempo. Hvis du siger noget forkert, stopper vi og prøver igen. Det er helt normalt — det er sådan alle videoer bliver lavet.",
  },
  {
    nr: "05",
    titel: "Du er færdig",
    tekst: "De fleste projekter er overstået på 2-4 timer. Vi klarer resten.",
  },
];

export default function CreatorProcess() {
  return (
    <section id="optagelsesdag" className="py-24 px-6" style={{ background: "#080a14" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#DC2626" }}>
            — Trin for trin
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sådan foregår <span style={{ color: "#DC2626" }}>en optagelsesdag</span>
          </h2>
          <p className="text-slate-400 text-lg mb-14 max-w-2xl">
            Her er præcis hvad der sker — fra du modtager en besked fra os til du går hjem.
          </p>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #DC2626, transparent)" }}
          />

          <div className="flex flex-col gap-10">
            {trin.map((t, i) => (
              <FadeIn key={i}>
                <div className="flex gap-8 items-start pl-2">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10"
                    style={{ background: "#080a14", border: "2px solid #DC2626", color: "#DC2626" }}
                  >
                    {t.nr}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-white font-semibold text-lg mb-2">{t.titel}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{t.tekst}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
