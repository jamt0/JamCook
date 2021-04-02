import { IonItem, IonLabel, IonInput, IonLoading } from "@ionic/react";
import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import { Redirect, useHistory } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuth } from "auth";

let initialValues = {
  name: "",
  email: "",
  password: "",
};

interface IUser {
  name: String;
  email: String;
  password: String;
}

const SignUp: React.FC = () => {

  const history = useHistory();

  const { signUp, auth, loading } = useAuth()!;

  const {
    control,
    handleSubmit,
    errors,
    formState: { isSubmitting, isValid },
  } = useForm({
    defaultValues: { ...initialValues },
    mode: "onChange",
  });
  
  const [hasErrors, setHasErrors] = useState<string>("");

  /**
   *
   * @param data
   */
  const handlerSignUpButton = async (user: IUser) => {
    const errorSignUp = await signUp(user);
    if (errorSignUp != null) {
      setHasErrors(errorSignUp);
    } else {
      // history.replace("/home");
      //esto soluciona parcialmente el doble render, pero ya no se ve animacion y hay una pantalla blanca
      return <Redirect to="/home" />;
    }
  };

  const handlerSignInButton = (e: any) => {
    e.preventDefault();
    history.replace("/signIn");
    //esto causa una pagina en blanco al cambiar rapidamente
  };

  const handlerTerminosYCondicionesButton = (e: any) => {
    e.preventDefault();
    history.push("/terminosYCondiciones");
  };

  const handlerPoliticaDePrivacidadButton = (e: any) => {
    e.preventDefault();
    history.push("/politicaDePrivacidad");
  };

  console.log("soy la page registro");

  if (auth.loggedIn === true) {
    return <Redirect to="/home" />;
  }else{
    return (
      <Scaffold
        tituloHeader="Crear Cuenta"
        footer={
          <div className="p-2 max-w-screen-md mx-auto">
            <Button
              handler={handleSubmit(handlerSignUpButton)}
              label={"Crear cuenta"}
              disable={!isValid || isSubmitting}
            />
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
        <IonLoading isOpen={loading} translucent />
        <div className="max-w-screen-md mx-auto p-4 h-full">
          {hasErrors != "" && (
            <p className="text-red-600 bg-red-100 px-6 py-3 my-2">{hasErrors}</p>
          )}
          <IonItem className="mb-4 ">
            <IonLabel position="floating" color="primary">
              Nombres
            </IonLabel>
            <Controller
              render={({ onChange }) => (
                <IonInput
                  onIonChange={onChange}
                  autocomplete="name"
                  className="mt-2"
                  type="text"
                />
              )}
              control={control}
              name="name"
              rules={{
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener minimo 3 caracteres",
                },
              }}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="name"
            as={<div className="text-red-600 px-6" />}
          />
          <IonItem className="mb-4 ">
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
          <IonItem>
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
  }
};

export default React.memo(SignUp);
