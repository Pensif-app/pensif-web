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

export const footerLinks: NavLink[] = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "FAQ", href: "/#faq" },
  { label: "Confidentialité", href: "/confidentialite.html" },
  { label: "Contact", href: "/contact.html" },
  { label: "Partenaires", href: "/partenaires.html" },
];
