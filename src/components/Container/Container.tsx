import React, { FunctionComponent } from "react";
import { IonItemDivider } from "@ionic/react";

type Props = {
  color?: string;
  className?: string;
  sticky?: boolean;
};

const Container: FunctionComponent<Props> = ({
  color,
  sticky = false,
  className = "",
  children,
}) => {
  return (
    <IonItemDivider
      color={color}
      sticky={sticky}
      className={`ion-no-padding ${className}`}
      mode="md"
    >
      {children}
    </IonItemDivider>
  );
};

export default Container;
