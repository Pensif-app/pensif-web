import { useEffect, useRef, useState } from "react";
import { IoCalendar } from "react-icons/io5";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Liaisons uniquement vers ce que le screenshot montre réellement (fractions de sa hauteur,
// mesurées sur l'image 924×2000 affichée) :
// - « Mois » → onglet « Mois » ;
// - « Dates réelles » → jours marqués (points) de la grille du mois.
// Pas de lien « Semaine » : l'onglet est sur la même ligne que « Mois », le trait le croiserait.
const MOIS = { color: "#7257E8", at: 0.2 };
const DATES = { color: "#9A97AE", at: 0.41 };

const POINTS = [
  { title: "Mois", text: "Visualisez ce qui arrive dans les prochaines semaines." },
  { title: "Semaine", text: "Passez à une vue plus rapprochée quand vous en avez besoin." },
  { title: "Dates réelles", text: "Anniversaires, événements et pensées datées apparaissent dans le calendrier." },
];

type Link = { x1: number; y1: number; x2: number; y2: number; color: string };

// Traits fins de chaque élément (à droite) vers sa zone dans le téléphone (à gauche), mesurés
// dans le DOM et recalculés au redimensionnement. Desktop seulement.
function useLinks() {
  const boxRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const moisRef = useRef<HTMLDivElement>(null);
  const datesRef = useRef<HTMLDivElement>(null);
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
        const x2 = pb.right - cb.left + 2;
        next.push({
          x1: Math.min(r.left - cb.left - 16, x2 + 150),
          y1: r.top - cb.top + 10,
          x2,
          y2: pb.top - cb.top + 10 + t.at * (pb.height - 20),
          color: t.color,
        });
      };
      add(moisRef.current, MOIS);
      add(datesRef.current, DATES);
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

  return { boxRef, phoneRef, moisRef, datesRef, links };
}

export default function CalendrierSection() {
  const { boxRef, phoneRef, moisRef, datesRef, links } = useLinks();

  return (
    <section id="calendrier" className="snap-screen proches-bg py-8 lg:py-6">
      <div
        ref={boxRef}
        className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-36 lg:pr-40 min-[1700px]:pr-6"
      >
        <Reveal className="flex justify-center lg:justify-start">
          <div ref={phoneRef} style={{ ["--k" as string]: 1.12 }} className="accueil-phone">
            <PhoneMockup label="Écran Calendrier" src={screenshots.calendrier} className="phone-w" />
          </div>
        </Reveal>

        <Reveal delayMs={100} className="lg:mt-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(114,87,232,0.35)] bg-[rgba(114,87,232,0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
            <IoCalendar size={14} color="#A78BFA" aria-hidden="true" />
            Calendrier
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-ink lg:text-[clamp(2.25rem,2.5vw,3rem)]">
            <span className="accueil-line accueil-line--title block w-fit lg:whitespace-nowrap">Voyez ce qui arrive.</span>
          </h2>
          <p className="proches-desc mt-8 max-w-xl font-hand text-xl leading-[1.85] text-ink/80 lg:mt-11 xl:text-[1.375rem] 2xl:text-[1.625rem]">
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Anniversaires, événements et pensées datées</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">se retrouvent dans une vue claire du temps.</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Vous voyez ce qui arrive avant que cela devienne urgent.</span>
          </p>

          <ul className="proches-list mt-12 space-y-5 lg:mt-14">
            {POINTS.map((p) => (
              <li key={p.title}>
                <div
                  ref={p.title === "Mois" ? moisRef : p.title === "Dates réelles" ? datesRef : undefined}
                  className="w-fit max-w-md"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-violet/80"
                      style={{ boxShadow: "0 0 0 3px rgba(114,87,232,0.09)" }}
                    />
                    <span className="text-[0.9375rem] font-semibold text-ink/85">{p.title}</span>
                  </div>
                  <p className="mt-0.5 pl-[1.25rem] text-sm text-ink/50">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
          {links.map((l) => {
            const xm = l.x2 + 44;
            return (
              <g key={l.color}>
                <path
                  d={`M ${l.x1} ${l.y1} H ${xm} C ${xm - 22} ${l.y1}, ${l.x2 + 22} ${l.y2}, ${l.x2} ${l.y2}`}
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
