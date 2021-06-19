import { FunctionComponent } from "react";
import { IonItemDivider } from "@ionic/react";

type Props = {
  color?: string;
  className?: string;
  sticky?: boolean;
};

const Container: FunctionComponent<Props> = ({
  sticky = false,
  className = "",
  ...props
}) => (
  <IonItemDivider
    color={props.color}
    sticky={sticky}
    className={`ion-no-padding ${className}`}
    mode="md"
  >
    {props.children}
  </IonItemDivider>
);

export default Container;
