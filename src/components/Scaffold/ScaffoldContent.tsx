import { IonContent } from "@ionic/react";
import { FunctionComponent } from "react";

type Props = {
  fabButton?: React.ReactNode;
  height?: "auto" | "full" | undefined;
};

const ScaffoldContent: FunctionComponent<Props> = ({
  children, fabButton, height="auto"
}) => {
  return (
    <IonContent>
      <div className={`max-w-screen-lg mx-auto p-4 h-${height}`}>{children}</div>
      {fabButton}
    </IonContent>
  );
};

export default ScaffoldContent;