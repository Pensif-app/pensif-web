import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactEmail } from "../config/links";

// Conditions d'utilisation de Pensif — mise à jour du 27 septembre 2026. Rédigées en cohérence avec l'app réelle
// (compte anonyme puis sécurisation par e-mail, Capture vocale, Réponses intelligentes, rappels locaux, suppression
// dans Réglages) et avec la politique de confidentialité, sans reprendre son détail. Clauses proportionnées : rien
// qui exclue une responsabilité impossible à exclure, ni impose un tribunal au consommateur (Code de la consommation,
// art. L212-1 et R212-1 à R212-2 sur les clauses abusives). Ne rien y inventer.
//
// NOTE INTERNE (non publique) : Pensif est gratuit (ni abonnement, ni achat intégré, aucun service payant vendu par
// YOMIC ; les éventuels achats se font chez des plateformes tierces), donc aucun médiateur de la consommation n'est
// désigné dans ces conditions. À RÉEXAMINER (médiation, conditions de vente, information précontractuelle) si Pensif
// devient payant, ajoute un abonnement ou un achat intégré, ou vend directement un service aux consommateurs.

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-10 scroll-mt-24 text-xl font-extrabold text-ink sm:text-2xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-ink/75">{children}</p>;
}

function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-ink/75">{children}</ul>;
}

const link = "font-semibold text-violet underline underline-offset-2";

