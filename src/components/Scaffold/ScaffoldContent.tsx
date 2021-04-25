import { IonContent } from "@ionic/react";
import { Fragment, FunctionComponent } from "react";

type Props = {
  fabButton?: React.ReactNode;
  height?: "auto" | "full" | undefined;
  margin?: "md" | "lg" | undefined;
  banner?: React.ReactNode;
};

const ScaffoldContent: FunctionComponent<Props> = ({
  children, fabButton, banner, height="auto", margin="lg"
}) => {
  return (
    <IonContent>
      {banner ? banner: <Fragment/>}
      <div className={`max-w-screen-${margin} mx-auto p-2 h-${height}`}>{children}</div>
      {fabButton ? fabButton: <Fragment/>}
    </IonContent>
  );
};

export default ScaffoldContent;