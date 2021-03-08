  import React from "react";
  import { RouteComponentProps } from "react-router-dom";
  import Scaffold from "../../components/Scaffold/Scaffold";
  
  const Ratings: React.FC<RouteComponentProps> = ( ) => {
  
    return (
      <Scaffold tituloHeader="Valora Jamcook" >
        5 estrellas putitos
      </Scaffold>
    );
  };
  
  export default Ratings;
  