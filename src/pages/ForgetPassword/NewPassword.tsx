import {
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Scaffold from "../../components/Scaffold/Scaffold";

const NewPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const handlerNewPasswordButton = (e: any) => {
    e.preventDefault();
    history.push("/home");
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
            handler={handlerNewPasswordButton}
            label={"Restablecer Contraseña"}
          />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4 h-full">
        <IonItem className="mb-4 ">
          <IonLabel position="floating" color="primary">
            Nueva Contraseña
          </IonLabel>
          <IonInput
            value={newPassword}
            type="password"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="primary">
            Confirme Contraseña
          </IonLabel>
          <IonInput
            value={newPasswordConfirm}
            type="password"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
      </div>
    </Scaffold>
  );
};

export default NewPassword;
