import { useEffect, useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Couleurs reprises de l'app (HomeScreen/theme, lecture seule) : « Aujourd'hui » est la
// carte mise en avant (bordure rouge/corail, `danger` #F0453D en sombre), « Cette semaine »
// et « À anticiper » sont des cartes neutres ; on garde le violet d'accent (#7257E8) pour la
// semaine et un gris-violet discret pour l'anticipation.
const POINTS = [
  {
    title: "Aujourd’hui",
    text: "Ce qui demande votre attention maintenant.",
    color: "#F0453D",
    // Position verticale (fraction de la hauteur de l'écran du screenshot) de la zone
    // correspondante dans l'écran Accueil : carte « AUJOURD'HUI », « CETTE SEMAINE », « À ANTICIPER ».
    at: 0.209,
  },
  { title: "Cette semaine", text: "Ce qui arrive bientôt.", color: "#7257E8", at: 0.329 },
  { title: "À anticiper", text: "Ce qu’il vaut mieux préparer à l’avance.", color: "#9A97AE", at: 0.46 },
];

type Link = { x1: number; y1: number; x2: number; y2: number; color: string };

// Lignes fines entre chaque catégorie (gauche) et sa zone dans le screenshot (droite),
// mesurées dans le DOM et recalculées au redimensionnement. Desktop seulement.
function useLinks() {
  const boxRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      POINTS.forEach((p, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const r = el.getBoundingClientRect();
        next.push({
          x1: r.right - cb.left + 16,
          y1: r.top - cb.top + 10,
          x2: pb.left - cb.left - 2,
          // 10px = cadre du téléphone (p-2.5) ; le screenshot remplit ensuite l'écran.
          y2: pb.top - cb.top + 10 + p.at * (pb.height - 20),
          color: p.color,
        });
      });
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

  return { boxRef, phoneRef, itemRefs, links };
}

export default function AccueilSection() {
  const { boxRef, phoneRef, itemRefs, links } = useLinks();

  return (
    <section id="accueil" className="snap-screen accueil-bg py-8 lg:py-6">
      <div
        ref={boxRef}
        className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24 lg:pr-40 min-[1700px]:pr-6"
      >
        <Reveal delayMs={100} className="order-2 lg:order-1 lg:mt-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(114,87,232,0.35)] bg-[rgba(114,87,232,0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
            <IoHome size={14} color="#A78BFA" aria-hidden="true" />
            Accueil
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-ink lg:text-[clamp(2.25rem,2.5vw,3rem)]">
            <span className="accueil-line accueil-line--title block w-fit">Ce qui compte,</span>
            <span className="accueil-line accueil-line--title block w-fit">au bon moment.</span>
          </h2>
          {/* Description en Shadows Into Light, comme le Hero, mais plus calme (22px / 26px à 2xl contre 24 / 30
              pour le Hero), interligne 1.85. Trois lignes sur desktop, retours libres sur mobile. */}
          <p className="mt-8 max-w-lg font-hand text-xl leading-[1.85] text-ink/80 lg:mt-11 xl:text-[1.375rem] 2xl:text-[1.625rem]">
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Aujourd’hui, cette semaine, à anticiper&nbsp;:</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Pensif rassemble ce qui mérite votre attention</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">sans vous obliger à chercher.</span>
          </p>

          <ul className="mt-12 space-y-6 lg:mt-14">
            {POINTS.map((p, i) => (
              <li key={p.title}>
                <div
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="w-fit"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: p.color, boxShadow: `0 0 0 4px ${p.color}22` }}
                    />
                    <span className="text-base font-bold text-ink">{p.title}</span>
                  </div>
                  <p className="mt-1 pl-[1.375rem] text-base text-ink/65">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div ref={phoneRef} style={{ ["--k" as string]: 1.25 }} className="accueil-phone">
            <PhoneMockup label="Écran Accueil" src={screenshots.accueil} className="phone-w" />
          </div>
        </Reveal>

        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
          {links.map((l) => {
            const xm = l.x2 - 64; // tout le dénivelé se fait près du téléphone, jamais au-dessus du texte
            return (
              <g key={l.color}>
                <path
                  d={`M ${l.x1} ${l.y1} H ${xm} C ${xm + 30} ${l.y1}, ${l.x2 - 30} ${l.y2}, ${l.x2} ${l.y2}`}
                  fill="none"
                  stroke={l.color}
                  strokeOpacity="0.22"
                  strokeWidth="0.75"
                />
                <circle cx={l.x2} cy={l.y2} r="3" fill={l.color} fillOpacity="0.7" />
                <circle cx={l.x2} cy={l.y2} r="6" fill="none" stroke={l.color} strokeOpacity="0.18" />
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
