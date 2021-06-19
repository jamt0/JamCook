import { FunctionComponent } from "react";
import { IonItem } from "@ionic/react";

type Props = {
  color?: string;
  routerLink?: string;
  lines?: "none" | "full" | "inset" | undefined;
  detail?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}

const Item: FunctionComponent<Props> = ({
  lines = "none",
  detail = false,
  className = "",
  ...props
}) => (
  <IonItem
    color={props.color}
    routerLink={props.routerLink}
    lines={lines}
    detail={detail}
    onClick={props.onClick}
    className={className}
  >
    {props.children}
  </IonItem>
);
export default Item;
