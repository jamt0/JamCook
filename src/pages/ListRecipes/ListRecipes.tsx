import React from "react";
import CardRecipe from "layouts/CardRecipe/CardRecipe";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";

const listRecipes = {
  titleListRecipes: "Recetas Nuevas",
  recipes: [
    {
      id: "1",
      pathRecipeImage: "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera Tabarez Jimenez",
      likes: 600,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=3",
      pathAvatarImage: "https://picsum.photos/200/300?random=4",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=5",
      pathAvatarImage: "https://picsum.photos/200/300?random=6",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=7",
      pathAvatarImage: "https://picsum.photos/200/300?random=8",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=9",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "1",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      name: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredients: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
  ],
};

const ListRecipes: React.FC = () => {
  const history = useHistory();

  return (
    <Scaffold>
      <Scaffold.Header title={listRecipes.titleListRecipes}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        {listRecipes.recipes.map((recipe, index) => {
          return <CardRecipe key={index} recipe={recipe} />;
        })}
      </Scaffold.Content>
    </Scaffold>
  );
};

export default ListRecipes;
