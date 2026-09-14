import Reveal from "./Reveal";

const jeanLucFacts = [
  "Aime l'automobile",
  "Audi RS6",
  "Préfère les expériences aux objets",
  "Budget habituel 50–100 €",
];

// Cartes 100% illustratives : aucun flux produit réel n'est branché,
// l'objectif est uniquement d'expliquer le principe de la fonctionnalité.
const giftMockups = [
  { icon: "🏁", label: "Journée sur circuit" },
  { icon: "🧰", label: "Accessoire auto premium" },
  { icon: "📷", label: "Séance photo de sa voiture" },
];

export default function GiftIdeas() {
  return (
    <section className="bg-night py-24">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">
            Anniversaires & cadeaux
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Plus besoin de chercher une idée cadeau la veille.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Pensif connaît les dates importantes de vos proches et centralise
            ce que vous savez déjà sur eux&nbsp;: envies, goûts, passions et
            idées notées au fil du temps.
          </p>
        </Reveal>

        <Reveal
          delayMs={120}
          className="mt-14 grid grid-cols-1 gap-6 rounded-3xl bg-night-soft p-6 ring-1 ring-white/10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-10 lg:p-10"
        >
          <div className="rounded-2xl bg-night-card p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-bold text-white">Jean-Luc</p>
              <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-semibold text-violet-light">
                Anniversaire dans 21 jours
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {jeanLucFacts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-light" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Quelques idées pour Jean-Luc
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {giftMockups.map((gift) => (
                <div
                  key={gift.label}
                  className="rounded-2xl bg-night-card p-5 text-center ring-1 ring-white/5"
                >
                  <span className="text-2xl">{gift.icon}</span>
                  <p className="mt-3 text-sm font-medium text-white/80">
                    {gift.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/40">
              Les recommandations s&rsquo;appuient sur son profil, son quiz et
              les pensées que vous avez enregistrées.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
