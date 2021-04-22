import { IonContent } from "@ionic/react";
import { FunctionComponent } from "react";

type Props = {
};

const ScaffoldContent: FunctionComponent<Props> = ({
  children
}) => {
  return (
    <IonContent>
      <div className="max-w-screen-md mx-auto p-4 h-full">{children}</div>
    </IonContent>
  );
};

export default ScaffoldContent;