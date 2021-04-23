import React, { useEffect, useState } from "react";
import SliderRecipes from "layouts/SliderRecipes/SliderRecipes";
import Searcher from "components/Searcher/Searcher";
import { useSettingsUser } from "context/settingsUser";
import Scaffold from "components/Scaffold/Scaffold";
import Title from "components/Text/Title";

const imagenes = [
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=1",
    name: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=2",
    name: "Tacos Mexicanos",
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=3",
    name: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=4",
    name: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=5",
    name: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=6",
    name: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=7",
    name: "Tacos Mexicanos de Carnitas Asadas",
  },
];

const Search: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setslidesPerView] = useState(1.5);

  const { textos } = useSettingsUser()!;

  function handleResize() {
    console.log("cambio tamañooo");
    if (window.innerWidth >= 568 && width < 568) setWidth(window.innerWidth);

    if (window.innerWidth <= 568 && width > 568) setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width >= 568) {
      setslidesPerView(2.5);
    } else {
      setslidesPerView(1.5);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  console.log("soy page search");

  return (
    <Scaffold>
      <Scaffold.Content>
        <Title align="center" color="medium">
          {textos["slogan_2_1"]}
          <br />
          {textos["slogan_2_2"]}
        </Title>
        <Searcher placeHolder={textos["search_buscar_recetas"]} />
        <SliderRecipes recipes={imagenes} slidesPerView={slidesPerView} nameListRecipes="Recetas Nuevas"/>
        <SliderRecipes recipes={imagenes} slidesPerView={slidesPerView} nameListRecipes="Recetas más vistas"/>
        <SliderRecipes recipes={imagenes} slidesPerView={slidesPerView} nameListRecipes="Recetas Saludables"/>
        <SliderRecipes recipes={imagenes} slidesPerView={slidesPerView} nameListRecipes="Recetas más vistas"/>
        <SliderRecipes recipes={imagenes} slidesPerView={slidesPerView} nameListRecipes="Recetas más vistas"/>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Search;
