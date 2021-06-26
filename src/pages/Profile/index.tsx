import View from './view';
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
} from 'ionicons/icons';
import namesRoutes from 'routes/names';
import { useShowTabs } from 'hooks';
import { useAppSelector } from 'global/hooks';
import { useLogOut } from './hooks';
import { selectUser } from 'global/features/userSlice';

const Profile: React.FC = () => {
	const { t } = useTranslation();

	useShowTabs(true);

	const { isLoggedIn, user } = useAppSelector(selectUser);

	const logOut = useLogOut();

	const items = [
		{
			name: t('perfil_preferencias_alimentarias'),
			auth: true,
			routerLink: namesRoutes.preferences,
			icon: personOutline,
		},
		{
			name: t('idioma'),
			routerLink: namesRoutes.language,
			icon: globeOutline,
		},
		{
			name: t('configuraciones'),
			routerLink: namesRoutes.settings,
			icon: buildOutline,
		},
		{
			name: t('valora') + ' ' + t('name_app'),
			icon: starOutline,
		},
		{
			name: t('comparte') + ' ' + t('name_app'),
			icon: arrowRedoOutline,
		},
		{
			name: t('acerca') + ' ' + t('name_app'),
			routerLink: namesRoutes.aboutUs,
			icon: businessOutline,
		},
		{
			name: t('informacion_legal'),
			routerLink: namesRoutes.legalInformation,
			icon: briefcaseOutline,
		},
		{
			name: t('contacto'),
			routerLink: namesRoutes.contactUs,
			icon: chatbubbleEllipsesOutline,
		},
		{
			name: t('logout'),
			auth: true,
			onClick: logOut,
			icon: logOutOutline,
		},
	];

	return <View texts={t} items={items} user={user} isLoggedIn={isLoggedIn} />;
};

export default Profile;
