  import React from "react";
  import { RouteComponentProps } from "react-router-dom";
  import Scaffold from "../../components/Scaffold/Scaffold";
  
  const AboutUs: React.FC<RouteComponentProps> = ( ) => {
  
    return (
      <Scaffold tituloHeader="Sobre JamCook" >
        Jamcook es la verga
      </Scaffold>
    );
  };
  
  export default AboutUs;
  