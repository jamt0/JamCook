import React from "react";
import ScaffoldContent from "components/Scaffold/ScaffoldContent";
import ScaffoldFooter from "components/Scaffold/ScaffoldFooter";
import ScaffoldHeader from "components/Scaffold/ScaffoldHeader/ScaffoldHeader";
import { IonPage } from "@ionic/react";

type Props = {
  children: React.ReactNode;
}

const Scaffold = ({ children }: Props) => {
  return <IonPage>{children}</IonPage>;
};

Scaffold.Content = ScaffoldContent;
Scaffold.Footer = ScaffoldFooter;
Scaffold.Header = ScaffoldHeader;

export default Scaffold;
