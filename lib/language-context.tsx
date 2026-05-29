"use client"

import { createContext, useContext, useState } from "react"

type Language = "es" | "en"
type LanguageContextType = {
  lang: Language
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es")
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"))
  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)
