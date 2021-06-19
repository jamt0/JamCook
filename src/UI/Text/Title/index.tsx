import { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  color?: string;
  align?: "rigth" | "center" | "left" | undefined;
};

const Title: FunctionComponent<Props> = ({ align = "center", ...props }) => (
  <IonText color={props.color}>
    <h1
      className={`text-${align} sm:text-center text-2xl md:text-3xl mx-4 font-bold`}
    >
      {props.children}
    </h1>
  </IonText>
);
export default Title;
