import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import { IonLoading } from "@ionic/react";
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";

let defaultValues = {
  name: "",
  email: "",
  password: "",
};

interface IUser {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {

  const history = useHistory();
  const { signUp, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerSignUpButton = async (user: IUser) => {
    const errorSignUp = await signUp(user);
    if (errorSignUp != null) {
      setHasErrors(errorSignUp);
    } else {
      return <Redirect to="/home" />;
    }
  };

  const handlerSignInButton = (e: any) => {
    e.preventDefault();
    history.replace("/signIn");
  };

  const handlerTerminosYCondicionesButton = (e: any) => {
    e.preventDefault();
    history.push("/terminosYCondiciones");
  };

  const handlerPoliticaDePrivacidadButton = (e: any) => {
    e.preventDefault();
    history.push("/politicaDePrivacidad");
  };

  const rulesNombre = {
    required: textos["campo_requerido"],
    minLength: {
      value: 3,
      message: textos["campo_nombre_min"]
    },
  };

  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"]
    },
  };

  const rulesPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"]
    },
  };

  console.log("soy la page registro");

  if(auth.loggedIn) {
    return <Redirect to="/home" />;
  }else{
    return (
      <Scaffold
        tituloHeader={textos["signup_crear_cuenta"]}
        footer={
          <div className="p-2 max-w-screen-md mx-auto">
            <Button
              handler={handleSubmit(handlerSignUpButton)}
              label={textos["signup_crear_cuenta"]}
              disable={!isValid || isSubmitting}
            />
            <div className="flex justify-center py-2">
              <p className="mr-1 text-base inline">{textos["signup_tiene_cuenta"]}</p>
              <Button
                handler={handlerSignInButton}
                label={textos["signin_iniciar_sesion"]}
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
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.name}
            name="name"
            type="name"
            label={textos["campo_nombre"]}
            rules={rulesNombre}
          />
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.email}
            name="email"
            type="email"
            label={textos["campo_correo"]}
            rules={rulesEmail}
          />
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.password}
            name="password"
            type="password"
            label={textos["campo_contraseña"]}
            rules={rulesPassword}
          />
          <div className="flex justify-center">
            <div className="mt-8 mb-4 text-center">
              <p className="mr-1 text-base inline">
                {textos["signup_acepta_nuestros"]}
              </p>
              <Button
                handler={handlerTerminosYCondicionesButton}
                label={textos["terminos_condiciones"]}
                type={"Link"}
              />
              <p className="mx-1 text-base inline">{textos["y"]}</p>
              <Button
                handler={handlerPoliticaDePrivacidadButton}
                label={textos["politica_privacidad"]}
                type={"Link"}
              />
            </div>
          </div>
        </div>
      </Scaffold>
    );
  }
};

export default SignUp;