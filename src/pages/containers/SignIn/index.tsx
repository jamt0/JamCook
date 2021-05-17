import React from "react";
import { SignInView } from "pages/layouts";
import { useAuth } from "context/auth";
import { useSettingsUser } from "context/settingsUser";
import { rulesEmail, rulesPassword } from "utils/rulesValidation";
import { TUserSignIn } from "utils/types";
import RoutesPath from "routes";
import useShowTabs from "hooks/useShowTabs";
import useForm from "hooks/useForm";

const SignIn: React.FC = () => {
  const { signIn } = useAuth()!;
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  const { formHook, errores, loading, handler } = useForm<TUserSignIn>({
    dataFech: signIn,
    route: RoutesPath.home,
  });

  const defaultValues = { email: "", password: "" };

  const rules = {
    rulesEmail: rulesEmail(texts),
    rulesPassword: rulesPassword(texts),
  };

  return (
    <SignInView
      rules={rules}
      handlerSignInButton={handler}
      texts={texts}
      errores={errores}
      loading={loading}
      formHook={formHook}
      defaultValues={defaultValues}
    />
  );
};

export default SignIn;
