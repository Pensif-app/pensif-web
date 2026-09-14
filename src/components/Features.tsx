import Reveal from "./Reveal";

const pillars = [
  {
    icon: "🎂",
    title: "Anniversaires & dates importantes",
    text: "Gardez les anniversaires de vos proches en mémoire et soyez prévenu avant qu'il ne soit trop tard.",
  },
  {
    icon: "💜",
    title: "Une mémoire pour chaque proche",
    text: "Notez ce qu'ils aiment, ce qu'ils veulent, leurs habitudes et toutes les petites choses que vous ne voulez pas oublier.",
  },
  {
    icon: "🧩",
    title: "Profil & quiz personnalisé",
    text: "Apprenez à mieux cerner leurs goûts grâce à un profil enrichi et un quiz personnalisé.",
  },
  {
    icon: "🎁",
    title: "Des idées cadeaux au bon moment",
    text: "À l'approche d'un anniversaire ou d'une occasion, Pensif peut vous proposer des idées adaptées à la personne.",
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="bg-cream py-24">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Tout ce qu&rsquo;il faut pour ne plus laisser les petites
            attentions au hasard
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delayMs={i * 100} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet/10 text-2xl">
                {pillar.icon}
              </div>
              <h3 className="mt-4 text-base font-bold">{pillar.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
