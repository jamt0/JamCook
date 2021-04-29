import React, { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  centerAlways?: boolean;
  color?: string;
  className?: string;
  align?: "justify" |"right" | "center" | "left" | undefined;
  onClick?: (e: any) => void;
}

const Text: FunctionComponent<Props> = ({
  color,
  children,
  align,
  className,
  onClick,
}) => {
  return (
    <IonText color={color} onClick={onClick} className={`text-${align} text-sm flex flex-col justify-center ${className}`}>
      <p>
        {children}
      </p>
    </IonText>
  );
};

export default Text;