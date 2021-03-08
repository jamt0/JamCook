import {
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Scaffold from "../../components/Scaffold/Scaffold";
import {useHistory} from 'react-router';

const SignUp: React.FC<RouteComponentProps> = ( ) => {

  const history = useHistory();

  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlerSignInButton = (e: any) => {
    e.preventDefault();
    history.push("/signIn");
  };

  const handlerSignUpButton = (e: any) => {
    e.preventDefault();
    history.push("/home");
  };

  const handlerTerminosYCondicionesButton = (e: any) => {
    e.preventDefault();
    history.push("/terminosYCondiciones");
  };

  const handlerPoliticaDePrivacidadButton = (e: any) => {
    e.preventDefault();
    history.push("/politicaDePrivacidad");
  };

  return (
    <Scaffold
      tituloHeader="Crear Cuenta"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSignUpButton} label={"Crear cuenta"} />
          <div className="flex justify-center py-2">
            <p className="mr-1 text-base inline">¿Ya tienes una cuenta? </p>
            <Button
              handler={handlerSignInButton}
              label={"Inicia sesión."}
              type={"Link"}
            />
          </div>
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4 h-full">
        <IonItem className="mb-4 ">
          <IonLabel position="floating" color="primary">
            Nombres
          </IonLabel>
          <IonInput
            value={name}
            type="text"
            autocomplete="name"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <IonItem className="mb-4 ">
          <IonLabel position="floating" color="primary">
            Correo Electrónico
          </IonLabel>
          <IonInput
            value={mail}
            type="email"
            autocomplete="email"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="primary">
            Contraseña
          </IonLabel>
          <IonInput
            value={password}
            type="password"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <div className="flex justify-center">
          <div className="mt-8 mb-4 text-center">
            <p className="mr-1 text-base inline">
              Al registrarte, aceptas nuestros
            </p>
            <Button
              handler={handlerTerminosYCondicionesButton}
              label={"Terminos y condiciones"}
              type={"Link"}
            />
            <p className="mx-1 text-base inline">y</p>
            <Button
              handler={handlerPoliticaDePrivacidadButton}
              label={"Política de Privacidad."}
              type={"Link"}
            />
          </div>
        </div>
      </div>
    </Scaffold>
  );
};

export default SignUp;
