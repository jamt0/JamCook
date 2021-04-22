import React from "react";
import { IonPage } from "@ionic/react";
import ScaffoldContent from "components/Scaffold/ScaffoldContent";
import ScaffoldFooter from "components/Scaffold/ScaffoldFooter";
import ScaffoldHeader from "components/Scaffold/ScaffoldHeader/ScaffoldHeader";

interface Props {
  children: React.ReactNode;
}

const Scaffold = ({ children }: Props) => {
  return <IonPage>{children}</IonPage>;
};

Scaffold.Content = ScaffoldContent;
Scaffold.Footer = ScaffoldFooter;
Scaffold.Header = ScaffoldHeader;

export default Scaffold;
