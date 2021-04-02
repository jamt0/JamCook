import {
  IonAlert,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonModal,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Center from "../../components/Center/Center";
import Scaffold from "../../components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useForm } from "react-hook-form";
import Input from "components/Input/Input";
import Select from "components/Select/Select";

const usuario = {
  avatarUser: "https://picsum.photos/200/300?random=1"
};

let defaultValues = {
  email: "",
  password: "",
  age: "",
};

interface IUser {
  email: String;
  password: String;
  age: String;
}

const EditPerfil: React.FC = () => {

  const history = useHistory();

  const { signIn, auth, loading } = useAuth()!;

  const [hasErrors, setHasErrors] = useState<string>("");

  const [initialValue, setinitialValue] = useState(defaultValues)

  const [showAlert, setShowAlert] = useState(false);

  const {
    control,
    handleSubmit,
    errors,
    setValue,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    // defaultValues: { defaultValues },
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerSignInButton = async (user: IUser) => {
    console.log("click");
    console.log(user);
  };

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  useEffect(() => {
    setValue("email", "valorNuevo@gmail.com");
    setValue("age", "5");
    reset({
      email: "valorNuevo2@gmail.com",
      age: "3"
    });
    setinitialValue({
      email: "valorNuevo2@gmail.com",
      age: "3",
      password: "1234"
    })
  }, [reset])

  console.log(isValid);

  return (
    <Scaffold
      tituloHeader="Editar perfil"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button
            handler={handleSubmit(handlerSignInButton)}
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
      <form onSubmit={handleSubmit(handlerSignInButton)}>
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
          <Input control={control} errors={errors} defaultValue={initialValue.email} setValue={setValue}/>
          <Select control={control} errors={errors} defaultValue={initialValue.age} setValue={setValue}/>
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
              console.log("Camaara");
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
