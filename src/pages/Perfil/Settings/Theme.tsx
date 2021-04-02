import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';

const opcionesGroup = [
  {
    "descripcion" : "Claro",
    "value": "1",
  },
  {
    "descripcion" : "Oscuro",
    "value": "2",
  },
]

const Theme: React.FC = ( ) => {

  const history = useHistory();

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.replace("/perfil/settings");
  };

  return (
    <Scaffold
      tituloHeader="Configuraciones"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Escoge el tema para la aplicación.
        </p>
        <RadioGroup opcionesGroup={opcionesGroup} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default Theme;