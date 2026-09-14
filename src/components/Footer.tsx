import { footerLinks } from "../config/nav";
import { socialLinks as socials } from "../config/links";
import PensifLogo from "./PensifLogo";

const socialIcons: Record<string, string> = {
  instagram: "📷",
  youtube: "▶️",
  x: "𝕏",
};

export default function Footer() {
  const activeSocials = Object.entries(socials).filter(([, url]) => url);

  return (
    <footer className="bg-footer px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <a href="/#top" className="flex items-center gap-2.5">
              <PensifLogo size={32} variant="mark" />
              <span className="text-lg font-bold text-white">Pensif</span>
            </a>
            <p className="mt-3 text-sm text-white/50">
              Ne rien oublier de ceux qui comptent.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60 sm:justify-end">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 Pensif. Tous droits réservés.</p>

          {activeSocials.length > 0 && (
            <div className="flex gap-4">
              {activeSocials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  aria-label={name}
                  className="text-lg text-white/50 transition hover:text-white"
                >
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
