import React, { FunctionComponent } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import ContainerSection from "components/ContainerSection/ContainerSection";
import TitleRecipe from "components/TitleRecipe/TitleRecipe";
import ImageCover from "components/ImageCover/ImageCover";
import Scaffold from "components/Scaffold/Scaffold";
import ItemStep from "components/ItemStep/ItemStep";
import SubTitle from "components/Text/SubTitle";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import Avatar from "components/Avatar/Avatar";
import Rating from "layouts/Rating/Rating";
import Counter from "layouts/Counter/Counter";
import ChipGroup from "layouts/ChipGroup/ChipGroup";
import CommentaryBox from "layouts/CommentaryBox/CommentaryBox";
import ItemIngredient from "layouts/ItemIngredient/ItemIngredient";
import SliderRecipesSimple from "layouts/SliderRecipes/SliderRecipesSimple";
import Text from "components/Text/Text";
import {
  timerOutline,
  nutritionOutline,
  arrowRedoOutline,
  bookmarkOutline,
  heartOutline,
  speedometerOutline,
} from "ionicons/icons";
import { TRecipeComplete, TValoration } from "utils/types";

type Props = {
  textos: any;
  recipe: TRecipeComplete;
  portions: any;
  stars: TValoration;
  setPortions: (e: any) => void;
  handlerShare: (e: any) => void;
  handlerLike: (e: any) => void;
  handlerMark: (e: any) => void;
  handlerRecipeMade: (e: any) => void;
  handlerValoration: (e: any, index: number) => void;
};

const Recipe: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header>
      <Scaffold.Header.BackAction />
      <Scaffold.Header.Actions>
        <IonButton onClick={props.handlerShare}>
          <IonIcon slot="icon-only" icon={arrowRedoOutline} color="dark" />
        </IonButton>
        <IonButton onClick={props.handlerLike}>
          <IonIcon slot="icon-only" icon={heartOutline} color="dark" />
        </IonButton>
        <IonButton onClick={props.handlerMark}>
          <IonIcon slot="icon-only" icon={bookmarkOutline} color="dark" />
        </IonButton>
      </Scaffold.Header.Actions>
    </Scaffold.Header>
    <Scaffold.Content
      banner={
        <ImageCover src={props.recipe.pathRecipeImage} height={72}>
          <SubTitle color="light" align="center" className="font-extrabold">
            {props.recipe.nameRecipe}
          </SubTitle>
        </ImageCover>
      }
    >
      {/* Encabezado recipe*/}
      <ContainerSection>
        <Center direction="row" justify="center">
          <Avatar src={props.recipe.pathAvatarImage} size={8} />
        </Center>
        <Text color="dark" align="center" className="font-bold mt-2">
          {props.recipe.nameUser}
        </Text>
        <Rating
          stars={props.recipe.valoration}
          size={4}
          color="primary"
          align="center"
        />
        <Text color="primary" align="center" className="mt-2">
          {props.recipe.valorationNumber + " " + props.textos.valoraciones}
        </Text>
      </ContainerSection>

      {/* Introduccion recipe*/}
      <ContainerSection>
        <Center direction="col">
          <TitleRecipe>{props.textos.introduccion}</TitleRecipe>
          <Text align="center">{props.recipe.introduction}</Text>
        </Center>
      </ContainerSection>

      {/* Información recipe en iconos*/}
      <ContainerSection>
        <div className="flex flex-wrap justify-center">
          <Center direction="row" justify="center">
            <IonIcon
              icon={nutritionOutline}
              color="dark"
              className="text-lg mr-1"
            />
            <Text color="medium" align="center" className="mr-2">
              {"8" + " " + props.textos.ingredientes}
            </Text>
          </Center>
          <Center direction="row" justify="center">
            <IonIcon
              icon={speedometerOutline}
              color="dark"
              className="text-lg mr-1"
            />
            <Text color="medium" align="center" className="mr-2">
              {props.textos.dificultad}
            </Text>
          </Center>
          <Center direction="row" justify="center">
            <IonIcon
              icon={timerOutline}
              color="dark"
              className="text-lg mr-1"
            />
            <Text color="medium" align="center" className="mr-2">
              25 minutos
            </Text>
          </Center>
        </div>
      </ContainerSection>

      {/* Porciones recipe*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.recipe_porciones_preparar}</TitleRecipe>
        <Counter portions={props.portions} setPortions={props.setPortions} />
      </ContainerSection>

      {/* Ingredientes recipe*/}

      <ContainerSection>
        <TitleRecipe>{props.textos.ingredientes}</TitleRecipe>
        {props.recipe.ingredients.map((ingredient) => (
          <ItemIngredient ingredient={ingredient} key={ingredient.id} />
        ))}
      </ContainerSection>

      {/* Pasos recipe*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.pasos}</TitleRecipe>
        {props.recipe.steps.map((step) => (
          <ItemStep key={step.id}>{step.step}</ItemStep>
        ))}
      </ContainerSection>

      {/* Trucos recipe*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.recipe_trucos_consejos}</TitleRecipe>
        {props.recipe.tricks.map((trick) => (
          <ItemStep key={trick.id}>{trick.trick}</ItemStep>
        ))}
      </ContainerSection>

      {/* recipe Hecha*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.recipe_hiciste_receta}</TitleRecipe>
        <Button onClick={props.handlerRecipeMade} color="secondary">
          {props.textos.recipe_receta_hecha}
        </Button>
      </ContainerSection>

      {/* Valoración Hecha*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.recipe_gusto_receta}</TitleRecipe>
        <Rating
          stars={props.stars}
          handlerValoracion={props.handlerValoration}
          align="center"
          size={12}
        />
      </ContainerSection>

      {/* Comentarios Receta*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.comentarios}</TitleRecipe>
        <CommentaryBox comments={props.recipe.comments} />
      </ContainerSection>

      {/* Tags Receta*/}
      <ContainerSection>
        <TitleRecipe>{props.textos.recipe_temas_relacionados}</TitleRecipe>
        <div className="flex flex-wrap place-content-center">
          <ChipGroup ingredientes={props.recipe.tags} />
        </div>
      </ContainerSection>

      {/* Recetas relacionadas*/}
      {props.recipe.relatedRecipes.map((relateRecipe, index) => (
        <ContainerSection key={index}>
          <TitleRecipe>{relateRecipe.title}</TitleRecipe>
          <SliderRecipesSimple
            listRecipes={relateRecipe}
            slidesPerView={1.5}
          />
        </ContainerSection>
      ))}

      {/* Guardar Receta*/}
      <ContainerSection>
        <Button>{props.textos.recipe_guardar_receta}</Button>
      </ContainerSection>
    </Scaffold.Content>
  </Scaffold>
);
export default Recipe;