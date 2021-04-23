import { IonIcon } from "@ionic/react";
import Item from "components/Item/Item";
import SubTitle from "components/Text/SubTitle";
import { FunctionComponent } from "react";

interface Props {
  icon?: string;
  lines?: "none" | "full" | "inset" | undefined;
  onClick?: (e: any) => void;
  routerLink?: string;
}

const ItemIcon: FunctionComponent<Props> = ({
  icon,
  routerLink,
  onClick,
  lines="none",
  children
}) => {
  return (
    <Item
    className="mb-3"
    lines={lines}
    routerLink={routerLink}
    onClick={onClick}
  >
    {icon && (
      <IonIcon icon={icon} slot="start" className="text-4xl ml-6" />
    )}
    <SubTitle>{children}</SubTitle>
  </Item>
  );
};

export default ItemIcon;