import React, { Fragment, FunctionComponent } from "react";
import { IonContent } from "@ionic/react";

type Props = {
  fabButton?: React.ReactNode;
  height?: "auto" | "full" | undefined;
  margin?: "md" | "lg" | undefined;
  banner?: React.ReactNode;
};

const ScaffoldContent: FunctionComponent<Props> = ({
  height = "auto",
  margin = "lg",
  ...props
}) => (
  <IonContent>
    {props.banner ? props.banner : <Fragment />}
    <div className={`max-w-screen-${margin} mx-auto p-2 h-${height}`}>
      {props.children}
    </div>
    {props.fabButton ? props.fabButton : <Fragment />}
  </IonContent>
);
export default ScaffoldContent;
