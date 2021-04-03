import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import { IonLoading } from "@ionic/react";
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";

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

const rulesNombre = {
  required: "Este campo es obligatorio",
  minLength: {
    value: 3,
    message: "El nombre debe tener minimo 3 caracteres",
  },
};

const rulesEmail = {
  required: "Este campo es obligatorio",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Correo electrónico invalido",
  },
};

const rulesPassword = {
  required: "Este campo es obligatorio",
  minLength: {
    value: 8,
    message: "La contraseña debe tener minimo 8 caracteres",
  },
};

const SignUp: React.FC = () => {

  const history = useHistory();

  const { signUp, loading, auth } = useAuth()!;

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

  console.log("soy la page registro");

  if(auth.loggedIn) {
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
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.name}
            name="name"
            type="name"
            label="Nombre"
            rules={rulesNombre}
          />
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.email}
            name="email"
            type="email"
            label="Correo Electrónico"
            rules={rulesEmail}
          />
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.password}
            name="password"
            type="password"
            label="Contraseña"
            rules={rulesPassword}
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