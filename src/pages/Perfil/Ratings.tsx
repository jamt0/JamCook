import React from "react";
import Scaffold from "components/Scaffold/Scaffold";

const Ratings: React.FC = () => {
  return (
    <Scaffold>
      <Scaffold.Header title={"valorar"}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <h1>5 estrellas putitos</h1>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Ratings;
