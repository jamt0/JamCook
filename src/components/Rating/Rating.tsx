import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { star, starOutline } from "ionicons/icons";
import { FunctionComponent } from "react";

type Props = {
  stars: boolean[];
  size: number;
  color?: string;
  sizeResponsive?: number;
  handlerValoracion?: (e: any, index: number) => void;
}

const Rating: FunctionComponent<Props> = ({
  stars,
  handlerValoracion,
  size,
  sizeResponsive = size,
  color,
}) => {
  if (handlerValoracion) {
    return (
      <div className="flex flex-row">
        {stars.map((estrella, index) => {
          return (
            <IonButtons
              slot="icon-only"
              className={`w-${size} h-${size} md:h-${sizeResponsive} md:h-${sizeResponsive}`}
              key={index}
            >
              <IonButton
                onClick={(e) => handlerValoracion(e, index)}
                className={`w-${size} h-${size} md:h-${sizeResponsive} md:h-${sizeResponsive}`}
              >
                <IonIcon
                  icon={estrella ? star : starOutline}
                  color={color}
                  className={`w-${size} h-${size} md:h-${sizeResponsive} md:h-${sizeResponsive}`}
                />
              </IonButton>
            </IonButtons>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row">
        {stars.map((estrella, index) => {
          return (
            <IonIcon
              key={index}
              icon={estrella ? star : starOutline}
              color={color}
              className={`w-${size} h-${size} md:h-${sizeResponsive} md:h-${sizeResponsive}`}
            />
          );
        })}
      </div>
    );
  }
};

export default Rating;
