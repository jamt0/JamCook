import { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  color?: string;
  className?: string;
  align?: "right" | "center" | "left" | undefined;
};

const SubTitle: FunctionComponent<Props> = ({
  align = "center",
  className = "",
  ...props
}) => (
  <IonText
    color={props.color}
    className={`text-${align} text-xl flex flex-col justify-center ${className}`}
  >
    <h3>{props.children}</h3>
  </IonText>
);
export default SubTitle;
