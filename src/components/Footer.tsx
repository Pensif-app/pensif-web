import { useState } from "react";
import { socialLinks as socials } from "../config/links";
import PensifLogo from "./PensifLogo";

const socialIcons: Record<string, string> = {
  instagram: "📷",
  youtube: "▶️",
  x: "𝕏",
};

// Seul le panneau Confidentialité a un contenu réel (repris de la FAQ validée). Conditions,
// Mentions légales, Support et Contact n'existent pas encore : liens visibles mais non
// navigables (état "à venir"), sans fausse page ni faux contenu juridique.
type FooterItem =
  | { kind: "panel"; label: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "soon"; label: string };

const FOOTER_ITEMS: FooterItem[] = [
  { kind: "panel", label: "Confidentialité" },
  { kind: "soon", label: "Conditions d’utilisation" },
  { kind: "soon", label: "Mentions légales" },
  { kind: "soon", label: "Support" },
  { kind: "soon", label: "Contact" },
  { kind: "link", label: "Partenaires", href: "/partenaires.html" },
];

const PRIVACY_TEXT = (
  <p>
    Vos informations sont associées à votre compte et ne sont pas publiques. Elles servent au fonctionnement de
    Pensif et à la personnalisation de votre expérience. Une politique de confidentialité complète sera publiée
    avant le lancement public de l&rsquo;application.
  </p>
);

export default function Footer() {
  const activeSocials = Object.entries(socials).filter(([, url]) => url);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-footer px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a href="/#top" className="flex items-center gap-2.5">
            <PensifLogo size={28} variant="mark" />
            <span className="text-lg font-bold text-white">Pensif</span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60 sm:justify-end">
            {FOOTER_ITEMS.map((item) => {
              if (item.kind === "link") {
                return (
                  <a key={item.label} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                );
              }
              if (item.kind === "soon") {
                return (
                  <span key={item.label} aria-disabled="true" className="cursor-default text-white/25 select-none">
                    {item.label}
                    <span className="sr-only"> (bientôt disponible)</span>
                  </span>
                );
              }
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setPrivacyOpen((o) => !o)}
                  aria-expanded={privacyOpen}
                  className="transition hover:text-white"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div
          className="grid overflow-hidden transition-all duration-300 ease-out"
          style={{ gridTemplateRows: privacyOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            {privacyOpen && (
              <div className="mt-5 rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-white/70">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-semibold text-white">Confidentialité</p>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(false)}
                    aria-label="Fermer"
                    className="text-white/40 transition hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="mt-2">{PRIVACY_TEXT}</div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 Yomic — Pensif. Tous droits réservés.</p>

          {activeSocials.length > 0 && (
            <div className="flex gap-4">
              {activeSocials.map(([name, url]) => (
                <a key={name} href={url} aria-label={name} className="text-lg text-white/50 transition hover:text-white">
                  {socialIcons[name] ?? name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
