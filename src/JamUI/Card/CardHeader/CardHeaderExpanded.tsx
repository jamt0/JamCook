import React, { FunctionComponent } from "react";
import { Label } from "JamUI";

type Props = {};

const CardHeaderExpanded: FunctionComponent<Props> = (props) => (
  <Label className="mx-2 ion-no-padding">{props.children}</Label>
);
export default CardHeaderExpanded;
