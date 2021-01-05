import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ForgetPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [mail, setMail] = useState("");

  const handlerForgetPasswordButton = (e: any) => {
    e.preventDefault();
    history.push('/forgetPasswordValidate');
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
          <p className="text-base text-center font-bold mt-6">¿Has olvidado tu contraseña? </p>
          <p className="mx-auto mb-4 text-base text-center">Introduce tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
          <IonItem className="mb-4 ">
            <IonLabel position="floating" color="primary">Correo Electrónico</IonLabel>
            <IonInput value={mail} type="email" autocomplete="email" className="mt-2" required></IonInput>
          </IonItem>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="p-2 mb-2 max-w-screen-md mx-auto">
            <Button handler={handlerForgetPasswordButton} label={"Restablecer Contraseña"} />
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ForgetPassword;
