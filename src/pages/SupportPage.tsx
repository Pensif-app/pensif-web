import type { ReactNode } from "react";
import {
  IoMailOutline,
  IoMicOutline,
  IoNotificationsOutline,
  IoPhonePortraitOutline,
  IoSyncOutline,
  IoTrashOutline,
} from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactEmail } from "../config/links";

// Page Support (URL de support pour App Store Connect). Chaque conseil décrit un comportement RÉEL de l'app
// (vérifié dans le code) : aucun bouton de synchronisation manuelle, aucune assistance par téléphone ni chat,
// aucune sauvegarde iCloud, aucun export automatique. Ne rien y inventer.

const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Support Pensif")}`;
const link = "font-semibold text-violet underline underline-offset-2";

function Card({ id, icon, title, children }: { id: string; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl bg-white p-5 ring-1 ring-black/5 sm:p-6">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet/10 text-lg text-violet"
        >
          {icon}
        </span>
        <h2 className="text-lg font-extrabold leading-snug text-ink sm:text-xl">{title}</h2>
      </div>
      <div className="mt-3 text-base leading-relaxed text-ink/75">{children}</div>
    </section>
  );
}

function OL({ children }: { children: ReactNode }) {
  return <ol className="mt-3 list-decimal space-y-1.5 pl-5">{children}</ol>;
}

function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-3 list-disc space-y-1.5 pl-5">{children}</ul>;
}

function Mail({ children }: { children?: ReactNode }) {
  return (
    <a href={mailto} className={link}>
      {children ?? contactEmail}
    </a>
  );
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="bg-night px-5 pb-10 pt-12 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-light">Support</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Besoin d’aide avec Pensif&nbsp;?</h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Retrouvez ici les réponses aux problèmes les plus courants ou contactez-nous si vous avez besoin d’aide.
            </p>
          </div>
        </section>

        <section className="bg-cream px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-3xl space-y-5">
            <Card id="nouvel-appareil" icon={<IoPhonePortraitOutline />} title="Retrouver mes données sur un nouvel appareil">
              <p>Si vous avez utilisé « Sécuriser mes données » sur votre ancien iPhone :</p>
              <OL>
                <li>installez Pensif sur le nouvel iPhone ;</li>
                <li>choisissez « J’ai déjà un compte » ;</li>
                <li>saisissez l’adresse e-mail utilisée pour sécuriser vos données ;</li>
                <li>saisissez le code reçu par e-mail ;</li>
                <li>vos données sont alors récupérées.</li>
              </OL>
              <p className="mt-4">
                Si vous n’avez jamais associé d’adresse e-mail à vos données, elles ne peuvent pas être récupérées sur un
                autre appareil. Pour l’avenir, vous pouvez le faire dans Réglages, rubrique « Données et
                confidentialité », avec « Sécuriser mes données ».
              </p>
            </Card>

            <Card id="code-email" icon={<IoMailOutline />} title="Je ne reçois pas le code par e-mail">
              <UL>
                <li>Vérifiez l’adresse e-mail saisie.</li>
                <li>Regardez dans vos courriers indésirables (spam).</li>
                <li>Patientez quelques instants.</li>
                <li>Touchez « Renvoyer le code » pour en recevoir un nouveau.</li>
              </UL>
              <p className="mt-4">
                Si le problème persiste, <Mail>écrivez-nous</Mail>.
              </p>
            </Card>

            <Card id="capture-vocale" icon={<IoMicOutline />} title="La Capture vocale ne fonctionne pas">
              <UL>
                <li>
                  Vérifiez que Pensif a accès au microphone : Réglages de l’iPhone, puis Pensif, puis Microphone.
                </li>
                <li>Maintenez le bouton pendant que vous parlez, puis relâchez-le pour terminer.</li>
                <li>Vérifiez votre connexion Internet : la Capture est traitée en ligne et ne fonctionne pas sans connexion.</li>
                <li>Réessayez dans un endroit où votre voix est bien audible. Un appui très court ou sans voix n’est pas envoyé.</li>
              </UL>
            </Card>

            <Card id="rappels" icon={<IoNotificationsOutline />} title="Les rappels ne s’affichent pas">
              <UL>
                <li>Vérifiez que les notifications sont autorisées pour Pensif : Réglages de l’iPhone, puis Notifications, puis Pensif.</li>
                <li>Dans Pensif, vérifiez que « Rappels activés » est bien coché dans les Réglages.</li>
                <li>Vérifiez que la pensée ou l’événement possède bien une date et une heure de rappel.</li>
                <li>Vérifiez qu’un mode Concentration de l’iPhone ne masque pas les notifications.</li>
              </UL>
              <p className="mt-4">
                Les rappels sont programmés directement sur votre iPhone : ils s’affichent même sans connexion Internet.
              </p>
            </Card>

            <Card id="suppression" icon={<IoTrashOutline />} title="Supprimer mes données ou mon compte">
              <p>Dans Pensif, ouvrez Réglages, puis « Données et confidentialité » :</p>
              <UL>
                <li>
                  si vous n’avez pas associé d’adresse e-mail : <strong>« Supprimer mes données »</strong> ;
                </li>
                <li>
                  si vous avez sécurisé vos données : <strong>« Supprimer mon compte »</strong>.
                </li>
              </UL>
              <p className="mt-4">
                Une connexion Internet est nécessaire. Cette action est définitive. Pour en savoir plus, consultez la{" "}
                <a href="/confidentialite.html#suppression" className={link}>
                  politique de confidentialité
                </a>
                .
              </p>
            </Card>

            <Card id="synchronisation" icon={<IoSyncOutline />} title="Mes données ne semblent pas synchronisées">
              <p>Si vous avez sécurisé vos données avec une adresse e-mail :</p>
              <UL>
                <li>vérifiez votre connexion Internet ;</li>
                <li>fermez puis rouvrez Pensif ;</li>
                <li>vérifiez que vous utilisez le bon compte, c’est-à-dire la bonne adresse e-mail, sur chaque appareil.</li>
              </UL>
              <p className="mt-4">
                Si le problème continue, <Mail>écrivez-nous</Mail>.
              </p>
            </Card>

            <section id="contact" className="scroll-mt-24 rounded-2xl bg-night p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">Vous n’avez pas trouvé la réponse&nbsp;?</h2>
              <p className="mt-3 text-base leading-relaxed text-white/70">Écrivez-nous à :</p>
              <a
                href={mailto}
                className="mt-2 inline-block break-all rounded-xl bg-white/10 px-4 py-3 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                {contactEmail}
              </a>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">Pour nous aider à comprendre votre problème, vous pouvez indiquer :</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/65">
                  <li>le modèle de votre iPhone ;</li>
                  <li>la version d’iOS ;</li>
                  <li>ce que vous étiez en train de faire ;</li>
                  <li>le message affiché à l’écran.</li>
                </ul>
                <p className="mt-3 text-sm font-semibold text-violet-light">
                  Ne nous envoyez jamais votre code de connexion à usage unique. Nous ne vous demanderons ni mot de passe,
                  ni code, ni informations sensibles.
                </p>
              </div>
            </section>

            <p className="pt-2 text-sm text-ink/60">
              <a href="/confidentialite.html" className={link}>
                Politique de confidentialité
              </a>
              <span aria-hidden="true"> · </span>
              <a href="/mentions-legales.html" className={link}>
                Mentions légales
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
