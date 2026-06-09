import { useState, useEffect } from "react";

export function useTheme() {
  const [tema, setTema] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("erg-theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (tema === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("erg-theme", tema);
  }, [tema]);

  const alternarTema = () => setTema((t) => (t === "dark" ? "light" : "dark"));

  return { tema, setTema, alternarTema };
}
