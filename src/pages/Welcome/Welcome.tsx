import { IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'assets/26901-cooking.json';
import Button from 'components/Button/Button';
import { Redirect, useHistory } from 'react-router';
import { useAuth } from 'auth';

const Welcome: React.FC = ( ) => {

  console.log("soy la page welcome")
  
  const history = useHistory();

  //al parecer comentar esto soluciono todos los errores
  // const { auth } = useAuth();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handlerSignInButton = (e: any) => {
    e.preventDefault();
    history.push('/signIn');
  }

  const handlerSignUpButton = (e: any) => {
    e.preventDefault();
    history.push('/signUp');
  }

  // if (auth.loggedIn === true) {
  //   return <Redirect to="/home" />;
  // }
  
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col justify-between max-w-screen-md mx-auto py-4 h-full">
          <div>
            <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
              <IonText className="text-red-600">Jam</IonText>
              <IonText className="text-purple-600">Cook</IonText>
            </h1>
            <h6 className="text-center text-gray-600 text-xl md:text-2xl mx-4">Las mejores recetas con los ingredientes disponibles en tu refrigerador</h6>
          </div>
          <Lottie options={defaultOptions} height={350} width={350} />
          <div className="px-4 pt-2 grid md:grid-cols-2 gap-4">
            <Button handler={handlerSignInButton} label={"Ingresar"} type={"Secundario"}/>
            <Button handler={handlerSignUpButton} label={"Registrarse"} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
