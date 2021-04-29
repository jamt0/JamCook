import React, { FunctionComponent } from "react";
import { IonLabel } from "@ionic/react";

type Props = {
  position?: "fixed" | "stacked" | "floating" | undefined;
  color?: string;
  className?: string;
};

const Label: FunctionComponent<Props> = ({
  position,
  color = "dark",
  className = "",
  children,
}) => {
  return (
    <IonLabel position={position} color={color} className={className}>
      {children}
    </IonLabel>
  );
};

export default Label;
