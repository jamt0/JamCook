import { IonButton, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { useSettingsUser } from "context/settingsUser";
import ImageCover from "components/ImageCover/ImageCover";
import Scaffold from "components/Scaffold/Scaffold";
import Button from "components/Button/Button";
import CommentaryBox from "layouts/CommentaryBox/CommentaryBox";
import TitleRecipe from "components/TitleRecipe/TitleRecipe";
import ItemIngredient from "layouts/ItemIngredient/ItemIngredient";
import ItemStep from "components/ItemStep/ItemStep";
import ContainerSection from "components/ContainerSection/ContainerSection";
import Center from "components/Center/Center";
import Counter from "layouts/Counter/Counter";
import Avatar from "components/Avatar/Avatar";
import Rating from "layouts/Rating/Rating";
import ChipGroup from "layouts/ChipGroup/ChipGroup";
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
import SubTitle from "components/Text/SubTitle";

const recipe = {
  src:
    "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg",
  avatarUser: "https://picsum.photos/200/300?random=2",
  titulo: "Tacos Mexicanos de Carnitas",
  nameUser: "Jonathan Mancera",
  valoration: [true, true, true, true, false],
  numeroValoraciones: "78",
  introduccion:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum. Phasellus ex justo, gravida vitae nisl vitae, iaculis placerat massa.",
  ingredients: [
    {
      name: "Zanahoria",
      src: "https://picsum.photos/200/300?random=3",
      amount: "3",
    },
    {
      name: "Tomate",
      src: "https://picsum.photos/200/300?random=4",
      amount: "3",
    },
    {
      name: "Pechuga de Pollo",
      src: "https://picsum.photos/200/300?random=5",
      amount: "3",
    },
    {
      name: "Arroz",
      src: "https://picsum.photos/200/300?random=6",
      amount: "3",
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

const comments = [
  {
    id: "1",
    pathAvatarImage: "https://picsum.photos/200/300?random=1",
    nameUser: "Leonardo Santos Franco",
    date: "Hace 4 dias",
    commentary: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoration: [true, true, true, true, true],
    responses: [
      {
        id: "2",
        pathAvatarImage: "https://picsum.photos/200/300?random=3",
        nameUser: "Leonardo Santos Franco",
        date: "Hace 4 dias",
        response: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: "3",
        pathAvatarImage: "https://picsum.photos/200/300?random=4",
        nameUser: "Leonardo Santos Franco",
        date: "Hace 4 dias",
        response: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: "4",
        pathAvatarImage: "https://picsum.photos/200/300?random=1",
        nameUser: "Leonardo Santos Franco",
        date: "Hace 4 dias",
        response: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
    ],
  },
  {
    id: "5",
    pathAvatarImage: "https://picsum.photos/200/300?random=1",
    nameUser: "Leonardo Santos Franco",
    date: "Hace 4 dias",
    commentary: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoration: [true, true, true, true, true],
    responses: [
      {
        id: "6",
        pathAvatarImage: "https://picsum.photos/200/300?random=3",
        nameUser: "Leonardo Santos Franco",
        date: "Hace 4 dias",
        response: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      }
    ],
  },
  {
    id: "7",
    pathAvatarImage: "https://picsum.photos/200/300?random=1",
    nameUser: "Leonardo Santos Franco",
    date: "Hace 4 dias",
    commentary: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoration: [true, true, true, true, true],
    responses: [],
  },
];

const tags = [
  {
    id: "1",
    ingrediente: "Brócoli",
    outline: false,
  },
  {
    id: "2",
    ingrediente: "Coliflor",
    outline: false,
  },
  {
    id: "3",
    ingrediente: "Pescado",
    outline: false,
  },
  {
    id: "4",
    ingrediente: "Pepino",
    outline: false,
  },
  {
    id: "5",
    ingrediente: "Alcachofa",
    outline: false,
  },
  {
    id: "6",
    ingrediente: "Queso",
    outline: false,
  },
];

const imagenes = [
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=1",
    name: "Tacos Mexicanos de Carnitas Asadas",
    valoration: [true, true, true, true, false],
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=2",
    name: "Tacos Mexicanos",
    valoration: [true, true, true, true, false],
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=3",
    name: "Tacos Mexicanos de Carnitas Asadas",
    valoration: [true, true, true, true, false],
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=4",
    name: "Tacos Mexicanos de Carnitas Asadas",
    valoration: [true, true, true, true, false],
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=5",
    name: "Tacos Mexicanos de Carnitas Asadas",
    valoration: [true, true, true, true, false],
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=6",
    name: "Tacos Mexicanos de Carnitas Asadas",
    valoration: [true, true, true, true, false],
  },
  {
    path: "/recipe",
    src: "https://picsum.photos/200/300?random=7",
    name: "Tacos Mexicanos de Carnitas Asadas",
    valoration: [true, true, true, true, false],
  },
];

const Recipe: React.FC = () => {
  const [porciones, setPorciones] = useState(1);
  const [isEstrellas, setEstrellas] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const { textos } = useSettingsUser()!;

  const handlerShare = (e: any) => {};

  const handlerLike = (e: any) => {};

  const handlerMark = (e: any) => {};

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
    <Scaffold>
      <Scaffold.Header>
        <Scaffold.Header.BackAction />
        <Scaffold.Header.Actions>
          <IonButton onClick={handlerShare}>
            <IonIcon slot="icon-only" icon={arrowRedoOutline} color="dark" />
          </IonButton>
          <IonButton onClick={handlerLike}>
            <IonIcon slot="icon-only" icon={heartOutline} color="dark" />
          </IonButton>
          <IonButton onClick={handlerMark}>
            <IonIcon slot="icon-only" icon={bookmarkOutline} color="dark" />
          </IonButton>
        </Scaffold.Header.Actions>
      </Scaffold.Header>
      <Scaffold.Content
        banner={
          <ImageCover src={recipe.src} height={72}>
            <SubTitle color="light" align="center" className="font-extrabold">
              {recipe.titulo}
            </SubTitle>
          </ImageCover>
        }
      >
        {/* Encabezado recipe*/}
        <ContainerSection>
          <Center direction="row" justify="center">
            <Avatar src={recipe.avatarUser} size={8} />
          </Center>
          <Text color="dark" align="center" className="font-bold mt-2">
            {recipe.nameUser}
          </Text>
          <Rating
            stars={recipe.valoration}
            size={4}
            color="primary"
            align="center"
          />
          <Text color="primary" align="center" className="mt-2">
            {recipe.numeroValoraciones + " " + textos["valoraciones"]}
          </Text>
        </ContainerSection>

        {/* Introduccion recipe*/}
        <ContainerSection>
          <Center direction="col">
            <TitleRecipe>{textos["introduccion"]}</TitleRecipe>
            <Text align="center">{recipe.introduccion}</Text>
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
                {"8" + " " + textos["ingredientes"]}
              </Text>
            </Center>
            <Center direction="row" justify="center">
              <IonIcon
                icon={speedometerOutline}
                color="dark"
                className="text-lg mr-1"
              />
              <Text color="medium" align="center" className="mr-2">
                {textos["dificultad"]}
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
          <TitleRecipe>{textos["recipe_porciones_preparar"]}</TitleRecipe>
          <Counter portions={porciones} setPortions={setPorciones} />
        </ContainerSection>

        {/* Ingredientes recipe*/}

        <ContainerSection>
          <TitleRecipe>{textos["ingredientes"]}</TitleRecipe>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <ItemIngredient
                ingredient={ingredient}
                key={index}
              />
            );
          })}
        </ContainerSection>

        {/* Pasos recipe*/}
        <ContainerSection>
          <TitleRecipe>{textos["pasos"]}</TitleRecipe>
          {recipe.pasos.map((paso, index) => {
            return <ItemStep key={index}>{paso.instruccion}</ItemStep>;
          })}
        </ContainerSection>

        {/* Trucos recipe*/}
        <ContainerSection>
          <TitleRecipe>{textos["recipe_trucos_consejos"]}</TitleRecipe>
          {recipe.trucos.map((truco, index) => {
            return <ItemStep key={index}>{truco.instruccion}</ItemStep>;
          })}
        </ContainerSection>

        {/* recipe Hecha*/}
        <ContainerSection>
          <TitleRecipe>{textos["recipe_hiciste_receta"]}</TitleRecipe>
          <Button onClick={handlerRecetaHecha} color="secondary">
            {textos["recipe_receta_hecha"]}
          </Button>
        </ContainerSection>

        {/* Valoración Hecha*/}
        <ContainerSection>
          <TitleRecipe>{textos["recipe_gusto_receta"]}</TitleRecipe>
          <Rating
            stars={isEstrellas}
            handlerValoracion={handlerValoracion}
            align="center"
            size={12}
          />
        </ContainerSection>

        {/* Comentarios Receta*/}
        <ContainerSection>
          <TitleRecipe>{textos["comentarios"]}</TitleRecipe>
          <CommentaryBox comments={comments} />
        </ContainerSection>

        {/* Tags Receta*/}
        <ContainerSection>
          <TitleRecipe>{textos["recipe_temas_relacionados"]}</TitleRecipe>
          <div className="flex flex-wrap place-content-center">
            <ChipGroup ingredientes={tags} />
          </div>
        </ContainerSection>

        {/* Recetas relacionadas*/}
        <ContainerSection>
          <TitleRecipe>{textos["recipe_recetas_relacionados"]}</TitleRecipe>
          <SliderRecipesSimple
            recipes={imagenes}
            slidesPerView={1.5}
            nameListRecipes="Recetas relacionadas"
          />
        </ContainerSection>

        {/* Recetas mas vistas*/}
        <ContainerSection>
          <TitleRecipe>{textos["recipe_recetas_mas_vistas"]}</TitleRecipe>
          <SliderRecipesSimple
            recipes={imagenes}
            slidesPerView={1.5}
            nameListRecipes="Recetas más vistas"
          />
        </ContainerSection>

        {/* Guardar Receta*/}
        <ContainerSection>
          <Button>{textos["recipe_guardar_receta"]}</Button>
        </ContainerSection>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Recipe;
