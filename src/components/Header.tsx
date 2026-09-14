import { useState } from "react";
import { navLinks } from "../config/nav";
import PensifLogo from "./PensifLogo";
import StoreBadges from "./StoreBadges";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night/90 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="/#top" className="flex items-center gap-2.5">
          <PensifLogo size={32} variant="mark" />
          <span className="text-lg font-bold text-white">Pensif</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <StoreBadges />
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <StoreBadges className="mt-4" />
        </div>
      )}
    </header>
  );
}
