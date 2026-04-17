import { useState, useEffect } from "react";
import { DarkIcon, LightIcon } from "../components/icons";

const STORAGE_KEY = "theme";

function readIsDark() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "dark";
}

function applyToDocument(dark) {
  const root = document.documentElement;
  if (dark) root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(readIsDark);

  useEffect(() => {
    applyToDocument(isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      className={`group relative flex h-8 w-16 shrink-0 items-center rounded-full border transition-colors duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark ${
        isDark
          ? "border-slate-600/80 bg-slate-800"
          : "border-slate-200/90 bg-slate-200"
      }`}
    >
      {/* Icônes en fond : mode actif plus net, l’autre très discret */}
      {/* Lune — bleue */}
      <DarkIcon
        className={`pointer-events-none absolute left-1.5 h-[18px] w-[18px] transition-all duration-300 ease-out ${
          isDark
            ? "scale-100 text-blue-400 opacity-90" // ← bleu quand actif
            : "scale-95 text-slate-400 opacity-[0.28]"
        }`}
      />

      {/* Soleil — orange */}
      <LightIcon
        className={`pointer-events-none absolute right-1.5 h-[18px] w-[18px] transition-all duration-300 ease-out ${
          isDark
            ? "scale-95 text-slate-400 opacity-[0.28]"
            : "scale-100 text-orange-500 opacity-90" // ← orange quand actif
        }`}
      />

      {/* Pastille : neutre + ombre, léger accent bleu en mode clair uniquement */}
      <span
        className={`pointer-events-none absolute z-10 h-6 w-6 rounded-full shadow-md transition-all duration-300 ease-out ${
          isDark
            ? "translate-x-9 bg-slate-100 shadow-slate-950/35 ring-1 ring-white/25"
            : "translate-x-1 bg-white shadow-slate-400/25 ring-1 ring-primary/20"
        }`}
      />
    </button>
  );
}
