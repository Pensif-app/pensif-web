import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PartnerContactForm from "../components/PartnerContactForm";

const partnerTypes = [
  "Cadeaux",
  "Boutiques",
  "Expériences",
  "Fleurs",
  "Bijoux",
  "Restaurants",
  "Bien-être",
  "Services personnalisés",
  "Créateurs",
  "Photo & impression",
  "Activités",
];

export default function PartenairesPage() {
  return (
    <>
      <Header />
      <main>
        <section id="top" className="bg-night px-5 py-20 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">
              Programme partenaire
            </p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Devenez partenaire de Pensif
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Nous ouvrons progressivement les collaborations à des marques et
              professionnels capables d&rsquo;aider nos utilisateurs à trouver
              la bonne attention, au bon moment, pour la bonne personne.
            </p>
          </Reveal>
        </section>

        <section className="bg-cream py-20">
          <div className="mx-auto max-w-page px-5 sm:px-8">
            <Reveal className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Quels types de partenaires recherchons-nous&nbsp;?
              </h2>
            </Reveal>

            <Reveal delayMs={100} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
              {partnerTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-violet/10 px-4 py-2 text-sm font-medium text-ink/70"
                >
                  {type}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="bg-cream-soft py-20">
          <Reveal className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Des recommandations pertinentes, pas de la publicité générique
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              Pensif connaît l&rsquo;occasion, les goûts du proche concerné et
              son profil. L&rsquo;objectif d&rsquo;un partenariat est de
              proposer, au bon moment, une idée qui a vraiment du sens pour
              cette personne précise&nbsp;: pas d&rsquo;affichage publicitaire
              générique.
            </p>
          </Reveal>
        </section>

        <section className="bg-cream py-20">
          <div className="mx-auto max-w-page px-5 sm:px-8">
            <Reveal className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Parlons de votre activité
              </h2>
              <p className="mt-4 text-base text-ink/60">
                Décrivez-nous votre entreprise et ce que vous proposez, nous
                reviendrons vers vous.
              </p>
            </Reveal>

            <Reveal delayMs={100} className="mx-auto mt-10 max-w-xl">
              <PartnerContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
