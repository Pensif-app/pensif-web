import { useState } from "react";

type PensifLogoProps = {
  size?: number;
  className?: string;
  /** "icon" = badge carré violet complet (usage par défaut, header/footer/CTA).
   *  "mark" = sceau blanc seul (P + coeur), sans fond, pour un usage futur. */
  variant?: "icon" | "mark";
};

const REAL_ASSET_SRC: Record<PensifLogoProps["variant"] & string, string> = {
  icon: "/logo/pensif-app-icon.png",
  mark: "/logo/pensif-mark-white.png",
};

// Utilise le vrai logo Pensif dès qu'il est présent dans /public/logo/.
// Tant que le fichier n'est pas fourni, bascule automatiquement (onError)
// sur un placeholder SVG clairement approximatif.
export default function PensifLogo({ size = 36, className = "", variant = "icon" }: PensifLogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (!useFallback) {
    return (
      <img
        src={REAL_ASSET_SRC[variant]}
        onError={() => setUseFallback(true)}
        width={size}
        height={size}
        alt="Pensif"
        className={className}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Logo Pensif"
    >
      <rect width="40" height="40" rx="11" fill="var(--color-violet, #8a5cf6)" />
      <text
        x="14"
        y="27"
        fontFamily="var(--font-sans, system-ui)"
        fontWeight="800"
        fontSize="20"
        fill="#ffffff"
      >
        P
      </text>
      <path
        d="M28.5 15.2c-1.2-1.1-3-1-4 .2l-.5.6-.5-.6c-1-1.2-2.8-1.3-4-.2-1.3 1.2-1.3 3.2 0 4.4l4.1 3.8c.2.2.6.2.8 0l4.1-3.8c1.3-1.2 1.3-3.2 0-4.4Z"
        fill="var(--color-coral, #ff5470)"
      />
    </svg>
  );
}
