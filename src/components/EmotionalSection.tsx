import Reveal from "./Reveal";

// PLACEHOLDER — remplacer le fond par une vraie photo chaleureuse
// (proches, relation humaine) une fois l'asset fourni.
export default function EmotionalSection() {
  return (
    <section
      className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-night px-5 py-20 sm:px-8"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 30% 20%, rgba(138,92,246,0.25), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255,84,112,0.15), transparent 50%), linear-gradient(135deg, #1d1a3a, #0c0a1f 70%)",
      }}
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-2xl font-medium italic leading-relaxed text-white sm:text-3xl">
          &laquo; Être attentionné, c&rsquo;est souvent se souvenir
          d&rsquo;un petit détail au bon moment. &raquo;
        </p>
      </Reveal>
    </section>
  );
}
