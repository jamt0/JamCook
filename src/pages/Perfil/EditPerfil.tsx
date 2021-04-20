import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";
import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useForm } from "react-hook-form";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";
import config from "config/general";

let defaultValues = {
  name: "",
  ageId: "",
  genderId: "",
  email: "",
};

interface IUser {
  name: string;
  ageId: string;
  genderId: string;
  email: string;
}

const EditPerfil: React.FC = () => {
  
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(
    `${config.baseURL}/images/avatars/default.png`
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [optionsAges, setOptionsAges] = useState();
  const [optionsGenders, setOptionsGenders] = useState();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<IUser>({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerSaveEditButton = async (user: IUser) => {
    if (auth.user?.id) {
      setLoading(true);
      const errorUpdate = await Server.putUser(auth.user.id, user);
      if (errorUpdate.data.error != null) {
        setHasErrors(errorUpdate.data.error);
        setLoading(false);
      } else {
        history.replace("/home/perfil");
        setLoading(false);
      }
    }
  };

  const fileChangedHandler = async (e: any) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        setAvatarImageUrl(event?.target?.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    const imageAvatar = new FormData();
    imageAvatar.append("avatarImage", e.target.files[0]);

    if (auth.user?.id) {
      setLoading(true);
      const errorUpdateAvatar = await Server.putImageAvatar(
        auth.user.id,
        imageAvatar
      );
      if (errorUpdateAvatar.data.error) {
        setHasErrors(errorUpdateAvatar.data.error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    //ACA TOCA MIRAR COMO HACER PARA SINCRONIZAR EL LOADING
    //ADEMAS LO IDEAL ES QUE ESTEN LAS OPCIONES PARA PODER PONER LA DEL USER
    Server.getGenders()
      .then((response) => {
        if (!response.data.error) {
          setOptionsGenders(response.data.options);
        } else {
          setHasErrors(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    Server.getAges()
      .then((response) => {
        if (!response.data.error) {
          setOptionsAges(response.data.options);
        } else {
          setHasErrors(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (auth.user?.id) {
      setLoading(true);
      Server.getUser(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            reset({
              name: String(response.data.user.name),
              email: String(response.data.user.email),
              ageId: String(response.data.user.ageId),
              genderId: String(response.data.user.genderId),
            });
            setLoading(false);
          } else {
            setHasErrors(response.data.error);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      Server.getImageAvatar(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            setAvatarImageUrl(`${config.baseURL}/${response.data.path}`);
          } else {
            setHasErrors(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const rulesAge = {
    required: textos["campo_requerido"],
  };

  const rulesGender = {
    required: textos["campo_requerido"],
  };

  const rulesName = {
    required: textos["campo_requerido"],
    minLength: {
      value: 3,
      message: textos["campo_nombre_min"],
    },
  };

  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"],
    },
  };

  console.log("soy la page edit perfil");

  return (
    <Scaffold
      tituloHeader={textos["perfil_editar"]}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button
            handler={handleSubmit(handlerSaveEditButton)}
            disable={!isValid || isSubmitting}
            label={textos["guardar"]}
          />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent />
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
      )}
      <Center direccion="col" className="mt-8">
        <Avatar avatarUser={avatarImageUrl} tamaño="20" responsive="60" />
        <div className="mt-4">
          <label className="" htmlFor="inputAvatar">
            {textos["perfil_edit_cambiar_avatar"]}
          </label>
        </div>
      </Center>
      <div className="m-4 max-w-screen-md mx-auto">
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          id="inputAvatar"
          onChange={fileChangedHandler}
          className="hidden"
        />
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.name}
          name="name"
          type="name"
          label={textos["campo_nombre"]}
          rules={rulesName}
        />
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.email}
          name="email"
          type="email"
          label={textos["campo_correo"]}
          rules={rulesEmail}
        />
        <Select
          control={control}
          errors={errors}
          defaultValue={defaultValues.ageId}
          options={optionsAges}
          name="ageId"
          label={textos["campo_edad"]}
          rules={rulesAge}
        />
        <Select
          control={control}
          errors={errors}
          defaultValue={defaultValues.genderId}
          options={optionsGenders}
          name="genderId"
          label={textos["campo_genero"]}
          rules={rulesGender}
        />
      </div>
    </Scaffold>
  );
};

export default EditPerfil;
