import React from "react";
import FoodBasketAddView from "pages/FoodBasket/FoodBasketAdd/FoodBasketAddView";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import RoutesPath from "utils/routesPath";
import useShowTabs from "hooks/useShowTabs";

const ingredients = [
  {
    id: "1",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id: "2",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id: "3",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id: "4",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id: "5",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id: "6",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id: "7",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id: "8",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id: "9",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id: "10",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id: "11",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id: "12",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id: "13",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id: "14",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id: "15",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id: "16",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
  {
    id: "17",
    pathIngredientImage: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    amount: "1 Unidad",
  },
  {
    id: "18",
    pathIngredientImage: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    amount: "1 Unidad",
  },
  {
    id: "19",
    pathIngredientImage: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    amount: "1 Unidad",
  },
  {
    id: "20",
    pathIngredientImage: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    amount: "1 Unidad",
  },
];

const FoodBasketAdd: React.FC = () => {
  const history = useHistory();
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  const handlerAddIngredient = (e: any) => {
    e.preventDefault();
    history.push(RoutesPath.foodBasket);
  };

  return (
    <FoodBasketAddView
      texts={texts}
      ingredients={ingredients}
      handlerAddIngredient={handlerAddIngredient}
    />
  );
};

export default FoodBasketAdd;
