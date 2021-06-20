import React from "react";
import View from "./view";
import { useTranslation } from 'react-i18next';
import useShowTabs from "hooks/useShowTabs";

const TermsAndConditions: React.FC = () => {
  const { t } = useTranslation();

  useShowTabs(false);

  return (
    <View texts={t}/>
  );
};

export default TermsAndConditions;
