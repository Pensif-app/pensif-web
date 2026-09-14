import { useState } from "react";

type PhoneMockupProps = {
  label: string;
  src?: string;
  className?: string;
  tilt?: number;
};

// Cadre de téléphone réutilisable. Si `src` est fourni mais que le fichier
// n'existe pas encore (voir src/config/screenshots.ts), on retombe
// automatiquement (onError) sur un placeholder clairement identifié —
// on n'invente jamais de fausse capture d'écran de l'app.
export default function PhoneMockup({ label, src, className = "", tilt = 0 }: PhoneMockupProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={`relative w-[240px] shrink-0 sm:w-[270px] ${className}`}
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      <div className="aspect-[9/19.5] w-full rounded-[2.5rem] bg-night-card p-2.5 shadow-2xl shadow-violet/20 ring-1 ring-white/10">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-night">
          {showImage ? (
            <img
              src={src}
              alt={label}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-night-soft to-night px-4 text-center">
              <span className="text-2xl">📱</span>
              <p className="text-xs font-medium text-white/70">
                Capture d&rsquo;écran à intégrer
              </p>
              <p className="text-[11px] text-white/40">{label}</p>
            </div>
          )}
          <div className="pointer-events-none absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
        </div>
      </div>
    </div>
  );
}
