import { socialLinks as socials } from "../config/links";
import PensifLogo from "./PensifLogo";

const socialIcons: Record<string, string> = {
  instagram: "📷",
  youtube: "▶️",
  x: "𝕏",
};

// Toutes les pages du pied de page existent : confidentialité, mentions légales, conditions d'utilisation, support,
// contact et partenaires.
type FooterItem = { label: string; href: string };

const FOOTER_ITEMS: FooterItem[] = [
  { label: "Confidentialité", href: "/confidentialite.html" },
  { label: "Conditions d’utilisation", href: "/conditions-utilisation.html" },
  { label: "Mentions légales", href: "/mentions-legales.html" },
  { label: "Support", href: "/support.html" },
  { label: "Contact", href: "/contact.html" },
  { label: "Partenaires", href: "/partenaires.html" },
];

export default function Footer() {
  const activeSocials = Object.entries(socials).filter(([, url]) => url);

  return (
    <footer className="bg-footer px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a href="/#top" className="flex items-center gap-2.5">
            <PensifLogo size={28} variant="mark" />
            <span className="text-lg font-bold text-white">Pensif</span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60 sm:justify-end">
            {FOOTER_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
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
