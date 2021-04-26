import { IonItem } from "@ionic/react";
import { FunctionComponent } from "react";
import React from "react";

interface Props {
  color?: string;
  routerLink?: string;
  lines?: "none" | "full" | "inset" | undefined;
  detail?: boolean;
  onClick?: (e: any) => void;
  className?: string;
}

const Item: FunctionComponent<Props> = ({
  color,
  children,
  className,
  routerLink,
  onClick,
  lines="none",
  detail=false
}) => {
  return (
    <IonItem color={color} lines={lines} onClick={onClick} className={className} detail={detail} routerLink={routerLink}>
        {children}
    </IonItem>
  );
};

export default Item;
