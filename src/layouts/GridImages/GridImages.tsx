import { IonIcon } from "@ionic/react";
import { FunctionComponent } from "react";
import { fastFoodOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import ImageCover from "components/ImageCover/ImageCover";
import Text from "components/Text/Text";

type TImage = {
  title: string;
  src: string;
  icon: string;
};
type Props = {
  images: TImage[];
};

const GridImages: FunctionComponent<Props> = ({ images }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
      {images.map((imagen, index) => {
        return (
          <Link to="/recipes" className="w-full" key={index}>
            <ImageCover src={imagen.src} height={32} fullCover={true} rounded>
              <IonIcon
                icon={fastFoodOutline}
                color="light"
                className="text-4xl mx-auto"
              />
              <Text color="light" align="center">
                {imagen.title}
              </Text>
            </ImageCover>
          </Link>
        );
      })}
    </div>
  );
};

export default GridImages;
