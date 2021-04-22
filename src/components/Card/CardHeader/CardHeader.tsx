import { IonItem } from "@ionic/react";
import CardHeaderExpanded from "components/Card/CardHeader/CardHeaderExpanded";
import CardHeaderCompact from "components/Card/CardHeader/CardHeaderCompact";

type Props = {
  routerLink?: string;
  children: React.ReactNode;
};

const CardHeader = ({
  routerLink,
  children,
}: Props) => {
  return (
    <IonItem lines="none" routerLink={routerLink}>
      {children}
    </IonItem>
  );
};

CardHeader.Expanded = CardHeaderExpanded;
CardHeader.Compact = CardHeaderCompact;

export default CardHeader;
