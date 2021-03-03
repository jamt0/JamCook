import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../../components/Button/Button";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Scaffold from "../../../components/Scaffold/Scaffold";

const opcionesGroup = [
  {
    "descripcion" : "Comer más equilibrado y sano",
    "value": "1",
  },
  {
    "descripcion" : "Descubri nuevas recetas",
    "value": "2",
  },
  {
    "descripcion" : "Mejorar mis habilidades de cocina",
    "value": "3",
  },
]

const MyObjectives: React.FC<RouteComponentProps> = ({ history }) => {
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
      tituloHeader="Mis Objetivos"
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
          ¿Qué objetivos persigues?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Así podremos mejorar las recomendaciones para ti.
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="3"/>
      </div>
    </Scaffold>
  );
};

export default MyObjectives;