const SECTIONS: { id: string; title: string }[] = [
  { id: "objet", title: "Objet" },
  { id: "acces", title: "Accès à Pensif" },
  { id: "compte", title: "Compte anonyme et sécurisation" },
  { id: "contenus", title: "Vos contenus" },
  { id: "ia", title: "Capture vocale et Réponses intelligentes" },
  { id: "rappels", title: "Rappels et notifications" },
  { id: "tiers", title: "Recommandations et services tiers" },
  { id: "disponibilite", title: "Disponibilité et évolution du service" },
  { id: "usage", title: "Utilisation acceptable" },
  { id: "propriete", title: "Propriété intellectuelle" },
  { id: "responsabilite", title: "Responsabilité" },
  { id: "suppression", title: "Suppression des données ou du compte" },
  { id: "donnees", title: "Données personnelles" },
  { id: "modification", title: "Modification des conditions" },
  { id: "droit", title: "Droit applicable et litiges" },
  { id: "contact", title: "Contact" },
];

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="bg-night px-5 pb-10 pt-12 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">Conditions</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Conditions d’utilisation</h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Les règles qui s’appliquent à l’utilisation de l’application Pensif et du service associé.
            </p>
            <p className="mt-4 text-sm text-white/45">Dernière mise à jour : 27 septembre 2026</p>
          </div>
        </section>

        <section className="bg-cream px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Sommaire" className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <p className="text-sm font-bold text-ink">Sommaire</p>
              <ol className="mt-3 grid list-decimal gap-x-8 gap-y-1.5 pl-5 text-sm text-ink/70 sm:grid-cols-2">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="underline-offset-2 hover:text-violet hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <H2 id="objet">1. Objet</H2>
            <P>
              Ces conditions encadrent l’utilisation de l’application mobile Pensif et du service associé (sauvegarde et
              synchronisation, Capture vocale, Réponses intelligentes, rappels), proposés par YOMIC, dont l’identité
              figure dans les{" "}
              <a href="/mentions-legales.html" className={link}>
                mentions légales
              </a>
              . Vous pouvez les consulter à tout moment sur cette page. À la date de ces conditions, Pensif ne propose
              pas d’achat intégré.
            </P>

            <H2 id="acces">2. Accès à Pensif</H2>
            <P>
              Pensif est actuellement disponible sur iPhone, via l’App Store, dans les conditions d’Apple. Aucune autre
              plateforme n’est proposée à ce jour.
            </P>
            <P>
              Certaines fonctions nécessitent une connexion Internet : la sauvegarde et la synchronisation, la
              récupération de vos données sur un autre appareil, la Capture vocale et les Réponses intelligentes. Les
              rappels, une fois programmés, sont gérés localement sur votre appareil. Vous êtes responsable de votre
              appareil et de votre connexion.
            </P>

            <H2 id="compte">3. Compte anonyme et sécurisation</H2>
            <P>
              Vous pouvez utiliser Pensif sans fournir d’adresse e-mail : en touchant « Commencer », un identifiant
              utilisateur anonyme est créé et vos données peuvent être sauvegardées sous cet identifiant.
            </P>
            <P>
              Vous pouvez ensuite choisir « Sécuriser mes données » : vous associez une adresse e-mail à vos données et
              confirmez cette adresse avec un code à usage unique. Vous pouvez alors retrouver vos données sur un autre
              appareil avec « J’ai déjà un compte ». Sans cette étape, vos données ne peuvent pas être récupérées sur un
              autre appareil. Ne communiquez jamais votre code de connexion à un tiers.
            </P>

            <H2 id="contenus">4. Vos contenus</H2>
            <P>
              Vous pouvez enregistrer dans Pensif des pensées, des dates, des rappels, des informations sur vos proches,
              des préférences et des notes libres. Ces contenus restent les vôtres : YOMIC ne revendique aucun droit de
              propriété sur eux et vous accordez seulement l’autorisation nécessaire pour les héberger, les transmettre
              et les traiter afin de faire fonctionner le service que vous utilisez.
            </P>
            <P>Vous êtes responsable des informations que vous saisissez. Nous vous demandons de :</P>
            <UL>
              <li>respecter la vie privée des personnes dont vous enregistrez des informations, et n’en saisir que ce qui est utile ;</li>
              <li>ne pas enregistrer de contenu manifestement illicite ;</li>
              <li>ne pas utiliser Pensif pour porter atteinte aux droits d’autrui.</li>
            </UL>

            <H2 id="ia">5. Capture vocale et Réponses intelligentes</H2>
            <P>
              La Capture vocale transforme une dictée en proposition structurée (pensée, rappel, information liée à un
              proche). Les Réponses intelligentes rédigent un brouillon de message à partir du contexte que Pensif leur
              transmet. Ces résultats sont produits automatiquement et peuvent comporter des erreurs ou des
              approximations.
            </P>
            <P>
              Vous gardez la validation finale : vérifiez toujours le résultat avant de l’enregistrer et relisez tout
              message avant de l’envoyer. Des limites d’utilisation peuvent s’appliquer pour protéger le service contre
              les abus. Le détail des données concernées figure dans la{" "}
              <a href="/confidentialite.html" className={link}>
                politique de confidentialité
              </a>
              .
            </P>

            <H2 id="rappels">6. Rappels et notifications</H2>
            <P>
              Les rappels sont une aide. Vous restez responsable de vos échéances et de vos obligations. Pensif ne peut
              pas garantir qu’une notification s’affichera dans tous les cas : les réglages de votre iPhone
              (notifications, modes Concentration, économie d’énergie, autorisations) peuvent influencer leur
              affichage.
            </P>

            <H2 id="tiers">7. Recommandations et services tiers</H2>
            <P>
              Pensif peut présenter des idées, des recommandations ou des liens vers des plateformes ou services tiers.
              Pensif ne réalise pas nécessairement la vente : un éventuel achat est conclu directement avec le vendeur ou
              la plateforme concernée, selon ses propres conditions. Les prix, stocks, conditions et disponibilités
              dépendent de ces tiers.
            </P>

            <H2 id="disponibilite">8. Disponibilité et évolution du service</H2>
            <P>
              Pensif évolue : des fonctionnalités peuvent être ajoutées, modifiées ou améliorées, et des interruptions
              temporaires peuvent survenir (maintenance, incident, dépendance à un prestataire). YOMIC s’efforce
              d’assurer un service de qualité sans pouvoir garantir une disponibilité continue. En cas de changement
              important qui affecte vos données, nous vous en informerons.
            </P>

            <H2 id="usage">9. Utilisation acceptable</H2>
            <P>Vous vous engagez à ne pas :</P>
            <UL>
              <li>utiliser Pensif de manière frauduleuse ou illicite ;</li>
              <li>chercher à contourner les limites d’utilisation ;</li>
              <li>accéder ou tenter d’accéder sans autorisation au service, aux comptes ou aux données d’autrui ;</li>
              <li>perturber le fonctionnement du service.</li>
            </UL>
            <P>
              En cas de manquement grave, YOMIC peut restreindre ou suspendre l’accès au service, en vous en indiquant la
              raison lorsque cela est possible.
            </P>

            <H2 id="propriete">10. Propriété intellectuelle</H2>
            <P>
              Pensif, son identité visuelle, l’application, le site, les textes, le code et les éléments graphiques sont
              protégés par le droit de la propriété intellectuelle et ne peuvent être reproduits ou réutilisés sans
              autorisation écrite préalable, sous réserve des exceptions prévues par la loi. Ces conditions ne vous
              cèdent aucun droit sur eux, en dehors du droit personnel d’utiliser l’application. Les noms et logos de
              tiers, notamment d’Apple, appartiennent à leurs titulaires.
            </P>

            <H2 id="responsabilite">11. Responsabilité</H2>
            <P>
              Pensif est un outil d’aide à la mémoire et à l’organisation. Vous restez responsable des décisions que vous
              prenez à partir des informations affichées, et les suggestions générées doivent être vérifiées. YOMIC ne
              garantit pas l’absence totale d’erreurs ou d’interruptions.
            </P>
            <P>
              Aucune disposition de ces conditions n’exclut ni ne limite les responsabilités qui ne peuvent l’être selon
              la loi, notamment en cas de faute lourde ou dolosive, ni les droits que la loi reconnaît aux consommateurs.
            </P>

            <H2 id="suppression">12. Suppression des données ou du compte</H2>
            <P>
              Vous pouvez supprimer vos données à tout moment dans Réglages, rubrique « Données et confidentialité » :
              « Supprimer mes données » si vous n’avez pas associé d’adresse e-mail, « Supprimer mon compte » si vous avez
              sécurisé vos données. Une connexion Internet est nécessaire et l’action est définitive. Si vous avez besoin
              d’aide, consultez la{" "}
              <a href="/support.html" className={link}>
                page Support
              </a>
              .
            </P>

            <H2 id="donnees">13. Données personnelles</H2>
            <P>
              Le traitement de vos données personnelles est décrit dans la{" "}
              <a href="/confidentialite.html" className={link}>
                politique de confidentialité
              </a>
              .
            </P>

            <H2 id="modification">14. Modification des conditions</H2>
            <P>
              Ces conditions peuvent évoluer avec Pensif ou avec les obligations applicables. La date de dernière mise à
              jour figure en haut de cette page ; en cas de changement important, nous vous en informerons dans
              l’application ou sur le site. Cela ne vous prive d’aucun des droits que la loi vous reconnaît.
            </P>

            <H2 id="droit">15. Droit applicable et litiges</H2>
            <P>
              Ces conditions sont soumises au droit français, sous réserve des dispositions impératives applicables au
              consommateur, notamment celles de son pays de résidence lorsqu’elles s’appliquent.
            </P>
            <P>
              En cas de difficulté, vous pouvez d’abord contacter YOMIC afin de rechercher une solution amiable :{" "}
              <a href={`mailto:${contactEmail}`} className={link}>
                {contactEmail}
              </a>{" "}
              ou{" "}
              <a href="/contact.html" className={link}>
                page Contact
              </a>
              .
            </P>

            <H2 id="contact">16. Contact</H2>
            <P>
              Pour toute question sur ces conditions :{" "}
              <a href={`mailto:${contactEmail}`} className={link}>
                {contactEmail}
              </a>{" "}
              ou via la{" "}
              <a href="/contact.html" className={link}>
                page Contact
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
