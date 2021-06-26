import React from 'react';
import View from './view';
import animationData from 'assets/40806-error-404.json';
import { useTranslation } from 'react-i18next';
import { useShowTabs } from 'hooks';

const NoFound: React.FC = () => {
	const { t } = useTranslation();

	useShowTabs(false);

	const animationOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return <View texts={t} animationOptions={animationOptions} />;
};

export default NoFound;
