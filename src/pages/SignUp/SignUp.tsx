import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonFooter } from '@ionic/react';
import React, { useState } from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div className="md:flex md:justify-center">Crear Cuenta </div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="max-w-screen-md mx-auto p-4 h-full">
        <IonItem className="mb-4 ">
            <IonLabel position="floating" color="primary">Nombres</IonLabel>
            <IonInput value={name} type="text" autocomplete="name" required></IonInput>
          </IonItem>
          <IonItem className="mb-4 ">
            <IonLabel position="floating" color="primary">Correo Electrónico</IonLabel>
            <IonInput value={mail} type="email" autocomplete="email" required></IonInput>
          </IonItem>
          <IonItem >
            <IonLabel position="floating" color="primary">Contraseña</IonLabel>
            <IonInput value={password} type="password" required></IonInput>
          </IonItem>
          <div className="text-center mt-8">
            <p className="mr-1 text-base inline">Al registrarte, aceptas nuestros </p>
            <button className="text-purple-600 text-base select-none inline"
            >Terminos y condiciones
            </button>
            <p className="mx-1 text-base inline">y</p>
            <button className="text-purple-600 text-base select-none inline"
            >Política de Privacidad
            </button>
          </div>
          <button className="border border-red-500 py-4 mt-2 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full"
          >Crear cuenta
            </button>
          
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <div className="flex justify-center">
            <p className="mr-1 text-base inline">¿Ya tienes una cuenta? </p>
            <button className="text-purple-600 text-base select-none inline"
            >Inicia sesión.
            </button>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SignUp;
