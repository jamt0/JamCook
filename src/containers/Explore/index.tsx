import React from "react";
import { ExploreView } from "layouts";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const categories = [
  {
    id: "1",
    pathCategoryImage: "https://picsum.photos/200/300?random=1",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos de Carnitas",
  },
  {
    id: "2",
    pathCategoryImage: "https://picsum.photos/200/300?random=2",
    icon: "Tacos Mexicanos",
    name: "Tacos Mexicanos",
  },
  {
    id: "3",
    pathCategoryImage: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "4",
    pathCategoryImage: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "5",
    pathCategoryImage: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "6",
    pathCategoryImage: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "7",
    pathCategoryImage: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "8",
    pathCategoryImage: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "9",
    pathCategoryImage: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "10",
    pathCategoryImage: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "11",
    pathCategoryImage: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "12",
    pathCategoryImage: "https://picsum.photos/200/300?random=1",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "13",
    pathCategoryImage: "https://picsum.photos/200/300?random=2",
    icon: "Tacos Mexicanos",
    name: "Tacos Mexicanos",
  },
  {
    id: "14",
    pathCategoryImage: "https://picsum.photos/200/300?random=3",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "15",
    pathCategoryImage: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "16",
    pathCategoryImage: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "17",
    pathCategoryImage: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
  {
    id: "18",
    pathCategoryImage: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    name: "Tacos Mexicanos",
  },
];

const Explore: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(true);

  return (
    <ExploreView
      texts={texts}
      categories={categories}
    />
  );
};

export default Explore;
