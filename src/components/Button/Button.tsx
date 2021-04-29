import React, { FunctionComponent } from "react";
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
  color,
  expand = "block",
  fill,
  size = "large",
  disabled,
  onClick,
  routerDirection,
  className,
  routerLink,
  children,
}) => {
  return (
    <IonButton
      color={color}
      expand={expand}
      fill={fill}
      size={size}
      disabled={disabled}
      onClick={onClick}
      routerLink={routerLink}
      routerDirection={routerDirection}
      className={className}
    >
      {children}
    </IonButton>
  );
};

export default Button;
