import { IonButton, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { useSettingsUser } from "context/settingsUser";
import ImageRecipe from "components/ImageRecipe/ImageRecipe";
import Scaffold from "components/Scaffold/Scaffold";
import Button from "components/Button/Button";
import CommentaryBox from "components/CommentaryBox/CommentaryBox";
import TitleRecipe from "components/TitleRecipe/TitleRecipe";
import ItemIngredient from "layouts/ItemIngredient/ItemIngredient";
import ItemStep from "components/ItemStep/ItemStep";
import ContainerSection from "components/ContainerSection/ContainerSection";
import Center from "components/Center/Center";
import Counter from "components/Counter/Counter";
import Avatar from "components/Avatar/Avatar";
import Rating from "components/Rating/Rating";
import ChipGroup from "components/ChipGroup/ChipGroup";
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
  pathImg:
    "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg",
  avatarUser: "https://picsum.photos/200/300?random=2",
  titulo: "Tacos Mexicanos de Carnitas",
  nameUser: "Jonathan Mancera",
  valoration: [true, true, true, true, false],
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

const Comentarios = [
  {
    id: 1,
    avatarUser: "https://picsum.photos/200/300?random=1",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario:
      "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [true, true, true, true, true],
    respuestas: [
      {
        id: 1,
        avatarUser: "https://picsum.photos/200/300?random=3",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario:
          "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: 2,
        avatarUser: "https://picsum.photos/200/300?random=4",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario:
          "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: 3,
        avatarUser: "https://picsum.photos/200/300?random=1",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario:
          "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
    ],
  },
  {
    id: 2,
    avatarUser: "https://picsum.photos/200/300?random=2",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario:
      "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [true, false, false, false, false],
    respuestas: [
      {
        id: 4,
        avatarUser: "https://picsum.photos/200/300?random=3",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario:
          "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: 5,
        avatarUser: "https://picsum.photos/200/300?random=4",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario:
          "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
    ],
  },
  {
    id: 3,
    avatarUser: "https://picsum.photos/200/300?random=6",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario:
      "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [true, true, true, true, false],
    respuestas: [],
  },
  {
    id: 4,
    avatarUser: "https://picsum.photos/200/300?random=8",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario:
      "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [true, true, false, false, false],
    respuestas: [
      {
        id: 6,
        avatarUser: "https://picsum.photos/200/300?random=9",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario:
          "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
    ],
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
          <ImageRecipe src={recipe.pathImg} height={72}>
            <SubTitle color="light" align="center" className="font-extrabold">
              {recipe.titulo}
            </SubTitle>
          </ImageRecipe>
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
          <Counter porciones={porciones} setPorciones={setPorciones} />
        </ContainerSection>

        {/* Ingredientes recipe*/}

        <ContainerSection>
          <TitleRecipe>{textos["ingredientes"]}</TitleRecipe>
          {recipe.ingredientes.map((ingrediente, index) => {
            return (
              <ItemIngredient
                key={index}
                src={ingrediente.pathImg}
                name={ingrediente.name}
                amount={ingrediente.cantidadPorcion}
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
          <CommentaryBox comentarios={Comentarios} />
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
