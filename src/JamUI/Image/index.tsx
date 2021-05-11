import React, { FunctionComponent } from "react";

type Props = {
  src: string;
  height?: number;
  width?: number;
  rounded?: "none" | "full" | "sm" | "md" | "lg";
};

const Image: FunctionComponent<Props> = ({
  height = "full",
  width = "full",
  rounded = "none",
  ...props
}) => (
  <div
    className={`w-${width} h-${height} rounded-${rounded} bg-gray-500 bg-opacity-50 bg-cover bg-center z-10`}
    style={{ backgroundImage: `url( ${props.src} )` }}
  />
);
export default Image;
