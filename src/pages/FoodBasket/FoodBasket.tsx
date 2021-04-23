import React from "react";
import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import ItemIngredient from "layouts/ItemIngredient/ItemIngredient";
import Searcher from "components/Searcher/Searcher";
import { useSettingsUser } from "context/settingsUser";
import Scaffold from "components/Scaffold/Scaffold";
import Title from "components/Text/Title";

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
    <Scaffold>
      <Scaffold.Content
        fabButton={
          <IonFab
            vertical="bottom"
            horizontal="end"
            slot="fixed"
          >
            <IonFabButton onClick={handlerAddIngredient}>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        }
      >
        <Title color="medium">{textos["page_almacen"]}</Title>
        <Searcher placeHolder={textos["ingredientes_buscas"]} />
        <div className="pb-14">
          {imagenes.map((imagen, index) => {
            return (
              <ItemIngredient
                src={imagen.pathImg}
                amount={imagen.canridadPorcion}
                name={imagen.name}
                key={index}
              />
            );
          })}
        </div>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default FoodBasket;
