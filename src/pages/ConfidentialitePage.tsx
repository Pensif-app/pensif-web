import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactEmail } from "../config/links";

// Politique de confidentialité de Pensif — mise à jour du 27 septembre 2026. Ne décrire ici que des faits
// confirmés (audit technique, documentations officielles des prestataires) ; ne rien y inventer.

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-24 text-xl font-extrabold text-ink sm:text-2xl">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-ink/75">{children}</p>;
}

function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-ink/75">{children}</ul>;
}

const SECTIONS: { id: string; title: string }[] = [
  { id: "qui", title: "Qui sommes-nous ?" },
  { id: "donnees", title: "Quelles données Pensif traite-t-elle ?" },
  { id: "finalites", title: "Pourquoi ces données sont-elles utilisées ?" },
  { id: "compte", title: "Compte anonyme et sécurisation par e-mail" },
  { id: "capture", title: "Capture vocale" },
  { id: "reponses", title: "Réponses intelligentes" },
  { id: "contacts", title: "Proches et carnet d’adresses" },
  { id: "notifications", title: "Notifications" },
  { id: "prestataires", title: "Hébergement et prestataires" },
  { id: "conservation", title: "Durée de conservation" },
  { id: "suppression", title: "Suppression de vos données ou de votre compte" },
  { id: "securite", title: "Sécurité" },
  { id: "transferts", title: "Transferts de données hors de l’Union européenne" },
  { id: "droits", title: "Vos droits" },
  { id: "tiers", title: "Données concernant d’autres personnes" },
  { id: "site", title: "Le site pensif-app.fr" },
  { id: "modifications", title: "Modifications de cette politique" },
  { id: "contact", title: "Contact" },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="bg-night px-5 pb-10 pt-12 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">Confidentialité</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Politique de confidentialité</h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Cette page explique quelles données l’application Pensif et le site pensif-app.fr traitent, pourquoi, avec
              quels prestataires, pendant combien de temps, et comment les supprimer.
            </p>
            <p className="mt-4 text-sm text-white/45">
              Dernière mise à jour : 27 septembre 2026
            </p>
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

            <H2 id="qui">1. Qui sommes-nous ?</H2>
            <P>
              Pensif est une application mobile pour iPhone qui aide à retenir ce qui compte pour ses proches : pensées,
              dates importantes, préférences, rappels. Elle est éditée par YOMIC, SAS au capital social de 1&nbsp;000,00&nbsp;€,
              immatriculée sous le numéro SIREN 106&nbsp;580&nbsp;228, dont le siège social est situé 50 avenue des
              Champs-Élysées, 75008 Paris, France.
            </P>
            <P>
              Président et représentant légal : Mickaël PERACHON. Directeur de la publication : Mickaël PERACHON.
            </P>
            <P>
              YOMIC est responsable du traitement des données décrites dans cette page. Contact pour toute question sur
              vos données :{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-violet underline underline-offset-2">
                {contactEmail}
              </a>
              .
            </P>

            <H2 id="donnees">2. Quelles données Pensif traite-t-elle ?</H2>
            <H3>Données sauvegardées sur nos serveurs</H3>
            <UL>
              <li>
                <strong>Un identifiant utilisateur</strong> créé au premier lancement (voir la section 4). Il ne contient
                pas votre nom et n’est pas une adresse e-mail.
              </li>
              <li>
                <strong>Votre adresse e-mail</strong>, uniquement si vous choisissez « Sécuriser mes données ».
              </li>
              <li>
                <strong>Vos pensées</strong> : texte, dates, heure d’un rappel, récurrence, épinglage, lien éventuel avec
                un proche.
              </li>
              <li>
                <strong>Vos proches</strong> : prénom, nom, numéro de téléphone s’il est renseigné, relation, rôle
                familial, genre, date de naissance, réglages de rappel d’anniversaire, favori, cadeau préparé.
              </li>
              <li>
                <strong>Les réponses du petit quiz</strong> d’un proche : centres d’intérêt, éléments à éviter, souhait
                (texte libre) et réponses d’affinage.
              </li>
              <li>
                <strong>Des compteurs d’utilisation</strong> (identifiant utilisateur et date, sans aucun contenu) pour
                limiter les usages abusifs de la Capture vocale et des Réponses intelligentes.
              </li>
            </UL>
            <H3>Données qui restent sur votre appareil</H3>
            <UL>
              <li>Votre prénom tel que vous l’avez saisi, le thème, le réglage des rappels et l’état du tutoriel.</li>
              <li>Les brouillons de messages et de quiz en cours.</li>
              <li>Le fichier audio d’une capture vocale, le temps de son traitement (voir la section 5).</li>
              <li>Une copie locale de vos pensées et proches, pour fonctionner aussi avec une mauvaise connexion.</li>
            </UL>
            <H3>Ce que Pensif ne collecte pas</H3>
            <P>
              Pensif n’utilise ni outil de mesure d’audience, ni publicité, ni suivi entre applications, et ne demande
              ni localisation, ni accès aux photos ou à l’appareil photo. Le champ de saisie d’une pensée est libre :
              vous décidez de ce que vous y écrivez. Pensif ne demande pas d’informations sensibles (santé, religion,
              opinions, etc.), mais rien n’empêche techniquement d’en saisir : nous vous invitons à ne pas le faire.
            </P>

            <H2 id="finalites">3. Pourquoi ces données sont-elles utilisées ?</H2>
            <P>
              Les données servent uniquement à faire fonctionner Pensif.
            </P>
            <UL>
              <li>
                <strong>Créer, sauvegarder et synchroniser vos pensées et vos proches, programmer vos rappels</strong> :
                pour fournir le service que vous utilisez.
              </li>
              <li>
                <strong>Sécuriser votre compte et récupérer vos données sur un autre appareil</strong> (e-mail, code à
                usage unique) : pour fournir le service que vous demandez.
              </li>
              <li>
                <strong>Capture vocale et Réponses intelligentes</strong> : pour fournir des fonctions que vous
                déclenchez vous-même, une par une ; l’accès au micro est soumis à votre autorisation dans les réglages
                de l’iPhone.
              </li>
              <li>
                <strong>Sécurité et prévention des abus</strong> (limites d’utilisation) : intérêt légitime de Pensif à
                protéger le service et à en limiter les usages abusifs.
              </li>
              <li>
                <strong>Obligations légales</strong> : lorsque la loi l’exige.
              </li>
            </UL>

            <H2 id="compte">4. Compte anonyme et sécurisation par e-mail</H2>
            <P>
              L’e-mail n’est pas obligatoire pour utiliser Pensif. Quand vous touchez « Commencer », Pensif crée un
              identifiant utilisateur anonyme : aucune adresse e-mail n’est demandée. Vos données peuvent être
              sauvegardées et synchronisées sous cet identifiant.
            </P>
            <P>
              Tant que vous n’avez pas choisi « Sécuriser mes données », ce compte n’est associé à aucune adresse
              e-mail : il ne permet pas de retrouver vos données sur un nouvel appareil.
            </P>
            <P>
              Si vous choisissez « Sécuriser mes données », vous saisissez une adresse e-mail et un code à usage unique
              qui vous est envoyé. Votre compte reste le même, et vous pouvez ensuite retrouver vos données sur un autre
              appareil avec « J’ai déjà un compte » (adresse e-mail et code). Le code est envoyé par e-mail par le
              service d’authentification de Supabase.
            </P>

            <H2 id="capture">5. Capture vocale</H2>
            <P>Voici, dans l’ordre, ce qui se passe quand vous utilisez la Capture vocale :</P>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-base leading-relaxed text-ink/75">
              <li>Vous maintenez le bouton : l’application enregistre un fichier audio sur votre appareil.</li>
              <li>
                Au relâchement, l’audio est envoyé à l’infrastructure de Pensif (fonctions Supabase), qui le transmet à
                Groq, prestataire de transcription (modèle whisper-large-v3).
              </li>
              <li>
                Groq renvoie le texte transcrit. Ce texte est envoyé à OpenAI (modèle GPT-5 mini), qui le structure en
                pensée, rappel ou information liée à un proche. Avec le texte, Pensif envoie la date, l’heure locale et
                le fuseau horaire de votre appareil, pour comprendre « demain » ou « vendredi ».
              </li>
              <li>Le résultat s’affiche dans l’application : vous le vérifiez avant de l’enregistrer.</li>
            </ol>
            <H3>Ce que fait Pensif</H3>
            <UL>
              <li>
                Le fichier audio local est supprimé une fois traité, que le traitement ait réussi ou échoué, ainsi qu’un
                enregistrement trop court ou silencieux qui n’est pas envoyé. Si l’application est interrompue pendant
                l’envoi, le fichier peut rester dans l’espace temporaire de l’application jusqu’à son nettoyage par le
                système.
              </li>
              <li>
                L’audio n’est pas enregistré dans la base de données de Pensif, pas déposé dans un espace de stockage de
                fichiers, et Pensif ne crée aucune adresse permanente pour l’écouter. Il n’est lu qu’en mémoire pour
                être transmis à Groq.
              </li>
              <li>
                Le texte transcrit n’est enregistré chez Pensif que si vous validez la pensée qui en résulte.
              </li>
            </UL>
            <H3>Ce que font nos prestataires</H3>
            <P>
              La conservation par un prestataire dépend de ses propres règles, pas de celles de Pensif. Selon la
              documentation officielle de Groq (consultée le 26 septembre 2026), Groq ne conserve pas par défaut les
              données des requêtes d’inférence, dont la transcription audio ; une conservation temporaire, pouvant aller
              jusqu’à 30 jours, reste possible pour la fiabilité du système ou l’analyse d’abus. Groq indique conserver
              ses données dans des serveurs situés aux États-Unis.
            </P>

            <H2 id="reponses">6. Réponses intelligentes</H2>
            <P>
              Quand vous demandez à Pensif de personnaliser un message (« Personnaliser avec Pensif »), une requête est
              envoyée à OpenAI (modèle GPT-5 mini) via l’infrastructure de Pensif pour rédiger un brouillon. Cette
              requête peut contenir :
            </P>
            <UL>
              <li>le prénom du proche, son genre, sa relation avec vous et son rôle familial, selon les données renseignées ;</li>
              <li>l’occasion (par exemple un anniversaire dans un certain nombre de jours, ou le texte et la date d’un événement) ;</li>
              <li>ses centres d’intérêt et son souhait, si son quiz est complet ;</li>
              <li>jusqu’à cinq de ses pensées les plus récentes, à titre facultatif pour le modèle.</li>
            </UL>
            <P>
              Ces informations ne sont envoyées que pour cette fonction, à votre demande : Pensif n’envoie pas
              automatiquement l’ensemble de vos pensées à OpenAI. Un filtre automatique limité écarte certains sujets
              sensibles (santé, deuil, addictions, violence) avant l’envoi, sans garantie d’exhaustivité. Le brouillon
              n’est jamais envoyé à votre proche sans votre action.
            </P>
            <P>
              Selon la documentation officielle d’OpenAI (consultée le 26 septembre 2026), les données envoyées à son API
              ne sont pas utilisées par défaut pour entraîner ses modèles, et les journaux de prévention des abus sont
              conservés jusqu’à 30 jours selon le service utilisé et la configuration.
            </P>

            <H2 id="contacts">7. Proches et carnet d’adresses</H2>
            <P>
              Les « proches » de Pensif sont des fiches que vous créez dans l’application. Pensif ne lit pas votre
              carnet d’adresses. Pour gagner du temps, vous pouvez ouvrir le sélecteur de contacts du système et choisir
              vous-même un contact : seules les informations de ce contact (prénom, nom, premier numéro de téléphone)
              préremplissent la fiche. Rien d’autre du carnet n’est lu ni envoyé.
            </P>

            <H2 id="notifications">8. Notifications</H2>
            <P>
              Les rappels sont programmés localement sur votre iPhone. Pensif ne demande pas d’identifiant de
              notification à Apple et n’en envoie aucun à ses serveurs : aucun serveur Pensif n’envoie de notification
              à distance. Le titre et le texte d’un rappel viennent de votre pensée ou de l’anniversaire concerné et
              peuvent apparaître sur l’écran verrouillé, selon vos réglages iOS. Vous pouvez désactiver les rappels dans
              Pensif ou dans les réglages du téléphone.
            </P>

            <H2 id="prestataires">9. Hébergement et prestataires</H2>
            <UL>
              <li>
                <strong>Supabase</strong> : authentification, base de données et fonctions serveur de Pensif. Le projet
                Pensif est hébergé dans la région eu-west-1 (Irlande). Selon Supabase, la région choisie détermine où
                sont stockées les données principales du projet ; Supabase agit comme sous-traitant et s’appuie
                elle-même sur des sous-traitants (notamment Amazon Web Services).
              </li>
              <li>
                <strong>Groq</strong> : transcription de la Capture vocale (section 5).
              </li>
              <li>
                <strong>OpenAI</strong> : structuration de la Capture et Réponses intelligentes (sections 5 et 6).
              </li>
              <li>
                <strong>Apple</strong> : distribution de l’application (App Store, TestFlight) et fonctions du système
                (micro, notifications, sélecteur de contacts), soumises aux règles d’Apple.
              </li>
              <li>
                <strong>OVH</strong> : hébergement du site pensif-app.fr.
              </li>
            </UL>

            <H2 id="conservation">10. Durée de conservation</H2>
            <UL>
              <li>
                <strong>Vos pensées, proches, quiz, identifiant et e-mail</strong> : conservés tant que vous ne les
                supprimez pas et tant que le compte existe. Pensif n’a pas défini de suppression automatique des comptes
                inactifs.
              </li>
              <li>
                <strong>Compteurs d’utilisation</strong> (identifiant et date) : conservés tant que le compte existe,
                supprimés avec lui.
              </li>
              <li>
                <strong>Fichier audio local</strong> : temporaire, supprimé après traitement (section 5).
              </li>
              <li>
                <strong>Journaux techniques et de prévention des abus chez les prestataires</strong> : selon leurs
                propres règles — jusqu’à 30 jours chez Groq et OpenAI d’après leur documentation officielle ; chez
                Supabase, le temps nécessaire au fonctionnement et à la sécurité du service.
              </li>
            </UL>

            <H2 id="suppression">11. Suppression de vos données ou de votre compte</H2>
            <P>
              Vous pouvez tout supprimer depuis l’application, dans Réglages puis « Données et confidentialité » :
            </P>
            <UL>
              <li>
                si vous n’avez pas associé d’adresse e-mail : <strong>« Supprimer mes données »</strong> ;
              </li>
              <li>
                si vous avez sécurisé votre compte : <strong>« Supprimer mon compte »</strong>.
              </li>
            </UL>
            <P>
              Dans les deux cas, Pensif supprime d’abord le compte côté serveur ; vos proches, pensées, quiz et
              compteurs liés à ce compte sont supprimés avec lui. Ensuite seulement, l’application efface les données
              présentes sur votre appareil, annule les rappels programmés et revient à l’écran de départ. Une connexion
              Internet est nécessaire. Cette action est irréversible. Si la suppression ne peut pas être confirmée
              (coupure réseau par exemple), l’application ne vous dit pas que tout est supprimé et vous invite à
              réessayer.
            </P>
            <P>
              Désinstaller l’application ne supprime pas les données sauvegardées sur nos serveurs. Vous pouvez aussi
              demander la suppression par e-mail à l’adresse de contact. Les prestataires peuvent conserver certaines
              données pour la durée indiquée à la section 10.
            </P>

            <H2 id="securite">12. Sécurité</H2>
            <UL>
              <li>Les échanges avec les serveurs de Pensif passent par des connexions sécurisées (HTTPS).</li>
              <li>
                Chaque ligne de données est rattachée à un utilisateur et protégée par des règles de sécurité de la base
                de données : un utilisateur n’accède qu’à ses propres données.
              </li>
              <li>Les clés secrètes des prestataires ne sont jamais dans l’application : elles restent sur nos serveurs.</li>
              <li>Le code de connexion par e-mail est à usage unique.</li>
              <li>Des limites d’utilisation protègent la Capture vocale et les Réponses intelligentes contre les abus.</li>
            </UL>
            <P>
              Les données ne sont pas chiffrées de bout en bout : Pensif et ses prestataires techniques les traitent pour
              faire fonctionner le service. Aucun système n’est parfaitement sûr ; nous ne pouvons pas garantir une
              sécurité absolue.
            </P>

            <H2 id="transferts">13. Transferts de données hors de l’Union européenne</H2>
            <P>
              Certains prestataires peuvent traiter des données hors de l’Union européenne :
            </P>
            <UL>
              <li>
                <strong>Groq</strong> indique conserver ses données aux États-Unis et encadrer les transferts par des
                clauses contractuelles types ou par le Data Privacy Framework.
              </li>
              <li>
                <strong>OpenAI</strong> indique, dans son addendum de traitement des données, encadrer les transferts
                hors Espace économique européen par des clauses contractuelles types ou une décision d’adéquation.
              </li>
              <li>
                <strong>Supabase</strong> stocke les données du projet en Irlande ; elle indique recourir à des
                sous-traitants pouvant se trouver notamment aux États-Unis et à Singapour, avec des clauses
                contractuelles types.
              </li>
            </UL>

            <H2 id="droits">14. Vos droits</H2>
            <P>
              Selon le RGPD, vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la
              limitation ou l’opposition à leur traitement, leur portabilité et, quand un traitement repose sur votre
              consentement, le retirer. Vous pouvez aussi définir des directives sur le sort de vos données après votre
              décès.
            </P>
            <P>
              Une grande partie de ces droits s’exerce directement dans l’application (modifier ou supprimer une pensée,
              un proche, ou l’ensemble de vos données). Pour le reste, écrivez à{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-violet underline underline-offset-2">
                {contactEmail}
              </a>
              . Nous répondons dans un délai d’un mois ; vous pouvez y demander une copie de vos données. Si vous estimez que vos droits ne sont pas respectés, vous
              pouvez saisir la CNIL (cnil.fr).
            </P>

            <H2 id="tiers">15. Données concernant d’autres personnes</H2>
            <P>
              Pensif vous permet d’enregistrer des informations sur vos proches (prénom, date de naissance, goûts,
              pensées). Vous les enregistrez pour un usage personnel. Nous vous demandons de ne saisir que ce qui est
              utile et de ne pas enregistrer d’informations sensibles sur autrui. Pensif ne contacte jamais vos proches
              et ne leur envoie aucun message à votre place. Si une personne pense que des informations la concernant
              sont enregistrées dans Pensif, elle peut nous écrire à l’adresse de contact.
            </P>

            <H2 id="site">16. Le site pensif-app.fr</H2>
            <UL>
              <li>Le site n’utilise ni cookies, ni outil de mesure d’audience, ni publicité.</li>
              <li>
                Les polices de caractères sont hébergées sur le site lui-même : les pages ne chargent aucun contenu
                depuis un service tiers.
              </li>
              <li>
                Le formulaire de la page Partenaires n’envoie rien de lui-même : il ouvre votre application de messagerie
                avec un e-mail prérempli, que vous envoyez ou non.
              </li>
              <li>
                Comme tout hébergeur, OVH peut enregistrer des journaux techniques d’accès (adresse IP, date, page),
                selon ses propres règles.
              </li>
            </UL>

            <H2 id="modifications">17. Modifications de cette politique</H2>
            <P>
              Nous mettrons cette page à jour quand Pensif ou ses prestataires changent. La date de dernière mise à jour
              figure en haut de la page. En cas de changement important, nous vous en informerons dans l’application ou
              sur le site.
            </P>

            <H2 id="contact">18. Contact</H2>
            <P>
              Pour toute question ou demande concernant vos données :{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-violet underline underline-offset-2">
                {contactEmail}
              </a>
              .
            </P>
            <p className="mt-10 border-t border-black/10 pt-5 text-sm text-ink/50">
              Éditeur : YOMIC (voir la section 1). Hébergeur du site : OVH.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
