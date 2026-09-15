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
      {/* Sur grand écran, le téléphone flotte dans la marge droite et
          déborde volontairement sur la section suivante — purement
          décoratif, retiré du flux pour ne pas alourdir le bloc. */}
      <Reveal
        delayMs={220}
        className="pointer-events-none absolute right-6 top-16 z-10 hidden translate-y-28 lg:block xl:right-12"
      >
        <PhoneMockup
          label="Écran Accueil"
          src={screenshots.accueil}
          className="w-[210px] xl:w-[240px]"
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

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:max-w-3xl">
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
            className="w-[220px] sm:w-[240px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
