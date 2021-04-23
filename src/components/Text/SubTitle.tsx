import { IonText } from "@ionic/react";
import { FunctionComponent } from "react";

interface Props {
  centerAlways?: boolean;
  color?: string;
}

const SubTitle: FunctionComponent<Props> = ({
  color,
  children,
}) => {
  return (
    <h3 className="text-center text-xl md:text-2xl">
      <IonText color={color}>{children}</IonText>
    </h3>
  );
};

export default SubTitle;
