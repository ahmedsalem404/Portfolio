import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dict } from "./dictionary";

export type Lang = "en" | "ar";

const STORAGE_KEY = "lang";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  isRTL: boolean;
  t: Dict;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Read the persisted choice. Defaults to English, matching the inline
 *  bootstrap script in index.html that sets dir/lang before React boots. */
const readStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  // Mirrors how ThemeToggle drives the `.dark` class on <html>.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = dictionary[lang].meta.title;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "en" ? "ar" : "en")),
    []
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      isRTL: lang === "ar",
      t: dictionary[lang],
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used inside <LanguageProvider>");
  }
  return ctx;
}
