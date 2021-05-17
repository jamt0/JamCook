import React, { useEffect, useState } from "react";
import { useSettingsUser } from "context/settingsUser";
import { SearchView } from "pages/layouts";
import useShowTabs from "hooks/useShowTabs";

const ListRecipes = [
  {
    id: "1",
    nameListRecipes: "Nuevas Recetas",
    recipes: [
      {
        id: "1",
        pathRecipeImage: "https://picsum.photos/200/300?random=1",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "2",
        pathRecipeImage: "https://picsum.photos/200/300?random=2",
        name: "Tacos Mexicanos",
      },
      {
        id: "3",
        pathRecipeImage: "https://picsum.photos/200/300?random=3",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "4",
        pathRecipeImage: "https://picsum.photos/200/300?random=4",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "5",
        pathRecipeImage: "https://picsum.photos/200/300?random=5",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "6",
        pathRecipeImage: "https://picsum.photos/200/300?random=6",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "7",
        pathRecipeImage: "https://picsum.photos/200/300?random=7",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
    ],
  },
  {
    id: "2",
    nameListRecipes: "Ultimas Recetas",
    recipes: [
      {
        id: "1",
        pathRecipeImage: "https://picsum.photos/200/300?random=1",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "2",
        pathRecipeImage: "https://picsum.photos/200/300?random=2",
        name: "Tacos Mexicanos",
      },
      {
        id: "3",
        pathRecipeImage: "https://picsum.photos/200/300?random=3",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "4",
        pathRecipeImage: "https://picsum.photos/200/300?random=4",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "5",
        pathRecipeImage: "https://picsum.photos/200/300?random=5",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "6",
        pathRecipeImage: "https://picsum.photos/200/300?random=6",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "7",
        pathRecipeImage: "https://picsum.photos/200/300?random=7",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
    ],
  },
  {
    id: "3",
    nameListRecipes: "Mejores Recetas",
    recipes: [
      {
        id: "1",
        pathRecipeImage: "https://picsum.photos/200/300?random=1",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "2",
        pathRecipeImage: "https://picsum.photos/200/300?random=2",
        name: "Tacos Mexicanos",
      },
      {
        id: "3",
        pathRecipeImage: "https://picsum.photos/200/300?random=3",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "4",
        pathRecipeImage: "https://picsum.photos/200/300?random=4",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "5",
        pathRecipeImage: "https://picsum.photos/200/300?random=5",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "6",
        pathRecipeImage: "https://picsum.photos/200/300?random=6",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "7",
        pathRecipeImage: "https://picsum.photos/200/300?random=7",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
    ],
  },
  {
    id: "4",
    nameListRecipes: "Nuevas Recetas",
    recipes: [
      {
        id: "1",
        pathRecipeImage: "https://picsum.photos/200/300?random=1",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "2",
        pathRecipeImage: "https://picsum.photos/200/300?random=2",
        name: "Tacos Mexicanos",
      },
      {
        id: "3",
        pathRecipeImage: "https://picsum.photos/200/300?random=3",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "4",
        pathRecipeImage: "https://picsum.photos/200/300?random=4",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "5",
        pathRecipeImage: "https://picsum.photos/200/300?random=5",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "6",
        pathRecipeImage: "https://picsum.photos/200/300?random=6",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "7",
        pathRecipeImage: "https://picsum.photos/200/300?random=7",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
    ],
  },
  {
    id: "5",
    nameListRecipes: "Nuevas Recetas",
    recipes: [
      {
        id: "1",
        pathRecipeImage: "https://picsum.photos/200/300?random=1",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "2",
        pathRecipeImage: "https://picsum.photos/200/300?random=2",
        name: "Tacos Mexicanos",
      },
      {
        id: "3",
        pathRecipeImage: "https://picsum.photos/200/300?random=3",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "4",
        pathRecipeImage: "https://picsum.photos/200/300?random=4",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "5",
        pathRecipeImage: "https://picsum.photos/200/300?random=5",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "6",
        pathRecipeImage: "https://picsum.photos/200/300?random=6",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
      {
        id: "7",
        pathRecipeImage: "https://picsum.photos/200/300?random=7",
        name: "Tacos Mexicanos de Carnitas Asadas",
      },
    ],
  },
];

const Search: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setslidesPerView] = useState(1.5);
  const { texts } = useSettingsUser()!;

  useShowTabs(true);

  function handleResize() {
    if (window.innerWidth >= 568 && width < 568) setWidth(window.innerWidth);
    if (window.innerWidth <= 568 && width > 568) setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width >= 568) setslidesPerView(2.25);
    else setslidesPerView(1.25);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <SearchView
      slidesPerView={slidesPerView}
      listRecipes={ListRecipes}
      texts={texts}
    />
  );
};

export default Search;
