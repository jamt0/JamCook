import React from "react";
import { useTranslation } from 'react-i18next';
import View from "./view";
import useShowTabs from "hooks/useShowTabs";

const Settings: React.FC = () => {
  const { t } = useTranslation();

  useShowTabs(false);
  
  return (
    <View texts={t} />
  );
};

export default Settings;
