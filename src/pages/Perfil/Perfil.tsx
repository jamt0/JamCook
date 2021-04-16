import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import { useAuth } from "auth";
import Server from "server";
import config from "config/general";
import { useSettingsUser } from 'context/settingsUser';import {
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
} from "@ionic/react";
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

  const [user, setUser] = useState({name: "", email: ""});
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(`${config.baseURL}/images/avatars/default.png`);
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
              email: String(response.data.user.email)
            })
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
          }else{
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
    <IonPage>
      <IonContent>
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
        )}
        <div className="flex md:text-center flex-col md:mx-auto max-w-screen-md py-8 text-left text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
          <h6>{textos["perfil"]}</h6>
        </div>
          <div className="md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto">
            {auth.loggedIn ? (
              <div className="grid grid-flow-col auto-cols-max md:auto-rows-max md:grid-flow-row px-4 pb-4 md:justify-self-center">
                <Avatar
                  avatarUser={avatarImageUrl}
                  tamaño="20"
                  responsive="60"
                />
                <div className=" ml-4 md:ml-0 md:grid md:grid-flow-col md:grid-cols-1 md:grid-rows-3 md:gap-1 md:flex md:text-center md:py-8">
                  <h2 className="text-base">{user.name}</h2>
                  <h3 className="text-lg">{user.email}</h3>
                  <Link
                    to="/perfil/edit"
                    className="text-purple-600 text-lg select-none"
                  >
                    <Button label={textos["perfil_editar"]} type="Link" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mx-4 mb-4">
                <h2 className="text-xl text-center mb-4">
                  {textos["perfil_inicie_sesion"]}
                </h2>
                <Link to="/signIn" className="">
                  <div className="mt-8 mb-4 mx-24">
                    <Button label={textos["signin_iniciar_sesion"]}/>
                  </div>
                </Link>
                <Center direccion="row" className="mb-8">
                  <p className="text-base text-center mr-1">{textos["signin_no_tiene_cuenta"]}</p>
                  <Link to="/signUp">
                    <Button label={textos["signup_registrate"]} type={"Link"} />
                  </Link>
                </Center>
              </div>
            )}
            <IonList>
              {auth.loggedIn && (
                <IonItem
                  className="px-6 pb-3"
                  lines="none"
                  routerLink="/perfil/preferences"
                >
                  <IonIcon
                    icon={personOutline}
                    slot="start"
                    className="text-4xl"
                  />
                  <p className="text-lg">{textos["perfil_preferencias"]}</p>
                </IonItem>
              )}
              <IonItem
                className="px-6 pb-3"
                lines="none"
                routerLink="/perfil/language"
              >
                <IonIcon
                  icon={globeOutline}
                  slot="start"
                  className="text-4xl"
                />
                <p className="text-lg">{textos["idioma"]}</p>
              </IonItem>
              <IonItem
                className="px-6 pb-3"
                lines="full"
                routerLink="/perfil/settings"
              >
                <IonIcon
                  icon={buildOutline}
                  slot="start"
                  className="text-4xl"
                />
                <p className="text-lg">{textos["configuracion"]}</p>
              </IonItem>
              <IonItem
                className="px-6 pb-3"
                lines="none"
                routerLink="/perfil/ratings"
              >
                <IonIcon icon={starOutline} slot="start" className="text-4xl" />
                <p className="text-lg">{textos["valora"] + " " + textos["name_app"]}</p>
              </IonItem>
              <IonItem
                className="px-6 pb-3"
                lines="full"
                routerLink="/perfil/share"
              >
                <IonIcon
                  icon={arrowRedoOutline}
                  slot="start"
                  className="text-4xl"
                />
                <p className="text-lg">{textos["comparte"] + " " + textos["name_app"]}</p>
              </IonItem>
              <IonItem
                className="px-6 pb-3"
                lines="none"
                routerLink="/perfil/aboutUs"
              >
                <IonIcon
                  icon={businessOutline}
                  slot="start"
                  className="text-4xl"
                />
                <p className="text-lg">{textos["acerca"] + " " + textos["name_app"]}</p>
              </IonItem>
              <IonItem
                className="px-6 pb-3"
                lines="none"
                routerLink="/perfil/legalInformation"
              >
                <IonIcon
                  icon={briefcaseOutline}
                  slot="start"
                  className="text-4xl"
                />
                <p className="text-lg">{textos["informacion_legal"]}</p>
              </IonItem>
              <IonItem
                className="px-6 pb-3"
                lines="full"
                routerLink="/perfil/contactUs"
              >
                <IonIcon
                  icon={chatbubbleEllipsesOutline}
                  slot="start"
                  className="text-4xl"
                />
                <p className="text-lg">{textos["contacto"]}</p>
              </IonItem>
              {auth.loggedIn && (
                <IonItem
                  className="px-6 pb-3"
                  lines="none"
                  onClick={handlerLogOutButton}
                >
                  <IonIcon
                    icon={logOutOutline}
                    slot="start"
                    className="text-4xl"
                  />
                  <p className="text-lg">{textos["logout"]}</p>
                </IonItem>
              )}
            </IonList>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
