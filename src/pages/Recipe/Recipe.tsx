import { IonButton, IonIcon } from "@ionic/react";
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
      instruccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    }
  ],
  trucos: [
    {
      instruccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    },
    {
      instruccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
    }
  ]
};

const Recipe: React.FC<RouteComponentProps> = ({ history }) => {

  const [porciones, setPorciones] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [classPorciones, setClassPorciones] = useState(" ");

  useEffect(() => {
    if (porciones == 1) {
      setClassPorciones(" bg-opacity-25 ")
      setIsDisabled(true)
    } else {
      setClassPorciones(" ")
      setIsDisabled(false)
    }
  }, [porciones])



  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerShare = (e: any) => {
  };

  const handlerLike = (e: any) => {
  };

  const handlerMark = (e: any) => {
  };

  const handlerSuma = (e: any) => {
    setPorciones(porciones + 1)
  };

  const handlerResta = (e: any) => {
    setPorciones(porciones - 1)
  };

  const handkerRecetaHecha = (e: any) => {
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
      <ImageRecipe pathImg={receta.pathImg} height={72} sinRedondeo={true}>
        <h6 className="text-white text-center text-2xl md:text-2xl text-left mx-auto my-auto">
          {receta.titulo}
        </h6>
      </ImageRecipe>
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col items-center mt-3">
          <div
            className="h-8 w-8 bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url( ${receta.avatarUser} )` }}
          ></div>
          <h2 className="text-sm mt-2 font-bold">{receta.nameUser}</h2>
          <div className="flex flex-row mt-2">
            {receta.valoracion.map((element, index) => {
              return (
                <IonIcon
                  key={index}
                  icon={element == 1 ? star : starOutline}
                  className="text-purple-500 text-sm ml-1"
                />
              );
            })}
          </div>
          <h2 className="text-sm mt-2">
            {receta.numeroValoraciones + " Valoraciones"}
          </h2>
        </div>
        <div className="flex flex-col items-center mt-4 mx-3">
          <h2 className="text-xl font-bold">Introducción</h2>
          <p className="text-center mt-2">{receta.introduccion}</p>
        </div>
        <div className="grid grid-cols-3 my-6">
          <div className="flex flex-row justify-self-center">
            <IonIcon
              icon={nutritionOutline}
              className="text-black text-lg mr-1"
            />
            <h3 className="text-sm">8 ingredientes</h3>
          </div>
          <div className="flex flex-row justify-self-center">
            <IonIcon
              icon={speedometerOutline}
              className="text-black text-lg mr-1"
            />
            <h3 className="text-sm">Dificultad</h3>
          </div>
          <div className="flex flex-row justify-self-center">
            <IonIcon icon={timerOutline} className="text-black text-lg mr-1" />
            <h3 className="text-sm">25 minutos</h3>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 mx-3">
          <h2 className="text-lg font-bold text-center mb-3">Porciones a Preparar</h2>
          <div className="p-2 mb-2 flex flex-row w-full md:w-1/2">
            <button className={"bg-purple-300 h-12 w-12 rounded-l-md" + classPorciones} onClick={handlerResta} disabled={isDisabled}>
              <p className="text-white">{"<"}</p>
            </button>
            <div className="h-12 w-full bg-gray-100 flex items-center">
              <h3 className="text-black mx-auto flex text-center">{porciones}</h3>
            </div>
            <button className="bg-purple-300 h-12 w-12 rounded-r-md" onClick={handlerSuma}>
              <p className="text-white">{">"}</p>
            </button>
          </div>
        </div>
        <div className="px-3 mb-8">
          <h2 className="text-lg font-bold text-center mb-3 mt-3">Ingredientes</h2>
          {receta.ingredientes.map((ingrediente, index) => {
            return (
              <div className="grid grid-flow-col auto-cols-max p-2 bg-gray-100 mb-2 rounded-md" key={index}>
                <div
                  className="h-12 w-12 bg-cover bg-center mr-4"
                  style={{ backgroundImage: `url( ${ingrediente.pathImg} )` }}
                ></div>
                <div>
                  <h2 className="font-bold text-sm">{ingrediente.name}</h2>
                  <h3 className="text-sm">{ingrediente.cantidadPorcion + " Unidades"}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-3 mb-8">
          <h2 className="text-lg font-bold text-center mb-3">Pasos</h2>
          {receta.pasos.map((paso, index) => {
            return (
              <div className="p-2 bg-gray-100 mb-2 rounded-md" key={index}>
                <h3 className="text-sm">{paso.instruccion}</h3>
              </div>
            );
          })}
        </div>
        <div className="px-3 mb-8">
          <h2 className="text-lg font-bold text-center mb-3">Trucos y Consejos</h2>
          {receta.trucos.map((truco, index) => {
            return (
              <div className="p-2 bg-gray-100 mb-2 rounded-md" key={index}>
                <h3 className="text-sm">{truco.instruccion}</h3>
              </div>
            );
          })}
        </div>
        <h2 className="text-lg font-bold text-center mb-3">¿Ya has hecho la receta?</h2>
        <div className="flex mx-center w-1/2 mb-8">
          <Button handler={handkerRecetaHecha} label={"¡Receta Hecha!"} type={"Secundario"} />
        </div>
        <h2 className="text-lg font-bold text-center mb-3 mt-3">¿Te ha gustado la receta?</h2>
      </div>
    </Scaffold>
  );
};

export default Recipe;
