import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const FoodBasket: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div className="md:flex md:justify-center">Almacen</div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">FoodStore</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default FoodBasket;