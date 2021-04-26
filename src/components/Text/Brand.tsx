import { IonText } from "@ionic/react";
import { useSettingsUser } from "context/settingsUser";
import { FunctionComponent } from "react";
import React from "react";

type Props = {
}

const Searcher: FunctionComponent<Props> = ({ }) => {
  const { textos } = useSettingsUser()!;
  return (
    <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
      <IonText color="secondary">{textos["jam"]}</IonText>
      <IonText color="primary">{textos["cook"]}</IonText>
    </h1>
  );
};

export default Searcher;
