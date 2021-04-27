import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";

type Radio = {
  radio: string;
};

const Lenguage: React.FC = () => {
  const history = useHistory();
  const { textos, setLanguage, language } = useSettingsUser()!;

  const defaultValue = language == "en" ? "2" : "1";

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const options = [
    {
      description: textos["idioma_espanol"],
      value: "1",
    },
    {
      description: textos["idioma_ingles"],
      value: "2",
    },
  ];

  const handlerSaveEditButton = (data: Radio) => {
    if (data.radio == "2") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
    history.goBack();
  };

  console.log("soy la page lenguaje");

  return (
    <Scaffold>
      <Scaffold.Header title={textos["idioma"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <SubTitle className="mb-8 mt-2" color="medium">
          {textos["idioma_escoge"]}
        </SubTitle>
        <RadioGroup
          control={control}
          options={options}
          defaultOption={defaultValue}
        />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handleSubmit(handlerSaveEditButton)}>
          {textos["guardar"]}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default Lenguage;
