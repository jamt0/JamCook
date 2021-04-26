import { IonIcon } from "@ionic/react";
import { FunctionComponent } from "react";
import { fastFoodOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import ImageRecipe from "components/ImageRecipe/ImageRecipe";
import Text from "components/Text/Text";
import React from "react";

type Props = {
  imagenes: {
    titulo: string;
    pathImg: string;
    icon: string;
  }[];
}

const GridImages: FunctionComponent<Props> = ({ imagenes }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
      {imagenes.map((imagen, index) => {
        return (
          <Link to="/recipes" className="w-full" key={index}>
            <ImageRecipe src={imagen.pathImg} height={32} fullCover={true} rounded>
              <IonIcon
                icon={fastFoodOutline}
                color="light"
                className="text-4xl mx-auto"
              />
              <Text color="light" align="center">{imagen.titulo}</Text>
            </ImageRecipe>
          </Link>
        );
      })}
    </div>
  );
};

export default GridImages;
