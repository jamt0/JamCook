  import React from "react";
  import { RouteComponentProps } from "react-router-dom";
  import Scaffold from "../../components/Scaffold/Scaffold";
  
  const Settings: React.FC<RouteComponentProps> = ({ history }) => {
  
    const handlerGoBackButton = (e: any) => {
      e.preventDefault();
      history.goBack();
    };
  
    return (
      <Scaffold tituloHeader="Agrega Ingredientes" onClickBack={handlerGoBackButton}>
        hola
      </Scaffold>
    );
  };
  
  export default Settings;
  