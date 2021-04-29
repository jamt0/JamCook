import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";
import Button from "components/Button/Button";
import ChipGroup from "layouts/ChipGroup/ChipGroup";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";

//cuando se cree la tabla ingredientes se cambia esto.
const ingredientes = [
  {
    id: "1",
    ingrediente: "Huevo",
    outline: false,
  },
  {
    id: "2",
    ingrediente: "Marisco",
    outline: true,
  },
  {
    id: "3",
    ingrediente: "Lactosa",
    outline: true,
  },
  {
    id: "4",
    ingrediente: "Gluten",
    outline: true,
  },
  {
    id: "5",
    ingrediente: "Frutos Secos",
    outline: true,
  },
];

const Allergies: React.FC = () => {
  const history = useHistory();
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [ingredients, setIngredients] = useState();
  const [ingredientsUser, setIngredientsUser] = useState();
  const [loading, setLoading] = useState<boolean>(false);
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
  }, []);

  return (
    <Scaffold>
      <Scaffold.Header title={textos["preferencias_alergias_intolerancias"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
        )}
        <h6 className="text-2xl font-bold text-center">
          {textos["alergias_intolerancias_header"]}
        </h6>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["alergias_intolerancias_sub_header"]}
        </p>
        <ChipGroup ingredientes={ingredientes} />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handlerSaveEditButton}>{textos["guardar"]}</Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default Allergies;
