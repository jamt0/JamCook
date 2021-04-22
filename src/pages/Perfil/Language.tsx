import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";

const Lenguage: React.FC = () => {
  const history = useHistory();
  const { textos, setLanguage } = useSettingsUser()!;

  const options = [
    {
      descripcion: textos["idioma_dispositivo"],
      value: "1",
    },
    {
      descripcion: textos["idioma_espanol"],
      value: "2",
    },
    {
      descripcion: textos["idioma_ingles"],
      value: "3",
    },
  ];

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    setLanguage("en");
    history.push("/home/perfil");
  };

  return (
    <Scaffold>
      <Scaffold.Header title={textos["idioma"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["idioma_escoge"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption="1" />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handlerSaveEditButton}>{textos["guardar"]}</Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default Lenguage;
