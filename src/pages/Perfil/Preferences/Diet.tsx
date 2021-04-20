import { IonLoading } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";

const Diet: React.FC = ( ) => {
  
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [options, setOptions] = useState();
  const [optionUser, setOptionUser] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasErrors, setHasErrors] = useState<string>("");

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/perfil/preferences");
  };

  useEffect(() => {
    setLoading(true);
    Server.getDiets()
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
      Server.getDietsUser(auth.user.id)
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
    <Scaffold
      tituloHeader={textos["preferencias_dieta"]}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={textos["guardar"]} />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent />
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
      )}
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          {textos["dieta_header"]}
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["dieta_sub_header"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption={optionUser} />
      </div>
    </Scaffold>
  );
};

export default Diet;