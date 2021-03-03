import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../../components/Button/Button";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Scaffold from "../../../components/Scaffold/Scaffold";

const opcionesGroup = [
  {
    "descripcion" : "No, ninguna dieta",
    "value": "1",
  },
  {
    "descripcion" : "Soy vegetariano, sigo una dieta sin carne",
    "value": "2",
  },
  {
    "descripcion" : "Soy pescatariano, no como carne pero sí pescado",
    "value": "3",
  },
  {
    "descripcion" : "Soy vegano, solo alimentos de origen vegetal",
    "value": "4",
  },
]

const Diet: React.FC<RouteComponentProps> = ({ history }) => {
  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/perfil/preferences");
  };

  return (
    <Scaffold
      tituloHeader="Dieta"
      onClickBack={handlerGoBackButton}
      routeBack="/perfil/preferences"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿Sigues alguna dieta?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Indícalo para que podamos mostrarte recetas personalizadas. 
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="3"/>
      </div>
    </Scaffold>
  );
};

export default Diet;