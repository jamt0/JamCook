import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ImageRecipe from "../../components/ImageRecipe/ImageRecipe";
import Scaffold from "../../components/Scaffold/Scaffold";
import {
  star,
  timerOutline,
  nutritionOutline,
  starOutline,
  arrowRedoOutline,
  bookmarkOutline,
  heartOutline,
  speedometerOutline,
} from "ionicons/icons";
import Button from "../../components/Button/Button";
import Commentary from "../../components/Commentary/Commentary";
import TitleRecipe from "../../components/TitleRecipe/TitleRecipe";
import ItemIngredient from "../../components/ItemIngredient/ItemIngredient";
import ItemStep from "../../components/ItemStep/ItemStep";
import ContainerSection from "../../components/ContainerSection/ContainerSection";
import Center from "../../components/Center/Center";
import Avatar from "../../components/Avatar/Avatar";

const receta = {
  pathImg: "https://picsum.photos/200/300?random=1",
  avatarUser: "https://picsum.photos/200/300?random=2",
  titulo: "Tacos Mexicanos de Carnitas",
  nameUser: "Jonathan Mancera",
  valoracion: [1, 1, 1, 1, 0],
  numeroValoraciones: "78",
  introduccion:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum. Phasellus ex justo, gravida vitae nisl vitae, iaculis placerat massa.",
  ingredientes: [
    {
      name: "Zanahoria",
      pathImg: "https://picsum.photos/200/300?random=3",
      cantidadPorcion: "3",
    },
    {
      name: "Tomate",
      pathImg: "https://picsum.photos/200/300?random=4",
      cantidadPorcion: "3",
    },
    {
      name: "Pechuga de Pollo",
      pathImg: "https://picsum.photos/200/300?random=5",
      cantidadPorcion: "3",
    },
    {
      name: "Arroz",
      pathImg: "https://picsum.photos/200/300?random=6",
      cantidadPorcion: "3",
    },
  ],
  pasos: [
    {
      instruccion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
  ],
  trucos: [
    {
      instruccion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
  ],
};

const Recipe: React.FC<RouteComponentProps> = ({ history }) => {
  const [porciones, setPorciones] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [classPorciones, setClassPorciones] = useState(" ");
  const [isEstrellas, setEstrellas] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (porciones == 1) {
      setClassPorciones(" bg-opacity-25 ");
      setIsDisabled(true);
    } else {
      setClassPorciones(" ");
      setIsDisabled(false);
    }
  }, [porciones]);

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerShare = (e: any) => {};

  const handlerLike = (e: any) => {};

  const handlerMark = (e: any) => {};

  const handlerSuma = (e: any) => {
    setPorciones(porciones + 1);
  };

  const handlerResta = (e: any) => {
    setPorciones(porciones - 1);
  };

  const handlerRecetaHecha = (e: any) => {};

  const handlerValoracion = (e: any, index: number) => {
    e.preventDefault();
    var newEstrellas = [...isEstrellas];
    newEstrellas.map((estrella, i) => {
      if (i <= index) {
        newEstrellas[i] = true;
      } else {
        newEstrellas[i] = false;
      }
    });
    setEstrellas(newEstrellas);
    return undefined;
  };

  return (
    <Scaffold
      onClickBack={handlerGoBackButton}
      accionesHeader={
        <>
          <IonButton onClick={handlerShare}>
            <IonIcon slot="icon-only" icon={arrowRedoOutline} color="dark" />
          </IonButton>
          <IonButton onClick={handlerLike}>
            <IonIcon slot="icon-only" icon={heartOutline} color="dark" />
          </IonButton>
          <IonButton onClick={handlerMark}>
            <IonIcon slot="icon-only" icon={bookmarkOutline} color="dark" />
          </IonButton>
        </>
      }
    >
      {/* Portada Receta*/}
      <ImageRecipe pathImg={receta.pathImg} height={72} sinRedondeo={true}>
        <h6 className="text-white text-center text-2xl mx-auto my-auto">
          {receta.titulo}
        </h6>
      </ImageRecipe>

      <div className="max-w-screen-md mx-auto">
        {/* Encabezado Receta*/}
        <ContainerSection>
          <Center direccion="col" className="mt-4">
            <Avatar avatarUser={receta.avatarUser} tamaño="8"/>
            <h2 className="text-sm mt-2 font-bold">{receta.nameUser}</h2>
            <Center direccion="row" className="mt-2">
              {receta.valoracion.map((element, index) => {
                return (
                  <IonIcon
                    key={index}
                    icon={element == 1 ? star : starOutline}
                    className="text-purple-500 text-sm ml-1"
                  />
                );
              })}
            </Center>
            <h2 className="text-sm mt-2">
              {receta.numeroValoraciones + " Valoraciones"}
            </h2>
          </Center>
        </ContainerSection>

        {/* Introduccion Receta*/}
        <ContainerSection>
          <Center direccion="col">
            <TitleRecipe>Introducción</TitleRecipe>
            <p className="text-center">{receta.introduccion}</p>
          </Center>
        </ContainerSection>

        {/* Información Receta en iconos*/}
        <ContainerSection>
          <div className="grid grid-cols-3">
            <Center direccion="row">
              <IonIcon
                icon={nutritionOutline}
                className="text-black text-lg mr-1"
              />
              <h3 className="text-sm">8 ingredientes</h3>
            </Center>
            <Center direccion="row">
              <IonIcon
                icon={speedometerOutline}
                className="text-black text-lg mr-1"
              />
              <h3 className="text-sm">Dificultad</h3>
            </Center>
            <Center direccion="row">
              <IonIcon
                icon={timerOutline}
                className="text-black text-lg mr-1"
              />
              <h3 className="text-sm">25 minutos</h3>
            </Center>
          </div>
        </ContainerSection>

        {/* Porciones Receta*/}
        <ContainerSection>
          <Center direccion="col">
            <TitleRecipe>Porciones a Preparar</TitleRecipe>
            <Center direccion="row" className="md:w-1/2 w-full">
              <button
                className={
                  "bg-purple-500 h-12 w-12 rounded-l-md" + classPorciones
                }
                onClick={handlerResta}
                disabled={isDisabled}
              >
                <p className="text-white">{"<"}</p>
              </button>
              <Center direccion="col" className="w-full bg-gray-100 h-12">
                <h3 className="text-black text-center">{porciones}</h3>
              </Center>
              <button
                className="bg-purple-500 h-12 w-12 rounded-r-md"
                onClick={handlerSuma}
              >
                <p className="text-white">{">"}</p>
              </button>
            </Center>
          </Center>
        </ContainerSection>

        {/* Ingredientes Receta*/}

        <ContainerSection>
          <TitleRecipe>Ingredientes</TitleRecipe>
          {receta.ingredientes.map((ingrediente, index) => {
            return (
              <ItemIngredient
                key={index}
                pathImg={ingrediente.pathImg}
                name={ingrediente.name}
                cantidadPorcion={ingrediente.cantidadPorcion}
              />
            );
          })}
        </ContainerSection>

        {/* Pasos Receta*/}
        <ContainerSection>
          <TitleRecipe>Pasos</TitleRecipe>
          {receta.pasos.map((paso, index) => {
            return <ItemStep key={index}>{paso.instruccion}</ItemStep>;
          })}
        </ContainerSection>

        {/* Trucos Receta*/}
        <ContainerSection>
          <TitleRecipe>Trucos y Consejos</TitleRecipe>
          {receta.trucos.map((truco, index) => {
            return <ItemStep key={index}>{truco.instruccion}</ItemStep>;
          })}
        </ContainerSection>

        {/* Receta Hecha*/}
        <ContainerSection>
          <TitleRecipe>¿Ya has hecho la receta?</TitleRecipe>
          <Center direccion="col" className="w-2/3 mx-auto">
            <Button
              handler={handlerRecetaHecha}
              label={"¡Receta Hecha!"}
              type={"Secundario"}
            />
          </Center>
        </ContainerSection>

        {/* Valoración Hecha*/}
        <ContainerSection>
          <TitleRecipe>¿Te ha gustado la receta?</TitleRecipe>
          <Center direccion="row">
            {isEstrellas.map((isEstrella, index) => {
              return (
                <IonButtons slot="icon-only" className="h-12 w-12" key={index}>
                  <IonButton
                    onClick={(e) => handlerValoracion(e, index)}
                    className="h-12 w-12"
                  >
                    <IonIcon
                      icon={isEstrella ? star : starOutline}
                      className="text-purple-500 text-4xl h-12 w-12"
                    />
                  </IonButton>
                </IonButtons>
              );
            })}
          </Center>
        </ContainerSection>

        {/* Comentarios Receta*/}
        <Commentary />
      </div>
    </Scaffold>
  );
};

export default Recipe;
