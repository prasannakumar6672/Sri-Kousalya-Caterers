import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Lang = "en" | "te";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, te: string) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = useCallback((en: string, te: string) => (lang === "te" ? te : en), [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

export function LanguageToggle({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { lang, setLang } = useLang();
  const isLight = tone === "light";

  return (
    <div
      className={`inline-flex shrink-0 items-center rounded-full border p-0.5 text-xs transition-colors ${
        isLight
          ? "border-brand-gold/50 bg-black/30 backdrop-blur-sm"
          : "border-gold/40 bg-card/70"
      } ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 font-semibold transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : isLight
            ? "text-white/80 hover:text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("te")}
        aria-pressed={lang === "te"}
        className={`te rounded-full px-2.5 py-1 transition-colors ${
          lang === "te"
            ? "bg-primary text-primary-foreground"
            : isLight
            ? "text-white/80 hover:text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}
