import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import Text from "components/Text/Text";
import Title from "components/Text/Title";
import ItemIcon from "layouts/ItemIcon/ItemIcon";
import { useAuth } from "auth";
import Server from "server";
import config from "config/general";
import { useSettingsUser } from "context/settingsUser";
import {
  personOutline,
  globeOutline,
  buildOutline,
  starOutline,
  arrowRedoOutline,
  businessOutline,
  briefcaseOutline,
  chatbubbleEllipsesOutline,
  logOutOutline,
} from "ionicons/icons";

const Perfil: React.FC = () => {
  const { auth, logOut } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [user, setUser] = useState({ name: "", email: "" });
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(
    `${config.baseURL}/images/avatars/default.png`
  );
  const [hasErrors, setHasErrors] = useState<string>("");

  const handlerLogOutButton = async (e: any) => {
    e.preventDefault();
    await logOut();
  };

  useEffect(() => {
    if (auth.user?.id) {
      Server.getUser(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            setUser({
              name: String(response.data.user.name),
              email: String(response.data.user.email),
            });
          } else {
            setHasErrors(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      Server.getImageAvatar(auth.user.id)
        .then((response) => {
          if (!response.data.error) {
            setAvatarImageUrl(`${config.baseURL}/${response.data.path}`);
          } else {
            setHasErrors(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  console.log("soy page perfil");

  return (
    <Scaffold>
      <Scaffold.Content>
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
        )}
        <Title color="medium">{textos["page_perfil"]}</Title>
        <div className="md:auto-cols-max md:grid md:grid-cols-2">
          {auth.loggedIn ? (
            <div className="grid grid-flow-col auto-cols-max md:auto-rows-max md:grid-flow-row px-4 pb-4 md:justify-self-center">
              <Avatar src={avatarImageUrl} size={20} sizeResponsive={60} />
              <div className=" ml-4 md:ml-0 md:grid md:grid-flow-col md:grid-cols-1 md:grid-rows-3 md:gap-1 md:flex md:text-center md:py-8">
                <h2 className="text-base">{user.name}</h2>
                <h3 className="text-lg">{user.email}</h3>
                <Link to="/perfil/edit">
                  <Button color="light" size="small">
                    {textos["perfil_editar"]}
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="my-4">
              <SubTitle>{textos["perfil_inicie_sesion"]}</SubTitle>
              <Link to="/signIn">
                <Button>{textos["signin_iniciar_sesion"]}</Button>
              </Link>
              <div className="flex flex-row justify-center">
                <Text>{textos["signin_no_tiene_cuenta"]}</Text>
                <Link to="/signUp">
                  <Button color="light" size="small">
                    {textos["signup_registrate"]}
                  </Button>
                </Link>
              </div>
            </div>
          )}
          <div>
            {auth.loggedIn && (
              <ItemIcon routerLink="/perfil/preferences" icon={personOutline}>
                {textos["perfil_preferencias_alimentarias"]}
              </ItemIcon>
            )}
            <ItemIcon routerLink="/perfil/language" icon={globeOutline}>
              {textos["idioma"]}
            </ItemIcon>
            <ItemIcon
              routerLink="/perfil/settings"
              icon={buildOutline}
              lines="full"
            >
              {textos["configuraciones"]}
            </ItemIcon>
            <ItemIcon routerLink="/perfil/ratings" icon={starOutline}>
              {textos["valora"] + " " + textos["name_app"]}
            </ItemIcon>
            <ItemIcon
              routerLink="/perfil/share"
              icon={arrowRedoOutline}
              lines="full"
            >
              {textos["comparte"] + " " + textos["name_app"]}
            </ItemIcon>
            <ItemIcon routerLink="/perfil/aboutUs" icon={businessOutline}>
              {textos["acerca"] + " " + textos["name_app"]}
            </ItemIcon>
            <ItemIcon
              routerLink="/perfil/legalInformation"
              icon={briefcaseOutline}
            >
              {textos["informacion_legal"]}
            </ItemIcon>
            <ItemIcon
              routerLink="/perfil/contactUs"
              icon={chatbubbleEllipsesOutline}
              lines="full"
            >
              {textos["contacto"]}
            </ItemIcon>
            {auth.loggedIn && (
              <ItemIcon onClick={handlerLogOutButton} icon={logOutOutline}>
                {textos["logout"]}
              </ItemIcon>
            )}
          </div>
        </div>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Perfil;
