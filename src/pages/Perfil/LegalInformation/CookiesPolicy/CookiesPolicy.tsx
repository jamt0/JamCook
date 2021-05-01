import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";

const CookiesPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["politica_cookies"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <h1>Las politicas</h1>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default CookiesPolicy;
