import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import ScaffoldHeaderActions from "components/Scaffold/ScaffoldHeader/ScaffoldHeaderActions";
import ScaffoldHeaderBackAction from "components/Scaffold/ScaffoldHeader/ScaffoldHeaderBackAction";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ScaffoldHeader = (props: Props) => (
  <IonHeader>
    <IonToolbar>
      <IonTitle>
        <div className="md:flex md:justify-center">{props.title}</div>
      </IonTitle>
      {props.children}
    </IonToolbar>
  </IonHeader>
);

ScaffoldHeader.Actions = ScaffoldHeaderActions;
ScaffoldHeader.BackAction = ScaffoldHeaderBackAction;

export default ScaffoldHeader;
