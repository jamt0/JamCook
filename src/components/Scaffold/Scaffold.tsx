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
  IonBackButton,
} from "@ionic/react";

interface Props {
  accionesHeader?: React.ReactNode;
  tituloHeader?: string;
  onClickBack: (e: any) => void;
  footer?: React.ReactNode;
  routeBack?: string;
}

const Scaffold: FunctionComponent<Props> = ({
  accionesHeader = null,
  tituloHeader,
  children,
  onClickBack,
  footer = null,
  routeBack = "/home"
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={routeBack}/>
          </IonButtons>
          <IonButtons slot="end">
            {accionesHeader != null && (
              accionesHeader
            )}
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
