import Footer from "./Footer";
import PensifLogo from "./PensifLogo";
import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

// Dernière section plein écran : CTA de téléchargement (haut) + footer complet (bas).
// Google Play retiré tant qu'Android n'est pas disponible.
export default function FinalSection() {
  return (
    <section
      id="telecharger"
      className="snap-screen snap-screen--flow flex-col items-stretch justify-between bg-footer"
    >
      <div className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <PensifLogo size={88} />
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
            <span className="block">Gardez ce qui compte</span>
            <span className="block">à portée de mémoire.</span>
          </h2>
          <StoreBadges appStoreOnly className="mt-2 justify-center" />
        </Reveal>
      </div>
      <Footer />
    </section>
  );
}
