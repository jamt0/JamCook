import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../../components/Button/Button";
import ChipGroup from "../../../components/ChipGroup/ChipGroup";
import Scaffold from "../../../components/Scaffold/Scaffold";
import {useHistory} from 'react-router';

const ingredientes = [
  {
    id: "1",
    ingrediente: "Huevo",
    outline: false
  },
  {
    id: "2",
    ingrediente: "Marisco",
    outline: true
  },
  {
    id: "3",
    ingrediente: "Lactosa",
    outline: true
  },
  {
    id: "4",
    ingrediente: "Gluten",
    outline: true
  },
  {
    id: "5",
    ingrediente: "Frutos Secos",
    outline: true
  },
];

const Allergies: React.FC<RouteComponentProps> = ( ) => {

  const history = useHistory();

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  return (
    <Scaffold
      tituloHeader="Alergias e intolerancias"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿Tienes alguna alergia o intolerancia?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Así podremos filtrar en tus busquedas las recetas que tengan estos
          ingredientes.
        </p>
        <ChipGroup ingredientes={ingredientes}/>
      </div>
    </Scaffold>
  );
};

export default Allergies;
