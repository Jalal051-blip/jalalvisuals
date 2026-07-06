import FadeIn from "@/components/FadeIn";

const fakta = [
  { tal: "Under 4 timer", label: "De fleste optagelsesdage er overstået på under 4 timer" },
  { tal: "Vi styrer det", label: "Du behøver ikke tænke på lys, lyd eller kameravinkel — det klarer vi" },
  { tal: "Ingen overraskelser", label: "Du får et fuldt brief inden optagelsesdagen, så du ved præcis hvad der sker" },
];

export default function CreatorStats() {
  return (
    <section className="py-16 px-6" style={{ background: "#080a14" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {fakta.map((f, i) => (
          <FadeIn key={i}>
            <div
              className="rounded-2xl px-8 py-10 text-center"
              style={{ background: "#10131f", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="text-2xl font-bold mb-3 text-white">{f.tal}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{f.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
