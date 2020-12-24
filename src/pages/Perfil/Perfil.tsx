import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Perfil: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle><div className="md:flex md:justify-center">Perfil</div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;