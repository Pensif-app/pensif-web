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
      "Pensif est conçu pour iPhone et Android. Les boutons App Store et Google Play de cette page vous permettront de télécharger la version correspondant à votre appareil dès sa disponibilité.",
  },
];
