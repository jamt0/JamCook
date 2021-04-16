import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from 'react-router';
import { useAuth } from "auth";
import Server from "server";

const opcionesGroup = [
  {
    "descripcion" : "No, yo me lo guiso, yo me lo como",
    "value": "1",
  },
  {
    "descripcion" : "Si, comparto mantel con:",
    "value": "2",
  },
]

const Comensals: React.FC = ( ) => {

  const history = useHistory();
  const { auth } = useAuth()!;

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
    <Scaffold
      tituloHeader="Número de comensales"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent />
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
      )}
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿Cocinas para alguien más?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Así podremos recomendarte platos con las porciones adecuadas.
        </p>
        <RadioGroup optionsGroup={opcionesGroup} defaultOption="1"/>
      </div>
    </Scaffold>
  );
};

export default Comensals;