import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

const steps = [
  {
    number: "1",
    title: "Ajoutez vos proches",
    text: "Prénom, relation, anniversaire… puis complétez leur profil à votre rythme.",
  },
  {
    number: "2",
    title: "Dites à Pensif ce que vous voulez retenir",
    text: "Une envie cadeau, une préférence, une date ou simplement une petite chose importante.",
    note: "À la voix ou manuellement.",
  },
  {
    number: "3",
    title: "Pensif vous aide au bon moment",
    text: "Rappels, calendrier et recommandations vous permettent d'anticiper les moments qui comptent.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="relative overflow-visible bg-cream py-24">
      {/* Sur grand écran, le téléphone est positionné exactement à cheval
          sur la frontière avec la section suivante (bottom-0 ancre son
          bord bas sur la frontière, translate-y-1/2 le recentre dessus) :
          moitié dans cette section, moitié dans la section sombre. */}
      <Reveal
        delayMs={220}
        className="pointer-events-none absolute bottom-0 right-8 z-10 hidden translate-y-1/2 lg:block xl:right-16"
      >
        <PhoneMockup
          label="Écran Accueil"
          src={screenshots.accueil}
          className="w-[260px] xl:w-[290px]"
        />
      </Reveal>

      <div className="relative mx-auto max-w-page px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Comment ça marche ?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            3 étapes, tout simplement
          </h2>
        </Reveal>

        {/* En dessous de lg (pas de téléphone flottant) : mise en page
            d'origine, chaque étape auto-contenue. */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:hidden">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delayMs={i * 120}
              className="flex items-start gap-4 sm:flex-col sm:items-center sm:text-center"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet/10 text-lg font-bold text-violet">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {step.text}
                </p>
                {step.note && (
                  <p className="mt-2 text-xs font-medium text-ink/40">
                    {step.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* À partir de lg : espace réservé à droite pour le téléphone,
            colonnes alignées ligne par ligne (numéro / titre / texte /
            note) pour garantir un alignement strict entre les 3 étapes. */}
        <div className="mt-16 hidden lg:block lg:pr-[300px] xl:pr-[360px]">
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-14">
            {steps.map((step, i) => (
              <Reveal key={`num-${step.number}`} delayMs={i * 120} className="flex justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10 text-lg font-bold text-violet">
                  {step.number}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-x-10 xl:gap-x-14">
            {steps.map((step, i) => (
              <Reveal key={`title-${step.number}`} delayMs={i * 120} className="text-center">
                <h3 className="text-base font-bold">{step.title}</h3>
              </Reveal>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-3 gap-x-10 xl:gap-x-14">
            {steps.map((step, i) => (
              <Reveal key={`text-${step.number}`} delayMs={i * 120} className="text-center">
                <p className="text-sm leading-relaxed text-ink/60">{step.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-3 gap-x-10 xl:gap-x-14">
            {steps.map((step, i) => (
              <Reveal key={`note-${step.number}`} delayMs={i * 120} className="text-center">
                {step.note && (
                  <p className="text-xs font-medium text-ink/40">{step.note}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delayMs={200} className="mx-auto mt-12 max-w-sm text-center lg:mx-0 lg:max-w-xs lg:text-left">
          <p className="text-sm font-medium text-ink/60">
            Aujourd&rsquo;hui, cette semaine, à anticiper&nbsp;: tout est
            rassemblé au même endroit, pour que rien ne vous échappe jamais.
          </p>
        </Reveal>

        {/* Version mobile/tablette : le téléphone reste dans le flux,
            centré sous le texte, puisqu'il n'y a pas de marge latérale
            disponible pour le faire flotter. */}
        <Reveal delayMs={220} className="mt-10 flex justify-center lg:hidden">
          <PhoneMockup
            label="Écran Accueil"
            src={screenshots.accueil}
            className="w-[240px] sm:w-[270px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
