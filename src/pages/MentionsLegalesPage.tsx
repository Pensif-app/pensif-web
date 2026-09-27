import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactEmail } from "../config/links";

// Mentions légales du site pensif-app.fr (LCEN, art. 1-1 dans sa version en vigueur depuis le 23 mai 2024 :
// dénomination, siège, RCS/capital, directeur de la publication, hébergeur). Le téléphone professionnel de YOMIC
// n'est pas encore attribué : la ligne est omise plutôt que d'afficher un placeholder public — à ajouter dès qu'il
// existe (voir section "1. Éditeur du site"). Ne rien y inventer (ni téléphone, ni greffe du RCS, ni TVA).

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-xl font-extrabold text-ink sm:text-2xl">{children}</h2>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-ink/75">{children}</p>;
}

const link = "font-semibold text-violet underline underline-offset-2";

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="bg-night px-5 pb-10 pt-12 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">Informations légales</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Mentions légales</h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Informations d’identification de l’éditeur et de l’hébergeur du site pensif-app.fr.
            </p>
          </div>
        </section>

        <section className="bg-cream px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <H2>1. Éditeur du site</H2>
            <P>
              Le site pensif-app.fr est édité par <strong>YOMIC</strong>, société par actions simplifiée (SAS) au capital
              social de 1&nbsp;000,00&nbsp;€, dont le siège social est situé 50 avenue des Champs-Élysées, 75008 Paris,
              France.
            </P>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-ink/75">
              <li>Immatriculation : RCS Paris 106&nbsp;580&nbsp;228</li>
              <li>Président et représentant légal : Mickaël PERACHON</li>
              <li>
                E-mail :{" "}
                <a href={`mailto:${contactEmail}`} className={link}>
                  {contactEmail}
                </a>
              </li>
            </ul>

            <H2>2. Directeur de la publication</H2>
            <P>Le directeur de la publication est Mickaël PERACHON, en qualité de Président de YOMIC.</P>

            <H2>3. Hébergement</H2>
            <P>
              Le site est hébergé par <strong>OVH SAS</strong>, 2 rue Kellermann, 59100 Roubaix, France (RCS Lille
              Métropole 424&nbsp;761&nbsp;419&nbsp;00045). Téléphone : 1007 (+33&nbsp;9&nbsp;72&nbsp;10&nbsp;10&nbsp;07 depuis
              l’étranger).
            </P>

            <H2>4. Propriété intellectuelle</H2>
            <P>
              Sauf mention contraire, les textes, les éléments graphiques, l’identité visuelle de Pensif (nom, logo,
              illustrations, captures d’écran de l’application) et les contenus de ce site sont protégés par le droit de
              la propriété intellectuelle. Toute reproduction, représentation ou réutilisation, totale ou partielle, sans
              autorisation écrite préalable de YOMIC est interdite, sous réserve des exceptions prévues par la loi.
            </P>
            <P>
              Les noms, marques et logos de tiers cités sur ce site, notamment ceux d’Apple et de l’App Store, appartiennent
              à leurs titulaires respectifs. Leur mention n’implique ni partenariat ni affiliation, et YOMIC n’en revendique
              aucun droit.
            </P>

            <H2>5. Responsabilité</H2>
            <P>
              Les informations de ce site sont fournies à titre informatif. YOMIC s’efforce de les maintenir exactes et à
              jour, sans pouvoir en garantir l’exhaustivité. Le site et l’application Pensif peuvent évoluer ou être
              temporairement indisponibles, notamment pour des opérations de maintenance.
            </P>
            <P>
              Le site peut contenir des liens vers des sites tiers. YOMIC ne contrôle pas leur contenu et n’est pas
              responsable de leurs pratiques.
            </P>

            <H2>6. Données personnelles</H2>
            <P>
              Le traitement des données personnelles est décrit dans notre{" "}
              <a href="/confidentialite.html" className={link}>
                politique de confidentialité
              </a>
              .
            </P>

            <H2>7. Contact</H2>
            <P>
              Pour toute question concernant ce site :{" "}
              <a href={`mailto:${contactEmail}`} className={link}>
                {contactEmail}
              </a>
              .
            </P>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
