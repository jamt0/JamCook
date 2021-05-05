import React from "react";
import SignUpView from "pages/SignUp/SignUpView";
import { useAuth } from "context/auth";
import { useSettingsUser } from "context/settingsUser";
import { rulesEmail, rulesPassword, rulesName } from "utils/rulesValidation";
import { TUserSignUp } from "utils/types";
import RoutesPath from "utils/routesPath";
import useShowTabs from "hooks/useShowTabs";
import useForm from "hooks/useForm";

const SignUp: React.FC = () => {
  const { signUp } = useAuth()!;
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  const { formHook, errores, loading, handler } = useForm<TUserSignUp>({
    dataFech: signUp,
    route: RoutesPath.home,
  });

  const defaultValues = { name: "", email: "", password: "" };

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
      handlerSignUpButton={handler}
      formHook={formHook}
    />
  );
};

export default SignUp;
