import React, { FunctionComponent } from "react";

interface Props {
  sinRedondeo?: boolean; 
  pathImg: string;
  height: string;
  width?: string;
}

const ImageRecipe: FunctionComponent<Props> = ({
  pathImg,
  children,
  height,
  width = "full",
  sinRedondeo = false, 
}) => {
  const redondeo = sinRedondeo ? " " : " rounded-md "
  return (
    <div className="relative flex">
      {children != null && (
        <div className={"self-end absolute m-auto z-20 grid grid-flow-row" + redondeo + "bg-black bg-opacity-50 h-20 w-full px-2"}>
          {children}
        </div>
      )}
      <div
        className={"h-" + height + " w-" + width + " bg-cover bg-center z-10" + redondeo + "bg-gray-500 bg-opacity-50"}
        style={{ backgroundImage: `url( ${pathImg} )` }}
      ></div>
    </div>
  );
};

export default ImageRecipe;
