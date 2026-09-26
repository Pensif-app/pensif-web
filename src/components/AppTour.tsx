import AccueilSection from "./AccueilSection";
import ProchesSection from "./ProchesSection";
import PenseesSection from "./PenseesSection";
import CalendrierSection from "./CalendrierSection";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

type Point = { title: string; text: string };

type TourSection = {
  id: string;
  label: string;
  titleLines: string[];
  paragraphs: string[];
  points?: Point[];
  chips?: string[];
  note?: string;
  shot: string;
  phone: string;
  tone: string;
};

// Les 4 piliers de l'app, dans l'ordre de la barre de navigation native.
// Les ids (#accueil, #proches, #pensees, #calendrier) sont ceux observés par
// SectionNav. Aucune autre section ne doit s'intercaler entre ces quatre.
const SECTIONS: TourSection[] = [
  {
    id: "accueil",
    label: "Accueil",
    titleLines: ["Ce qui compte,", "au bon moment."],
    paragraphs: [
      "Aujourd’hui, cette semaine, à anticiper : Pensif rassemble ce qui mérite votre attention sans vous obliger à chercher.",
    ],
    points: [
      { title: "Aujourd’hui", text: "Ce qui demande votre attention maintenant." },
      { title: "Cette semaine", text: "Ce qui arrive bientôt." },
      { title: "À anticiper", text: "Ce qu’il vaut mieux préparer à l’avance." },
    ],
    shot: screenshots.accueil,
    phone: "Écran Accueil",
    tone: "bg-cream",
  },
  {
    id: "proches",
    label: "Proches",
    titleLines: ["Une mémoire", "pour chaque proche."],
    paragraphs: [
      "Dates importantes, goûts, envies, préférences, petits détails confiés au fil du temps…",
      "Pensif vous aide à garder en mémoire ce qui rend chaque personne unique.",
    ],
    points: [
      { title: "Dates importantes", text: "Anniversaires et moments à ne pas manquer." },
      { title: "Goûts & préférences", text: "Ce qu’ils aiment, veulent ou évitent." },
      { title: "Petits détails", text: "Ces choses faciles à oublier mais utiles plus tard." },
    ],
    note: "Quiz personnalisé pour enrichir progressivement le profil.",
    shot: screenshots.proches,
    phone: "Écran Proches",
    tone: "bg-cream-soft",
  },
  {
    id: "pensees",
    label: "Pensées",
    titleLines: ["Ce qu’il ne faut pas oublier,", "noté au fil de l’eau."],
    paragraphs: [
      "Une envie, une préférence, une tâche, un événement ou simplement quelque chose à retenir.",
      "Chaque pensée peut rester libre, être liée à un proche, porter une date ou devenir un rappel.",
    ],
    chips: ["Mémo", "Proche", "Événement", "Rappel"],
    shot: screenshots.pensees,
    phone: "Écran Pensées",
    tone: "bg-cream",
  },
  {
    id: "calendrier",
    label: "Calendrier",
    titleLines: ["Voyez ce qui arrive."],
    paragraphs: [
      "Anniversaires, événements et pensées datées se retrouvent dans une vue claire du temps.",
      "Vous voyez ce qui arrive avant que cela devienne urgent.",
    ],
    shot: screenshots.calendrier,
    phone: "Écran Calendrier",
    tone: "bg-cream-soft",
  },
];

export default function AppTour() {
  return (
    <>
      {SECTIONS.map((s, i) => {
        // Accueil a sa propre section (AccueilSection) ; on garde l'index d'origine pour l'alternance.
        if (s.id === "accueil") return <AccueilSection key={s.id} />;
        if (s.id === "proches") return <ProchesSection key={s.id} />;
        if (s.id === "pensees") return <PenseesSection key={s.id} />;
        if (s.id === "calendrier") return <CalendrierSection key={s.id} />;
        const reverse = i % 2 === 0; // téléphone à droite sur Accueil/Pensées
        return (
          <section key={s.id} id={s.id} className={`${s.tone} snap-screen py-8 lg:py-6`}>
            <div className="mx-auto grid w-full max-w-[1150px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pr-28 min-[1350px]:pr-8">
              <Reveal className={`flex justify-center ${reverse ? "lg:order-2" : "lg:order-1"}`}>
                <PhoneMockup label={s.phone} src={s.shot} className="phone-w" />
              </Reveal>

              <Reveal delayMs={100} className={reverse ? "lg:order-1" : "lg:order-2"}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">{s.label}</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl xl:text-5xl">
                  {s.titleLines.map((line, k) => (
                    <span key={k} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <div className="mt-5 max-w-lg space-y-3 text-base leading-relaxed text-ink/60">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                {s.points && (
                  <dl className="mt-6 max-w-lg space-y-3">
                    {s.points.map((pt) => (
                      <div key={pt.title} className="border-l-2 border-violet/25 pl-4">
                        <dt className="text-sm font-bold">{pt.title}</dt>
                        <dd className="text-sm text-ink/55">{pt.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {s.note && <p className="mt-5 max-w-lg text-xs font-medium text-ink/45">{s.note}</p>}

                {s.chips && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <li key={c} className="rounded-full border border-ink/12 px-3.5 py-1 text-xs font-medium text-ink/55">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
