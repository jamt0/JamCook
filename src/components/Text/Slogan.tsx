import React, { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  color?: string;
};

const Slogan: FunctionComponent<Props> = ({ color, children }) => {
  return (
    <IonText color={color} className="text-center text-xl md:text-2xl">
      <h2>{children}</h2>
    </IonText>
  );
};

export default Slogan;
