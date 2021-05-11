import { createContext, useContext, useEffect, useState } from "react";
import Spanish from "lang/es/texts";
import English from "lang/en/texts";

type Theme = "dark" | "light";

type Language = "es" | "en";

type DataSettings = {
  language: Language;
  theme: Theme;
  texts: typeof English | typeof Spanish;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
};

const settingDefaultValues: DataSettings = {
  language: "es",
  theme: "light",
  texts: Spanish,
  setLanguage: () => {},
  setTheme: () => {},
};

const SettingsContext = createContext<DataSettings | undefined>(
  settingDefaultValues
);

type Props = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: Props): JSX.Element => {
  const [language, setLanguageState] = useState<Language>(
    settingDefaultValues.language
  );
  const [texts, settexts] = useState<typeof English | typeof Spanish>(
    settingDefaultValues.texts
  );
  const [theme, setThemeState] = useState<Theme>(settingDefaultValues.theme);

  const setLanguage = (language: Language) => {
    switch (language) {
      case "en":
        settexts(English);
        break;
      case "es":
        settexts(Spanish);
        break;
    }
    setLanguageState(language);
    localStorage.setItem("language", language);
  };
  
  const setTheme = (theme: Theme) => {
    switch (theme) {
      case "dark":
        document.body.classList.add("dark");
        break;
      case "light":
        document.body.classList.remove("dark");
        break;
    }
    setThemeState(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark" || theme == "light") setTheme(theme);
    else setTheme("light"); //aca es donde se verificaria el tema predeterminado

    const language = localStorage.getItem("language");
    if (language == "en" || language == "es") setLanguage(language);
    else setLanguage("es"); //aca es donde se verificaria el lenguaje predeterminado
  }, []);

  const data = { language, theme, texts, setLanguage, setTheme };

  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

export const useSettingsUser = () => useContext(SettingsContext);
