import React from "react";
import CardHeader from "JamUI/Card/CardHeader/CardHeader";
import CardContent from "JamUI/Card/CardContent/CardContent";
import { IonCard } from "@ionic/react";

type Props = React.ComponentProps<any> & {
  routerLink?: string;
  color?: string;
  children: React.ReactNode;
};

const Card = (props: Props) => (
  <IonCard routerLink={props.routerLink} color={props.color}>
    {props.children}
  </IonCard>
);

Card.Header = CardHeader;
Card.Content = CardContent;

export default Card;
