import { IoArrowForward, IoChevronForward } from "react-icons/io5";
import Reveal from "./Reveal";

const jeanLucFacts = [
  "Aime l’automobile",
  "Audi RS6",
  "Préfère les expériences aux objets",
  "Budget habituel 50–100 €",
];

// Contenu 100 % illustratif : aucun marchand, aucune offre ni aucune URL réels ne sont branchés.
// Le CTA « Voir l’offre » est donc visuellement actif mais sans navigation (bouton sans handler) ;
// il devra pointer vers l'offre externe réelle quand elle existera.
const alternatives = ["Accessoire auto premium", "Séance photo de sa voiture"];

const stepLabel = "text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-light/80";

export default function GiftIdeas() {
  return (
    <section className="snap-screen bg-night py-8 lg:py-6">
      <div className="mx-auto w-full max-w-[1150px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">
            Anniversaires &amp; cadeaux
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
            <span className="gift-line gift-line--title mx-auto block w-fit">De l’idée au cadeau,</span>
            <span className="gift-line gift-line--title mx-auto block w-fit">sans repartir chercher ailleurs.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-hand text-xl leading-[1.7] text-white/75 xl:text-2xl">
            <span className="gift-line gift-line--desc mx-auto lg:block lg:w-fit lg:whitespace-nowrap">Pensif s’appuie sur les goûts, envies, préférences</span>{" "}
            <span className="gift-line gift-line--desc mx-auto lg:block lg:w-fit lg:whitespace-nowrap">et pensées enregistrées pour proposer des idées adaptées,</span>{" "}
            <span className="gift-line gift-line--desc mx-auto lg:block lg:w-fit lg:whitespace-nowrap">puis vous permettre de passer directement à l’action.</span>
          </p>
        </Reveal>

        <Reveal
          delayMs={120}
          className="mt-8 grid grid-cols-1 items-stretch gap-5 rounded-3xl bg-night-soft p-5 ring-1 ring-white/10 lg:mt-6 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.15fr)] lg:gap-5 lg:p-8"
        >
          {/* 1 — Comprendre : la mémoire du proche */}
          <div className="rounded-2xl bg-night-card p-6 lg:p-7">
            <p className={stepLabel}>Ce que Pensif sait</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-2xl font-bold text-white">Jean-Luc</p>
              <span className="rounded-full bg-violet/15 px-3.5 py-1.5 text-sm font-semibold text-violet-light">
                Anniversaire dans 21 jours
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {jeanLucFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-base text-white/75">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-light" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden items-center text-violet-light/60 lg:flex">
            <IoChevronForward size={22} />
          </div>

          {/* 2 — Recommander + 3 — Agir */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-night-card p-6 ring-1 ring-violet/40 shadow-[0_0_40px_-12px_rgba(124,92,255,0.5)] motion-safe:transition motion-safe:duration-300 hover:-translate-y-0.5 lg:p-7">
              <p className={stepLabel}>Idée adaptée</p>
              <p className="mt-3 text-2xl font-bold text-white">Journée sur circuit</p>
              <p className="mt-1 text-base text-white/60">Expérience automobile</p>
              <button
                type="button"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet/25 outline-none motion-safe:transition motion-safe:duration-300 hover:shadow-[0_0_26px_2px_rgba(124,92,255,0.55)] focus-visible:ring-2 focus-visible:ring-violet-light"
              >
                Voir l’offre
                <IoArrowForward
                  size={16}
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            <div>
              <p className="text-xs font-semibold text-white/45">Autres pistes</p>
              <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {alternatives.map((alt) => (
                  <li key={alt} className="rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-white/65 ring-1 ring-white/5">
                    {alt}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs leading-relaxed text-white/40">
              Les recommandations s’appuient sur son profil, son quiz et les pensées que vous avez enregistrées.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
