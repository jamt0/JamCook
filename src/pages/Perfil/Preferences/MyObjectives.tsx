import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import Title from "components/Text/Title";
import { useHistory } from "react-router";
import { IonLoading } from "@ionic/react";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import Server from "server";

type Radio = {
  radio: string;
};

const MyObjectives: React.FC = () => {
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [options, setOptions] = useState();
  const [optionUser, setOptionUser] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasErrors, setHasErrors] = useState<string>("");

  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const handlerSaveEditButton = (data: Radio) => {
    history.goBack();
  };

  useEffect(() => {
    setLoading(true);
    Server.getObjectives()
      .then((response) => {
        if (!response.data.error) {
          setOptions(response.data.options);
          setLoading(false);
        } else {
          setHasErrors(response.data.error);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    if (auth.user?.id) {
      Server.getObjectivesUser(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            setOptionUser(response.data.option);
            setLoading(false);
          } else {
            setHasErrors(response.data.error);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <Scaffold>
      <Scaffold.Header title={textos["preferencias_mis_objetivos"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
        )}
        <Title>{textos["objetivos_header"]}</Title>
        <SubTitle className="mb-8 mt-2" color="medium">
          {textos["objetivos_sub_header"]}
        </SubTitle>
        <RadioGroup
          control={control}
          options={options}
          defaultOption={optionUser}
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

export default MyObjectives;
