import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import { useForm } from "react-hook-form";
import Server from "server";

let defaultValues = {
  newPassword: "",
  ConfirmPassword: "",
};

const NewPassword: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerNewPasswordButton = async (password: any) => {
    setLoading(true);
    //HAY QUE VER LA FORMA SERCIR TANTO PARA RESTABLECER COMO CAMBIAR
    const errorChangePassword = await Server.changePassword(password);
    if (errorChangePassword.data.error != null) {
      setHasErrors(errorChangePassword.data.error);
      setLoading(false);
    } else {
      history.replace("/home/perfil");
      setLoading(false); //TAL VEZ ESTO HACE QUE NO SE VEA EL DOBLE
    }
  };

  const rulesNewPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"],
    },
  };

  //HAY QUE COMPARAR LAS CONTRASEÑAS
  const rulesConfirmPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"],
    },
  };

  return (
    <Scaffold>
      <Scaffold.Header title={textos["contrasena_restablecer"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3 my-2">{hasErrors}</p>
        )}
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.newPassword}
          name="newPassword"
          type="password"
          label={textos["campo_nueva_contrasena"]}
          rules={rulesNewPassword}
        />
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.ConfirmPassword}
          name="ConfirmPassword"
          type="password"
          label={textos["campo_confirme_contrasena"]}
          rules={rulesConfirmPassword}
        />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button
          onClick={handleSubmit(handlerNewPasswordButton)}
          disabled={!isValid || isSubmitting}
        >
          {textos["contrasena_restablecer"]}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default NewPassword;
