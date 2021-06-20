import { FunctionComponent } from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { ItemIngredient } from "components";
import { TIngredient } from "models";
import { Scaffold, Searcher, Title } from "UI";

type Props = {
  texts: any;
  ingredients: TIngredient[];
  handlerAddIngredient: (e: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content
      fabButton={
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={props.handlerAddIngredient}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      }
    >
      <Title color="medium">{props.texts('page_almacen')}</Title>
      <Searcher placeHolder={props.texts('ingredientes_buscas')} />
      <div className="pb-14">
        {props.ingredients.map((ingredient) => {
          return <ItemIngredient ingredient={ingredient} key={ingredient.id} />;
        })}
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default View;
