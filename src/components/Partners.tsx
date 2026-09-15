import Reveal from "./Reveal";

const categories = ["Cadeaux & boutiques", "Expériences", "Personnalisation"];

// Section volontairement secondaire et sobre : pas de logos, pas de
// chiffres, pas de témoignages. Le programme partenaire est une ouverture
// aux collaborations, pas un dispositif déjà en place.
export default function Partners() {
  return (
    <section className="border-t border-ink/5 bg-cream pb-14 pt-20 sm:pt-24">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet/80">
            Vous êtes une marque ou un commerçant ?
          </p>
          <h2 className="mt-2.5 text-xl font-bold sm:text-2xl">
            Faites partie des attentions qui comptent.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/50">
            Vous proposez des cadeaux, des expériences ou des services qui
            peuvent rendre un moment spécial encore plus personnel&nbsp;?
            Pensif souhaite collaborer avec des partenaires capables de
            proposer des idées pertinentes au bon moment.
          </p>

          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink/35">
            {categories.join(" · ")}
          </p>

          <a
            href="/partenaires.html"
            className="mt-5 inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-2 text-xs font-semibold text-ink/80 transition hover:border-ink/30 hover:bg-white"
          >
            Devenir partenaire
          </a>
        </Reveal>
      </div>
    </section>
  );
}
