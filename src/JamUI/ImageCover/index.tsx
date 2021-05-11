import React, { Fragment, FunctionComponent } from "react";
import { Image, Container } from "JamUI";

type Props = {
  src: string;
  height: number;
  rounded?: boolean;
  fullCover?: boolean;
};

const ImageCover: FunctionComponent<Props> = ({
  rounded = false,
  ...props
}) => {
  const heightCover = props.fullCover ? "full" : "20";
  const alignCover = props.fullCover ? "center" : "start";
  const opacityCover = props.fullCover ? "25" : "50";
  return (
    <div className="relative flex">
      {props.children !== null && (
        <Fragment>
          <Container
            color="dark"
            className={`ion-no-padding self-end absolute z-20 opacity-${opacityCover} h-${heightCover} w-full`}
          />
          <div
            className={`self-end absolute z-30 flex flex-col h-${heightCover} w-full justify-${alignCover} px-2 pt-2`}
          >
            {props.children}
          </div>
        </Fragment>
      )}
      <Image
        src={props.src}
        height={props.height}
        rounded={rounded ? "md" : "none"}
      />
    </div>
  );
};

export default ImageCover;
