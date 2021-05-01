import React from "react";
import Searcher from "components/Searcher/Searcher";
import GridImages from "layouts/GridImages/GridImages";
import { useSettingsUser } from "context/settingsUser";
import Scaffold from "components/Scaffold/Scaffold";
import Title from "components/Text/Title";

const imagenes = [
  {
    src: "https://picsum.photos/200/300?random=1",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos de Carnitas",
  },
  {
    src: "https://picsum.photos/200/300?random=2",
    icon: "Tacos Mexicanos",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=3",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=1",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=2",
    icon: "Tacos Mexicanos",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=3",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
  {
    src: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    title: "Tacos Mexicanos",
  },
];

const Explore: React.FC = () => {
  const { textos } = useSettingsUser()!;

  console.log("soy page explore");

  return (
    <Scaffold>
      <Scaffold.Content>
        <Title color="medium">{textos["page_explorar"]}</Title>
        <Searcher placeHolder={textos["plato_gustaria"]} />
        <GridImages images={imagenes} />
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Explore;
