import { IonLabel } from "@ionic/react";
import { FunctionComponent } from "react";

type Props = {
};

const CardHeaderExpanded: FunctionComponent<Props> = ({
  children
}) => {
  return (
      <IonLabel className="mx-2">{children}</IonLabel>
  );
};

export default CardHeaderExpanded;
