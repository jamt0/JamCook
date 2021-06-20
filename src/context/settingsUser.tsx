import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type Language = "es" | "en";

type DataSettings = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const settingDefaultValues: DataSettings = {
  theme: "light",
  setTheme: () => {},
};

const SettingsContext = createContext<DataSettings | undefined>(
  settingDefaultValues
);

type Props = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: Props): JSX.Element => {
  const [theme, setThemeState] = useState<Theme>(settingDefaultValues.theme);
  
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
    if (theme === "dark" || theme === "light") setTheme(theme);
    else setTheme("light"); //aca es donde se verificaria el tema predeterminado
  }, []);

  const data = {theme, setTheme };

  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

export const useSettingsUser = () => useContext(SettingsContext);
