import { FunctionComponent } from "react";
import { Container } from "UI";
import { IonSearchbar } from "@ionic/react";

type Props = {
  placeHolder: string;
};

const Searcher: FunctionComponent<Props> = (props) => (
  <Container sticky className="ion-no-padding">
    <IonSearchbar
      value={""}
      placeholder={props.placeHolder}
      color="light"
    ></IonSearchbar>
  </Container>
);
export default Searcher;
