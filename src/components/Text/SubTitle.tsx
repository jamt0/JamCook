import { IonText } from "@ionic/react";
import { FunctionComponent } from "react";

interface Props {
  centerAlways?: boolean;
  color?: string;
  className?: string;
  align?: "right" | "center" | "left" | undefined;
}

const SubTitle: FunctionComponent<Props> = ({
  color,
  children,
  className,
  align="center"
}) => {
  return (
    <IonText color={color} className={`text-${align} text-xl flex flex-col justify-center ${className}`}>
    <h3>
      {children}
    </h3>
  </IonText>
  );
};

export default SubTitle;
