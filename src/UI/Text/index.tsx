import { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  centerAlways?: boolean;
  color?: string;
  className?: string;
  align?: "justify" | "right" | "center" | "left" | undefined;
  onClick?: (e: any) => void;
};

const Text: FunctionComponent<Props> = ({ className = "", ...props }) => {
  return (
    <IonText
      color={props.color}
      onClick={props.onClick}
      className={`text-${props.align} text-sm flex flex-col justify-center ${className}`}
    >
      <p>{props.children}</p>
    </IonText>
  );
};

export default Text;
