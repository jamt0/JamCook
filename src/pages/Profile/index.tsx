import { useState } from "react";
import View from "./view";
import { useAuth } from "context/auth";
import Server from "server";
import config from "config";
import { useTranslation } from 'react-i18next';
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
import namesRoutes from "routes/names";
import useShowTabs from "hooks/useShowTabs";
import useFetch from "hooks/useFetch";

const Profile: React.FC = () => {
  const { auth, logOut } = useAuth()!;
  const { t } = useTranslation();
  const [avatarImageUrl, setAvatarImageUrl] = useState<any>(`${config.baseURL}/images/avatars/default.png`);

  useShowTabs(true);

  const handlerLogOutButton = async (e: any) => {
    e.preventDefault();
    await logOut();
  };

  var { error, loading, data } = useFetch({ fetch: Server.getUser, req: 24});

  const items = [
    {
      name: t('perfil_preferencias_alimentarias'),
      auth: true,
      routerLink: namesRoutes.preferences,
      lines: "none",
      icon: personOutline,
    },
    {
      name: t('idioma'),
      auth: false,
      routerLink: namesRoutes.language,
      lines: "none",
      icon: globeOutline,
    },
    {
      name: t('configuraciones'),
      auth: false,
      routerLink: namesRoutes.settings,
      lines: "full",
      icon: buildOutline,
    },
    {
      name: t('valora') + " " + t('name_app'),
      auth: false,
      lines: "none",
      icon: starOutline,
    },
    {
      name: t('comparte') + " " + t('name_app'),
      auth: false,
      lines: "full",
      icon: arrowRedoOutline,
    },
    {
      name: t('acerca') + " " + t('name_app'),
      auth: false,
      routerLink: namesRoutes.aboutUs,
      lines: "none",
      icon: businessOutline,
    },
    {
      name: t('informacion_legal'),
      auth: false,
      routerLink: namesRoutes.legalInformation,
      lines: "none",
      icon: briefcaseOutline,
    },
    {
      name: t('contacto'),
      auth: false,
      routerLink: namesRoutes.contactUs,
      lines: auth.loggedIn ? "full" : "none",
      icon: chatbubbleEllipsesOutline,
    },
    {
      name: t('logout'),
      auth: true,
      lines: "none",
      icon: logOutOutline,
    },
  ];

  return (
    <View
      texts={t}
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
