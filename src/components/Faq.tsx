import { useState } from "react";
import { faqItems } from "../config/faq";
import Reveal from "./Reveal";

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-semibold sm:text-base">{question}</span>
        <span
          className={`shrink-0 text-xl text-violet transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-ink/60">
            {answer || "Réponse à venir."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Vos questions, nos réponses
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-12">
          {faqItems.map((item) => (
            <FaqRow key={item.question} {...item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
