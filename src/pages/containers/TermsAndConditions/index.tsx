import React from "react";
import { TermsAndConditionsView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const TermsAndConditions: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  return (
    <TermsAndConditionsView texts={texts}/>
  );
};

export default TermsAndConditions;
