import { IoArrowDown, IoChatbubbleEllipsesOutline, IoCheckmarkCircle, IoMicOutline, IoNotificationsOutline } from "react-icons/io5";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

// Séquence : je dis → Pensif structure → je valide. Exemple illustratif (aucun flux réel branché).
const stepLabel = "flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-violet-light/50";
const resultCard = "flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10";

export default function SmartCapture() {
  return (
    <section id="capture" className="snap-screen capture-bg py-8 lg:py-6">
      <div className="mx-auto grid w-full max-w-[1150px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex justify-center">
          <div className="accueil-phone">
            <PhoneMockup label="Écran Capture" src={screenshots.capture} className="phone-w" />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <p className="inline-flex items-center rounded-full border border-violet-light/35 bg-violet/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-light">
            Capture intelligente
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
            <span className="accueil-line accueil-line--title block w-fit">Dites-le.</span>
            <span className="accueil-line accueil-line--title block w-fit lg:whitespace-nowrap">Pensif s&rsquo;en souvient.</span>
          </h2>
          <p className="capture-desc mt-6 max-w-lg font-hand text-xl leading-[1.8] text-white/75 lg:mt-8 xl:text-2xl">
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Dites naturellement ce que vous voulez retenir.</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">Pensif transforme votre capture en pensée, rappel</span>{" "}
            <span className="accueil-line accueil-line--desc lg:block lg:w-fit lg:whitespace-nowrap">ou information liée à un proche.</span>
          </p>

          <div className="capture-flow mt-8 max-w-lg space-y-2.5 lg:mt-9">
            <p className={stepLabel}>Vous dites</p>
            <blockquote className="flex items-start gap-3 rounded-3xl bg-white/[0.03] px-5 py-4 text-sm italic leading-relaxed text-white/80 ring-1 ring-white/[0.05]">
              <IoMicOutline size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-violet-light/45" />
              <span>
                &laquo;&nbsp;Yohan aimerait une nouvelle montre et rappelle-moi de lui écrire vendredi à 18&nbsp;h.&nbsp;&raquo;
              </span>
            </blockquote>

            <p className={`${stepLabel} pt-1`}>
              <IoArrowDown size={11} aria-hidden="true" className="opacity-70" />
              Pensif structure
            </p>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className={resultCard}>
                <IoChatbubbleEllipsesOutline size={20} aria-hidden="true" className="shrink-0 text-violet-light" />
                <p className="text-sm font-medium text-white">Pensée liée à Yohan</p>
              </div>
              <div className={resultCard}>
                <IoNotificationsOutline size={20} aria-hidden="true" className="shrink-0 text-violet-light" />
                <p className="text-sm font-medium text-white">Rappel vendredi · 18&nbsp;h</p>
              </div>
            </div>

            <p className={`${stepLabel} pt-1`}>
              <IoArrowDown size={11} aria-hidden="true" className="opacity-70" />
              Vous validez
            </p>
            <p className="flex items-center gap-2.5 text-sm text-white/70">
              <IoCheckmarkCircle size={18} aria-hidden="true" className="shrink-0 text-violet-light" />
              Vous vérifiez toujours le résultat avant de l&rsquo;enregistrer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
