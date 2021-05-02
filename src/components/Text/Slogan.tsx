import React, { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  color?: string;
};

const Slogan: FunctionComponent<Props> = (props) => (
  <IonText color={props.color} className="text-center text-xl md:text-2xl">
    <h2>{props.children}</h2>
  </IonText>
);
export default Slogan;
