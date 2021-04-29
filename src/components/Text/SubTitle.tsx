import React, { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  color?: string;
  className?: string;
  align?: "right" | "center" | "left" | undefined;
};

const SubTitle: FunctionComponent<Props> = ({
  color,
  className,
  align = "center",
  children,
}) => {
  return (
    <IonText
      color={color}
      className={`text-${align} text-xl flex flex-col justify-center ${className}`}
    >
      <h3>{children}</h3>
    </IonText>
  );
};

export default SubTitle;
