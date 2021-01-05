import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button/Button';

const NewPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const handlerNewPasswordButton = (e: any) => {
    e.preventDefault();
    history.push('/home');
  }

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonButton onClick={handlerGoBackButton}>
              <IonIcon slot="icon-only" icon={chevronBackOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle><div className="md:flex md:justify-center">Restablecer Contraseña</div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="max-w-screen-md mx-auto p-4 h-full">
          <IonItem className="mb-4 ">
          <IonLabel position="floating" color="primary">Nueva Contraseña</IonLabel>
            <IonInput value={newPassword} type="password" className="mt-2" required></IonInput>
          </IonItem>
          <IonItem >
            <IonLabel position="floating" color="primary">Confirme Contraseña</IonLabel>
            <IonInput value={newPasswordConfirm} type="password" className="mt-2" required></IonInput>
          </IonItem>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="p-2 mb-2 max-w-screen-md mx-auto">
            <Button handler={handlerNewPasswordButton} label={"Restablecer Contraseña"} />
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default NewPassword;