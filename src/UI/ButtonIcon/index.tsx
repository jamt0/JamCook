import { IonButtons, IonButton, IonIcon } from "@ionic/react";
import { FunctionComponent } from "react";

type Props = {
  onClick: (e?: any) => void;
  icon: any;
  color?: string;
  size: string;
};

const ButtonIcon: FunctionComponent<Props> = (props) => (
  <IonButtons>
    <IonButton onClick={props.onClick}>
      <IonIcon
        icon={props.icon}
        color={props.color}
        className={`text-${props.size}`}
      />
    </IonButton>
  </IonButtons>
);
export default ButtonIcon;
