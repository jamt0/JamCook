import React, { FunctionComponent } from "react";
import { IonModal } from "@ionic/react";

type Props = {
    isOpen: boolean;
};

const Modal: FunctionComponent<Props> = (props) => (
  <IonModal isOpen={props.isOpen}>{props.children}</IonModal>
);
export default Modal;
