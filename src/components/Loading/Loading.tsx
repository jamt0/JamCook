import React, { FunctionComponent } from "react";
import { IonLoading } from "@ionic/react";

type Props = {
  isOpen: boolean;
  translucent?: boolean;
  spinner?: "circles" | "bubbles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined;
};

const Loading: FunctionComponent<Props> = ({
  isOpen,
  translucent = true,
  spinner = "circles",
}) => {
  return (
    <IonLoading
      isOpen={isOpen}
      mode="ios"
      translucent={translucent}
      spinner={spinner}
    />
  );
};

export default Loading;
