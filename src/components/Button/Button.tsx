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
};

const Button: FunctionComponent<Props> = ({
  color,
  expand = "block",
  fill,
  size = "large",
  disabled,
  onClick,
  routerDirection,
  children,
  className,
}) => {
  return (
    <IonButton
      color={color}
      expand={expand}
      fill={fill}
      size={size}
      disabled={disabled}
      onClick={onClick}
      routerDirection={routerDirection}
      className={className}
    >
      {children}
    </IonButton>
  );
};

export default Button;
