import PensifLogo from "./PensifLogo";
import StoreBadges from "./StoreBadges";
import Reveal from "./Reveal";

export default function DownloadCta() {
  return (
    <section className="bg-cream px-5 pb-24 sm:px-8">
      <Reveal className="mx-auto flex max-w-page flex-col items-center gap-5 rounded-3xl bg-cream-soft px-8 py-14 text-center ring-1 ring-black/5">
        <PensifLogo size={88} />
        <h2 className="max-w-lg text-3xl font-extrabold sm:text-4xl">
          Téléchargez Pensif
        </h2>
        <p className="max-w-md text-base text-ink/60">
          Gardez plus facilement en mémoire ce qui compte pour ceux qui
          comptent.
        </p>
        <StoreBadges className="mt-2 justify-center" />
      </Reveal>
    </section>
  );
}
