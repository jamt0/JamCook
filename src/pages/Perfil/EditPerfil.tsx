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

const opcionesEdad = [
  { value: "1", label: "Menos de 25" },
  { value: "2", label: "25-29" },
  { value: "3", label: "30-34" },
  { value: "4", label: "35-39" },
  { value: "5", label: "40-45" },
  { value: "6", label: "45-49" },
  { value: "7", label: "50-64" },
  { value: "8", label: "65+" },
];

const opcionesGenero = [
  { value: "1", label: "Mujer" },
  { value: "2", label: "Hombre" },
  { value: "3", label: "Otro" },
  { value: "4", label: "Prefiero no decirlo" },
];

const rulesEdad = {
  required: "Este campo es obligatorio",
};

const rulesGenero = {
  required: "Este campo es obligatorio",
};

const rulesNombre = {
  required: "Este campo es obligatorio",
  minLength: {
    value: 3,
    message: "El nombre debe tener minimo 3 caracteres",
  },
};

const rulesEmail = {
  required: "Este campo es obligatorio",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Correo electrónico invalido",
  },
};

const EditPerfil: React.FC = () => {

  const history = useHistory();
  const { auth } = useAuth()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(`${config.baseURL}/images/avatars/default.png`);
  const [loading, setLoading] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors }
  } = useForm<IUser>({
    defaultValues: defaultValues,
    mode: "onChange"
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

  const fileChangedHandler = async (e : any) => {
    const reader = new FileReader();
    reader.onload = (event) =>{
    if(reader.readyState === 2){
        setAvatarImageUrl(event?.target?.result);
      }
    }
    reader.readAsDataURL(e.target.files[0]);

    const imageAvatar = new FormData()
    imageAvatar.append(
      "avatarImage",
      e.target.files[0]
    )

    if (auth.user?.id) {
      setLoading(true);
      const errorUpdateAvatar = await Server.putImageAvatar(auth.user.id, imageAvatar);
      if (errorUpdateAvatar.data.error) {
        setHasErrors(errorUpdateAvatar.data.error);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    if (auth.user?.id) {
      setLoading(true);
      Server.getUser(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            reset({
              name: String(response.data.user.name),
              email: String(response.data.user.email),
              ageId: String(response.data.user.ageId),
              genderId: String(response.data.user.genderId)
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
          }else{
            setHasErrors(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  console.log("soy la page edit perfil");

  return (
    <Scaffold
      tituloHeader="Editar perfil"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button
            handler={handleSubmit(handlerSaveEditButton)}
            disable={!isValid || isSubmitting}
            label={"Guardar"}
          />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent/>
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
      )}
      <form onSubmit={handleSubmit(handlerSaveEditButton)}>
        <Center direccion="col" className="mt-8">
          <Avatar avatarUser={avatarImageUrl} tamaño="20" responsive="60" />
          <div className="mt-4">
            <label className="" htmlFor="inputAvatar" >
              Cambiar imagen
            </label>
          </div>
        </Center>
        <div className="m-4 max-w-screen-md mx-auto">
          <input type="file" accept=".jpg, .jpeg, .png" id="inputAvatar" onChange={fileChangedHandler} className="hidden"/>
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.name}
            name="name"
            type="name"
            label="Nombre"
            rules={rulesNombre}
          />
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.email}
            name="email"
            type="email"
            label="Correo Electrónico"
            rules={rulesEmail}
          />
          <Select
            control={control}
            errors={errors}
            defaultValue={defaultValues.ageId}
            opciones={opcionesEdad}
            name="ageId"
            label="Edad"
            rules={rulesEdad}
          />
          <Select
            control={control}
            errors={errors}
            defaultValue={defaultValues.genderId}
            opciones={opcionesGenero}
            name="genderId"
            label="Genero"
            rules={rulesGenero}
          />
        </div>
      </form>
    </Scaffold>
  );
};

export default EditPerfil;