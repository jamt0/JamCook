import React, { FunctionComponent } from "react";
import { chevronBackOutline } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonFooter,
} from "@ionic/react";

interface Props {
  tituloHeader: string;
  onClickBack: (e: any) => void;
  withFooter?: boolean;
  footer?: React.ReactNode;
}

const Scaffold: FunctionComponent<Props> = ({
  tituloHeader,
  children,
  onClickBack,
  footer = null,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onClickBack}>
              <IonIcon slot="icon-only" icon={chevronBackOutline} color="dark" />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <div className="md:flex md:justify-center">{tituloHeader}</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{children}</IonContent>
      {footer != null && (
        <IonFooter className="ion-no-border">
          <IonToolbar>{footer}</IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
};

export default Scaffold;
