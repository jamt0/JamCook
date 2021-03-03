import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import Scaffold from "../../components/Scaffold/Scaffold";

const opcionesGroup = [
  {
    "descripcion" : "Métricas (gramos)",
    "value": "1",
  },
  {
    "descripcion" : "US (onzas)",
    "value": "2",
  },
]

const Settings: React.FC<RouteComponentProps> = ({ history }) => {
  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  return (
    <Scaffold
      tituloHeader="Configuraciones"
      onClickBack={handlerGoBackButton}
      routeBack="/home/perfil"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Escoge en qué unidades de medida prefieres que te mostremos la cantidad de ingredientes que necesitas para cada receta.
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default Settings;