import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../../components/Button/Button";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Scaffold from "../../../components/Scaffold/Scaffold";
import {useHistory} from 'react-router';

const opcionesGroup = [
  {
    "descripcion" : "¿El huevo tibio cuenta?",
    "value": "1",
  },
  {
    "descripcion" : "Me defiendo con recetas sencillas",
    "value": "2",
  },
  {
    "descripcion" : "Me gusta experimentar",
    "value": "3",
  },
]

const CookingLevel: React.FC<RouteComponentProps> = ( ) => {
  
  const history = useHistory();

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/perfil/preferences");
  };

  return (
    <Scaffold
      tituloHeader="Mi nivel de cocina"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿Cuál es tu nivel de cocina?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Escoge tu nivel. ¿Eres un experto o aún se te quema el agua?
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="3"/>
      </div>
    </Scaffold>
  );
};

export default CookingLevel;