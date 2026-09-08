import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLang, type Lang } from "./LanguageProvider";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];

/**
 * Segmented English / العربية switch. Styled to sit next to <ThemeToggle />
 * in the header using the same glass-panel language as the rest of the site.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / اللغة"
      className={cn(
        "glass-panel relative flex items-center gap-0.5 rounded-full border border-foreground/10 p-1 shadow-md",
        className
      )}
    >
      {OPTIONS.map((option) => {
        const isActive = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            aria-pressed={isActive}
            lang={option.value}
            className={cn(
              "relative z-10 cursor-pointer rounded-full px-3 py-1 text-xs font-bold transition-colors duration-300",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="language-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-600 via-primary to-sky-500 shadow-[0_0_14px_rgba(139,92,246,0.45)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageToggle;
