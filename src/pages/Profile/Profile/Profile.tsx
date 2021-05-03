import React, { useEffect, useState } from "react";
import PerfilView from "pages/Profile/Profile/ProfilelView";
import { useAuth } from "context/auth";
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
import RoutesPath from "utils/routesPath";
import useShowTabs from "hooks/useShowTabs";

const Perfil: React.FC = () => {
  const { auth, logOut } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [user, setUser] = useState({ name: "", email: "" });
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(`${config.baseURL}/images/avatars/default.png`);
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useShowTabs(true);

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
            setErrores(response.data.error);
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
            setErrores(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const items = [
    {
      name: textos.perfil_preferencias_alimentarias,
      auth: true,
      routerLink: RoutesPath.preferences,
      lines: "none",
      icon: personOutline,
    },
    {
      name: textos.idioma,
      auth: false,
      routerLink: RoutesPath.language,
      lines: "none",
      icon: globeOutline,
    },
    {
      name: textos.configuraciones,
      auth: false,
      routerLink: RoutesPath.settings,
      lines: "full",
      icon: buildOutline,
    },
    {
      name: textos.valora + " " + textos.name_app,
      auth: false,
      lines: "none",
      icon: starOutline,
    },
    {
      name: textos.comparte + " " + textos.name_app,
      auth: false,
      lines: "full",
      icon: arrowRedoOutline,
    },
    {
      name: textos.acerca + " " + textos.name_app,
      auth: false,
      routerLink: RoutesPath.aboutUs,
      lines: "none",
      icon: businessOutline,
    },
    {
      name: textos.informacion_legal,
      auth: false,
      routerLink: RoutesPath.legalInformation,
      lines: "none",
      icon: briefcaseOutline,
    },
    {
      name: textos.contacto,
      auth: false,
      routerLink: RoutesPath.contactUs,
      lines: auth.loggedIn ? "full" : "none",
      icon: chatbubbleEllipsesOutline,
    },
    {
      name: textos.logout,
      auth: true,
      lines: auth.loggedIn ? "full" : "none",
      icon: logOutOutline,
    },
  ];

  return (
    <PerfilView
      textos={textos}
      loading={loading}
      items={items}
      auth={auth}
      handlerLogOutButton={handlerLogOutButton}
      errores={errores}
      avatarImageUrl={avatarImageUrl}
      user={user}
    />
  );
};

export default Perfil;
