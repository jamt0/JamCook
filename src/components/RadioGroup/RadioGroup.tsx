import { IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import React, { useState, FunctionComponent } from "react";

interface Props {
  opcionesGroup: {
    descripcion: string;
    value: string;
  }[];
  defaultOption: string;
}

const RadioGroup: FunctionComponent<Props> = ({ opcionesGroup, defaultOption }) => {
  const [selected, setSelected] = useState<string>(defaultOption);

  return (
    <IonRadioGroup
      value={selected}
      onIonChange={(e) => setSelected(e.detail.value)}
    >
      {opcionesGroup.map((opcion) => {
        return (
          <IonItem lines="none" className="mb-4 rounded-md" color="light" key={opcion.value}>
            <p className="text-lg">{opcion.descripcion}</p>
            <IonRadio slot="start" color="primary" value={opcion.value}></IonRadio>
          </IonItem>
        );
      })}
    </IonRadioGroup>
  );
};

export default RadioGroup;
