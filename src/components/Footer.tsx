// Footer — bunden af siden med logo, links og copyright.

const navLinks = [
  { label: "Arbejde", href: "#arbejde" },
  { label: "Om", href: "#om-mig" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0c18] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo og tagline */}
          <div>
            <div className="mb-3">
              <img
                src="/logo.png"
                alt="JalalVisuals"
                className="h-8 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.07)) brightness(1.08)" }}
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professionel videografi og fotografi til virksomheder der vil skille sig ud.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontakt</h4>
            <a
              href="mailto:info@jalalvisuals.dk"
              className="text-slate-400 hover:text-white text-sm transition-colors block mb-2"
            >
              info@jalalvisuals.dk
            </a>
            <a
              href="tel:+4560535289"
              className="text-slate-400 hover:text-white text-sm transition-colors block mb-2"
            >
              +45 60 53 52 89
            </a>
            <p className="text-slate-400 text-sm">CVR: 46139364</p>
            {/* Sociale medier — tilføj dine egne links */}
            <div className="flex gap-3 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/jalalvisuals/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-slate-400"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bundlinje */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {år} Jalal Visuals ApS. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
