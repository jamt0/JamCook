import React, {useEffect, useState } from "react";
import ProfileView from "pages/Profile/Profile/ProfileView";
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
import useFetch from "hooks/useFetch";

const Profile: React.FC = () => {
  const { auth, logOut } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [user, setUser] = useState({ name: "", email: "" });
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(`${config.baseURL}/images/avatars/default.png`);

  useShowTabs(true);

  const handlerLogOutButton = async (e: any) => {
    e.preventDefault();
    await logOut();
  };

  var { error, loading, data } = useFetch({ fetch: Server.getUser, req: 24});

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
      lines: "none",
      icon: logOutOutline,
    },
  ];

  return (
    <ProfileView
      textos={textos}
      loading={loading || false}
      items={items}
      auth={auth}
      handlerLogOutButton={handlerLogOutButton}
      errores={error || ""}
      avatarImageUrl={avatarImageUrl}
      user={data.user}
    />
  );
};

export default Profile;
