import React, { FunctionComponent } from "react";
import ItemIngredient from "layouts/ItemIngredient/ItemIngredient";
import Scaffold from "components/Scaffold/Scaffold";
import Searcher from "components/Searcher/Searcher";
import { checkmarkSharp } from "ionicons/icons";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { TIngredient } from "utils/types";

type Props = {
  textos: any;
  ingredients: TIngredient[];
  handlerAddIngredient: (e: any) => void;
};

const FoodBasketAddView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.agregar_ingredientes}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content
      fabButton={
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={props.handlerAddIngredient}>
            <IonIcon icon={checkmarkSharp} />
          </IonFabButton>
        </IonFab>
      }
    >
      <Searcher placeHolder={props.textos.ingredientes_buscas} />
      <div className="pb-14">
        {props.ingredients.map((ingredient) => {
          return (
            <ItemIngredient ingredient={ingredient} counter check key={ingredient.id} />
          );
        })}
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default FoodBasketAddView;
