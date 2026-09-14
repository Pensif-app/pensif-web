import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { screenshots } from "../config/screenshots";

export default function SmartCapture() {
  return (
    <section className="bg-cream-soft py-24">
      <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="flex justify-center lg:order-1 lg:justify-start">
          <PhoneMockup
            label="Écran Capture"
            src={screenshots.capture}
            className="w-[260px] sm:w-[290px]"
          />
        </Reveal>

        <Reveal delayMs={100} className="lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Capture intelligente
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Dites-le.
            <br />
            Pensif s&rsquo;en souvient.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
            Capture n&rsquo;est pas un simple assistant vocal : chaque
            phrase que vous dites vient alimenter la mémoire relationnelle de
            Pensif, directement dans le profil du bon proche.
          </p>

          <blockquote className="mt-6 max-w-md rounded-2xl bg-white p-4 text-sm italic leading-relaxed text-ink/70 shadow-sm ring-1 ring-black/5">
            &laquo; Yohan aimerait une nouvelle montre et rappelle-moi de lui
            écrire vendredi à 18h. &raquo;
          </blockquote>

          <div className="mt-6 max-w-md space-y-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/10 text-sm">
                ✓
              </span>
              <p className="text-sm font-medium">
                Pensée ajoutée à Yohan
                <span className="block text-xs font-normal text-ink/50">
                  &laquo; Yohan aimerait une nouvelle montre &raquo;
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/10 text-sm">
                🔔
              </span>
              <p className="text-sm font-medium">
                Rappel
                <span className="block text-xs font-normal text-ink/50">
                  Vendredi · 18h
                </span>
              </p>
            </div>
          </div>

          <div className="mt-4 max-w-md rounded-2xl border border-dashed border-ink/15 p-4 text-sm text-ink/60">
            &laquo; Sofia adore les restaurants japonais. &raquo;
            <span className="mt-1 block text-xs text-ink/40">
              → Pensée mémorisée dans le profil de Sofia
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
