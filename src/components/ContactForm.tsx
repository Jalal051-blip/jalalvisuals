"use client";

// Kontaktformular — "use client" er nødvendig fordi vi bruger:
// - useState: til at gemme hvad brugeren skriver i felterne
// - useState: til at vise om formularen er sendt / fejler
// - handleSubmit: en funktion der kører når brugeren klikker "Send"

import { useState } from "react";

// Typen af vores formular-data (TypeScript sikrer vi ikke glemmer felter)
type FormData = {
  navn: string;
  virksomhed: string;
  instagram: string;
  email: string;
  telefon: string;
  besked: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  // Formular-data — opdateres når brugeren skriver
  const [formData, setFormData] = useState<FormData>({
    navn: "",
    virksomhed: "",
    instagram: "",
    email: "",
    telefon: "+45 ",
    besked: "",
  });

  // Status for indsendelse: idle=ikke sendt, loading=sender, success=sendt, error=fejl
  const [status, setStatus] = useState<Status>("idle");
  const [fejlBesked, setFejlBesked] = useState("");

  // Opdater et felt i formData når brugeren skriver
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "telefon") {
      // Behold altid "+45 " præfiks, formater resten som "XX XX XX XX" (max 8 cifre)
      const digits = e.target.value.replace(/^\+45\s*/, "").replace(/\D/g, "").slice(0, 8);
      const formatted = digits.match(/.{1,2}/g)?.join(" ") ?? "";
      setFormData((prev) => ({ ...prev, telefon: "+45 " + formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  // Send formularen til vores API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // forhindrer siden i at reloade
    setStatus("loading");
    setFejlBesked("");

    try {
      const svar = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (svar.ok) {
        setStatus("success");
        // Nulstil formularen
        setFormData({ navn: "", virksomhed: "", instagram: "", email: "", telefon: "+45 ", besked: "" });
      } else {
        const data = await svar.json();
        setFejlBesked(data.fejl || "Noget gik galt. Prøv igen.");
        setStatus("error");
      }
    } catch {
      setFejlBesked("Kunne ikke forbinde til serveren. Tjek din internetforbindelse.");
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Venstre side — tekst */}
          <div className="md:sticky md:top-24">
            <div className="flex items-center gap-2 text-[#DC2626] text-sm font-semibold mb-4">
              <span className="w-4 h-[2px] bg-[#DC2626]" />
              Kontakt
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Lad os se om vi er et{" "}
              <span className="text-[#DC2626]">match</span>
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(148,163,184,0.8)" }}>
              Fortæl mig om dit projekt — jo mere du fortæller, jo bedre kan
              jeg hjælpe. Jeg svarer inden for 24 timer på hverdage.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  ),
                  tekst: "CVR: 46139364",
                },
                {
                  icon: (
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  ),
                  tekst: "+45 60 53 52 89",
                },
                {
                  icon: (
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  tekst: "info@jalalvisuals.dk",
                },
                {
                  icon: (
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  ),
                  tekst: "Landsdækkende i hele Danmark",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-[#1e2240] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="2"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-sm">{item.tekst}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Højre side — formularen */}
          <div className="bg-[#151829] rounded-2xl border border-white/10 p-8">
            {status === "success" ? (
              // Succes-besked — vises når mailen er sendt
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Besked sendt!
                </h3>
                <p className="text-slate-400">
                  Tak for din henvendelse. Jeg vender tilbage inden for 24 timer.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Navn — fuld bredde */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Navn <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    name="navn"
                    value={formData.navn}
                    onChange={handleChange}
                    required
                    placeholder="Dit fulde navn"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors text-sm"
                  />
                </div>

                {/* Virksomhed og Instagram side om side */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Virksomhed
                    </label>
                    <input
                      type="text"
                      name="virksomhed"
                      value={formData.virksomhed}
                      onChange={handleChange}
                      placeholder="Din virksomhed"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Instagram
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="brugernavn"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Email og telefon side om side */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="din@email.dk"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Telefon <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                      placeholder="+45 12 34 56 78"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Opgavebeskrivelse */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Beskriv opgaven
                  </label>
                  <textarea
                    name="besked"
                    value={formData.besked}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Fortæl mig om din virksomhed, hvad du har brug for, og hvornår du ønsker det leveret..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Fejl-besked */}
                {status === "error" && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {fejlBesked}
                  </div>
                )}

                {/* Send-knap */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          className="opacity-75"
                        />
                      </svg>
                      Sender...
                    </>
                  ) : (
                    "Send besked"
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center">
                  Navn, email og telefon er påkrævede <span className="text-[#DC2626]">*</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
