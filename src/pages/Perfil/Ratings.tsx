  import React from "react";
  import { RouteComponentProps } from "react-router-dom";
  import Scaffold from "../../components/Scaffold/Scaffold";
  
  const Ratings: React.FC<RouteComponentProps> = ({ history }) => {
  
    const handlerGoBackButton = (e: any) => {
      e.preventDefault();
      history.goBack();
    };
  
    return (
      <Scaffold tituloHeader="Valora Jamcook" onClickBack={handlerGoBackButton}>
        5 estrellas putitos
      </Scaffold>
    );
  };
  
  export default Ratings;
  