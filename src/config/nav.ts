export type NavLink = {
  label: string;
  href: string;
};

// Liens préfixés par "/" pour rester valides depuis n'importe quelle page
// du site (accueil ou pages secondaires comme /partenaires.html).
export const navLinks: NavLink[] = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "FAQ", href: "/#faq" },
];

// Confidentialité et Contact ne sont pas ici : trop peu de contenu pour
// justifier une page dédiée, elles s'ouvrent en petit panneau déroulant
// directement dans le footer (voir Footer.tsx).
export const footerLinks: NavLink[] = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "FAQ", href: "/#faq" },
  { label: "Partenaires", href: "/partenaires.html" },
];
