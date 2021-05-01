import React from "react";
import ItemIngredient from "layouts/ItemIngredient/ItemIngredient";
import Scaffold from "components/Scaffold/Scaffold";
import Searcher from "components/Searcher/Searcher";
import { checkmarkSharp } from "ionicons/icons";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

const ingredients = [
  {
    id:"1",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id:"2",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id:"3",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id:"4",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id:"5",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id:"6",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id:"7",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id:"8",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id:"9",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id:"10",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id:"11",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id:"12",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id:"13",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id:"14",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id:"15",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id:"16",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id:"17",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id:"18",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id:"19",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id:"20",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
];

const FoodBasketAdd: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const handlerAddIngredient = (e: any) => {
    e.preventDefault();
    history.push("/home/foodBasket");
  };

  console.log("soy page foodbasket add");

  return (
    <Scaffold>
      <Scaffold.Header title={textos["agregar_ingredientes"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content
        fabButton={
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={handlerAddIngredient}>
              <IonIcon icon={checkmarkSharp} />
            </IonFabButton>
          </IonFab>
        }
      >
        <Searcher placeHolder={textos["ingredientes_buscas"]} />
        <div className="pb-14">
          {ingredients.map((ingredient, index) => {
            return (
              <ItemIngredient
                ingredient={ingredient}
                counter
                check
                key={index}
              />
            );
          })}
        </div>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default FoodBasketAdd;
