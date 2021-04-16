import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Slider from "components/Slider/Slider";
import Searcher from "components/Searcher/Searcher";
import { useSettingsUser } from 'context/settingsUser';

const imagenes = [
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=5",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=6",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
];

const Search: React.FC = ( ) => {

  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setslidesPerView] = useState(1.5);

  const { textos } = useSettingsUser()!;

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width >= 568) {
      setslidesPerView(2.5);
    } else {
      setslidesPerView(1.5);
    }
    if (width >= 768) {
      setslidesPerView(3.5);
    }
    if (width >= 1024) {
      setslidesPerView(4.5);
    }
    if (width >= 1280) {
      setslidesPerView(5.5);
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width, slidesPerView]);

  //Esto debe tener una solucion mejor
  useEffect(() => {
    setWidth(width+1);
    setTimeout(handleResize,1000);
    setTimeout(handleResize,3000);
    setTimeout(handleResize,5000);
    setTimeout(handleResize,10000);
  }, []);

  console.log("soy page search");

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col max-w-screen-md mx-auto pt-8 text-center text-gray-600 text-2xl md:text-3xl font-bold">
          <h6>{textos["slogan_2_1"]}</h6>
          <h6>{textos["slogan_2_2"]}</h6>
        </div>
        <Searcher placeHolder={textos["search_buscar_recetas"]} />
        <div className="px-2">
          <Slider imagenes={imagenes} slidesPerView={slidesPerView} />
          <Slider imagenes={imagenes} slidesPerView={slidesPerView} />
          <Slider imagenes={imagenes} slidesPerView={slidesPerView} />
          <Slider imagenes={imagenes} slidesPerView={slidesPerView} />
          <Slider imagenes={imagenes} slidesPerView={slidesPerView} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
