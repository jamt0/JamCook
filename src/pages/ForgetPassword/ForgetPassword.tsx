import { IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [mail, setMail] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div className="md:flex md:justify-center">Restablecer Contraseña</div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="max-w-screen-md mx-auto p-4 h-full">
          <p className="text-base text-center font-bold mt-6">¿Has olvidado tu contraseña? </p>
          <p className="mx-1 mb-4 text-base text-center md:text-left">Introduce tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
          <IonItem className="mb-4 ">
            <IonLabel position="floating" color="primary">Correo Electrónico</IonLabel>
            <IonInput value={mail} type="email" autocomplete="email" required></IonInput>
          </IonItem>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="p-2 max-w-screen-md mx-auto">
          <button className="border border-red-500 py-4 my-2 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full"
            onClick={e => {
              e.preventDefault();
              history.push('/home')
            }}>Restablecer Contraseña
            </button>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ForgetPassword;
