import { IonChip, IonLabel } from "@ionic/react";
import React, { FunctionComponent } from "react";

interface Props {
  ingredientes: {
    id: string;
    ingrediente: string;
    outline: boolean;
  }[];
}

const ChipGroup: FunctionComponent<Props> = ({ ingredientes }) => {
  return (
    <>
      {ingredientes.map((ingrediente) => {
        return (
          <IonChip
            color="secondary"
            key={ingrediente.id}
            outline={ingrediente.outline}
          >
            <IonLabel>{ingrediente.ingrediente}</IonLabel>
          </IonChip>
        );
      })}
    </>
  );
};

export default ChipGroup;
