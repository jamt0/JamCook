import { FunctionComponent } from "react";
import { ItemIngredient } from "components";
import { Scaffold, Searcher } from "UI";
import { checkmarkSharp } from "ionicons/icons";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { TIngredient } from "models";

type Props = {
  texts: any;
  ingredients: TIngredient[];
  handlerAddIngredient: (e: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts('agregar_ingredientes')}>
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
      <Searcher placeHolder={props.texts('ingredientes_buscas')} />
      <div className="pb-14">
        {props.ingredients.map((ingredient) => {
          return (
            <ItemIngredient
              ingredient={ingredient}
              counter
              check
              key={ingredient.id}
            />
          );
        })}
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default View;
