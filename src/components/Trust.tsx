import Reveal from "./Reveal";

// Aucune promesse sur la conservation/suppression de l'audio, le stockage ou le
// chiffrement chez un fournisseur : à ne compléter qu'après l'audit STT final.
const principles = [
  {
    title: "Vous vérifiez avant d’enregistrer",
    text: "Vous gardez toujours la main avant validation.",
  },
  {
    title: "Vous pouvez corriger",
    text: "Ce que Pensif comprend peut être ajusté.",
  },
  {
    title: "Pensif n’invente pas vos proches",
    text: "Les informations viennent de ce que vous lui confiez.",
  },
];

// Résumé compact « Comment ça marche ? » (ancre du lien Header), fusionné dans cette section.
const steps = [
  { number: "01", title: "Ajoutez vos proches" },
  { number: "02", title: "Confiez ce que vous voulez retenir" },
  { number: "03", title: "Pensif fait remonter ce qui compte au bon moment" },
];

// Les respirations verticales s'adaptent à la hauteur d'écran (vh) pour que tout reste dans l'écran utile.
const gapBig = "mt-12 lg:mt-[clamp(1.75rem,6.5vh,5rem)]";

export default function Trust() {
  return (
    <section id="confiance" className="snap-screen bg-night py-8 lg:py-6">
      <div className="mx-auto w-full max-w-[1150px] px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">
            Confiance &amp; confidentialité
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
            <span className="accueil-line accueil-line--title block w-fit">Ce que vous confiez à Pensif</span>
            <span className="accueil-line accueil-line--title block w-fit">reste sous votre contrôle.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-14 lg:mt-[clamp(1.75rem,6vh,4.5rem)]">
          {principles.map((p, i) => (
            <Reveal key={p.title} delayMs={i * 100} className="border-t border-white/15 pt-5">
              <h3 className="accueil-line accueil-line--title w-fit text-lg font-bold text-white xl:text-xl">{p.title}</h3>
              <p className="accueil-line accueil-line--desc mt-2 w-fit font-hand text-lg leading-snug text-white/65 xl:text-xl">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Comment ça marche ? — résumé 01 → 02 → 03, volontairement discret. */}
        <Reveal delayMs={150} className={gapBig}>
          <div id="comment-ca-marche" className="scroll-mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Comment ça marche ?</p>
            <ol className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-14">
              {steps.map((s, i) => (
                <li key={s.number}>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-extrabold text-violet-light/80">{s.number}</span>
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="hidden h-px flex-1 bg-violet-light/20 md:block" />
                    )}
                  </div>
                  <p className="accueil-line accueil-line--title mt-1.5 w-fit text-sm leading-snug text-white/70 xl:text-base">
                    {s.title}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Conclusion émotionnelle discrète, décalée à droite. */}
        <Reveal delayMs={200} className={`${gapBig} lg:ml-auto lg:max-w-2xl lg:text-right`}>
          <p className="font-hand text-2xl leading-snug text-white/75 xl:text-3xl">
            <span className="gift-line gift-line--desc lg:ml-auto lg:block lg:w-fit">
              &laquo;&nbsp;Être attentionné, c&rsquo;est souvent se souvenir
            </span>{" "}
            <span className="gift-line gift-line--desc lg:ml-auto lg:block lg:w-fit">
              d&rsquo;un petit détail au bon moment.&nbsp;&raquo;
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
