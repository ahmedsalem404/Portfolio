import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, SquarePen, PhoneCall, Loader2 } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";
import { useLang } from "@/i18n/LanguageProvider";
import { useCopy } from "@/lib/useCopy";
import { toast } from "@/hooks/use-toast";

const EMAIL = "delov.ahmed@gmail.com";
const PHONE = "+967779201815";

/**
 * Web3Forms access key. It ships inside the client bundle by design — it only
 * routes submissions to Ahmed's inbox and grants nothing else. Kept in
 * .env.local (gitignored) so it stays out of the source tree.
 */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export const ContactSection = () => {
  const { t } = useLang();
  const copy = useCopy();
  const [isSending, setIsSending] = useState(false);

  const handleCopy = async (value: string, successMessage: string) => {
    if (await copy(value)) {
      toast.success({ title: successMessage, duration: 2500 });
    } else {
      toast.warning({
        title: t.contact.copyFailedTitle,
        description: t.contact.copyFailedBody,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: only bots fill this hidden field.
    if (data.get("botcheck")) return;

    if (!WEB3FORMS_KEY) {
      console.warn(
        "[ContactSection] VITE_WEB3FORMS_KEY is missing — the form cannot send. " +
          "Add it to portfolio/.env.local and restart the dev server."
      );
      toast.destructive({
        title: t.contact.form.notConfiguredTitle,
        description: t.contact.form.notConfiguredBody,
      });
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from your portfolio — ${data.get("name")}`,
          from_name: "Ahmed Fadhl Portfolio",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || `HTTP ${response.status}`);
      }

      toast.success({
        title: t.contact.form.successTitle,
        description: t.contact.form.successBody,
      });
      form.reset();
    } catch (error) {
      console.error("[ContactSection] submit failed:", error);
      toast.destructive({
        title: t.contact.form.errorTitle,
        description: t.contact.form.errorBody,
      });
    } finally {
      setIsSending(false);
    }
  };

  const rowClasses =
    "flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group text-start w-full";
  const iconWrapClasses =
    "w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform shrink-0";
  const sideActionClasses =
    "p-2 rounded-full text-muted-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors shrink-0";

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {t.contact.titleLead}{" "}
                <span className="text-gradient-primary">{t.contact.titleAccent}</span>
              </h2>
              <p className="text-muted-foreground">
                {t.contact.body}
              </p>
            </div>

            <div className="space-y-6">
              {/* Email — click copies; the side icon opens a mail app */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(EMAIL, t.contact.copiedEmail)}
                  aria-label={t.contact.copyEmailAria}
                  title={t.contact.copyEmailAria}
                  className={rowClasses}
                >
                  <div className={iconWrapClasses}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <span dir="ltr" className="font-medium">{EMAIL}</span>
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={t.contact.composeAria}
                  title={t.contact.composeAria}
                  className={sideActionClasses}
                >
                  <SquarePen className="w-4 h-4" />
                </a>
              </div>

              {/* Phone — click copies; the side icon dials */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(PHONE, t.contact.copiedPhone)}
                  aria-label={t.contact.copyPhoneAria}
                  title={t.contact.copyPhoneAria}
                  className={rowClasses}
                >
                  <div className={iconWrapClasses}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <span dir="ltr" className="font-medium">{t.contact.phoneDisplay}</span>
                </button>
                <a
                  href={`tel:${PHONE}`}
                  aria-label={t.contact.callAria}
                  title={t.contact.callAria}
                  className={sideActionClasses}
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>

              {/* Location — plain text, so no pointer/hover affordance */}
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">{t.common.location}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-muted-foreground mb-1.5">{t.contact.form.nameLabel}</label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-muted-foreground mb-1.5">{t.contact.form.emailLabel}</label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-muted-foreground mb-1.5">{t.contact.form.messageLabel}</label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {/* Honeypot — hidden from people, tempting to bots */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12"
              >
                {isSending ? (
                  <>
                    {t.contact.form.sending}
                    <Loader2 className="w-4 h-4 ms-1 animate-spin" />
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="w-4 h-4 ms-1 rtl:-scale-x-100" />
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
