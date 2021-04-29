import React, { Fragment, FunctionComponent } from "react";
import { IonContent } from "@ionic/react";

type Props = {
  fabButton?: React.ReactNode;
  height?: "auto" | "full" | undefined;
  margin?: "md" | "lg" | undefined;
  banner?: React.ReactNode;
};

const ScaffoldContent: FunctionComponent<Props> = ({
  fabButton,
  height = "auto",
  margin = "lg",
  banner,
  children,
}) => {
  return (
    <IonContent>
      {banner ? banner : <Fragment />}
      <div className={`max-w-screen-${margin} mx-auto p-2 h-${height}`}>
        {children}
      </div>
      {fabButton ? fabButton : <Fragment />}
    </IonContent>
  );
};

export default ScaffoldContent;
