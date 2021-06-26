import React from 'react';
import namesRoutes from 'routes/names';
import View from './view';
import { useTranslation } from 'react-i18next';
import { useShowTabs } from 'hooks';

const LegalInformation: React.FC = () => {
	const { t } = useTranslation();

	useShowTabs(false);

	const items = [
		{
			name: t('terminos_condiciones'),
			routerLink: namesRoutes.termsAndConditions,
		},
		{
			name: t('politica_privacidad'),
			routerLink: namesRoutes.privacyPolicy,
		},
		{
			name: t('politica_cookies'),
			routerLink: namesRoutes.cookiesPolicy,
		},
	];

	return <View texts={t} items={items} />;
};

export default LegalInformation;
