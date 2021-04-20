import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import {useHistory} from 'react-router';
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import { useForm } from "react-hook-form";
import Server from "server";

let defaultValues = {
  newPassword: "",
  ConfirmPassword: "",
};

const NewPassword: React.FC = ( ) => {

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
    //HAY QUE CREAR EL METODO
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
      message: textos["campo_contrasena_min"]
    },
  };

  //HAY QUE COMPARAR LAS CONTRASEÑAS
  const rulesConfirmPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"]
    },
  };

  return (
    <Scaffold
      tituloHeader={textos["contrasena_restablecer"]}
      footer={
        <div className="p-2 mb-2 max-w-screen-md mx-auto">
          <Button
            handler={handleSubmit(handlerNewPasswordButton)}
            label={textos["contrasena_restablecer"]}
            disable={!isValid || isSubmitting}
          />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent />
      <div className="max-w-screen-md mx-auto p-4 h-full">
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
      </div>
    </Scaffold>
  );
};

export default NewPassword;
