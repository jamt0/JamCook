import React, { FunctionComponent } from "react";
import { IonButtons, IonButton, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";

type Props = {};

const ScaffoldHeaderBackAction: FunctionComponent<Props> = () => {
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
