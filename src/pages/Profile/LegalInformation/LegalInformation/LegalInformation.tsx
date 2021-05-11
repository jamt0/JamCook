import React from "react";
import RoutesPath from "utils/routesPath";
import LegalInformationView from "pages/Profile/LegalInformation/LegalInformation/LegalInformationView";
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

  return <LegalInformationView texts={texts} items={items} />;
};

export default LegalInformation;
