import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";

const options = [
  {
    descripcion: "No, yo me lo guiso, yo me lo como",
    value: "1",
  },
  {
    descripcion: "Si, comparto mantel con:",
    value: "2",
  },
];

const Comensals: React.FC = () => {
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [amountUser, setAmountUser] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasErrors, setHasErrors] = useState<string>("");

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/perfil/preferences");
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
        <h6 className="text-2xl font-bold text-center">
          {textos["comensales_header"]}
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["comensales_sub_header"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption="1" />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handlerSaveEditButton}>{textos["guardar"]}</Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default Comensals;
