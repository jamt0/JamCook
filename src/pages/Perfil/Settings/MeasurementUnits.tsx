import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";

const MeasurementUnits: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.replace("/perfil/settings");
  };

  const options = [
    {
      descripcion: textos["unidades_medida_gramos"],
      value: "1",
    },
    {
      descripcion: textos["unidades_medida_onzas"],
      value: "2",
    },
  ];

  console.log("soy la page unidades de medida")

  return (
    <Scaffold>
      <Scaffold.Header title={textos["unidades_medida"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["unidades_medida_escoge"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption="1" />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handlerSaveEditButton}>{textos["guardar"]}</Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default MeasurementUnits;
