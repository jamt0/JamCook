import {
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Scaffold from "../../components/Scaffold/Scaffold";
import {useHistory} from 'react-router';

const ContactUs: React.FC<RouteComponentProps> = ( ) => {

  const history = useHistory();

  const handlerSendButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [asunto, setAsunto] = useState("1");

  return (
    <Scaffold
      tituloHeader="Contacto"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSendButton} label={"Enviar Mensaje"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿En qué podemos ayudarte?
        </h6>
        <IonItem className="mb-4">
          <IonLabel position="floating" color="primary">
            Correo Electrónico (Opcional)
          </IonLabel>
          <IonInput
            value={mail}
            type="email"
            autocomplete="email"
            className="mt-2"
            required
          ></IonInput>
        </IonItem>
        <IonItem className="mb-4">
          <IonLabel position="floating" color="primary">
            Escoge un asunto
          </IonLabel>
          <IonSelect value={asunto} interface="action-sheet">
            <IonSelectOption value="1">Algo no funciona</IonSelectOption>
            <IonSelectOption value="2">Propón nuevas recetas / categorias</IonSelectOption>
            <IonSelectOption value="3">Propón nuevos tips</IonSelectOption>
            <IonSelectOption value="4">Propón nuevas funciones</IonSelectOption>
            <IonSelectOption value="5">Conviérte en Partner</IonSelectOption>
            <IonSelectOption value="6">Otros</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="primary">
            Tu mensaje
          </IonLabel>
          <IonTextarea
            placeholder="¿Como podemos servirte?"
            rows={4}
            value={text}
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonTextarea>
        </IonItem>
      </div>
    </Scaffold>
  );
};

export default ContactUs;
