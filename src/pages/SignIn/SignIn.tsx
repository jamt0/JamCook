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
      message: textos["campo_contrasena_min"],
    },
  };

  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"],
    },
  };

  console.log("soy la page login");

  if (auth.loggedIn) {
    return <Redirect to="/home" />;
  } else {
    return (
      <Scaffold>
        <Scaffold.Header title={textos["signin_iniciar_sesion"]}>
          <Scaffold.Header.BackAction />
        </Scaffold.Header>
        <Scaffold.Content>
          <IonLoading isOpen={loading} translucent />
          {hasErrors != "" && (
            <p className="text-red-600 bg-red-100 px-6 py-3 my-2">
              {hasErrors}
            </p>
          )}
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
            label={textos["campo_contrasena"]}
            rules={rulesPassword}
          />
          <div className="flex justify-end pt-6">
            <Button onClick={handlerForgetPasswordButton} color="light">
              {textos["signin_olvido_contraseña"]}
            </Button>
          </div>
        </Scaffold.Content>
        <Scaffold.Footer>
          <Button
            onClick={handleSubmit(handlerSignInButton)}
            disabled={!isValid || isSubmitting}
          >
            {textos["signin_iniciar_sesion"]}
          </Button>
          <div className="flex justify-center py-2">
            <p className="mr-1">{textos["signin_no_tiene_cuenta"]}</p>
            <Button onClick={handlerSignUpButton} color="light">
              {textos["signup_registrate"]}
            </Button>
          </div>
        </Scaffold.Footer>
      </Scaffold>
    );
  }
};

export default SignIn;
