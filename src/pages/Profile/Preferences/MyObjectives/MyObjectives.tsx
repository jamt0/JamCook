import React, { useEffect, useState } from "react";
import MyObjectivesView from "pages/Profile/Preferences/MyObjectives/MyObjectivesView";
import { useHistory } from "react-router";
import { useAuth } from "context/auth";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";
import Server from "server";
import useShowTabs from "hooks/useShowTabs";

const MyObjectives: React.FC = () => {
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [options, setOptions] = useState();
  const [optionUser, setOptionUser] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [errores, setErrores] = useState<string>("");

  useShowTabs(false);

  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const handlerSaveEditButton = (data: TRadio) => {
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
          setErrores(response.data.error);
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
    <MyObjectivesView
      textos={textos}
      formHook={{ control, handleSubmit }}
      defaultValues={optionUser}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
      loading={loading}
      errores={errores}
    />
  );
};

export default MyObjectives;
