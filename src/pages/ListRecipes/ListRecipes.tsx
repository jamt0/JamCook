import React from "react";
import ListRecipesView from "pages/ListRecipes/ListRecipesView";
import useShowTabs from "hooks/useShowTabs";

const listRecipes = {
  titleListRecipes: "Recetas Nuevas",
  recipes: [
    {
      id: "1",
      pathRecipeImage: "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera Tabarez Jimenez",
      likes: 600,
    },
    {
      id: "2",
      pathRecipeImage: "https://picsum.photos/200/300?random=3",
      pathAvatarImage: "https://picsum.photos/200/300?random=4",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "3",
      pathRecipeImage: "https://picsum.photos/200/300?random=5",
      pathAvatarImage: "https://picsum.photos/200/300?random=6",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "4",
      pathRecipeImage: "https://picsum.photos/200/300?random=7",
      pathAvatarImage: "https://picsum.photos/200/300?random=8",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "5",
      pathRecipeImage: "https://picsum.photos/200/300?random=9",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "6",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "7",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "8",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "9",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
    {
      id: "10",
      pathRecipeImage: "https://picsum.photos/200/300?random=1",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      valoration: [true, true, true, true, false],
      time: 20,
      ingredientsNumber: 6,
      nameUser: "Jonathan Mancera",
      likes: 60,
    },
  ],
};

const ListRecipes: React.FC = () => {

  useShowTabs(false);
  
  return (
    <ListRecipesView listRecipes={listRecipes} />
  );
};

export default ListRecipes;
