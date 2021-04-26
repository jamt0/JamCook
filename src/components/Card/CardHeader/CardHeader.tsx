import { IonItem } from "@ionic/react";
import CardHeaderExpanded from "components/Card/CardHeader/CardHeaderExpanded";
import CardHeaderCompact from "components/Card/CardHeader/CardHeaderCompact";

type Props = {
  routerLink?: string;
  color?: string;
  children: React.ReactNode;
};

const CardHeader = ({
  routerLink,
  children,
  color,
}: Props) => {
  return (
    <IonItem lines="none" routerLink={routerLink} color={color} className="ion-no-padding ml-2">
      {children}
    </IonItem>
  );
};

CardHeader.Expanded = CardHeaderExpanded;
CardHeader.Compact = CardHeaderCompact;

export default CardHeader;
