import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import ChipGroup from "components/ChipGroup/ChipGroup";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';
import Server from "server";
import { useAuth } from "auth";
import { IonLoading } from "@ionic/react";

//cuando se cree la tabla ingredientes se cambia esto.
const ingredientes = [
  {
    id: "1",
    ingrediente: "Huevo",
    outline: false
  },
  {
    id: "2",
    ingrediente: "Marisco",
    outline: true
  },
  {
    id: "3",
    ingrediente: "Lactosa",
    outline: true
  },
  {
    id: "4",
    ingrediente: "Gluten",
    outline: true
  },
  {
    id: "5",
    ingrediente: "Frutos Secos",
    outline: true
  },
];

const Allergies: React.FC = ( ) => {

  const history = useHistory();
  const { auth } = useAuth()!;
  
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
    Server.getAllergies()
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
      Server.getAllergiesUser(auth.user.id)
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
      tituloHeader="Alergias e intolerancias"
      footer={
        <div className="p-2 max-w-screen-md mx-auto">
          <Button handler={handlerSaveEditButton} label={"Guardar"} />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent/>
      {hasErrors != "" && (
        <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
      )}
      <div className="max-w-screen-md mx-auto p-4">
        <h6 className="text-2xl font-bold text-center">
          ¿Tienes alguna alergia o intolerancia?
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          Así podremos filtrar en tus busquedas las recetas que tengan estos
          ingredientes.
        </p>
        <ChipGroup ingredientes={ingredientes}/>
      </div>
    </Scaffold>
  );
};

export default Allergies;
