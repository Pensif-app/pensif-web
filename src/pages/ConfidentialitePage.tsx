import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactEmail } from "../config/links";

// Politique de confidentialité de Pensif. Ne décrire ici que des faits confirmés (audit technique, documentations
// officielles des prestataires) ; ne rien y inventer. La date de dernière mise à jour est à renseigner à la mise en ligne.

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
  { id: "transferts", title: "Sous-traitance et transferts hors de l’Union européenne" },
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
              Dernière mise à jour : 21 octobre 2026
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
              Pensif est une application mobile pour iPhone et iPad qui aide à retenir ce qui compte pour ses proches :
              pensées, dates importantes, préférences, rappels. Elle est éditée par YOMIC, SAS au capital social de
              1&nbsp;000,00&nbsp;€, immatriculée sous le numéro SIREN 106&nbsp;580&nbsp;228, dont le siège social est situé
              50 avenue des Champs-Élysées, 75008 Paris, France.
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
                <strong>Vos actions dans le module Cadeaux</strong> : quand vous touchez « J’aime » ou « Pas convaincu »,
                Pensif enregistre l’idée concernée, son thème, le motif de refus que vous choisissez (« Trop cher » ou
                « Je n’aime pas »), la
                date et l’heure de l’action et, pour un « J’aime », la liste des idées affichées à ce moment-là. Ces
                informations sont associées au profil du proche pour adapter les recommandations suivantes ; elles ne
                sont pas envoyées aux services d’IA décrits aux sections 5 et 6. Les idées que vous aimez sont
                regroupées dans « Mes idées » pour ce proche, et l’idée que vous marquez comme « à offrir » est mémorisée
                avec l’année concernée : ces informations restent dans le profil du proche et ne sont pas non plus
                envoyées aux services d’IA.
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
              <li>
                Vos choix d’autorisation pour la Capture vocale et les Réponses intelligentes (la fonction concernée, la
                date de votre choix et la version du texte que vous avez accepté), enregistrés par compte sur cet
                appareil.
              </li>
            </UL>
            <H3>Données échangées avec Expo pour les mises à jour</H3>
            <P>
              Pensif peut recevoir des corrections sans passer par l’App Store. À chaque lancement, l’application demande
              à Expo, le service de mises à jour qu’elle utilise, si une nouvelle version du code est disponible. Cette
              requête contient :
            </P>
            <UL>
              <li>
                un identifiant aléatoire propre à l’installation de l’application sur votre appareil, créé par
                l’application et conservé sur l’appareil ; d’après la documentation d’Expo, il ne dérive ni de votre
                compte ni de votre matériel ;
              </li>
              <li>
                la plateforme (iOS), la version d’exécution de l’application, l’identifiant du projet Pensif et les
                identifiants de la version du code installée ;
              </li>
              <li>
                après une erreur fatale de l’application, un court descriptif technique de cette erreur (heure, nature et
                description, 1&nbsp;024 caractères au plus), joint à la vérification suivante ;
              </li>
              <li>
                comme pour toute connexion Internet, l’adresse IP de votre appareil est visible par le serveur d’Expo.
              </li>
            </UL>
            <P>
              Pensif n’ajoute à cette requête ni votre identifiant de compte, ni votre adresse e-mail, ni vos pensées, vos
              proches ou vos enregistrements audio. Le descriptif d’une erreur fatale est généré automatiquement ; il
              n’est pas conçu pour contenir vos contenus. Cette vérification est automatique : l’application ne propose
              pas de réglage pour la désactiver, et elle ne dépend pas des autorisations « Services d’IA ».
            </P>
            <H3>Ce que Pensif ne collecte pas</H3>
            <P>
              Pensif n’utilise ni outil de mesure d’audience, ni publicité, ni suivi entre applications, et ne demande
              ni localisation, ni accès aux photos ou à l’appareil photo. Le champ de saisie d’une pensée est libre :
              vous décidez de ce que vous y écrivez. Il en va de même de ce que vous dites à voix haute lors d’une
              Capture vocale. Pensif ne demande pas d’informations sensibles (santé, religion, opinions, etc.), mais rien
              n’empêche techniquement d’en saisir ou d’en dicter : nous vous invitons à ne pas le faire.
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
                <strong>Capture vocale et Réponses intelligentes</strong> : ces fonctions envoient des données à des
                prestataires d’intelligence artificielle (Groq et OpenAI, sections 5 et 6). Elles ne fonctionnent que si
                vous les avez autorisées dans l’application : votre consentement est la base de ce traitement. Vous
                pouvez le retirer à tout moment (section 14). L’accès au micro est une autre autorisation, distincte,
                qui se règle dans les réglages de votre appareil.
              </li>
              <li>
                <strong>Liens d’affiliation Amazon</strong> : les idées cadeaux proposent un bouton qui ouvre une page
                Amazon.fr. Ce lien est un lien d’affiliation (section 9) : le traitement correspond à l’intérêt légitime
                de Pensif de financer le service sans vous faire payer plus cher.
              </li>
              <li>
                <strong>Mises à jour de l’application</strong> : vérifier et télécharger les corrections de l’application
                auprès d’Expo (sections 2 et 9), afin de fournir et de maintenir le service.
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
              service d’authentification de Supabase, qui utilise le service de messagerie d’OVH pour l’envoi : votre
              adresse e-mail passe donc par ce service (voir la section 9).
            </P>

            <H2 id="capture">5. Capture vocale</H2>
            <P>
              Avant votre première Capture vocale, Pensif affiche une fenêtre qui précise que votre audio sera transmis
              à Groq pour être transcrit, puis le texte obtenu à OpenAI pour être analysé, et vous demande de l’autoriser
              ou de refuser. Si vous refusez, rien n’est enregistré ni envoyé. Votre choix est mémorisé pour votre compte
              sur cet appareil ; vous pouvez le retirer à tout moment dans Réglages, rubrique « Services d’IA ». Si le
              contenu de ce traitement change, Pensif vous redemandera votre autorisation.
            </P>
            <P>Voici, dans l’ordre, ce qui se passe quand vous utilisez la Capture vocale :</P>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-base leading-relaxed text-ink/75">
              <li>Vous maintenez le bouton : l’application enregistre un fichier audio sur votre appareil.</li>
              <li>
                Au relâchement, l’audio est envoyé à l’infrastructure de Pensif (fonctions Supabase), qui le transmet à
                Groq, prestataire de transcription (modèle whisper-large-v3). Avec l’audio, Pensif n’envoie à Groq que le
                nom « Pensif », qui l’aide à l’orthographier correctement.
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
              <li>
                Pensif n’envoie ni votre identifiant utilisateur ni votre adresse e-mail à Groq ou à OpenAI. Cela ne rend
                pas pour autant ces contenus anonymes : votre voix, ce que vous dites et les noms que vous citez peuvent
                permettre d’identifier une personne (vous ou un tiers), et les prestataires peuvent les traiter comme des
                données personnelles.
              </li>
              <li>
                Aucun filtre automatique n’est appliqué à ce que vous dites : l’audio et le texte transcrit sont transmis
                tels quels aux prestataires. Si vous nommez d’autres personnes ou évoquez des sujets sensibles, ces
                informations leur sont donc transmises aussi.
              </li>
            </UL>
            <H3>Ce que font nos prestataires</H3>
            <P>
              La conservation par un prestataire dépend de ses propres règles, pas de celles de Pensif. Selon la
              documentation officielle de Groq (consultée le 13 octobre 2026), Groq ne conserve pas par défaut les
              données des requêtes d’inférence, dont la transcription audio ; elle peut toutefois en conserver
              temporairement une trace, jusqu’à 30 jours sauf obligation légale de conservation plus longue, pour
              résoudre des problèmes de fiabilité ou enquêter sur un abus présumé. Groq indique conserver ses données
              dans des serveurs situés aux États-Unis. Pour OpenAI, voir la section 6.
            </P>

            <H2 id="reponses">6. Réponses intelligentes</H2>
            <P>
              Avant la première personnalisation, Pensif affiche une fenêtre qui précise les données concernées et leur
              destinataire (OpenAI) et vous demande de l’autoriser ou de refuser. Si vous refusez, aucune donnée n’est
              envoyée et votre brouillon reste inchangé. Vous pouvez retirer votre autorisation à tout moment dans
              Réglages, rubrique « Services d’IA ».
            </P>
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
              sensibles (santé, deuil, addictions, violence) dans le texte des pensées envoyées, le souhait du quiz et le
              texte d’un événement, sans garantie d’exhaustivité ; il ne s’applique pas au prénom ni à la relation. Vos
              pensées étant en texte libre, elles peuvent mentionner d’autres personnes. Pensif n’envoie ni votre
              identifiant utilisateur ni votre adresse e-mail à OpenAI, mais cela ne rend pas ces contenus anonymes : un
              prénom, un souhait ou une pensée peuvent suffire à identifier une personne, et OpenAI peut les traiter comme
              des données personnelles. Le brouillon n’est jamais envoyé à votre proche sans votre action.
            </P>
            <P>
              Selon la documentation officielle d’OpenAI (consultée le 13 octobre 2026), les données envoyées à son API
              ne sont pas utilisées par défaut pour entraîner ses modèles, et les journaux de prévention des abus sont
              conservés jusqu’à 30 jours, sauf obligation légale de conservation plus longue. Ces règles valent aussi
              pour le texte envoyé lors d’une Capture vocale (section 5).
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
              Les rappels sont programmés localement sur votre appareil. Pensif ne demande pas d’identifiant de
              notification à Apple et n’en envoie aucun à ses serveurs : aucun serveur Pensif n’envoie de notification
              à distance. Le titre et le texte d’un rappel viennent de votre pensée ou de l’anniversaire concerné et
              peuvent apparaître sur l’écran verrouillé, selon vos réglages iOS. Vous pouvez désactiver les rappels dans
              Pensif ou dans les réglages de l’appareil.
            </P>

            <H2 id="prestataires">9. Hébergement et prestataires</H2>
            <UL>
              <li>
                <strong>Supabase</strong> : authentification, base de données et fonctions serveur de Pensif. Le projet
                Pensif est hébergé dans la région eu-west-1 (Irlande). Selon Supabase, la région choisie détermine où
                sont stockées les données principales du projet ; Supabase agit comme sous-traitant et s’appuie
                elle-même sur des sous-traitants dont elle publie la liste.
              </li>
              <li>
                <strong>Groq</strong> : transcription de la Capture vocale (section 5), uniquement si vous l’avez
                autorisée.
              </li>
              <li>
                <strong>OpenAI</strong> : structuration de la Capture et Réponses intelligentes (sections 5 et 6),
                uniquement si vous les avez autorisées.
              </li>
              <li>
                <strong>Expo</strong> : service de distribution des mises à jour de l’application. À chaque lancement, la
                vérification des mises à jour lui transmet les données décrites à la section 2 (identifiant aléatoire
                d’installation, plateforme, version, projet et, éventuellement, le descriptif d’une erreur fatale). Cette
                vérification est indépendante de vos contenus et de vos autorisations « Services d’IA ».
              </li>
              <li>
                <strong>Amazon</strong> : destinataire des liens d’affiliation du module Cadeaux, voir ci-dessous. Amazon
                n’est pas un sous-traitant de Pensif.
              </li>
              <li>
                <strong>Apple</strong> : distribution de l’application (App Store, TestFlight) et fonctions du système
                (micro, notifications, sélecteur de contacts), soumises aux règles d’Apple.
              </li>
              <li>
                <strong>OVH</strong> : hébergement du site pensif-app.fr, et service de messagerie utilisé pour envoyer
                les codes de connexion par e-mail (votre adresse e-mail et le code transitent par ce service).
              </li>
            </UL>
            <H3>Liens d’affiliation Amazon</H3>
            <P>
              Dans le module Cadeaux, chaque idée peut proposer un bouton « Voir sur Amazon ». Pensif participe au
              Programme Partenaires d’Amazon : ce lien contient l’identifiant de partenaire de Pensif, et Pensif peut
              percevoir une commission sur les achats réalisés après un clic, sans surcoût pour vous.
            </P>
            <UL>
              <li>
                <strong>Quand le lien est ouvert</strong> : uniquement quand vous touchez le bouton. Il s’ouvre dans votre
                navigateur ou dans l’application Amazon, jamais dans une fenêtre intégrée à Pensif.
              </li>
              <li>
                <strong>Ce que contient le lien</strong> : l’identifiant du produit sur Amazon.fr et l’identifiant de
                partenaire de Pensif. Il ne contient ni votre identifiant Pensif, ni votre adresse e-mail, ni le prénom
                ou les goûts de votre proche.
              </li>
              <li>
                <strong>Ce qu’Amazon reçoit</strong> : dès que la page s’ouvre, Amazon traite votre visite (par exemple
                votre adresse IP et des informations sur votre appareil, éventuellement via des cookies) selon sa propre
                politique de confidentialité, en tant que responsable de traitement. Pensif ne contrôle pas ce traitement.
              </li>
              <li>
                <strong>Ce que Pensif reçoit</strong> : des rapports de ventes et de commissions fournis par le Programme
                Partenaires, regroupés par produit, qui n’identifient pas les acheteurs. Pensif n’a accès ni à votre compte Amazon, ni à vos moyens de paiement, ni à votre commande
                en tant que telle.
              </li>
            </UL>
            <P>
              Pensif ne suit pas ce que vous faites après le clic. Les idées cadeaux sont déterminées par les réponses au
              quiz du proche et par votre budget, sur votre appareil ; la présence d’un lien d’affiliation ne les envoie
              à aucun service d’IA.
            </P>
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
                <strong>Vos choix d’autorisation (Services d’IA)</strong> : conservés sur votre appareil, par compte,
                jusqu’à leur retrait, la suppression de vos données ou la désinstallation de l’application.
              </li>
              <li>
                <strong>Données de vérification des mises à jour (Expo)</strong> : conservées selon les règles d’Expo. Sa
                politique de confidentialité (mise à jour le 21 octobre 2025) n’indique pas de durée précise : elle prévoit
                seulement de conserver les données le temps raisonnablement nécessaire à ses finalités.
              </li>
              <li>
                <strong>Journaux techniques et de prévention des abus chez les prestataires</strong> : selon leurs
                propres règles : jusqu’à 30 jours chez Groq et OpenAI d’après leur documentation officielle, sauf
                obligation légale de conservation plus longue ; chez Supabase, la durée dépend de l’offre utilisée et
                Supabase indique stocker ces journaux dans des centres de données situés dans l’Union européenne.
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
              données pour la durée indiquée à la section 10. Se déconnecter (Réglages) ne supprime rien sur nos
              serveurs : vous retrouvez vos données avec « J’ai déjà un compte ».
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

            <H2 id="transferts">13. Sous-traitance et transferts hors de l’Union européenne</H2>
            <H3>Contrats de sous-traitance</H3>
            <P>
              Supabase, Groq et OpenAI traitent des données pour le compte de Pensif : ce sont des sous-traitants. Chacun
              publie un addendum de traitement des données. Voici ce que prévoient, sur ce point, les documents publics de
              Groq et de Supabase, consultés le 13 octobre 2026 :
            </P>
            <UL>
              <li>
                <strong>Groq</strong> (addendum pour GroqCloud, en vigueur le 15 octobre 2025) : Groq traite les données
                pour fournir le service, sur instruction du client, et ne les vend ni ne les partage ; le client autorise
                de façon générale le recours à des sous-traitants ultérieurs, dont la liste est publiée, et Groq reste
                responsable de leur exécution.
              </li>
              <li>
                <strong>Supabase</strong> (addendum, version du 1er août 2026) : Supabase agit comme sous-traitant ; le
                client autorise de façon générale le recours aux sous-traitants ultérieurs de sa liste publique, avec des
                contrats écrits, un préavis en cas de changement et un droit d’objection.
              </li>
              <li>
                <strong>OpenAI</strong> publie, de la même manière, un addendum de traitement des données et une liste de
                sous-traitants ultérieurs.
              </li>
            </UL>
            <P>
              Ces documents émanent des prestataires, pas de Pensif : en cas de modification, c’est leur version en
              vigueur qui s’applique. Pour Expo (mises à jour de l’application), Pensif s’appuie sur la politique de
              confidentialité publiée par Expo.
            </P>
            <H3>Transferts hors de l’Union européenne</H3>
            <P>
              Certains prestataires peuvent traiter des données hors de l’Union européenne. Voici les mécanismes de
              transfert que leurs documents publics annoncent :
            </P>
            <UL>
              <li>
                <strong>Groq</strong> indique conserver ses données aux États-Unis. Son addendum prévoit les clauses
                contractuelles types de la Commission européenne, réputées signées, dans la mesure où la loi l’exige, par
                l’acceptation du contrat, et indique que Groq s’assure qu’un mécanisme de transfert licite existe. Ces
                documents ne mentionnent pas le Data Privacy Framework.
              </li>
              <li>
                <strong>OpenAI</strong> publie son propre addendum de traitement des données, qui précise les mécanismes
                de transfert qu’elle applique. Pensif n’en reproduit pas ici les clauses.
              </li>
              <li>
                <strong>Supabase</strong> stocke la base de données, l’authentification et les sauvegardes du projet dans
                la région choisie (ici l’Irlande). Elle indique ne traiter hors de cette région que quatre catégories
                limitées (informations de compte, demandes de support, données d’usage et journaux, diffusion de
                contenu), et transférer des données vers Singapour et les États-Unis dans le cadre de clauses
                contractuelles types, que son addendum rend applicables à l’acceptation du contrat.
              </li>
              <li>
                <strong>Amazon</strong> traite votre visite après le clic sur un lien d’affiliation selon sa propre
                politique de confidentialité, en tant que responsable de traitement : ses emplacements de traitement et ses
                mécanismes de transfert relèvent de ses documents, pas de Pensif.
              </li>
              <li>
                <strong>Expo</strong> indique, dans sa politique de confidentialité, pouvoir transférer et stocker des
                données sur des serveurs situés hors de votre pays de résidence, sans nommer d’emplacement précis. Elle
                indique adhérer au Data Privacy Framework entre l’UE et les États-Unis (avec les extensions pour le Royaume-Uni et la
                Suisse) et recourir à des clauses contractuelles types dans la mesure requise par la loi.
              </li>
            </UL>
            <P>
              Ces mécanismes sont ceux annoncés par les prestataires. Pensif ne détient pas de certification propre sur
              ces transferts et n’en promet aucune.
            </P>

            <H2 id="droits">14. Vos droits</H2>
            <P>
              Selon le RGPD, vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la
              limitation ou l’opposition à leur traitement, leur portabilité et, quand un traitement repose sur votre
              consentement, le retirer. Vous pouvez aussi définir des directives sur le sort de vos données après votre
              décès.
            </P>
            <P>
              <strong>Retirer votre autorisation pour la Capture vocale ou les Réponses intelligentes.</strong> Vous le
              faites à tout moment dans Réglages, rubrique « Services d’IA ». Ce retrait a trois effets distincts :
            </P>
            <UL>
              <li>
                <strong>Envois futurs</strong> : ils sont arrêtés dès le retrait. Pensif ne transmet plus de données à ces
                prestataires pour cette fonction et vous redemandera votre autorisation si vous la réutilisez. Un envoi
                déjà parti au moment du retrait peut aller à son terme.
              </li>
              <li>
                <strong>Traitements passés</strong> : le retrait n’a pas d’effet rétroactif et ne remet pas en cause les
                traitements réalisés avant lui. Pensif ne peut pas rappeler ce qui a déjà été transmis ; ce que les
                prestataires ont reçu reste soumis à leurs règles de conservation (section 10).
              </li>
              <li>
                <strong>Effacement</strong> : retirer une autorisation ne supprime pas vos données. Pour les effacer,
                supprimez vos pensées ou vos proches, ou l’ensemble de vos données (section 11), ou écrivez-nous. Pour les
                traces que des prestataires pourraient conserver, notre réponse portera sur ce que leurs conditions
                permettent : nous ne pouvons pas promettre un effacement immédiat chez eux.
              </li>
            </UL>
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
              pensées). YOMIC, en tant que responsable du traitement (section 1), est responsable de la protection de ces
              données comme de celles qui vous concernent : sécurité, accès limité, durées de conservation, choix des
              prestataires. Vous restez libre de ce que vous saisissez ; nous vous invitons simplement à ne saisir que ce
              qui est utile et à éviter les informations sensibles sur autrui.
            </P>
            <P>
              Des informations sur vos proches ne sont transmises à un service d’intelligence artificielle que dans les cas
              décrits aux sections 5 et 6, après votre autorisation et pour la fonction demandée. Pensif ne contacte jamais
              vos proches et ne leur envoie aucun message à votre place. Si une personne pense que des informations la
              concernant sont enregistrées dans Pensif, elle peut nous écrire à l’adresse de contact pour exercer ses
              droits (accès, rectification, effacement).
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
              sur le site. Si le contenu d’un traitement par intelligence artificielle change (données envoyées ou
              destinataires), l’application vous redemandera votre autorisation avant tout nouvel envoi.
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
