import React from "react";
import Lottie from "react-lottie";
import animationData from "assets/40806-error-404.json";
import { useHistory } from "react-router";
import Button from "components/Button/Button";
import { useSettingsUser } from "context/settingsUser";
import Scaffold from "components/Scaffold/Scaffold";
import Brand from "components/Text/Brand";
import Slogan from "components/Text/Slogan";
import SubTitle from "components/Text/SubTitle";

const NoFound: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handlerRedirectButton = (e: any) => {
    e.preventDefault();
    history.replace("/home");
  };

  return (
    <Scaffold>
      <Scaffold.Content height="full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Brand/>
            <Slogan color="medium">{textos["slogan"]}</Slogan>
          </div>
          <div className="flex flex-col justify-center h-full">
            <Lottie options={defaultOptions} height={220} width={335} />
            <SubTitle color="medium">{textos["page_404_ups"]}</SubTitle>
          </div>
          <Button onClick={handlerRedirectButton}>
            {textos["page_404_inicio"]}
          </Button>
        </div>
      </Scaffold.Content>
    </Scaffold>
  );
};
export default NoFound;
