  import React from "react";
  import { RouteComponentProps } from "react-router-dom";
  import Scaffold from "../../components/Scaffold/Scaffold";
  
  const Share: React.FC<RouteComponentProps> = ({ history }) => {
  
    const handlerGoBackButton = (e: any) => {
      e.preventDefault();
      history.goBack();
    };
  
    return (
      <Scaffold tituloHeader="Comparte JamCook" onClickBack={handlerGoBackButton}>
        Compartir
      </Scaffold>
    );
  };
  
  export default Share;
  