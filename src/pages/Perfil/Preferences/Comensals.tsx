import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import Title from "components/Text/Title";
import SubTitle from "components/Text/SubTitle";
import Counter from "layouts/Counter/Counter";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import Server from "server";

type Radio = {
  radio: string;
};

const Comensals: React.FC = () => {
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [amountUser, setAmountUser] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasErrors, setHasErrors] = useState<string>("");

  const defaultValue = amountUser > 1 ? "2" : "1";

  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const watchRadio = watch("radio", defaultValue);

  const options = [
    {
      description: "No, yo me lo guiso, yo me lo como",
      value: "1",
    },
    {
      description: "Si, comparto mantel con:",
      value: "2",
    },
  ];

  const handlerSaveEditButton = (data: Radio) => {
    //aca se enviarian los datos a la base
    history.goBack();
  };

  useEffect(() => {
    if (auth.user?.id) {
      setLoading(true);
      Server.getComensalsUser(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            setAmountUser(response.data.amount);
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

  console.log("soy la page comensales")

  return (
    <Scaffold>
      <Scaffold.Header title={textos["preferencias_numero_comensales"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
        )}
        <Title>{textos["comensales_header"]}</Title>
        <SubTitle className="mb-8 mt-2" color="medium">
          {textos["comensales_sub_header"]}
        </SubTitle>
        <RadioGroup
          control={control}
          options={options}
          defaultOption={defaultValue}
        />
        { watchRadio== "2" && <Counter portions={amountUser} setPortions={setAmountUser} />}
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handleSubmit(handlerSaveEditButton)}>
          {textos["guardar"]}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default Comensals;
