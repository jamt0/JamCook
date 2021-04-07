import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import { IonLoading } from "@ionic/react";
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";

let defaultValues = {
  email: "",
  password: "",
};

interface IUser {
  email: string;
  password: string;
}

const rulesPassword = {
  required: "Este campo es obligatorio",
  minLength: {
    value: 8,
    message: "La contraseña debe tener minimo 8 caracteres",
  },
};

const rulesEmail = {
  required: "Este campo es obligatorio",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Correo electrónico invalido",
  },
};

const SignIn: React.FC = () => {

  const history = useHistory();

  const { signIn, loading, auth } = useAuth()!;

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm<IUser>({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const [hasErrors, setHasErrors] = useState<string>("");

  /**
   *
   * @param data
   */
  const handlerSignInButton = async (user: IUser) => {
    const errorSignIn = await signIn(user);
    if (errorSignIn != null) {
      setHasErrors(errorSignIn);
    } else {
      // history.replace('/home');
      return <Redirect to="/home" />;
    }
  };

  const handlerSignUpButton = (e: any) => {
    e.preventDefault();
    history.replace("/signUp");
  };

  const handlerForgetPasswordButton = (e: any) => {
    e.preventDefault();
    history.push("/forgetPassword");
  };

  console.log("soy la page login");

  if(auth.loggedIn) {
    return <Redirect to="/home" />;
  }else{
    return (
      <Scaffold
        tituloHeader="Inicia sesión"
        footer={
          <div className="p-2 max-w-screen-md mx-auto">
            <Button
              label="Iniciar sesión"
              handler={handleSubmit(handlerSignInButton)}
              disable={!isValid || isSubmitting}
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
        <IonLoading isOpen={loading} translucent />
        <div className="max-w-screen-md mx-auto p-4 h-full">
          {hasErrors != "" && (
            <p className="text-red-600 bg-red-100 px-6 py-3 my-2">{hasErrors}</p>
          )}
          <form>
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
          </form>
          <div className="flex justify-end pt-6">
            <Button
              handler={handlerForgetPasswordButton}
              label={"¿Has olvidado tu contraseña?"}
              type={"Link"}
            />
          </div>
        </div>
      </Scaffold>
    );
  }
};

export default SignIn;