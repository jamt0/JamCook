import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';
import { useSettingsUser } from "context/settingsUser";

const Theme: React.FC = ( ) => {

  const history = useHistory();
  const { textos, setTheme } = useSettingsUser()!;

  const options = [
    {
      "descripcion" : textos["tema_claro"],
      "value": "1",
    },
    {
      "descripcion" : textos["tema_oscuro"],
      "value": "2",
    },
  ]
  
  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    setTheme('2');
    history.replace("/perfil/settings");
  };

  return (
    <Scaffold
      tituloHeader={textos["tema"]}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={textos["guardar"]} />
        </div>
      }
    >
      <div className="max-w-screen-md mx-auto p-4">
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["tema_escoge"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default Theme;