import {
  IonInput,
  IonItem,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Scaffold from "../../components/Scaffold/Scaffold";

const ForgetPasswordValidate: React.FC<RouteComponentProps> = ({ history }) => {
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);

  const handlerForgetPasswordValidateButton = (e: any) => {
    e.preventDefault();
    history.push("/newPassword");
  };

  const handlerResendMailButton = (e: any) => {
    e.preventDefault();
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
            handler={handlerForgetPasswordValidateButton}
            label={"Restablecer Contraseña"}
          />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4 h-full">
        <p className="text-base text-center font-bold mt-6">
          Consulta tu correo
        </p>
        <p className="mx-1 mb-4 text-base text-center md:text-left">
          Introduce codigo de verificación o entra al vinculo que hemos enviado
          a tu correo electrónico.
        </p>
        <IonItem className="mt-8 mb-4">
          <IonInput
            type="number"
            value={codigo[0]}
            placeholder="0"
            maxlength={1}
            min="0"
            max="9"
            className="text-xl text-center"
          ></IonInput>
          <IonInput
            type="number"
            value={codigo[1]}
            placeholder="0"
            maxlength={1}
            min="0"
            max="9"
            className="text-xl text-center"
          ></IonInput>
          <IonInput
            type="number"
            value={codigo[2]}
            placeholder="0"
            maxlength={1}
            min="0"
            max="9"
            className="text-xl text-center"
          ></IonInput>
          <IonInput
            type="number"
            value={codigo[3]}
            placeholder="0"
            maxlength={1}
            min="0"
            max="9"
            className="text-xl text-center"
          ></IonInput>
          <IonInput
            type="number"
            value={codigo[4]}
            placeholder="0"
            maxlength={1}
            min="0"
            max="9"
            className="text-xl text-center"
          ></IonInput>
          <IonInput
            type="number"
            value={codigo[5]}
            placeholder="0"
            maxlength={1}
            min="0"
            max="9"
            className="text-xl text-center"
          ></IonInput>
        </IonItem>
        <div className="flex justify-end">
          <Button
            handler={handlerResendMailButton}
            label={"¿No recibiste el correo?"}
            type={"Link"}
          />
        </div>
      </div>
    </Scaffold>
  );
};

export default ForgetPasswordValidate;
