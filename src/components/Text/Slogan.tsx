import { IonText } from "@ionic/react";
import { FunctionComponent } from "react";
import React from "react";

interface Props {
  color?: string;
}

const Slogan: FunctionComponent<Props> = ({ children, color }) => {
  return (
    <IonText color={color} className="text-center text-xl md:text-2xl">
      <h2>
        {children}
      </h2>
    </IonText>
  );
};

export default Slogan;
