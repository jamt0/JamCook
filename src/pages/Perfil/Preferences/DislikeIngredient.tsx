import { IonButton, IonLoading, IonModal } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import ChipGroup from "components/ChipGroup/ChipGroup";
import Searcher from "components/Searcher/Searcher";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";

const ingredientes = [
  {
    id: "1",
    ingrediente: "Brócoli",
    outline: false,
  },
  {
    id: "2",
    ingrediente: "Coliflor",
    outline: true,
  },
  {
    id: "3",
    ingrediente: "Pescado",
    outline: true,
  },
  {
    id: "4",
    ingrediente: "Pepino",
    outline: true,
  },
  {
    id: "5",
    ingrediente: "Alcachofa",
    outline: true,
  },
  {
    id: "6",
    ingrediente: "Queso",
    outline: true,
  },
  {
    id: "7",
    ingrediente: "Tomate",
    outline: true,
  },
  {
    id: "8",
    ingrediente: "Berenjena",
    outline: true,
  },
  {
    id: "9",
    ingrediente: "Guisante",
    outline: true,
  },
];

const DislikeIngredient: React.FC = () => {
  
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;
  
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState()
  const [ingredientsUser, setIngredientsUser] = useState()
  const [loading, setLoading] = useState<boolean>(false)
  const [hasErrors, setHasErrors] = useState<string>("");

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push("/home/perfil");
  };

  useEffect(() => {
    setLoading(true);
    Server.getDislikeIngredients()
    .then((response) => {
      if (!response.data.error) {
        setIngredients(response.data.ingredients);
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
      Server.getDislikeIngredientsUser(auth.user.id)
      .then((response) => {
        if (!response.data.error) {
          setIngredientsUser(response.data.ingredients);
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
  }, [])

  return (
    <Scaffold
      tituloHeader={textos["preferencias_ingredientes_no_gustan"]}
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={textos["guardar"]} />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent/>
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
      )}
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          {textos["ingredientes_no_gustan_header"]}
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["ingredientes_no_gustan_sub_header"]}
        </p>
        <ChipGroup ingredientes={ingredientes} />
        <div className="ml-4 mt-4">
          <Button
            label={textos["ver_mas"]}
            type="Link"
            handler={() => setShowModal(true)}
          />
        </div>
        <IonModal isOpen={showModal} >
          <Searcher placeHolder={textos["ingredientes_no_gustan_searcher"]}/>
          <IonButton onClick={() => setShowModal(false)}>{textos["cerrar"]}</IonButton>
        </IonModal>
      </div>
    </Scaffold>
  );
};

export default DislikeIngredient;
