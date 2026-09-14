import PhoneMockup from "./PhoneMockup";
import StoreBadges from "./StoreBadges";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-night pb-24 pt-16 sm:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-page grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">
            Petites attentions. Grands liens.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl xl:text-6xl">
            Pensez à eux.
            <br />
            <span className="text-violet-light">Pensif pense au reste.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Anniversaires, envies, idées cadeaux, petites préférences&hellip;
            Pensif garde en mémoire ce qui compte pour vos proches et vous le
            rappelle au bon moment.
          </p>
          <StoreBadges className="mt-8" />
        </Reveal>

        <Reveal delayMs={150} className="relative flex justify-center lg:justify-end">
          <p className="absolute -top-10 right-2 hidden max-w-[10rem] text-right text-xs italic leading-snug text-violet-light/70 xl:block">
            Toujours là pour vous rappeler l&rsquo;essentiel
          </p>
          <div className="flex items-end gap-5 sm:gap-6">
            <PhoneMockup
              label="Écran Pensées / profil proche"
              src={screenshots.pensees}
              tilt={-4}
              className="mt-10 w-[260px] sm:w-[300px] lg:w-[280px] xl:w-[320px]"
            />
            <PhoneMockup
              label="Écran Calendrier / anniversaires"
              src={screenshots.calendrier}
              tilt={4}
              className="w-[230px] sm:w-[260px] lg:w-[245px] xl:w-[280px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
