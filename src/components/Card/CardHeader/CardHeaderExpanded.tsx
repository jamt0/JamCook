import React, { FunctionComponent } from "react";
import Label from "components/Label/Label";

type Props = {
};

const CardHeaderExpanded: FunctionComponent<Props> = ({
  children
}) => {
  return (
      <Label className="mx-2 ion-no-padding">{children}</Label>
  );
};

export default CardHeaderExpanded;
