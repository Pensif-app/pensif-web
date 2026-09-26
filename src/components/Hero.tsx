import { useEffect, useRef } from "react";
import PhoneMockup from "./PhoneMockup";
import StoreBadges from "./StoreBadges";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Parallax souris : écrit --px/--py (-1..1) sur la zone visuelle, au plus une fois
// par frame (rAF), sans setState React. Actif seulement desktop + souris + pas de
// reduced-motion ; le mouvement lui-même est du CSS (voir index.css, "Hero").
function useHeroParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;

    let raf = 0;
    let nx = 0;
    let ny = 0;
    const flush = () => {
      raf = 0;
      el.style.setProperty("--px", nx.toFixed(3));
      el.style.setProperty("--py", ny.toFixed(3));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(flush);
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
      schedule();
    };
    const onLeave = () => {
      nx = 0;
      ny = 0;
      schedule();
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}

const bubbleFill = "border border-white/20 bg-white/[0.07]";
const bubble = `hero-card absolute z-20 w-44 rounded-[1.6rem] ${bubbleFill} px-4 py-3 text-left shadow-lg shadow-black/30 backdrop-blur-md`;
// Petites bulles de "pensée" qui relient chaque bulle au téléphone (nuage sobre).
const tailBig = `absolute -bottom-2 left-4 h-3 w-3 rounded-full ${bubbleFill}`;
const tailSmall = `absolute -bottom-4 left-1 h-1.5 w-1.5 rounded-full ${bubbleFill}`;

export default function Hero() {
  const visualRef = useHeroParallax<HTMLDivElement>();

  return (
    <section id="top" className="snap-screen relative overflow-hidden bg-night py-10 lg:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:justify-center lg:gap-[clamp(44px,5.2vw,112px)]">
        {/* Colonne texte (34vw, 400–720px). Sur desktop sa hauteur est celle du groupe visuel
            (--ph + py-6) : titre + description en HAUT de la colonne, bouton App Store en BAS
            (justify-between). Chaque ligne est un élément indépendant (.hero-line) : le micro-zoom
            au survol est appliqué ligne par ligne, jamais à la zone entière (voir index.css). */}
        <Reveal className="lg:flex lg:h-[calc(var(--ph)+3rem)] lg:w-[clamp(400px,34vw,720px)] lg:shrink-0 lg:flex-col">
          <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
            <span className="hero-line hero-line--1 block w-fit whitespace-nowrap">Pensez à eux.</span>
            <span className="hero-line-2w mt-4 block w-fit whitespace-nowrap text-violet-light lg:mt-[0.7em]">
              <span className="hero-line hero-line--2 block w-fit 2xl:inline-block">Pensif pense</span>{" "}
              <span className="hero-line hero-line--2 block w-fit 2xl:inline-block">au reste.</span>
            </span>
          </h1>
          {/* Centrage vertical : sur desktop la zone de description occupe tout l'espace libre entre
              le titre (haut) et le bouton (bas) (flex-1) et centre les 3 lignes dedans, avec un
              minimum de respiration au-dessus/en dessous (py clampé) — les deux vides sont donc
              égaux. Seul texte descriptif du Hero, en Shadows Into Light ; une ligne = un élément
              indépendant (hover), 3 lignes sans retour automatique sur desktop. */}
          <div className="mt-8 lg:mt-0 lg:flex lg:flex-1 lg:items-center lg:py-[clamp(1.25rem,2.5vw,4rem)]">
            <div className="font-hand text-xl leading-[2] text-white/90 sm:text-2xl lg:text-xl lg:leading-[2.3] xl:text-2xl 2xl:text-3xl">
              <p className="hero-line hero-line--3 block w-fit lg:whitespace-nowrap">Pensées, rappels, anniversaires, préférences&nbsp;:</p>
              <p className="hero-line hero-line--3 block w-fit lg:whitespace-nowrap">Pensif garde en mémoire ce qui compte</p>
              <p className="hero-line hero-line--3 block w-fit lg:whitespace-nowrap">et vous le remet sous les yeux au bon moment.</p>
            </div>
          </div>
          <StoreBadges appStoreOnly large className="mt-10 lg:mt-0" />
        </Reveal>

        <Reveal delayMs={150} className="lg:shrink-0">
          <div ref={visualRef} className="hero-visual relative px-2 py-6 md:px-8 lg:px-4 xl:pl-8 xl:pr-36">
            <div className="flex items-end gap-3 sm:gap-5 lg:gap-[clamp(26px,3vw,64px)]">
              <div style={{ ["--k" as string]: 1 }} className="hero-phone hero-phone--front relative z-10">
                <PhoneMockup label="Écran Pensées / profil proche" src={screenshots.pensees} className="phone-w" />
              </div>
              <div style={{ ["--k" as string]: 0.86 }} className="hero-phone hero-phone--back">
                <PhoneMockup label="Écran Calendrier / anniversaires" src={screenshots.calendrier} className="phone-w" />
              </div>
            </div>

            {/* Bulles « pensée » à droite des téléphones : Pensif retient, puis fait remonter. */}
            <div className={`${bubble} right-0 top-[20%] md:-right-2 xl:right-0`}>
              <p className="text-sm leading-snug text-white/90">Yohan aimerait une nouvelle montre</p>
              <span aria-hidden="true" className={tailBig} />
              <span aria-hidden="true" className={tailSmall} />
            </div>
            <div className={`${bubble} bottom-[22%] right-0 md:-right-2 xl:-right-3`}>
              <p className="text-sm leading-snug text-white/90">Rappel vendredi · 18&nbsp;h</p>
              <span aria-hidden="true" className={tailBig} />
              <span aria-hidden="true" className={tailSmall} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
