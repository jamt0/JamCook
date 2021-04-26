import { IonText } from "@ionic/react";
import { FunctionComponent } from "react";

interface Props {
  color?: string;
  align?: "rigth" | "center" | "left" | undefined;
}

const Title: FunctionComponent<Props> = ({
  color,
  align = "center",
  children,
}) => {
  return (
    <IonText color={color}>
      <h1
        className={`text-${align} sm:text-center text-2xl md:text-3xl mx-4 font-bold`}
      >
        {children}
      </h1>
    </IonText>
  );
};

export default Title;
