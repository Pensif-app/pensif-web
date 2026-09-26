export type NavLink = {
  label: string;
  href: string;
};

// Liens préfixés par "/" pour rester valides depuis n'importe quelle page
// du site (accueil ou pages secondaires comme /partenaires.html).
export const navLinks: NavLink[] = [
  { label: "Fonctionnalités", href: "/#accueil" },
  { label: "Capture", href: "/#capture" },
  { label: "FAQ", href: "/#faq" },
];
