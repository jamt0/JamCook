import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";

const TermsAndConditions: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["terminos_condiciones"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <h1>Terminos y Condiciones</h1>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default TermsAndConditions;
