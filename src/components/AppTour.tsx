import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Les 4 piliers de l'app, dans l'ordre de la barre de navigation native.
// Les ids (#accueil, #proches, #pensees, #calendrier) sont ceux observés par
// SectionNav. Aucune autre section ne doit s'intercaler entre ces quatre.
const SECTIONS = [
  {
    id: "accueil",
    label: "Accueil",
    title: "Tout ce qui approche, dès l'ouverture.",
    text: "Aujourd'hui, cette semaine, à anticiper : l'accueil rassemble ce qui compte pour vous et vos proches, sans rien avoir à chercher.",
    shot: screenshots.accueil,
    phone: "Écran Accueil",
    tone: "bg-cream",
  },
  {
    id: "proches",
    label: "Proches",
    title: "Une fiche pour chacun de vos proches.",
    text: "Prénom, relation, anniversaire, goûts : retrouvez au même endroit ce que vous savez sur eux, et complétez leur profil à votre rythme.",
    shot: screenshots.proches,
    phone: "Écran Proches",
    tone: "bg-cream-soft",
  },
  {
    id: "pensees",
    label: "Pensées",
    title: "Ce qu'il ne faut pas oublier, noté au fil de l'eau.",
    text: "Une envie, une préférence, une petite chose importante : chaque pensée est rattachée au bon proche et peut avoir sa date et son rappel.",
    shot: screenshots.pensees,
    phone: "Écran Pensées",
    tone: "bg-cream",
  },
  {
    id: "calendrier",
    label: "Calendrier",
    title: "Les moments qui comptent, dans un calendrier clair.",
    text: "Anniversaires, événements et pensées datées : visualisez ce qui arrive et anticipez, au lieu de le découvrir la veille.",
    shot: screenshots.calendrier,
    phone: "Écran Calendrier",
    tone: "bg-cream-soft",
  },
];

export default function AppTour() {
  return (
    <>
      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`${s.tone} flex min-h-[80vh] scroll-mt-14 items-center py-20`}
        >
          <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:pr-28">
            <Reveal className={`flex justify-center ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <PhoneMockup label={s.phone} src={s.shot} className="w-[240px] sm:w-[270px] lg:w-[280px]" />
            </Reveal>
            <Reveal delayMs={100} className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">{s.label}</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{s.title}</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">{s.text}</p>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
