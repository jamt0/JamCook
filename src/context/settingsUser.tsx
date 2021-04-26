import { createContext, useContext, useState } from "react";
import Spanish from 'lang/es/textos'
import English from 'lang/en/textos'

type DataSettings = {
  language: string;
  theme: string;
  textos: typeof English | typeof Spanish;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
};

const settingDefaultValues: DataSettings = {
  language: "es",
  theme: "light",
  textos: Spanish,
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
  const [language, setLanguageState] = useState<string>(settingDefaultValues.language);
  const [textos, setTextos] = useState<typeof English | typeof Spanish>(settingDefaultValues.textos);
  const [theme, setThemeState] = useState<string>(settingDefaultValues.theme);

  const setLanguage = (language: string) => {
    setLanguageState(language);
    setTextos(English)
  };
  const setTheme = (theme: string) => {
    setThemeState(theme);
  };

  const data = { language, theme, textos, setLanguage, setTheme };

  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

export const useSettingsUser = () => useContext(SettingsContext);