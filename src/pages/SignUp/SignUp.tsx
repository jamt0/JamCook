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
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  const { formHook, errores, loading, handler } = useForm<TUserSignUp>({
    dataFech: signUp,
    route: RoutesPath.home,
  });

  const defaultValues = { name: "", email: "", password: "" };

  const rules = {
    rulesName: rulesName(texts),
    rulesEmail: rulesEmail(texts),
    rulesPassword: rulesPassword(texts),
  };

  return (
    <SignUpView
      rules={rules}
      texts={texts}
      errores={errores}
      loading={loading}
      defaultValues={defaultValues}
      handlerSignUpButton={handler}
      formHook={formHook}
    />
  );
};

export default SignUp;
