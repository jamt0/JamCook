import { createContext, useContext, useState } from "react";

type DataSettings = {
  showTabs: boolean;
  setShowTabs: (showTabs: boolean) => void;
};

const settingDefaultValues: DataSettings = {
  showTabs: false,
  setShowTabs: () => {},
};

const UIContext = createContext<DataSettings>(settingDefaultValues);

type Props = {
  children: React.ReactNode;
};

export const UIProvider = (props: Props): JSX.Element => {
  const [showTabs, setShowTabs] = useState(true);

  const data = { showTabs, setShowTabs };

  return <UIContext.Provider value={data}>{props.children}</UIContext.Provider>;
};

export const useUI = () => useContext(UIContext);
