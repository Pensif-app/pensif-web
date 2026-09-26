import { storeLinks } from "../config/links";

type StoreBadgesProps = {
  className?: string;
  /** Affiche uniquement le badge App Store (ex. Hero, Google Play retiré pour l'instant). */
  appStoreOnly?: boolean;
  /** Badge légèrement plus grand sur desktop (Hero, ~+13 %). */
  large?: boolean;
};

// PLACEHOLDER — remplacer par les badges officiels App Store / Google Play
// (assets fournis par Apple/Google) et brancher les vraies URLs dans
// src/config/links.ts dès qu'elles existent.
export default function StoreBadges({ className = "", appStoreOnly = false, large = false }: StoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={storeLinks.appStore}
        className={`flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 text-ink shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md ${large ? "lg:gap-3 lg:px-[1.15rem] lg:py-3" : ""}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={large ? "lg:h-[22px] lg:w-[22px]" : ""}>
          <path d="M16.7 12.4c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.8 2.4 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.7-3.9v-.2ZM14.4 5.2c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.4Z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-ink/60">
            Télécharger sur
          </span>
          <span className={`block text-sm font-semibold ${large ? "lg:text-base" : ""}`}>l&rsquo;App Store</span>
        </span>
      </a>

      {!appStoreOnly && (
        <a
          href={storeLinks.googlePlay}
          className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 text-ink shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 2.8c-.3.3-.5.7-.5 1.2v16c0 .5.2.9.5 1.2l.1.1L13.5 12 4.1 2.7 4 2.8Z" fill="#8a5cf6" />
            <path d="M13.5 12 16.6 15.1 20.7 12.7C21.9 12 21.9 11 20.7 10.3L16.6 8.9 13.5 12Z" fill="#ff5470" />
            <path d="M13.5 12 4.1 21.3c.4.4 1 .4 1.7.1L16.6 15.1 13.5 12Z" fill="#b3a2ff" />
            <path d="M13.5 12 16.6 8.9 5.8 2.6c-.7-.3-1.3-.3-1.7.1L13.5 12Z" fill="#6d3ff0" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-wide text-ink/60">
              Disponible sur
            </span>
            <span className="block text-sm font-semibold">Google Play</span>
          </span>
        </a>
      )}
    </div>
  );
}
