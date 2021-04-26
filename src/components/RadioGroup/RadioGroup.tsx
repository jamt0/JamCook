import { IonItem, IonRadio, IonRadioGroup } from "@ionic/react";
import { useState, FunctionComponent } from "react";
import React from "react";

type Option = {
  descripcion: string;
  value: string;
}
interface Props {
  optionsGroup: undefined | Option[];
  defaultOption: undefined | string;
}

const RadioGroup: FunctionComponent<Props> = ({ optionsGroup, defaultOption }) => {
  const [selected, setSelected] = useState(defaultOption);

  return (
    <IonRadioGroup
      value={selected}
      onIonChange={(e) => setSelected(e.detail.value)}
    >
      {optionsGroup ? optionsGroup.map((opcion) => {
        return (
          <IonItem lines="none" className="mb-4 rounded-md" color="light" key={opcion.value}>
            <p className="text-lg">{opcion.descripcion}</p>
            <IonRadio slot="start" color="primary" value={opcion.value}></IonRadio>
          </IonItem>
        );
      }):""}
    </IonRadioGroup>
  );
};

export default RadioGroup;
