import { IonIcon } from "@ionic/react";
import { FunctionComponent } from "react";
import { fastFoodOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { ImageCover, Text } from "UI";
import { TCategory } from "utils/types";
import RoutesPath from "routes";

type Props = {
  categories: TCategory[];
};

const GridImages: FunctionComponent<Props> = (props) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
      {props.categories.map((category) => {
        return (
          <Link
            to={RoutesPath.listRecipes + category.id}
            className="w-full"
            key={category.id}
          >
            <ImageCover
              src={category.pathCategoryImage}
              height={32}
              fullCover={true}
              rounded
            >
              <IonIcon
                icon={fastFoodOutline}
                color="light"
                className="text-4xl mx-auto"
              />
              <Text color="light" align="center">
                {category.name}
              </Text>
            </ImageCover>
          </Link>
        );
      })}
    </div>
  );
};

export default GridImages;
