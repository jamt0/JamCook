  import React from "react";
  import { RouteComponentProps } from "react-router-dom";
  import Scaffold from "../../components/Scaffold/Scaffold";
  
  const AboutUs: React.FC<RouteComponentProps> = ({ history }) => {
  
    const handlerGoBackButton = (e: any) => {
      e.preventDefault();
      history.goBack();
    };
  
    return (
      <Scaffold tituloHeader="Sobre JamCook" onClickBack={handlerGoBackButton}>
        Jamcook es la verga
      </Scaffold>
    );
  };
  
  export default AboutUs;
  