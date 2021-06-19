import React from "react";
import RoutesPath from "routes";
import View from "./view";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const LegalInformation: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  const items = [
    {
      name: texts.terminos_condiciones,
      routerLink: RoutesPath.termsAndConditions,
    },
    {
      name: texts.politica_privacidad,
      routerLink: RoutesPath.privacyPolicy,
    },
    {
      name: texts.politica_cookies,
      routerLink: RoutesPath.cookiesPolicy,
    },
  ];

  return <View texts={texts} items={items} />;
};

export default LegalInformation;
