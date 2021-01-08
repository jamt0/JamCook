import {
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Scaffold from "../../components/Scaffold/Scaffold";

const ForgetPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [mail, setMail] = useState("");

  const handlerForgetPasswordButton = (e: any) => {
    e.preventDefault();
    history.push("/forgetPasswordValidate");
  };

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold
      tituloHeader="Restablecer Contraseña"
      onClickBack={handlerGoBackButton}
      footer={
        <div className="p-2 mb-2 max-w-screen-md mx-auto">
          <Button
            handler={handlerForgetPasswordButton}
            label={"Restablecer Contraseña"}
          />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4 h-full">
        <p className="text-base text-center font-bold mt-6">
          ¿Has olvidado tu contraseña?{" "}
        </p>
        <p className="mx-auto mb-4 text-base text-center">
          Introduce tu dirección de correo electrónico y te enviaremos un enlace
          para restablecer tu contraseña.
        </p>
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
      </div>
    </Scaffold>
  );
};

export default ForgetPassword;
