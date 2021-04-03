import React, { useEffect, useState } from "react";
import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import { IonAlert, IonLoading } from "@ionic/react";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useForm } from "react-hook-form";
import Server from "server";

const usuario = {
  avatarUser: "https://picsum.photos/200/300?random=1",
};

let defaultValues = {
  name: "",
  age: "",
  gender: "",
  email: "",
};

interface IUser {
  name: string;
  age: string;
  gender: string;
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

  const { auth, loading } = useAuth()!;

  const [hasErrors, setHasErrors] = useState<string>("");

  const [showAlert, setShowAlert] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
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
    console.log("click");
    console.log(user);
    // history.push("/home/perfil");
  };

  useEffect(() => {
    if (auth.user?.id) {
      Server.getUser(auth.user.id)
        .then((response) => {
          console.log(response.data);
          if (!response.data.error) {
            setValue("name", "value prueba", { shouldValidate: true });
            setValue("email", "value3@gmail.com", { shouldValidate: true });
            setValue("age", "1", { shouldValidate: true });
            setValue("gender", "1", { shouldValidate: true });
            reset({
              name: "jon",
              email: "jon@gmail.com",
              age: "8",
              gender: "4"
            });
          } else {
            setHasErrors(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
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
      <IonLoading isOpen={loading} translucent />
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3 my-2">{hasErrors}</p>
      )}
      <form onSubmit={handleSubmit(handlerSaveEditButton)}>
        <Center direccion="col" className="mt-8">
          <Avatar avatarUser={usuario.avatarUser} tamaño="20" responsive="60" />
          <div className="mt-4">
            <Button
              handler={() => setShowAlert(true)}
              label="Cambiar imagen"
              type="Link"
            />
          </div>
        </Center>
        <div className="max-w-screen-md m-4">
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
            defaultValue={defaultValues.age}
            opciones={opcionesEdad}
            name="age"
            label="Edad"
            rules={rulesEdad}
          />
          <Select
            control={control}
            errors={errors}
            defaultValue={defaultValues.gender}
            opciones={opcionesGenero}
            name="gender"
            label="Genero"
            rules={rulesGenero}
          />
        </div>
      </form>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Cambiar imagen"}
        message={"Haz una foto o elige una de tu galeria."}
        buttons={[
          {
            text: "Camara",
            handler: () => {
              console.log("Camara");
            },
          },
          {
            text: "Galeria",
            handler: () => {
              console.log("Galeria");
            },
          },
        ]}
      />
    </Scaffold>
  );
};

export default EditPerfil;