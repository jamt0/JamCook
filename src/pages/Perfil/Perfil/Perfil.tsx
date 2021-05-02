import React, { useEffect, useState } from "react";
import PerfilView from "pages/Perfil/Perfil/PerfilView";
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
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      routerLink: "/perfil/preferences",
      lines: "none",
      icon: personOutline,
    },
    {
      name: textos.idioma,
      auth: false,
      routerLink: "/perfil/language",
      lines: "none",
      icon: globeOutline,
    },
    {
      name: textos.configuraciones,
      auth: false,
      routerLink: "/perfil/settings",
      lines: "full",
      icon: buildOutline,
    },
    {
      name: textos.valora + " " + textos.name_app,
      auth: false,
      routerLink: "/perfil/ratings",
      lines: "none",
      icon: starOutline,
    },
    {
      name: textos.comparte + " " + textos.name_app,
      auth: false,
      routerLink: "/perfil/share",
      lines: "full",
      icon: arrowRedoOutline,
    },
    {
      name: textos.acerca + " " + textos.name_app,
      auth: false,
      routerLink: "/perfil/aboutUs",
      lines: "none",
      icon: businessOutline,
    },
    {
      name: textos.informacion_legal,
      auth: false,
      routerLink: "/perfil/legalInformation",
      lines: "none",
      icon: briefcaseOutline,
    },
    {
      name: textos.contacto,
      auth: false,
      routerLink: "/perfil/contactUs",
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
