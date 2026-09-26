export type FaqItem = {
  question: string;
  answer: string;
};

// Centralise les questions/réponses affichées dans la FAQ.
// Réponses officielles validées par Pensif.
export const faqItems: FaqItem[] = [
  {
    question: "Pensif est-il gratuit ?",
    answer:
      "Oui. Pensif peut être téléchargé et utilisé gratuitement. Notre objectif est de vous aider à mieux vous souvenir de ce qui compte pour vos proches, simplement et sans abonnement obligatoire.",
  },
  {
    question: "Comment Pensif m'aide-t-il à ne pas oublier les anniversaires ?",
    answer:
      "Ajoutez la date d'anniversaire de vos proches et Pensif se charge de la garder en mémoire. Vous pouvez être prévenu à l'avance pour avoir le temps d'y penser, de préparer une attention ou de trouver le bon cadeau.",
  },
  {
    question: "Comment fonctionnent les recommandations de cadeaux ?",
    answer:
      "Pensif s'appuie sur ce que vous connaissez déjà de votre proche : ses goûts, ses centres d'intérêt, les réponses à son quiz et les pensées que vous avez enregistrées à son sujet. À l'approche d'un moment important, ces informations permettent de vous proposer des idées cadeaux plus pertinentes et personnalisées.",
  },
  {
    question: "Mes données et celles de mes proches sont-elles privées ?",
    answer:
      "Vos informations sont associées à votre compte et ne sont pas publiques. Elles servent au fonctionnement de Pensif et à la personnalisation de votre expérience. Pour connaître précisément la façon dont les données sont collectées, utilisées et protégées, consultez notre politique de confidentialité.",
  },
  {
    question: "La Capture intelligente nécessite-t-elle Internet ?",
    answer:
      "Oui. La Capture intelligente a besoin d'une connexion Internet pour comprendre ce que vous dites et transformer votre dictée en pensées, dates ou rappels. Si vous êtes hors ligne, vous pouvez toujours ajouter une pensée manuellement.",
  },
  {
    question: "Puis-je utiliser Pensif sans connexion ?",
    answer:
      "Oui, pour une grande partie de l'application. Vos données déjà présentes restent accessibles et vous pouvez effectuer certaines actions hors ligne ; Pensif les synchronisera lorsque la connexion reviendra. Les fonctionnalités nécessitant un traitement en ligne, comme la Capture intelligente, restent indisponibles sans Internet.",
  },
  {
    question: "Sur quelles plateformes Pensif est-il disponible ?",
    answer:
      "Pensif est actuellement disponible sur iPhone via l'App Store. Une version Android pourra être proposée ultérieurement.",
  },
  {
    question: "Puis-je modifier ce que Pensif a compris ?",
    answer:
      "Oui. Après une Capture, Pensif vous montre ce qu'il a compris : vous pouvez corriger le texte, le proche associé, la date et le rappel avant d'enregistrer.",
  },
  {
    // Wording volontairement limité à ce qui est établi : AUCUNE affirmation sur la suppression,
    // la durée de conservation, le stockage ou le chiffrement chez un fournisseur tant que
    // l'audit STT n'est pas finalisé.
    question: "Que devient ma voix après une Capture ?",
    answer:
      "L'audio de votre Capture sert au traitement de celle-ci : Pensif en tire une proposition de pensée, qu'il vous affiche pour validation avant tout enregistrement.",
  },
  {
    // Aligné sur le flow réel (AuthGateScreen / SettingsScreen / authRepo) : compte anonyme par défaut
    // ("Commencer"), récupérable seulement après "Sécuriser mes données" (e-mail + code) dans les Réglages.
    question: "Comment retrouver mes données sur un nouvel iPhone ?",
    answer:
      "Vos données sont sauvegardées et synchronisées avec votre compte. Pour pouvoir les retrouver sur un nouvel iPhone, sécurisez d'abord votre compte avec votre adresse e-mail depuis les Réglages (« Sécuriser mes données »). Sur le nouvel iPhone, choisissez ensuite « J'ai déjà un compte », saisissez cette adresse e-mail puis le code reçu par e-mail. Sans cette étape, un compte créé simplement avec « Commencer » ne peut pas être retrouvé sur un autre appareil.",
  },
];
