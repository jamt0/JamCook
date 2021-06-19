import { FunctionComponent } from "react";
import { IonLabel } from "@ionic/react";

type Props = {
  position?: "fixed" | "stacked" | "floating" | undefined;
  color?: string;
  className?: string;
};

const Label: FunctionComponent<Props> = ({
  color = "dark",
  className = "",
  ...props
}) => (
  <IonLabel position={props.position} color={color} className={className}>
    {props.children}
  </IonLabel>
);
export default Label;
