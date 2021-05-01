import React, { useEffect, useState } from "react";
import CommensalsView from "pages/Perfil/Preferences/Commensals/CommensalsView";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";
import Server from "server";

const Commensals: React.FC = () => {
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [amountUser, setAmountUser] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [errores, setErrores] = useState<string>("");

  const defaultValues = amountUser > 1 ? "2" : "1";

  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const watchRadio = watch("radio", defaultValues);

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

  const handlerSaveEditButton = (radio: TRadio) => {
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
            setErrores(response.data.error);
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
    <CommensalsView
      textos={textos}
      formHook={{ control, handleSubmit }}
      defaultValues={defaultValues}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
      loading={loading}
      errores={errores}
      watchRadio={watchRadio}
      amountUser={amountUser}
      setAmountUser={setAmountUser}
    />
  );
};

export default Commensals;
