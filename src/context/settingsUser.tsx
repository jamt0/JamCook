import { createContext, useContext, useState } from "react";
import textos from 'lang/es/textos'

type DataSettings = {
  lang: string;
  theme: string;
  textos: any;
  setLang: () => void;
  setTheme: () => void;
};

const settingDefaultValues: DataSettings = {
  lang: "es",
  theme: "light",
  textos: textos,
  setLang: () => {},
  setTheme: () => {},
};

const SettingsContext = createContext<DataSettings | undefined>(
  settingDefaultValues
);

type Props = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: Props): JSX.Element => {
  const [lang, setLangState] = useState<string>(settingDefaultValues.lang);
  const [textos, setTextos] = useState<string>(settingDefaultValues.textos);
  const [theme, setThemeState] = useState<string>(settingDefaultValues.theme);

  const setLang = () => {};
  const setTheme = () => {};

  const data = { lang, theme, textos, setLang, setTheme };

  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

export const useSettingsUser = () => useContext(SettingsContext);