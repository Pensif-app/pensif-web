import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactEmail } from "../config/links";

// Page Contact : orientation vers le bon canal, sans formulaire serveur ni collecte supplémentaire (uniquement des liens
// mailto:). Aucun numéro de téléphone (YOMIC n'a pas encore de numéro professionnel dédié).

const mailTo = (subject: string) => `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
const link = "font-semibold text-violet underline underline-offset-2";

const panel = "rounded-2xl bg-white p-5 ring-1 ring-black/5 sm:p-6";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="bg-night px-5 pb-10 pt-12 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">Contact</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Une question&nbsp;?</h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Retrouvez le bon contact selon votre demande.
            </p>
          </div>
        </section>

        <section className="bg-cream px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-night p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">Contact général</h2>
              <p className="mt-2 text-base leading-relaxed text-white/70">
                Pour toute question générale concernant Pensif.
              </p>
              <a
                href={mailTo("Contact Pensif")}
                className="mt-4 inline-block break-all rounded-xl bg-white/10 px-4 py-3 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15 sm:text-lg"
              >
                {contactEmail}
              </a>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className={panel}>
                <h2 className="text-lg font-extrabold text-ink">Support</h2>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  Un problème avec l’application ? Consultez notre{" "}
                  <a href="/support.html" className={link}>
                    page Support
                  </a>
                  .
                </p>
              </div>

              <div className={panel}>
                <h2 className="text-lg font-extrabold text-ink">Partenariats</h2>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  Une proposition de partenariat ? Consultez notre{" "}
                  <a href="/partenaires.html" className={link}>
                    espace Partenaires
                  </a>
                  .
                </p>
              </div>

              <div className={`${panel} sm:col-span-2`}>
                <h2 className="text-lg font-extrabold text-ink">Données personnelles</h2>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  Une question concernant vos données ou votre vie privée ? Consultez notre{" "}
                  <a href="/confidentialite.html" className={link}>
                    politique de confidentialité
                  </a>{" "}
                  ou{" "}
                  <a href={mailTo("Confidentialité Pensif")} className={link}>
                    écrivez-nous
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
