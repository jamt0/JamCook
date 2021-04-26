import React, { Fragment, useEffect, useState } from "react";
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
import Item from "components/Item/Item";
import Center from "components/Center/Center";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { IonLabel } from "@ionic/react";

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
        {auth.loggedIn && (
          <Item className="my-4 px-4">
            <Avatar src={avatarImageUrl} size={16} />
            <IonLabel className="ml-4">
              <Text className="mb-2">{user.name}</Text>
              <Text className="mb-2">{user.email}</Text>
              <ButtonLink routerLink="/perfil/edit">
                {textos["perfil_editar"]}
              </ButtonLink>
            </IonLabel>
          </Item>
        )}
        {!auth.loggedIn && (
          <Item color="light" className="py-4 rounded-md">
            <Center direction="col" className="mt-2" justify="center">
              <SubTitle className="mb-4">
                {textos["perfil_inicie_sesion"]}
              </SubTitle>
              <Link to="/signIn" className="w-full pr-2">
                <Button>{textos["signin_iniciar_sesion"]}</Button>
              </Link>
              <Center className="mb-2">
                <Text className="mr-1">{textos["signin_no_tiene_cuenta"]}</Text>
                <ButtonLink routerLink="/signUp">
                  {textos["signup_registrate"]}
                </ButtonLink>
              </Center>
            </Center>
          </Item>
        )}
        <div className="mt-4">
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
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Perfil;
