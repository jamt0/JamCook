import { IonButton, IonModal } from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../../components/Button/Button";
import ChipGroup from "../../../components/ChipGroup/ChipGroup";
import Searcher from "../../../components/Searcher/Searcher";
import Scaffold from "../../../components/Scaffold/Scaffold";

const ingredientes = [
  {
    id: "1",
    ingrediente: "Brócoli",
    outline: false,
  },
  {
    id: "2",
    ingrediente: "Coliflor",
    outline: true,
  },
  {
    id: "3",
    ingrediente: "Pescado",
    outline: true,
  },
  {
    id: "4",
    ingrediente: "Pepino",
    outline: true,
  },
  {
    id: "5",
    ingrediente: "Alcachofa",
    outline: true,
  },
  {
    id: "6",
    ingrediente: "Queso",
    outline: true,
  },
  {
    id: "7",
    ingrediente: "Tomate",
    outline: true,
  },
  {
    id: "8",
    ingrediente: "Berenjena",
    outline: true,
  },
  {
    id: "9",
    ingrediente: "Guisante",
    outline: true,
  },
];

const DislikeIngredient: React.FC<RouteComponentProps> = ({ history }) => {
  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <Scaffold
      tituloHeader="Ingredientes"
      onClickBack={handlerGoBackButton}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿Qué ingredientes te disgustan?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Indícanos que ingredientes no te gustan para filtrarlos en las
          búsquedas que realices.
        </p>
        <ChipGroup ingredientes={ingredientes} />
        <div className="ml-4 mt-4">
          <Button
            label="Ver más"
            type="Link"
            handler={() => setShowModal(true)}
          />
        </div>
        <IonModal isOpen={showModal} >
          <Searcher placeHolder={"¿Qué ingrediente te disgusta?"} />
          <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
        </IonModal>
      </div>
    </Scaffold>
  );
};

export default DislikeIngredient;
