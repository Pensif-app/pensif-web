import Reveal from "./Reveal";

const categories = ["Cadeaux & boutiques", "Expériences", "Personnalisation"];

// Section volontairement secondaire et sobre : pas de logos, pas de
// chiffres, pas de témoignages. Le programme partenaire est une ouverture
// aux collaborations, pas un dispositif déjà en place.
export default function Partners() {
  return (
    <section className="border-t border-ink/5 bg-cream-soft py-16">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Vous êtes une marque ou un commerçant ?
          </p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Faites partie des attentions qui comptent.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            Vous proposez des cadeaux, des expériences ou des services qui
            peuvent rendre un moment spécial encore plus personnel&nbsp;?
            Pensif souhaite collaborer avec des partenaires capables de
            proposer des idées pertinentes au bon moment.
          </p>

          <p className="mt-5 text-xs font-medium uppercase tracking-wide text-ink/40">
            {categories.join(" · ")}
          </p>

          <a
            href="/partenaires.html"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-white"
          >
            Devenir partenaire
          </a>
        </Reveal>
      </div>
    </section>
  );
}
