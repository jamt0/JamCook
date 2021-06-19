import { FunctionComponent } from "react";
import { IonButtons } from "@ionic/react";

type Props = {};

const ScaffoldHeaderActions: FunctionComponent<Props> = (props) => (
  <IonButtons slot="end">{props.children}</IonButtons>
);
export default ScaffoldHeaderActions;
