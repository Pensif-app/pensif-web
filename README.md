# Pensif — Site vitrine

Landing page one-page du site officiel de l'application mobile Pensif.
Projet **indépendant** de l'app mobile (React Native/Expo) : aucune
dépendance partagée, aucun backend, aucune base de données.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (thème CSS-first via `@theme` dans `src/index.css`)
- Aucune librairie de routing : page unique avec ancres (`#fonctionnalites`, etc.)
  + une page annexe (`partenaires.html`). Confidentialité/Contact n'ont pas
  de page dédiée : ce sont de petits panneaux dépliants dans le footer
  (voir `src/components/Footer.tsx`).

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## Arborescence

```
index.html                 Page principale (entrée Vite)
partenaires.html           Page programme partenaire (+ formulaire mailto)
src/
  components/
    Header.tsx, Hero.tsx, Features.tsx, SmartCapture.tsx,
    HowItWorks.tsx, EmotionalSection.tsx, Faq.tsx, DownloadCta.tsx,
    Footer.tsx               → une section = un composant
    PhoneMockup.tsx           → cadre téléphone réutilisable
    StoreBadges.tsx           → badges App Store / Google Play
    PensifLogo.tsx            → logo (placeholder, voir ci-dessous)
    Reveal.tsx                → wrapper animation fade/translate au scroll
  config/
    links.ts    → URLs App Store / Google Play / réseaux sociaux / email
    nav.ts      → liens de navigation (header + footer)
    faq.ts      → questions/réponses FAQ (centralisées)
  hooks/
    useScrollReveal.ts        → IntersectionObserver, respecte prefers-reduced-motion
```

## Éléments à remplacer avec les vrais assets

Tout ce qui suit est un **placeholder clairement identifié** dans le code
(commentaires `PLACEHOLDER`), pas une version définitive :

1. **Logo Pensif** (`src/components/PensifLogo.tsx`) — recréation approximative
   en SVG. À remplacer par le vrai fichier logo dès qu'il est fourni (idéalement
   un SVG, à importer directement dans `Header.tsx`, `Footer.tsx` et `DownloadCta.tsx`).
2. **Screenshots de l'app** (`src/components/PhoneMockup.tsx`) — actuellement
   un cadre de téléphone vide avec texte "Capture d'écran à intégrer". Le
   composant accepte déjà une prop `src` : il suffit de passer le chemin
   du vrai screenshot (`<PhoneMockup src="/screenshots/pensees.png" label="..." />`)
   dans `Hero.tsx` (écrans Pensées + Calendrier) et `SmartCapture.tsx` (écran Capture).
3. **Badges App Store / Google Play** (`src/components/StoreBadges.tsx`) —
   boutons stylisés avec icônes génériques (pas les vrais logos, pour respecter
   les guidelines de marque Apple/Google). À remplacer idéalement par les
   badges officiels téléchargés depuis les portails développeurs Apple/Google.
4. **Image de la section émotionnelle** (`src/components/EmotionalSection.tsx`) —
   actuellement un dégradé violet/nuit. À remplacer par une vraie photo
   chaleureuse (proches, relation humaine) une fois fournie.
5. **Favicon / OG image** (`public/favicon.svg`, `public/og-image.png` référencée
   dans `index.html`) — favicon par défaut de Vite, og-image absente. À fournir.
6. **Contenu FAQ** (`src/config/faq.ts`) — questions en place, réponses vides
   intentionnellement (pas de réponse produit inventée).
7. **Confidentialité** (panneau dans `Footer.tsx`) — résumé minimal en
   attendant une politique de confidentialité complète. À noter : si
   l'app est soumise sur l'App Store/Google Play, ces stores exigent une
   URL publique dédiée pour la politique de confidentialité — un panneau
   dans le footer ne suffira pas à ce moment-là, il faudra une vraie page.

## À brancher dès que disponible

- `src/config/links.ts` : `storeLinks.appStore`, `storeLinks.googlePlay`
  (actuellement `#`), `socialLinks` (réseaux sociaux, vides = masqués
  automatiquement dans le footer), `contactEmail`.

## Accessibilité / perf / SEO déjà en place

- Balises sémantiques (`header`, `main`, `section`, `footer`, `nav`)
- Meta description + Open Graph + Twitter Card dans `index.html`
- `prefers-reduced-motion` respecté (animations désactivées si demandé par l'OS)
- Smooth scroll natif CSS (`scroll-behavior: smooth`)
- Aucun débordement horizontal testé sur mobile (375px), tablette et desktop
