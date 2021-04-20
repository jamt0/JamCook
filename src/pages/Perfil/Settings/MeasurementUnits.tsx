import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';
import { useSettingsUser } from "context/settingsUser";

const MeasurementUnits: React.FC = ( ) => {

  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.replace("/perfil/settings");
  };

  const options = [
    {
      "descripcion" : textos["unidades_medida_gramos"],
      "value": "1",
    },
    {
      "descripcion" : textos["unidades_medida_onzas"],
      "value": "2",
    }
  ]

  return (
    <Scaffold
      tituloHeader={textos["unidades_medida"]}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={textos["guardar"]} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["unidades_medida_escoge"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default MeasurementUnits;