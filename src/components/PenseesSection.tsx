import { useEffect, useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Liaisons uniquement vers ce que le screenshot montre réellement (fractions de sa hauteur,
// mesurées sur l'image 924×2000 affichée) :
// - « Proche » → pensée liée à Alicia (ligne « Alicia · 29 sept ») ;
// - « Rappel » → badge « Rappel 19h » d'une pensée de la liste.
// Pas de lien « Événement » : aucune date d'événement n'y est isolée clairement.
const PROCHE = { color: "#7257E8", at: 0.574 };
const RAPPEL = { color: "#9A97AE", at: 0.636 };

const TYPES = [
  { title: "Mémo", text: "Une information à garder." },
  { title: "Proche", text: "Une pensée liée à quelqu’un." },
  { title: "Événement", text: "Une date réelle à retrouver." },
  { title: "Rappel", text: "Une attention à faire remonter au bon moment." },
];

type Link = { x1: number; y1: number; x2: number; y2: number; color: string };

// Traits fins de chaque type (gauche) vers sa zone dans le téléphone (droite), mesurés dans
// le DOM et recalculés au redimensionnement. Desktop seulement.
function useLinks() {
  const boxRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const procheRef = useRef<HTMLDivElement>(null);
  const rappelRef = useRef<HTMLDivElement>(null);
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
          x1: Math.max(r.right - cb.left + 16, pb.left - cb.left - 2 - 150),
          y1: r.top - cb.top + 10,
          x2: pb.left - cb.left - 2,
          y2: pb.top - cb.top + 10 + t.at * (pb.height - 20),
          color: t.color,
        });
      };
      add(procheRef.current, PROCHE);
      add(rappelRef.current, RAPPEL);
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

  return { boxRef, phoneRef, procheRef, rappelRef, links };
}

export default function PenseesSection() {
  const { boxRef, phoneRef, procheRef, rappelRef, links } = useLinks();

  return (
    <section id="pensees" className="snap-screen proches-bg py-8 lg:py-6">
      <div
        ref={boxRef}
        className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24 lg:pr-40 min-[1700px]:pr-6"
      >
        <Reveal delayMs={100} className="order-2 lg:order-1 lg:mt-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(114,87,232,0.35)] bg-[rgba(114,87,232,0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
            <span aria-hidden="true" className="pensees-mark" />
            Pensées
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[clamp(1.75rem,2.6vw,3rem)]">
            <span className="accueil-line accueil-line--title block w-fit lg:whitespace-nowrap">Ce qu’il ne faut pas oublier,</span>
            <span className="accueil-line accueil-line--title block w-fit lg:whitespace-nowrap">noté au fil de l’eau.</span>
          </h2>
          <p className="pensees-desc mt-8 max-w-xl font-hand text-xl leading-[1.85] text-ink/80 lg:mt-11 xl:text-[1.375rem] 2xl:text-[1.625rem]">
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Une envie, une préférence, une tâche, un événement</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">ou simplement quelque chose à retenir…</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Chaque pensée peut rester libre, être liée à un proche,</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">porter une date ou devenir un rappel.</span>
          </p>

          <ul className="pensees-list mt-12 grid max-w-xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:mt-14">
            {TYPES.map((t) => (
              <li key={t.title}>
                <div
                  ref={t.title === "Proche" ? procheRef : t.title === "Rappel" ? rappelRef : undefined}
                  className="w-fit max-w-full"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-violet/80"
                      style={{ boxShadow: "0 0 0 3px rgba(114,87,232,0.09)" }}
                    />
                    <span className="text-[0.9375rem] font-semibold text-ink/85">{t.title}</span>
                  </div>
                  <p className="mt-0.5 pl-[1.25rem] text-sm text-ink/50">{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div ref={phoneRef} style={{ ["--k" as string]: 1.12 }} className="accueil-phone">
            <PhoneMockup label="Écran Pensées" src={screenshots.pensees} className="phone-w" />
          </div>
        </Reveal>

        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
          {links.map((l) => {
            const xm = l.x2 - 44;
            return (
              <g key={l.color}>
                <path
                  d={`M ${l.x1} ${l.y1} H ${xm} C ${xm + 22} ${l.y1}, ${l.x2 - 22} ${l.y2}, ${l.x2} ${l.y2}`}
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
