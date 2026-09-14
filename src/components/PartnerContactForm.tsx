import { useState, type FormEvent } from "react";
import { contactEmail } from "../config/links";

type FormState = {
  company: string;
  contact: string;
  email: string;
  website: string;
  productType: string;
  message: string;
};

const initialState: FormState = {
  company: "",
  contact: "",
  email: "",
  website: "",
  productType: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-violet focus:outline-none focus:ring-1 focus:ring-violet";

// Pas de backend pour cette landing page : la demande s'envoie via le
// client mail de l'utilisateur (mailto), pré-rempli avec les infos du
// formulaire. À remplacer plus tard par un vrai service si besoin.
export default function PartnerContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Demande de partenariat — ${form.company || "Sans nom"}`;
    const body = [
      `Entreprise : ${form.company}`,
      `Contact : ${form.contact}`,
      `E-mail : ${form.email}`,
      `Site web : ${form.website}`,
      `Type de produits/services : ${form.productType}`,
      "",
      "Message :",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-ink/70">
            Nom de l&rsquo;entreprise
          </span>
          <input
            required
            className={fieldClass}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-ink/70">
            Nom du contact
          </span>
          <input
            required
            className={fieldClass}
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-ink/70">
            E-mail professionnel
          </span>
          <input
            required
            type="email"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-ink/70">
            Site web
          </span>
          <input
            type="url"
            placeholder="https://"
            className={fieldClass}
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-ink/70">
          Type de produits/services
        </span>
        <input
          required
          placeholder="Ex : bijoux, expériences, fleurs…"
          className={fieldClass}
          value={form.productType}
          onChange={(e) => update("productType", e.target.value)}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-ink/70">
          Message
        </span>
        <textarea
          required
          rows={4}
          className={fieldClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-xl bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet/90 sm:w-auto"
      >
        Envoyer ma demande
      </button>

      <p className="text-xs text-ink/40">
        L&rsquo;envoi ouvre votre client mail habituel avec les informations
        pré-remplies, à destination de {contactEmail}.
      </p>
    </form>
  );
}
