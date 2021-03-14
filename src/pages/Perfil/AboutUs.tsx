import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../components/Scaffold/Scaffold";

const AboutUs: React.FC<RouteComponentProps> = () => {
  return (
    <Scaffold tituloHeader="Sobre JamCook">
      Sobre la mejor app.
    </Scaffold>
  );
};

export default AboutUs;
