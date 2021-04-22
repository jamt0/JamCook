import React from "react";
import Scaffold from "components/Scaffold/Scaffold";

const Share: React.FC = () => {
  return (
    <Scaffold>
      <Scaffold.Header title={"compartir"}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <h1>Compartir</h1>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Share;
