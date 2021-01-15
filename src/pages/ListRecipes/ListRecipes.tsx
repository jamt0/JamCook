import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import Scaffold from "../../components/Scaffold/Scaffold";

//toca hacer algo para cortar los nombres largos cuando se implementen publicaciones
const recetas = [
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "600",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    avatarUser: "https://picsum.photos/200/300?random=4",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,0,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=5",
    avatarUser: "https://picsum.photos/200/300?random=6",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,0,0,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    avatarUser: "https://picsum.photos/200/300?random=8",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=9",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    avatarUser: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos de Carnitas",
    valoracion: [1,1,1,1,0],
    tiempo: 20,
    ingradientes: 6,
    nameUser: "Jonathan Mancera",
    meGusta: "60",
  },
];

const ListRecipes: React.FC<RouteComponentProps> = ({ history }) => {
  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold
      tituloHeader="Recetas Nuevas"
      onClickBack={handlerGoBackButton}
    >
      {recetas.map((receta, index) => {
        return (
          <CardRecipe
            key={index}
            titulo={receta.titulo}
            nameUser={receta.nameUser}
            avatarUser={receta.avatarUser}
            pathImg={receta.pathImg}
            valoracion={receta.valoracion}
            meGusta={receta.meGusta}
          />
        );
      })}
    </Scaffold>
  );
};

export default ListRecipes;
