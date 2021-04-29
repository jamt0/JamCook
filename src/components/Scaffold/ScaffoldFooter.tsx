import React, { FunctionComponent } from "react";
import { IonFooter, IonToolbar } from "@ionic/react";

type Props = {};

const ScaffoldFooter: FunctionComponent<Props> = ({ children }) => {
  return (
    <IonFooter className="ion-no-border">
      <IonToolbar>
        <div className="p-2 max-w-screen-md mx-auto">{children}</div>
      </IonToolbar>
    </IonFooter>
  );
};

export default ScaffoldFooter;
