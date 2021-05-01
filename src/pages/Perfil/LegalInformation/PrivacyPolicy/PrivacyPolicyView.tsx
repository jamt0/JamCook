import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";

const PrivacyPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["politica_privacidad"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <h1>Política de privacidad</h1>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default PrivacyPolicy;
