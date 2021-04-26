import { IonButtons, IonButton, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import React from "react";

type Props = {};

const ScaffoldHeaderBackAction: FunctionComponent<Props> = ({ children }) => {
  const history = useHistory();

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <IonButtons slot="start">
      <IonButton onClick={handlerGoBackButton}>
        <IonIcon slot="icon-only" icon={chevronBackOutline} color="dark" />
      </IonButton>
    </IonButtons>
  );
};

export default ScaffoldHeaderBackAction;
