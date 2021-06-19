import { FunctionComponent } from "react";
import { Label } from "UI";

type Props = {};

const CardHeaderExpanded: FunctionComponent<Props> = (props) => (
  <Label className="mx-2 ion-no-padding">{props.children}</Label>
);
export default CardHeaderExpanded;
