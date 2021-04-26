import { IonButtons } from "@ionic/react";
import { FunctionComponent } from "react";

type Props = {};

const ScaffoldHeaderActions: FunctionComponent<Props> = ({ children }) => {
  return <IonButtons slot="end">{children}</IonButtons>;
};

export default ScaffoldHeaderActions;
