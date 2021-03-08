import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import Scaffold from "../../components/Scaffold/Scaffold";
import {useHistory} from 'react-router';

const opcionesGroup = [
  {
    "descripcion" : "Idioma del dispositivo",
    "value": "1",
  },
  {
    "descripcion" : "Español",
    "value": "2",
  },
  {
    "descripcion" : "English",
    "value": "3",
  },
]

const Lenguage: React.FC<RouteComponentProps> = ( ) => {
  
  const history = useHistory();

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  return (
    <Scaffold
      tituloHeader="Idioma"
      routeBack="/home/perfil"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Escoge en qué idioma quieres que te sorprendamos con nuestras recetas.
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default Lenguage;