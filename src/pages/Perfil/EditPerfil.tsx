import {
  IonAlert,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Center from "../../components/Center/Center";
import Scaffold from "../../components/Scaffold/Scaffold";

const usuario = {
  avatarUser: "https://picsum.photos/200/300?random=1",
  nameUser: "Jonatan Mancera",
  mailUser: "Jamt@gmail.com",
};

const EditPerfil: React.FC<RouteComponentProps> = ({ history }) => {
  
  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  const [showAlert, setShowAlert] = useState(false);
  const [mail, setMail] = useState("jamt@gmail.com");
  const [name, setName] = useState("Jam Avo");
  const [password, setPassword] = useState("UnaputaContra");
  const [gender , setGender ] = useState("1");
  const [age, setAge] = useState("1");

  return (
    <Scaffold
      tituloHeader="Editar perfil"
      onClickBack={handlerGoBackButton}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
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
        <IonItem className="mb-4">
          <IonLabel position="floating" color="primary">
            Nombres
          </IonLabel>
          <IonInput
            value={name}
            type="text"
            autocomplete="name"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <IonItem className="mb-4">
          <IonLabel position="floating" color="primary">
            Edad
          </IonLabel>
          <IonSelect value={age} interface="action-sheet">
            <IonSelectOption value="1">Menos de 25</IonSelectOption>
            <IonSelectOption value="2">25-29</IonSelectOption>
            <IonSelectOption value="3">30-34</IonSelectOption>
            <IonSelectOption value="4">35-39</IonSelectOption>
            <IonSelectOption value="5">40-45</IonSelectOption>
            <IonSelectOption value="6">45-49</IonSelectOption>
            <IonSelectOption value="7">50-64</IonSelectOption>
            <IonSelectOption value="8">65+</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className="mb-4">
          <IonLabel position="floating" color="primary">
            Genero
          </IonLabel>
          <IonSelect value={gender} interface="action-sheet">
            <IonSelectOption value="1">Mujer</IonSelectOption>
            <IonSelectOption value="2">Hombre</IonSelectOption>
            <IonSelectOption value="3">Otro</IonSelectOption>
            <IonSelectOption value="4">Prefiero no decirlo</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className="mb-4">
          <IonLabel position="floating" color="primary">
            Correo Electrónico
          </IonLabel>
          <IonInput
            value={mail}
            type="email"
            autocomplete="email"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="primary">
            Contraseña
          </IonLabel>
          <IonInput
            value={password}
            type="password"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
      </div>
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
