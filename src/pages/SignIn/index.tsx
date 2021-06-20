import React from "react";
import View from "./view";
import { useAuth } from "context/auth";
import { useTranslation } from 'react-i18next';
import { rulesEmail, rulesPassword } from "utils/rulesValidation";
import { TUserSignIn } from "models";
import namesRoutes from "routes/names";
import useShowTabs from "hooks/useShowTabs";
import useForm from "hooks/useForm";

const SignIn: React.FC = () => {
  const { signIn } = useAuth()!;
  const { t } = useTranslation();

  useShowTabs(false);

  const { formHook, errores, loading, handler } = useForm<TUserSignIn>({
    dataFech: signIn,
    route: namesRoutes.home,
  });

  const defaultValues = { email: "", password: "" };

  const rules = {
    rulesEmail: rulesEmail(t),
    rulesPassword: rulesPassword(t),
  };

  return (
    <View
      rules={rules}
      handlerSignInButton={handler}
      texts={t}
      errores={errores}
      loading={loading}
      formHook={formHook}
      defaultValues={defaultValues}
    />
  );
};

export default SignIn;
