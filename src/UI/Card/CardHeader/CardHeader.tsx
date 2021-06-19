import React from "react";
import CardHeaderExpanded from "UI/Card/CardHeader/CardHeaderExpanded";
import CardHeaderCompact from "UI/Card/CardHeader/CardHeaderCompact";
import { Item } from "UI";

type Props = {
  routerLink?: string;
  color?: string;
  children: React.ReactNode;
};

const CardHeader = (props: Props) => (
  <Item
    routerLink={props.routerLink}
    color={props.color}
    className="ion-no-padding ml-2"
  >
    {props.children}
  </Item>
);

CardHeader.Expanded = CardHeaderExpanded;
CardHeader.Compact = CardHeaderCompact;

export default CardHeader;
