import { useEffect, useState } from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useTranslation } from 'react-i18next';
import Server from "server";
import namesRoutes from "routes/names";
import useShowTabs from "hooks/useShowTabs";

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
  const { t } = useTranslation();
  const [ingredients, setIngredients] = useState(ingredientes);
  const [ingredientsUser, setIngredientsUser] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [errores, setErrors] = useState<string>("");

  useShowTabs(false);

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    history.push(namesRoutes.profile);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   Server.getDislikeIngredients()
  //     .then((response) => {
  //       if (!response.data.error) {
  //         setIngredients(response.data.ingredients);
  //         setLoading(false);
  //       } else {
  //         setErrors(response.data.error);
  //         setLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  //   if (auth.user?.id) {
  //     Server.getDislikeIngredientsUser(auth.user.id)
  //       .then((response) => {
  //         if (!response.data.error) {
  //           setIngredientsUser(response.data.ingredients);
  //           setLoading(false);
  //         } else {
  //           setErrors(response.data.error);
  //           setLoading(false);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLoading(false);
  //       });
  //   }
  // }, []);

  return (
    <View
      texts={t}
      formHook={{}}
      ingredients={ingredients}
      handlerSaveEditButton={handlerSaveEditButton}
      loading={loading}
      errores={errores}
    />
  );
};

export default DislikeIngredient;
