import React from "react";
import ScaffoldContent from "UI/Scaffold/ScaffoldContent/ScaffoldContent";
import ScaffoldFooter from "UI/Scaffold/ScaffoldFooter/ScaffoldFooter";
import ScaffoldHeader from "UI/Scaffold/ScaffoldHeader/ScaffoldHeader";
import { IonPage } from "@ionic/react";

type Props = {
  children: React.ReactNode;
};

const Scaffold = (props: Props) => <IonPage>{props.children}</IonPage>;

Scaffold.Content = ScaffoldContent;
Scaffold.Footer = ScaffoldFooter;
Scaffold.Header = ScaffoldHeader;

export default Scaffold;
