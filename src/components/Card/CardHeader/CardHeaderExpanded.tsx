import { IonLabel } from "@ionic/react";
import { FunctionComponent } from "react";
import React from "react";

type Props = {
};

const CardHeaderExpanded: FunctionComponent<Props> = ({
  children
}) => {
  return (
      <IonLabel className="mx-2 ion-no-padding">{children}</IonLabel>
  );
};

export default CardHeaderExpanded;
