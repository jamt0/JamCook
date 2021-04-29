import React, { FunctionComponent } from "react";
import { IonItem } from "@ionic/react";

interface Props {
  color?: string;
  routerLink?: string;
  lines?: "none" | "full" | "inset" | undefined;
  detail?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}

const Item: FunctionComponent<Props> = ({
  color,
  routerLink,
  lines = "none",
  detail = false,
  className,
  onClick,
  children,
}) => {
  return (
    <IonItem
      color={color}
      routerLink={routerLink}
      lines={lines}
      detail={detail}
      onClick={onClick}
      className={className}
    >
      {children}
    </IonItem>
  );
};

export default Item;
