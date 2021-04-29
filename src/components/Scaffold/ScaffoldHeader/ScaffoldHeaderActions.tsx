import React, { FunctionComponent } from "react";
import { IonButtons } from "@ionic/react";

type Props = {};

const ScaffoldHeaderActions: FunctionComponent<Props> = ({ children }) => {
  return <IonButtons slot="end">{children}</IonButtons>;
};

export default ScaffoldHeaderActions;
