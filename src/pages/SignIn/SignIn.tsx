import React from "react";
import SignInView from "pages/SignIn/SignInView";
import { useAuth } from "context/auth";
import { useSettingsUser } from "context/settingsUser";
import { rulesEmail, rulesPassword } from "utils/rulesValidation";
import { TUserSignIn } from "utils/types";
import RoutesPath from "utils/routesPath";
import useShowTabs from "hooks/useShowTabs";
import useForm from "hooks/useForm";

const SignIn: React.FC = () => {
  const { signIn } = useAuth()!;
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  const { formHook, errores, loading, handler } = useForm<TUserSignIn>({
    dataFech: signIn,
    route: RoutesPath.home,
  });

  const defaultValues = { email: "", password: "" };

  const rules = {
    rulesEmail: rulesEmail(textos),
    rulesPassword: rulesPassword(textos),
  };

  return (
    <SignInView
      rules={rules}
      handlerSignInButton={handler}
      textos={textos}
      errores={errores}
      loading={loading}
      formHook={formHook}
      defaultValues={defaultValues}
    />
  );
};

export default SignIn;
