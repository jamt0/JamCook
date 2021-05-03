import React, { useState } from "react";
import SignUpView from "pages/SignUp/SignUpView";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "context/auth";
import { useSettingsUser } from "context/settingsUser";
import { rulesEmail, rulesPassword, rulesName } from "utils/rulesValidation";
import { TUserSignUp } from "utils/types";
import RoutesPath from "utils/routesPath";
import useShowTabs from "hooks/useShowTabs";

const SignUp: React.FC = () => {
  const { signUp, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");

  useShowTabs(false);

  const defaultValues = { name: "", email: "", password: "" };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
  });

  const handlerSignUpButton = async (user: TUserSignUp) => {
    const errorSignUp = await signUp(user);
    if (errorSignUp != null) setErrores(errorSignUp);
    else return <Redirect to={RoutesPath.home} />;
  };

  const rules = {
    rulesName: rulesName(textos),
    rulesEmail: rulesEmail(textos),
    rulesPassword: rulesPassword(textos),
  };

  return (
    <SignUpView
      rules={rules}
      textos={textos}
      errores={errores}
      loading={loading}
      defaultValues={defaultValues}
      handlerSignUpButton={handlerSignUpButton}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
    />
  );
};

export default SignUp;
