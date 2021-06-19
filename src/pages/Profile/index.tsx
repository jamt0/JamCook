import { useState } from "react";
import View from "./view";
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
import RoutesPath from "routes";
import useShowTabs from "hooks/useShowTabs";
import useFetch from "hooks/useFetch";

const Profile: React.FC = () => {
  const { auth, logOut } = useAuth()!;
  const { texts } = useSettingsUser()!;
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(`${config.baseURL}/images/avatars/default.png`);

  useShowTabs(true);

  const handlerLogOutButton = async (e: any) => {
    e.preventDefault();
    await logOut();
  };

  var { error, loading, data } = useFetch({ fetch: Server.getUser, req: 24});

  const items = [
    {
      name: texts.perfil_preferencias_alimentarias,
      auth: true,
      routerLink: RoutesPath.preferences,
      lines: "none",
      icon: personOutline,
    },
    {
      name: texts.idioma,
      auth: false,
      routerLink: RoutesPath.language,
      lines: "none",
      icon: globeOutline,
    },
    {
      name: texts.configuraciones,
      auth: false,
      routerLink: RoutesPath.settings,
      lines: "full",
      icon: buildOutline,
    },
    {
      name: texts.valora + " " + texts.name_app,
      auth: false,
      lines: "none",
      icon: starOutline,
    },
    {
      name: texts.comparte + " " + texts.name_app,
      auth: false,
      lines: "full",
      icon: arrowRedoOutline,
    },
    {
      name: texts.acerca + " " + texts.name_app,
      auth: false,
      routerLink: RoutesPath.aboutUs,
      lines: "none",
      icon: businessOutline,
    },
    {
      name: texts.informacion_legal,
      auth: false,
      routerLink: RoutesPath.legalInformation,
      lines: "none",
      icon: briefcaseOutline,
    },
    {
      name: texts.contacto,
      auth: false,
      routerLink: RoutesPath.contactUs,
      lines: auth.loggedIn ? "full" : "none",
      icon: chatbubbleEllipsesOutline,
    },
    {
      name: texts.logout,
      auth: true,
      lines: "none",
      icon: logOutOutline,
    },
  ];

  return (
    <View
      texts={texts}
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
