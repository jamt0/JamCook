import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonFooter } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './SignIn.css';

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div className="md:flex md:justify-center">Inicia sesión </div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="max-w-screen-md mx-auto p-4 h-full">
          <IonItem className="mb-4 ">
            <IonLabel position="floating" color="primary">Correo Electrónico</IonLabel>
            <IonInput value={mail} type="email" autocomplete="email" required></IonInput>
          </IonItem>
          <IonItem >
            <IonLabel position="floating" color="primary">Contraseña</IonLabel>
            <IonInput value={password} type="password" required></IonInput>
          </IonItem>
          <div className="flex justify-end pt-2">
          <button className="py-2 mt-2 text-purple-600 text-base select-none"
            onClick={e => {
              e.preventDefault();
              history.push('/forgetPassword')
            }}>¿Has olvidado tu contraseña?
            </button>
            </div>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="p-2 max-w-screen-md mx-auto">
            <button className="border border-red-500 py-4  bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full"
              onClick={e => {
                e.preventDefault();
                history.push('/home')
              }}>Iniciar sesión
            </button>
            <div className="flex justify-center py-2">
            <p className="mr-1">¿No tienes una cuenta? </p>
            <button className="text-purple-600 text-base select-none"
              onClick={e => {
                e.preventDefault();
                history.push('/signUp')
              }}>Registrate.
            </button>
          </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SignIn;
