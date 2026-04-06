"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Navigation links — href peger på section-id'er på siden
const navLinks = [
  { label: "Arbejde", href: "#arbejde" },
  { label: "Om mig", href: "#om-mig" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Gør navbar mere synlig når brugeren scroller ned
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0f1e]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — billedet ligger i public/logo.png */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="JalalVisuals"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA knap (desktop) */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white text-sm font-semibold transition-colors"
        >
          Få et tilbud
        </a>

        {/* Hamburger menu (mobil) */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Åbn menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobil menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0f1e]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white text-base font-medium transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold transition-colors"
          >
            Få et tilbud
          </a>
        </div>
      )}
    </header>
  );
}
