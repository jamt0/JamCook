import { IonSearchbar } from "@ionic/react";
import React, { FunctionComponent } from "react";

interface Props {
  pathImg: string;
  height: number;
}

const ImageRecipe: FunctionComponent<Props> = ({
  pathImg,
  children,
  height
}) => {
  return (
    <div className="relative flex">
      {children != null && (
        <div className="self-end absolute m-auto z-20 grid grid-flow-row rounded-md bg-black bg-opacity-50 h-20 w-full px-2">
          {children}
        </div>
      )}
      <div
        className={"h-" + height + " w-full bg-cover bg-center z-10 rounded-md bg-gray-500 bg-opacity-50"}
        style={{ backgroundImage: `url( ${pathImg} )` }}
      ></div>
    </div>
  );
};

export default ImageRecipe;
