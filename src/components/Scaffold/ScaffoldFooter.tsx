import { IonFooter, IonToolbar } from "@ionic/react";
import { FunctionComponent } from "react";
import React from "react";

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
