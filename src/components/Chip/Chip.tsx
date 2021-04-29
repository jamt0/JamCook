import React, { FunctionComponent } from "react";
import { IonChip } from "@ionic/react";

type Props = {
  outline: boolean;
  color: string;
};

const Chip: FunctionComponent<Props> = ({ outline, color="secondary", children }) => {
  return (
    <IonChip outline={outline} color={color}>
      {children}
    </IonChip>
  );
};

export default Chip;
