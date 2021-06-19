import { FunctionComponent } from "react";
import { IonButton } from "@ionic/react";

type Props = {
  color?: string;
  expand?: "full" | "block" | undefined;
  fill?: "clear" | "outline" | "solid" | "default" | undefined;
  size?: "default" | "small" | "large" | undefined;
  disabled?: boolean;
  onClick?: (e: any) => void;
  routerDirection?: "none" | "forward" | "back" | "root" | undefined;
  className?: string;
  routerLink?: string;
};

const Button: FunctionComponent<Props> = ({
  expand = "block",
  size = "large",
  className = "",
  ...props
}) => (
  <IonButton
    color={props.color}
    expand={expand}
    fill={props.fill}
    size={size}
    disabled={props.disabled}
    onClick={props.onClick}
    routerLink={props.routerLink}
    routerDirection={props.routerDirection}
    className={className}
  >
    {props.children}
  </IonButton>
);
export default Button;
