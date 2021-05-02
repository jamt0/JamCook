import React from "react";
import LegalInformationView from "pages/Perfil/LegalInformation/LegalInformation/LegalInformationView";
import { useSettingsUser } from "context/settingsUser";

const LegalInformation: React.FC = () => {
  const { textos } = useSettingsUser()!;

  const items = [
    {
      name: textos.terminos_condiciones,
      routerLink: "/perfil/legalInformation/termsAndConditions",
    },
    {
      name: textos.politica_privacidad,
      routerLink: "/perfil/legalInformation/privacyPolicy",
    },
    {
      name: textos.politica_cookies,
      routerLink: "/perfil/legalInformation/cookiesPolicy",
    },
  ];

  return <LegalInformationView textos={textos} items={items} />;
};

export default LegalInformation;
