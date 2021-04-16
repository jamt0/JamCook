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
  email: "",
  password: "",
};

interface IUser {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const history = useHistory();
  const { signIn, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm<IUser>({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerSignInButton = async (user: IUser) => {
    const errorSignIn = await signIn(user);
    if (errorSignIn != null) {
      setHasErrors(errorSignIn);
    } else {
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

  const rulesPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"]
    },
  };
  
  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"]
    },
  };

  console.log("soy la page login");

  if(auth.loggedIn) {
    return <Redirect to="/home" />;
  }else{
    return (
      <Scaffold
        tituloHeader={textos["signin_iniciar_sesion"]}
        footer={
          <div className="p-2 max-w-screen-md mx-auto">
            <Button
              label={textos["signin_iniciar_sesion"]}
              handler={handleSubmit(handlerSignInButton)}
              disable={!isValid || isSubmitting}
            />
            <div className="flex justify-center py-2">
              <p className="mr-1">{textos["signin_no_tiene_cuenta"]}</p>
              <Button
                handler={handlerSignUpButton}
                label={textos["signup_registrate"]}
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
          </form>
          <div className="flex justify-end pt-6">
            <Button
              handler={handlerForgetPasswordButton}
              label={textos["signin_olvido_contraseña"]}
              type={"Link"}
            />
          </div>
        </div>
      </Scaffold>
    );
  }
};

export default SignIn;