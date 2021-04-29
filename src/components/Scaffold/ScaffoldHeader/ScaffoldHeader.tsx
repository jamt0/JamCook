import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import ScaffoldHeaderActions from "components/Scaffold/ScaffoldHeader/ScaffoldHeaderActions";
import ScaffoldHeaderBackAction from "components/Scaffold/ScaffoldHeader/ScaffoldHeaderBackAction";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ScaffoldHeader = ({ children, title }: Props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <div className="md:flex md:justify-center">{title}</div>
        </IonTitle>
        {children}
      </IonToolbar>
    </IonHeader>
  );
};

ScaffoldHeader.Actions = ScaffoldHeaderActions;
ScaffoldHeader.BackAction = ScaffoldHeaderBackAction;

export default ScaffoldHeader;
