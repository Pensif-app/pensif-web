import { useState } from "react";
import { footerLinks } from "../config/nav";
import { socialLinks as socials, contactEmail } from "../config/links";
import PensifLogo from "./PensifLogo";

const socialIcons: Record<string, string> = {
  instagram: "📷",
  youtube: "▶️",
  x: "𝕏",
};

type PanelKey = "confidentialite" | "contact";

const panels: Record<PanelKey, { label: string; content: React.ReactNode }> = {
  confidentialite: {
    label: "Confidentialité",
    content: (
      <p>
        Vos informations et celles de vos proches ne servent qu&rsquo;au
        fonctionnement de Pensif&nbsp;: elles ne sont ni revendues, ni
        partagées publiquement. Une politique de confidentialité complète
        sera publiée avant le lancement public de l&rsquo;application.
      </p>
    ),
  },
  contact: {
    label: "Contact",
    content: (
      <p>
        Une question, une remarque&nbsp;? Écrivez-nous à{" "}
        <a href={`mailto:${contactEmail}`} className="font-semibold text-white underline underline-offset-2">
          {contactEmail}
        </a>
        .
      </p>
    ),
  },
};

// Confidentialité et Contact n'ont pas assez de contenu pour justifier une
// page dédiée : elles s'ouvrent ici même, dans un petit panneau qui se
// déplie au clic, plutôt que de rediriger vers une page quasi vide.
export default function Footer() {
  const activeSocials = Object.entries(socials).filter(([, url]) => url);
  const [openPanel, setOpenPanel] = useState<PanelKey | null>(null);

  function toggle(key: PanelKey) {
    setOpenPanel((current) => (current === key ? null : key));
  }

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
            {(Object.keys(panels) as PanelKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => toggle(key)}
                aria-expanded={openPanel === key}
                className="transition hover:text-white"
              >
                {panels[key].label}
              </button>
            ))}
          </nav>
        </div>

        <div
          className="grid overflow-hidden transition-all duration-300 ease-out"
          style={{ gridTemplateRows: openPanel ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            {openPanel && (
              <div className="mt-6 rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-white/70">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-semibold text-white">{panels[openPanel].label}</p>
                  <button
                    type="button"
                    onClick={() => setOpenPanel(null)}
                    aria-label="Fermer"
                    className="text-white/40 transition hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="mt-2">{panels[openPanel].content}</div>
              </div>
            )}
          </div>
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
