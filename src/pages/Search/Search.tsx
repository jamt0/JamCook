import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Buscador from "../../components/Buscador/Buscador";

const Search: React.FC<RouteComponentProps> = ({ history }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setslidesPerView] = useState(1.5);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if(width >= 568){
        setslidesPerView(2.5)
    }else{
        setslidesPerView(1.5)
    }
    if(width >= 768){
        setslidesPerView(3.5)
    }
    if(width >= 1024){
        setslidesPerView(4.5)
    }
    if(width >= 1280){
        setslidesPerView(5.5)
    }
  });

  //Esto parcialmente soluciona el error del slider
  useEffect(() => {
    setWidth(width+1);
    setTimeout(handleResize,1000);
    setTimeout(handleResize,3000);
    setTimeout(handleResize,5000);
    setTimeout(handleResize,10000);
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col max-w-screen-md mx-auto pt-8 text-center text-gray-600 text-2xl md:text-3xl font-bold">
          <h6>Las mejores recetas,</h6>
          <h6>con lo que tienes a mano</h6>
        </div>
        <Buscador placeHolder={"Buscar recetas con tus ingredientes"}/>
        <div className="px-2">
          <Slider slidesPerView={slidesPerView}/>
          <Slider slidesPerView={slidesPerView}/>
          <Slider slidesPerView={slidesPerView}/>
          <Slider slidesPerView={slidesPerView}/>
          <Slider slidesPerView={slidesPerView}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
