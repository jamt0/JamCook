import { IonText } from "@ionic/react";
import { FunctionComponent } from "react";

interface Props {
  centerAlways?: boolean;
  color?: string;
  className?: string;
  align?: "right" | "center" | "left" | undefined;
}

const Text: FunctionComponent<Props> = ({
  color,
  children,
  align,
  className
}) => {
  return (
    <IonText color={color} className={`text-${align} text-base flex flex-col justify-center ${className}`}>
      <p>
        {children}
      </p>
    </IonText>
  );
};

export default Text;