import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonFooter, IonButton, IonButtons, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button/Button';

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSignInButton = (e: any) => {
    e.preventDefault();
    history.push('/home');
  }

  const handlerSignUpButton = (e: any) => {
    e.preventDefault();
    history.push('/signUp');
  }

  const handlerForgetPasswordButton = (e: any) => {
    e.preventDefault();
    history.push('/forgetPassword');
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
          <div className="flex justify-end pt-6 pb-2">
            <Button handler={handlerForgetPasswordButton} label={"¿Has olvidado tu contraseña?"} type={"Link"} />
          </div>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="p-2 max-w-screen-md mx-auto">
            <Button handler={handlerSignInButton} label={"Iniciar sesión"} />
            <div className="flex justify-center py-2">
              <p className="mr-1">¿No tienes una cuenta? </p>
              <Button handler={handlerSignUpButton} label={"Registrate."} type={"Link"} />
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SignIn;
