import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ImageRecipe from "../../components/ImageRecipe/ImageRecipe";
import Scaffold from "../../components/Scaffold/Scaffold";
import {
  star,
  timerOutline,
  nutritionOutline,
  starOutline,
  arrowRedoOutline,
  bookmarkOutline,
  heartOutline,
  speedometerOutline,
} from "ionicons/icons";
import Button from "../../components/Button/Button";
import CommentaryBox from "../../components/CommentaryBox/CommentaryBox";
import TitleRecipe from "../../components/TitleRecipe/TitleRecipe";
import ItemIngredient from "../../components/ItemIngredient/ItemIngredient";
import ItemStep from "../../components/ItemStep/ItemStep";
import ContainerSection from "../../components/ContainerSection/ContainerSection";
import Center from "../../components/Center/Center";
import Counter from "../../components/Counter/Counter";
import Avatar from "../../components/Avatar/Avatar";
import Rating from "../../components/Rating/Rating";
import ChipGroup from "../../components/ChipGroup/ChipGroup";
import Slider from "../../components/Slider/Slider";

const receta = {
  pathImg: "https://picsum.photos/200/300?random=1",
  avatarUser: "https://picsum.photos/200/300?random=2",
  titulo: "Tacos Mexicanos de Carnitas",
  nameUser: "Jonathan Mancera",
  valoracion: [1, 1, 1, 1, 0],
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
    comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [ true, true, true, true, true ],
    respuestas: [
      {
        id: 1,
        avatarUser: "https://picsum.photos/200/300?random=3",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: 2,
        avatarUser: "https://picsum.photos/200/300?random=4",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: 3,
        avatarUser: "https://picsum.photos/200/300?random=1",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
    ]
  },
  {
    id: 2,
    avatarUser: "https://picsum.photos/200/300?random=2",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [ true, false, false, false, false ],
    respuestas: [
      {
        id: 4,
        avatarUser: "https://picsum.photos/200/300?random=3",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
      {
        id: 5,
        avatarUser: "https://picsum.photos/200/300?random=4",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      },
    ]
  },
  {
    id: 3,
    avatarUser: "https://picsum.photos/200/300?random=6",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [ true, true, true, true, false ],
    respuestas: []
  },
  {
    id: 4,
    avatarUser: "https://picsum.photos/200/300?random=8",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
    valoracion: [ true, true, false, false, false ],
    respuestas: [
      {
        id: 6,
        avatarUser: "https://picsum.photos/200/300?random=9",
        nombreUsuario: "Leonardo Santos Franco",
        fechaPublicacion: "Hace 4 dias",
        comentario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
      }
    ]
  },
]

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

const recetasMasVistas = [
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

const recetasRelacionadas = [
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

const Recipe: React.FC<RouteComponentProps> = ({ history }) => {
  const [porciones, setPorciones] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [classPorciones, setClassPorciones] = useState(" ");
  const [isEstrellas, setEstrellas] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (porciones == 1) {
      setClassPorciones(" bg-opacity-25 ");
      setIsDisabled(true);
    } else {
      setClassPorciones(" ");
      setIsDisabled(false);
    }
  }, [porciones]);

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  const handlerShare = (e: any) => {};

  const handlerLike = (e: any) => {};

  const handlerMark = (e: any) => {};

  const handlerSuma = (e: any) => {
    setPorciones(porciones + 1);
  };

  const handlerResta = (e: any) => {
    setPorciones(porciones - 1);
  };

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
    <Scaffold
      onClickBack={handlerGoBackButton}
      accionesHeader={
        <>
          <IonButton onClick={handlerShare}>
            <IonIcon slot="icon-only" icon={arrowRedoOutline} color="dark" />
          </IonButton>
          <IonButton onClick={handlerLike}>
            <IonIcon slot="icon-only" icon={heartOutline} color="dark" />
          </IonButton>
          <IonButton onClick={handlerMark}>
            <IonIcon slot="icon-only" icon={bookmarkOutline} color="dark" />
          </IonButton>
        </>
      }
    >
      {/* Portada Receta*/}
      <ImageRecipe pathImg={receta.pathImg} height={"72"} sinRedondeo={true}>
        <h6 className="text-white text-center text-2xl mx-auto my-auto">
          {receta.titulo}
        </h6>
      </ImageRecipe>

      <div className="max-w-screen-md mx-auto">
        {/* Encabezado Receta*/}
        <ContainerSection>
          <Center direccion="col" className="mt-4">
            <Avatar avatarUser={receta.avatarUser} tamaño="8"/>
            <h2 className="text-sm mt-2 font-bold">{receta.nameUser}</h2>
            <Center direccion="row" className="mt-2">
              {receta.valoracion.map((element, index) => {
                return (
                  <IonIcon
                    key={index}
                    icon={element == 1 ? star : starOutline}
                    className="text-purple-500 text-sm ml-1"
                  />
                );
              })}
            </Center>
            <h2 className="text-sm mt-2">
              {receta.numeroValoraciones + " Valoraciones"}
            </h2>
          </Center>
        </ContainerSection>

        {/* Introduccion Receta*/}
        <ContainerSection>
          <Center direccion="col">
            <TitleRecipe>Introducción</TitleRecipe>
            <p className="text-center">{receta.introduccion}</p>
          </Center>
        </ContainerSection>

        {/* Información Receta en iconos*/}
        <ContainerSection>
          <div className="grid grid-cols-3">
            <Center direccion="row">
              <IonIcon
                icon={nutritionOutline}
                className="text-black text-lg mr-1"
              />
              <h3 className="text-sm">8 ingredientes</h3>
            </Center>
            <Center direccion="row">
              <IonIcon
                icon={speedometerOutline}
                className="text-black text-lg mr-1"
              />
              <h3 className="text-sm">Dificultad</h3>
            </Center>
            <Center direccion="row">
              <IonIcon
                icon={timerOutline}
                className="text-black text-lg mr-1"
              />
              <h3 className="text-sm">25 minutos</h3>
            </Center>
          </div>
        </ContainerSection>

        {/* Porciones Receta*/}
        <ContainerSection>
          <TitleRecipe>Porciones a Preparar</TitleRecipe>
          <Counter porciones={porciones} setPorciones={setPorciones}/>
        </ContainerSection>

        {/* Ingredientes Receta*/}

        <ContainerSection>
          <TitleRecipe>Ingredientes</TitleRecipe>
          {receta.ingredientes.map((ingrediente, index) => {
            return (
              <ItemIngredient
                key={index}
                pathImg={ingrediente.pathImg}
                name={ingrediente.name}
                cantidadPorcion={ingrediente.cantidadPorcion}
              />
            );
          })}
        </ContainerSection>

        {/* Pasos Receta*/}
        <ContainerSection>
          <TitleRecipe>Pasos</TitleRecipe>
          {receta.pasos.map((paso, index) => {
            return <ItemStep key={index}>{paso.instruccion}</ItemStep>;
          })}
        </ContainerSection>

        {/* Trucos Receta*/}
        <ContainerSection>
          <TitleRecipe>Trucos y Consejos</TitleRecipe>
          {receta.trucos.map((truco, index) => {
            return <ItemStep key={index}>{truco.instruccion}</ItemStep>;
          })}
        </ContainerSection>

        {/* Receta Hecha*/}
        <ContainerSection>
          <TitleRecipe>¿Ya has hecho la receta?</TitleRecipe>
            <Button
              handler={handlerRecetaHecha}
              label={"¡Receta Hecha!"}
              type={"Secundario"}
            />
        </ContainerSection>

        {/* Valoración Hecha*/}
        <ContainerSection>
          <TitleRecipe>¿Te ha gustado la receta?</TitleRecipe>
          <Rating estrellas={isEstrellas} handlerValoracion={handlerValoracion} tamaño={"12"} />
        </ContainerSection>

        {/* Comentarios Receta*/}
        <ContainerSection>
          <TitleRecipe>Comentarios</TitleRecipe>
          <CommentaryBox comentarios = {Comentarios} />
        </ContainerSection>

        {/* Tags Receta*/}
        <ContainerSection>
          <TitleRecipe>Temas Relacionados</TitleRecipe>
          <div className="flex flex-wrap place-content-center">
            <ChipGroup ingredientes={tags}/>
          </div>
        </ContainerSection>

        {/* Recetas relacionadas*/}
        <ContainerSection>
          <TitleRecipe>Recetas relacionados</TitleRecipe>
          <Slider imagenes={recetasRelacionadas} slidesPerView={1.5} />
        </ContainerSection>

        {/* Receta*/}
        <ContainerSection>
          <TitleRecipe>Recetas más vistas</TitleRecipe>
          <Slider imagenes={recetasMasVistas} slidesPerView={1.5} />
        </ContainerSection>

        {/* Receta*/}
        <ContainerSection>
          <Button 
            label={"Guardar receta"}
            type={"principal"} 
          />
        </ContainerSection>
      </div>
    </Scaffold>
  );
};

export default Recipe;
