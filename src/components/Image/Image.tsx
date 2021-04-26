import { FunctionComponent } from "react";
import React from "react";

type Props = {
  rounded?: boolean; 
  src: string;
  height: number;
  width?: number;
}

const Image: FunctionComponent<Props> = ({
  src,
  height,
  width = "full",
  rounded = false, 
}) => {
  const redondeo = rounded ? "rounded-md" : ""
  return (
      <div
        className={`w-${width} h-${height} ${redondeo} bg-gray-500 bg-opacity-50 bg-cover bg-center z-10`}
        style={{ backgroundImage: `url( ${src} )` }}
      />
  );
};

export default Image;