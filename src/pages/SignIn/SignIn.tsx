import { IonItem, IonLabel, IonInput } from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import Server from "server";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

let initialValues = {
  email: "",
  password: "",
};

interface IUser {
  email: String;
  password: String;
}

const SignIn: React.FC<RouteComponentProps> = () => {
  const history = useHistory();

  const [hasErrors, setHasErrors] = useState({ error: null });

  const { control, handleSubmit, errors, formState } = useForm({
    defaultValues: { ...initialValues },
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerSignInButton = (user: IUser) => {
    Server.signIn(user)
      .then((response) => {
        console.log(response.data);
        if (!response.data.error) {
          localStorage.setItem('accessToken', response.data.accessToken);
          history.push("/home");
        } else {
          setHasErrors({ error: response.data.error });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerSignUpButton = (e: any) => {
    e.preventDefault();
    history.push("/signUp");
  };

  const handlerForgetPasswordButton = (e: any) => {
    e.preventDefault();
    history.push("/forgetPassword");
  };

  return (
    <Scaffold
      tituloHeader="Inicia sesión"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button
            label="Iniciar sesión"
            handler={handleSubmit(handlerSignInButton)}
            disable={!formState.isValid}
          />
          <div className="flex justify-center py-2">
            <p className="mr-1">¿No tienes una cuenta? </p>
            <Button
              handler={handlerSignUpButton}
              label={"Registrate."}
              type={"Link"}
            />
          </div>
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4 h-full">
        {hasErrors.error != null && (
          <p className="text-red-600 bg-red-100 px-6 py-3 my-2">
            {hasErrors.error}
          </p>
        )}
        <form onSubmit={handleSubmit(handlerSignInButton)}>
          <IonItem className="mb-4">
            <IonLabel position="floating" color="primary">
              Correo Electrónico
            </IonLabel>
            <Controller
              render={({ onChange }) => (
                <IonInput
                  onIonChange={onChange}
                  autocomplete="email"
                  className="mt-2"
                  type="email"
                />
              )}
              control={control}
              name="email"
              rules={{
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Correo electrónico invalido",
                },
              }}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="email"
            as={<div className="text-red-600 px-6" />}
          />
          <IonItem className="mb-4">
            <IonLabel position="floating" color="primary">
              Contraseña
            </IonLabel>
            <Controller
              render={({ onChange }) => (
                <IonInput
                  onIonChange={onChange}
                  autocomplete="current-password"
                  className="mt-2"
                  type="password"
                />
              )}
              control={control}
              name="password"
              rules={{
                required: "Este campo es obligatorio",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener minimo 8 caracteres",
                },
              }}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="password"
            as={<div className="text-red-600 px-6" />}
          />
          <div className="flex justify-end pt-6 pb-2">
            <Button
              handler={handlerForgetPasswordButton}
              label={"¿Has olvidado tu contraseña?"}
              type={"Link"}
            />
          </div>
        </form>
      </div>
    </Scaffold>
  );
};

export default SignIn;
