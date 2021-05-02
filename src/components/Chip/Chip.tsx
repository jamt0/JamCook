import React, { FunctionComponent } from "react";
import { IonChip } from "@ionic/react";

type Props = {
  outline: boolean;
  color: string;
};

const Chip: FunctionComponent<Props> = ({ color = "secondary", ...props }) => (
  <IonChip outline={props.outline} color={color}>
    {props.children}
  </IonChip>
);
export default Chip;
