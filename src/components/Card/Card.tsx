import React from "react";
import { IonCard } from "@ionic/react";
import CardHeader from "components/Card/CardHeader/CardHeader";
import CardContent from "components/Card/CardContent";

type Props = React.ComponentProps<any> & {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <IonCard>
      {children}
    </IonCard>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;

export default Card;