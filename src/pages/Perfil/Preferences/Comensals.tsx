import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../../components/Button/Button";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Scaffold from "../../../components/Scaffold/Scaffold";

const opcionesGroup = [
  {
    "descripcion" : "No, yo me lo guiso, yo me lo como",
    "value": "1",
  },
  {
    "descripcion" : "Si, comparto mantel con:",
    "value": "2",
  },
]

const Comensals: React.FC<RouteComponentProps> = ({ history }) => {
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
      tituloHeader="Número de comensales"
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
          ¿Cocinas para alguien más?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Así podremos recomendarte platos con las porciones adecuadas.
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default Comensals;