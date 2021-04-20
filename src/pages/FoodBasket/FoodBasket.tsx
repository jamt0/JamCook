import React from "react";
import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import ItemIngredient from "components/ItemIngredient/ItemIngredient";
import Searcher from "components/Searcher/Searcher";
import { useSettingsUser } from "context/settingsUser";

const imagenes = [
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
];

const FoodBasket: React.FC = () => {
  
  const history = useHistory();
  const { textos } = useSettingsUser()!;
  
  const handlerAddIngredient = (e: any) => {
    e.preventDefault();
    history.push("/foodBasket/add");
  };

  console.log("soy page foodbasket");

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col pt-8 text-left sm:text-center text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
          <h6>{textos["page_almacen"]}</h6>
        </div>
        <Searcher placeHolder={textos["ingredientes_buscas"]} />
        <div className="px-2 mb-20">
          {imagenes.map((imagen, index) => {
            return (
              <ItemIngredient
                pathImg={imagen.pathImg}
                cantidadPorcion={imagen.canridadPorcion}
                name={imagen.name}
                withCounter={true}
                key={index}
              />
            );
          })}
        </div>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={handlerAddIngredient}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default FoodBasket;
