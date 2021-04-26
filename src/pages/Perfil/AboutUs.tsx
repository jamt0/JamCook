import React from "react";
import Scaffold from "components/Scaffold/Scaffold";

const AboutUs: React.FC = () => {
  return (
    <Scaffold>
      <Scaffold.Header title={"sobre"}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <h1>Sobre la mejor app.</h1>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default AboutUs;
