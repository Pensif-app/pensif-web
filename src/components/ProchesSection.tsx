import { useEffect, useRef, useState } from "react";
import { IoCheckmarkCircleOutline, IoPerson } from "react-icons/io5";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Seules deux liaisons, et seulement vers ce que le screenshot montre réellement :
// - « Dates importantes » → ligne « Anniversaire dans … jours » du premier proche ;
// - « Quiz personnalisé » → badge « Quiz ✓ » d'un proche (bas de la liste).
// `at` = fraction de la hauteur du screenshot (2778 px) : 357/2000 et 1086/2000 sur l'image affichée.
const DATES = { color: "#7257E8", at: 0.179 };
const QUIZ = { color: "#9A97AE", at: 0.543 };

const POINTS = [
  { title: "Dates importantes", text: "Anniversaires et moments à ne pas manquer." },
  { title: "Goûts & préférences", text: "Ce qu’ils aiment, veulent ou évitent." },
  { title: "Petits détails", text: "Ces choses faciles à oublier mais utiles plus tard." },
];

type Link = { x1: number; y1: number; x2: number; y2: number; color: string };

// Traits fins de chaque fonction (à droite) vers sa zone dans le téléphone (à gauche).
// Mesurés dans le DOM, recalculés au redimensionnement. Desktop seulement.
function useLinks() {
  const boxRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const datesRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const compute = () => {
      const phone = phoneRef.current;
      if (!phone || !window.matchMedia("(min-width: 1024px)").matches) {
        setLinks([]);
        return;
      }
      const cb = box.getBoundingClientRect();
      const pb = phone.getBoundingClientRect();
      const next: Link[] = [];
      const add = (el: HTMLDivElement | null, t: { color: string; at: number }) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        next.push({
          x1: r.left - cb.left - 16,
          y1: r.top - cb.top + 10,
          x2: pb.right - cb.left + 2,
          y2: pb.top - cb.top + 10 + t.at * (pb.height - 20),
          color: t.color,
        });
      };
      add(datesRef.current, DATES);
      add(quizRef.current, QUIZ);
      setLinks(next);
    };
    const raf = requestAnimationFrame(compute);
    const ro = new ResizeObserver(compute);
    ro.observe(box);
    window.addEventListener("resize", compute);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return { boxRef, phoneRef, datesRef, quizRef, links };
}

export default function ProchesSection() {
  const { boxRef, phoneRef, datesRef, quizRef, links } = useLinks();

  return (
    <section id="proches" className="snap-screen proches-bg py-8 lg:py-6">
      <div
        ref={boxRef}
        className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-36 lg:pr-40 min-[1700px]:pr-6"
      >
        <Reveal className="flex justify-center lg:justify-start">
          <div ref={phoneRef} style={{ ["--k" as string]: 1.12 }} className="accueil-phone">
            <PhoneMockup label="Écran Proches" src={screenshots.proches} className="phone-w" />
          </div>
        </Reveal>

        <Reveal delayMs={100} className="lg:mt-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(114,87,232,0.35)] bg-[rgba(114,87,232,0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
            <IoPerson size={14} color="#A78BFA" aria-hidden="true" />
            Proches
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-ink lg:text-[clamp(2.25rem,2.5vw,3rem)]">
            <span className="accueil-line accueil-line--title block w-fit lg:whitespace-nowrap">Une mémoire</span>
            <span className="accueil-line accueil-line--title block w-fit lg:whitespace-nowrap">pour chaque proche.</span>
          </h2>
          <p className="proches-desc mt-8 max-w-xl font-hand text-xl leading-[1.85] text-ink/80 lg:mt-11 xl:text-[1.375rem] 2xl:text-[1.625rem]">
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Dates importantes, goûts, envies, préférences,</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">petits détails confiés au fil du temps…</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Pensif vous aide à garder en mémoire ce qui rend</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">chaque personne unique.</span>
          </p>

          <ul className="proches-list mt-12 space-y-5 lg:mt-14">
            {POINTS.map((p, i) => (
              <li key={p.title}>
                <div ref={i === 0 ? datesRef : undefined} className="w-fit">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-full bg-violet"
                      style={{ boxShadow: "0 0 0 4px rgba(114,87,232,0.13)" }}
                    />
                    <span className="text-base font-bold text-ink">{p.title}</span>
                  </div>
                  <p className="mt-1 pl-[1.375rem] text-base text-ink/65">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Fonction secondaire : séparée des trois éléments principaux, sans carte. */}
          <div className="proches-quiz mt-8 max-w-md border-t border-ink/10 pt-6">
            <div ref={quizRef} className="w-fit">
              <div className="flex items-center gap-3">
                <IoCheckmarkCircleOutline size={18} color="#9A97AE" aria-hidden="true" className="shrink-0" />
                <span className="text-base font-bold text-ink/80">Quiz personnalisé</span>
              </div>
              <p className="mt-1 pl-[1.875rem] text-base text-ink/60">Pour enrichir progressivement leur profil.</p>
            </div>
          </div>
        </Reveal>

        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
          {links.map((l) => {
            const xm = l.x2 + 96; // tout le dénivelé dans le couloir entre téléphone et texte
            return (
              <g key={l.color}>
                <path
                  d={`M ${l.x1} ${l.y1} H ${xm} C ${xm - 40} ${l.y1}, ${l.x2 + 40} ${l.y2}, ${l.x2} ${l.y2}`}
                  fill="none"
                  stroke={l.color}
                  strokeOpacity="0.16"
                  strokeWidth="0.75"
                />
                <circle cx={l.x2} cy={l.y2} r="2.5" fill={l.color} fillOpacity="0.55" />
                <circle cx={l.x2} cy={l.y2} r="5" fill="none" stroke={l.color} strokeOpacity="0.14" />
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
